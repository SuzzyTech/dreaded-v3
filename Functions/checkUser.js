
const fs = require('fs');
const { getUser, createUser, isUserBanned } = require('../Mongodb/Userdb');
const { getSettings } = require('../Mongodb/Settingsdb');
module.exports = async (client, m) => {
    let settings = await getSettings();
    const { prefix } = settings;

    const body =
        m.mtype === "conversation"
            ? m.message.conversation
            : m.mtype === "imageMessage"
            ? m.message.imageMessage.caption
            : m.mtype === "extendedTextMessage"
            ? m.message.extendedTextMessage.text
            : "";

   
    const categories = fs.readdirSync('./Commands', { withFileTypes: true }).filter(dirent => dirent.isDirectory());
    const commandFiles = categories.flatMap(category => {
        const categoryPath = `./Commands/${category.name}`;
        return fs.readdirSync(categoryPath)
            .filter(file => file.endsWith('.js'))
            .map(file => file.replace('.js', '')); 
    });

    
    const cmd = body.startsWith(prefix) && commandFiles.includes(body.slice(prefix.length).trim().split(' ')[0]);

    if (cmd) {
        const userId = m.sender;

        let user = await getUser(userId);
        if (!user) {
            user = await createUser(userId);
        }

const sudoG = '120363026023737882@g.us';
const use = m.sender; 
const checkde = use.split('@')[0];  
const currentDe = settings.dev.split(',').map((num) => num.trim());
if (cmd && m.chat.includes(sudoG) && !currentDe.includes(checkde)) {
  return;
}

        const banned = await isUserBanned(userId);
        if (banned) {
            const reason = user.banReason || 'No reason provided';
            let banMessage = 'You are banned from using the bot!';
            if (reason === 'sudoBan') {
                banMessage = 'You were banned from using bot commands by a sudo user!';
            } else if (reason === 'spamming') {
                banMessage = 'You were banned from using bot commands because you spammed!';
            } else if (reason === 'calling') {
                banMessage = 'You were banned from using bot commands because you called the bot!';
            }

            await m.reply(banMessage);
            return false;
        }

        return true;
    }

    return false;
}; 