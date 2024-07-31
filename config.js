const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137420869";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_50_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxazVHZE9CWHRQa0RiNlMwTEw4L3FJSnBCbUJ6YWJzU05QWVNDc1BDVjk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzc0MjA4NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFBOTgwMDVGMzI4QTYzNTU3Mzg0QjU0ODZFNEU3NDUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQ1NTQyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFRS1PSEpUbFFQMmRkMWtzdHBfbUZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4N2Y2YTk4LTY4ZmYtNDU5NS1hOGM3LTY5ZDRiM2YyYmY4MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAyNixcbiAgICAgIDEwOCxcbiAgICAgIDE3MixcbiAgICAgIDQ3LFxuICAgICAgMzEsXG4gICAgICAyMTgsXG4gICAgICAyMjAsXG4gICAgICA1LFxuICAgICAgMjEwLFxuICAgICAgMjQwLFxuICAgICAgMjQ2LFxuICAgICAgOTgsXG4gICAgICAyNDcsXG4gICAgICA0NCxcbiAgICAgIDkzLFxuICAgICAgNCxcbiAgICAgIDE5OSxcbiAgICAgIDIzNCxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDEzMSxcbiAgICAgIDc3LFxuICAgICAgMTM0LFxuICAgICAgMTEyLFxuICAgICAgNzgsXG4gICAgICA4MSxcbiAgICAgIDI1LFxuICAgICAgMjMzLFxuICAgICAgMTgzLFxuICAgICAgMjQxLFxuICAgICAgNjMsXG4gICAgICAxODgsXG4gICAgICAxMzMsXG4gICAgICAyNDYsXG4gICAgICAzOSxcbiAgICAgIDE2MyxcbiAgICAgIDEzMSxcbiAgICAgIDgxLFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE0NUpGMUVKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM3NDIwODY5OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDY1OTgzNTkzNjkxNzoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZkg1S01ERVBTcXFyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjg0UVRxcmxOU0hwQW11ZndiTnUzbHV2UlQ1d2p1RGNORDNZT3FSQS90MlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnhQYTg5WjhDMWQ1blRiT3RBMXFEcUlDYlNJaktObTl4N3RUNnNVMmxEQzg5MEdGZWJpWWZsK1o2WmJiRVVVMGFtSmJqRGpvZzdmdURLc25pNFkxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTJMT2g3MDM1WGlybFZsWkprUm9JRVNXZ3c1VmlzT3pPMk51VE40blJWdTlIaVVaR0dackhLbDczNmxjVjZsUmdaa2ZjQWhaOE9jRUU2OElkTjY5QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNzQyMDg2OToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ1NTQxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJOYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQk5iLmpzb24iOiAie1wia2V5RGF0YVwiOlwibXg2RWhUZlVvOE5BZDhvc25Vc1VwbHJGdG5mQktQVFdJbjJlUHBQTjZOUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODAzNTQyNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQ1NTI3MjMxMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
