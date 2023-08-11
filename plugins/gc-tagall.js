let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐫𝐞𝐬𝐮𝐫𝐫𝐞𝐜𝐜𝐢𝐨𝐧𝐬𝐩𝐨𝐫𝐭: ${pesan}`
let teks = `⺀𝐑𝐄𝐕𝐈𝐕𝐀𝐍 𝐁𝐎𝐓𝐒 - 𝐄𝐒𝐂𝐀𝐍𝐎𝐑 𝐁𝐎𝐓⺀ \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `💌  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐒𝐜𝐚𝐧𝐨𝐫 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
