const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0txV254OVhSWHNlQzhYam9rakI3clk5dFpVRG8vTXpoTGxCVDJkQU1Ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzA5M3JrR0p5dmExWURHeDVza0RORmsyejlqZ1BwcFZyV09nNUFTTjhGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTW9DUlh2dmQ4UmZyZ2lBc1M1UFRNMzFsQTRHMGtmZ01iaDVmSElVUlZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWUExybkowSmliY2R1T2pWK1lSMUYxd1JsbXFmZlBVR2dKekw2NU5KOHhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPVFpwdzNkR0VheXN4QTJsMkhRUjlrS2p0R2U0NHAyWVhlckdFa3FLMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBKcEwwUlZVQ1Y3Z21kcHV4ellGaDNwVC9PZ2dpR0JWS2hzZElRZFE4eG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUw3M0h5ZlYwSTlCOCsvOTIxSGFzY1ZYRUNBdDFWRUh0R0pxSThCR0VIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFJUWmw3bllVTmFEWnh6akp0UDlIblZhY3pKRWRzUHk4MVFiaVBGUUl5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jU1pMUDRxYUE2QlljdUowWjM1OU56aFZWa1VzaHRpSmZBS0VPM3lqU2Y4U3ZYWm1CcFBQYUN0R1J5eTNIb293VjFXejhFd1RsQ1dHYlJ2VktrYkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IjRSR002KzFFem1MM2tKbGpIUkFNU0ZySWtPc0FOYXI5Y3dOWE53bk9OZlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFUTEg2Yjg5UzAyc0VoVzBHQUlQY2ciLCJwaG9uZUlkIjoiZjdkOWYzOWYtMDE3Yi00ZmUxLWE1NTctMWU0MTIwZTUyNmI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRrSWErT3cyUzloMUlVWTFZSnB5TXBoNmE1VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aEowTFRQSmZ1RS93dGdjQ0k3YjBMV1JKdFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1ZHTENUMUMiLCJtZSI6eyJpZCI6IjIzNDgxMzIzNDI5NjA6NTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5pIFN1enp5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSFJoY29IRUs3bnhMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhWEU3UFhIVU54WCtRZlNWTyttbS9xY1BJM0ZLQ3NlTE1IQTRNWXI5SWx3PSIsImFjY291bnRTaWduYXR1cmUiOiJvMFVWNEZxWjNNdk5haVl2cE9RUmttSmlMOUpYZkd5TzlaNTZ4YU95OVFwZTYrdUdvUFlzVjJtV3YyaERCSlpseWtrbTZ4T1BOVkNkMHNORHRtd0tEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUU9jbXFKa3BQVFZkeGJ0L3E5VFpRZlViSnVVNWtvVmhuaGRtS0sycHozNWd0US9maWEvd2p2enE2Q0lzTkxDZUFzTDgxQlcvVVY0d1UxejVGc3RvQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTMyMzQyOTYwOjU0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldseE96MXgxRGNWL2tIMGxUdnBwdjZuRHlOeFNnckhpekJ3T0RHSy9TSmMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU0NzIwNjN9';
const mongoURI = process.env.MONGO_URI || '';
const mycode = process.env.CODE || '234';
const botname = process.env.BOTNAME || 'DREADED';

module.exports = {
  session,
  mongoURI,
  mycode,
  botname
}; 
