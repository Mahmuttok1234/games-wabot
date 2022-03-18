let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkom [081217445262]
│ • Gopay & Dana [081217445262]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281217445262
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
