 /*NEWBASE BUATAN AIKKO GANZ BEBAS REMCODE
   TQ TO :
    DhaniGans (guru saia)
    rapli (partner)
    arga (tmn)*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))



autoread = setting.autoread
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName

const fakeimage = fs.readFileSync ('./image/logo.jpg')
const thumb = fs.readFileSync ('./image/thumb.jpg')

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam'
}


module.exports = Aikko = async (Aikko, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Aikko.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `62858911732556@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderr = mek.key.fromMe ? Aikko.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Aikko.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Aikko.user.jid : Aikko.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Aikko.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)

			
		mess = {
		wait: 'Proses kak',
		eror: 'Maaf terjadi kesalahan !!',
		success: 'Sukses️',
		error: {
		stick: 'Itu bukan sticker kak !!',
		Iv: 'Link invalid !!'
		},
		only: {
		group: 'Fitur khusus grup !!',
		owner: 'Fitur khusus owner !!',
		admin: 'Fitur khusus admin !!',
		Badmin: 'Silakan jadikan bot admin dulu !!'
		}
		}
		const math = (teks) => {
        return Math.floor(teks)
        }
        const runtime = function (seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        };
        const reply = (teks) => {
        Aikko.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
        Aikko.sendMessage(hehe, teks, text)
        }
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? Aikko.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Aikko.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
        Aikko.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
        }

		const ftrol = {
	    key : {
        participant : '0@s.whatsapp.net'
        },
        message: {
        orderMessage: {
        itemCount : 123,
        status: 1,
        surface : 1,
        message: `Bot by ${ownername}`, 
        orderTitle: `${botname}`,
        thumbnail: thumb, //Gambarnye
        sellerJid: '0@s.whatsapp.net' 
        }
        }
        }

//══════════[ group ]══════════//
        
        const hideTag = async function(from, text){
           let anu = await Aikko.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Aikko.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}


//══════════[ Button ]══════════//

  const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Aikko.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Aikko.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
       );
       };
       
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Aikko.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Aikko.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Aikko.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Aikko.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}



if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Aikko.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Aikko.groupRemove(from, [sender])
}

if (autoread){
Aikko.chatRead(from, "read")
}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ menu ]══════════//

case 'menu':
menu =
`┏━━⬣『 𝙄𝙣𝙛𝙤 𝙐𝙨𝙚𝙧 』
┃• *Nama : ${pushname}*
┃• *Nomor : wa.me/${sender.split('@')[0]}*
┃• *Status : ${isOwner ? 'Owner' : 'User'}*
┗━━⬣
┏━━⬣『 𝙄𝙣𝙛𝙤 𝘽𝙤𝙩 』
┃• *Nama Bot : ${botname}*
┗━━⬣

╭─⬣「 *Grup Menu* 」
│❏ ${prefix}antilink *on / off*
│❏ ${prefix}antivirtex *on / off*
│❏ ${prefix}welcome *on / off*
│❏ ${prefix}group *buka / tutup*
│❏ ${prefix}promote *@tag / reply*
│❏ ${prefix}demote *@tag / reply*
│❏ ${prefix}add *628xx*
│❏ ${prefix}kick *@tag / reply*
│❏ ${prefix}setpp *reply / cap*
│❏ ${prefix}setdesc *teks*
│❏ ${prefix}setname *teks*
│❏ ${prefix}hidetag *teks*
│❏ ${prefix}linkgrup
│❏ ${prefix}infogrup
│❏ ${prefix}listonline
│❏ ${prefix}resetlinkgrup
└⬣

 
╭─⬣「 *Download menu* 」
│❏ ${prefix}ytmp3 *Link*
│❏ ${prefix}ytmp4 *Link*
└⬣

 
╭─⬣「 *Sticker menu* 」
│❏ ${prefix}sticker *reply / cap*
│❏ ${prefix}attp *teks*
│❏ ${prefix}toimg *reply*
└⬣
 
 ╭─⬣「 *Sound menu* 」
│❏  ${prefix}sound1
│❏  ${prefix}sound2
│❏  ${prefix}sound3
│❏  ${prefix}sound4
│❏  ${prefix}sound5
│❏  ${prefix}sound6
│❏  ${prefix}sound7
│❏  ${prefix}sound8
│❏  ${prefix}sound9
│❏  ${prefix}sound10
│❏  ${prefix}sound11
│❏  ${prefix}sound12
│❏  ${prefix}sound13
│❏  ${prefix}sound14
│❏  ${prefix}sound15
│❏  ${prefix}sound16
│❏  ${prefix}sound17
│❏  ${prefix}sound18
│❏  ${prefix}sound19
│❏  ${prefix}sound20
│❏  ${prefix}sound21
│❏  ${prefix}sound22
│❏  ${prefix}sound23
│❏  ${prefix}sound24
│❏  ${prefix}sound25
│❏  ${prefix}sound26
│❏  ${prefix}sound27
│❏  ${prefix}sound28
│❏  ${prefix}sound29
│❏  ${prefix}sound30
│❏  ${prefix}sound31
│❏  ${prefix}sound32
│❏  ${prefix}sound33
│❏  ${prefix}sound34
│❏  ${prefix}sound35
│❏  ${prefix}sound36
│❏  ${prefix}sound37
│❏  ${prefix}sound38
│❏  ${prefix}sound39
│❏  ${prefix}sound40
│❏  ${prefix}sound41
│❏  ${prefix}sound42
│❏  ${prefix}sound43
│❏  ${prefix}sound44
│❏  ${prefix}sound45
│❏  ${prefix}sound46
│❏  ${prefix}sound47
│❏  ${prefix}sound48
│❏  ${prefix}sound49
│❏  ${prefix}sound50
│❏  ${prefix}sound51
│❏  ${prefix}sound52
│❏  ${prefix}sound53
│❏  ${prefix}sound54
│❏  ${prefix}sound55
│❏  ${prefix}sound56
│❏  ${prefix}sound57
│❏  ${prefix}sound58
│❏  ${prefix}sound59
│❏  ${prefix}sound60
│❏  ${prefix}sound61
│❏  ${prefix}sound62
│❏  ${prefix}sound63
│❏  ${prefix}sound64
│❏  ${prefix}sound65
│❏  ${prefix}sound66
│❏  ${prefix}sound67
│❏  ${prefix}sound68
│❏  ${prefix}sound69
│❏  ${prefix}sound70
╰─────────────╯
 
╭─⬣「 *Owner menu* 」
│❏ ${prefix}owner
│❏ ${prefix}bc *Teks*
│❏ ${prefix}linkgcown
└⬣

╭─⬣「 *Other Menu* 」
│❏ ${prefix}sewabot 
│❏ ${prefix}rulesbot
└⬣`
teks =
`*『 ${botname} 』*
*${tanggal}*`
Aikko.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//══════════[ other ]══════════//
case 'sb':
case 'sewabot':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = `*Hallo Kak ${pushname} mau sewa bot?*

*~ OPEN JASA SEWA BOT ~*

*˒ ࣪ ꉂᥐʾ ֛RamaStoreᏪ ָ࣪۰*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈


*- Harga sewa -*
ぬ ࣪▸ˑ ִֶָ 🍨 1 minggu : 800p
ぬ ࣪▸ˑ ִֶָ 🍨 1 Bulan : 1k
ぬ ࣪▸ˑ ִֶָ 🍨 Permanen : 2,1k

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

ぬ ࣪▸ˑ ִֶָ 🍿 Bot antidelay
ぬ ࣪▸ˑ ִֶָ 🍿 Bot aktif 24 jam
ぬ ࣪▸ˑ ִֶָ 🍿 Bot tidak pasaran
ぬ ࣪▸ˑ ִֶָ 🍿 Bukan wibusoft
ぬ ࣪▸ˑ ִֶָ 🍿 Bot run menggunakan rdp

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- FITUR BOT -*
ぬ ࣪▸ˑ ִֶָ 🍥 Antilink grup
ぬ ࣪▸ˑ ִֶָ 🍥 Welcome image
ぬ ࣪▸ˑ ִֶָ 🍥 Antivirtex
ぬ ࣪▸ˑ ִֶָ 🍥 Kick otomatis
ぬ ࣪▸ˑ ִֶָ 🍥 Game menu
ぬ ࣪▸ˑ ִֶָ 🍥 Nulis 
ぬ ࣪▸ˑ ִֶָ 🍥 Button menu
ぬ ࣪▸ˑ ִֶָ 🍥 Asupan menu
*Dan masih banyak lagi fitur lainnya yang lebih seru🔥🤤*

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- PAYMENT -*
ぬ ࣪▸ˑ ִֶָ 🥧 Dana
ぬ ࣪▸ˑ ִֶָ 🥧 Gopay

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- Sistem sewa bot -*
𝟷. Masukin bot ke grup
𝟸. Transfer
𝟹. Done

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
*OWNER*
wa.me/6283171252216

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

█│▌║│▌║│█║▌│█

     *©${owner}*
`


teks =

`${botname}

*${tanggal}*`

but = [

          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
          
        ]

        sendButImage(from, menunya, teks, gambar, but)

break
case 'linkgcown':
menu =
`join Yah Kak Group Official Ownernya
LINK Group:
https://chat.whatsapp.com/GUdBGjExAhH24mqRqp8ons`
teks =
`*『 ${botname} 』*
*${tanggal}*`
Aikko.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'rulesbot':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯

❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ

❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ

❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ

❒͡ 𝙅𝙞𝙠𝙖 𝙎𝙪s𝙖𝙝 𝙋𝙖𝙝𝙖𝙢𝙞 𝙍𝙪𝙡𝙚𝙨𝙣𝙮𝙖 , 
𝙎𝙞𝙡𝙖𝙠𝙖𝙣 𝙆𝙚𝙩𝙞𝙠 #𝙢𝙚𝙣𝙪 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙪𝙡𝙖𝙞 ! ! !

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
https://wa.me/6283171252216`

teks =
`*『 ${botname} 』*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ 😈' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Aikko.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
//══════════[GAME MENU]════════════════════════════//
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      reply(mess.wait)
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      Aikko.sendMessage(from, omkeh, MessageType.audio, { quoted: ftrol, mimetype: 'audio/mp4', ptt: true })
          break
//══════════[ owner ]══════════//
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Aikko.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Aikko.chats.all()
             if (isMedia && !Aikko.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Aikko).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Aikko
             bc100 = await Aikko.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Aikko.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Aikko.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break

//══════════[ Fitur jualan ]══════════//
case 'ampremium':
case 'alightmotion':
case 'alightmotionp':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = `*Hallo Kak ${pushname} mau berlanggan Alight Motion?*

*~ OPEN JASA AM Premium ~*

*˒ ࣪ ꉂᥐʾ ֛RamaStoreᏪ ָ࣪۰*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈

*_🕊️ALIGHTMOTION PREMIUM
🧚‍♀️MANFAAT:🧚‍♀️
•WARTEMAK HILANG
•UNFFCLOK ALLEFEK
•BISA IMPOR EKSPOR PRESET DI BAWAH DANDIATAS 5MB
•SUPPORT ANDROID/IOS

Harga
Private
1 bulan 30-35k
1 tahun 125-150k

Sharing
1 bulan 8k
1 tahun 10k
Selamanya 15k

Garansi am premium
1 Bulan garansinya 30hari
1 tahun garasinya 6 bulan
Selamanya garansinya 1/1,5tahun_*

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- PAYMENT -*
ぬ ࣪▸ˑ ִֶָ 🥧 Dana
ぬ ࣪▸ˑ ִֶָ 🥧 Gopay

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

minat Chatt Ke Owner Yah kk

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
*OWNER*
wa.me/6283171252216

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

█│▌║│▌║│█║▌│█

     *©${owner}*
`


teks =

`${botname}

*${tanggal}*`

but = [

          { buttonId: `${prefix}linkgcown`, buttonText: { displayText: 'LINK GROUP OFFICIAL' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
          
        ]

        sendButImage(from, menunya, teks, gambar, but)

break
//══════════[ Fitur Download ]══════════//

case 'ytmp3':
            if (args.length < 1) return fakeyt('Link Nya Mana ?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateA(teks).catch(e => {
            fakeyt('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP3 🎵*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP3_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
case 'ytmp4':
            if (args.length < 1) return fakeyt('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            fakeyt(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `*YOUTUBE MP4 🎥*

*Data Berhasil Didapatkan !!*
⌖ _Title : ${res[0].judul}_
⌖ _Ext : MP4_
⌖ _Size : ${res[0].size}_

\`\`\`Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit\`\`\``

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
case 'tiktoknowm':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.nowatermark)

Aikko.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})

break

case 'tiktokwm':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.watermark)

Aikko.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})

break

case 'tiktokaudio':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.audio)

Aikko.sendMessage(from, tiktok, audio, {quoted: mek})

break
//══════════[ Fitur Grup ]══════════//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Aikko.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Aikko.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Aikko.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Aikko.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Aikko.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Aikko.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Aikko.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Aikko.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Aikko.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Aikko.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Aikko.groupRemove(from, [anu]);
reply(mess.success);
} else {
Aikko.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Aikko.groupUpdateSubject(from, `${body.slice(9)}`)
Aikko.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Aikko.groupUpdateDescription(from, `${body.slice(9)}`)
Aikko.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Aikko.downloadMediaMessage(encmedia)
Aikko.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Aikko.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Aikko.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Aikko.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Aikko.chats.get(ido).presences), Aikko.user.jid]
Aikko.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
//══════════[ Fitur Sticker ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Aikko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Aikko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Aikko.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
