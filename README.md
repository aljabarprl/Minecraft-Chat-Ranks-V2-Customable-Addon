# 💬 Minecraft Chat Ranks V2

Addon scripting untuk Minecraft Bedrock Edition yang menambahkan sistem **Chat Ranks** (rank/role display di chat dan nameTag).  

## ✨ Fitur Utama
- Format chat dengan rank/role (Owner, Admin, Staff, VIP, dsb.).
- Warna & style rank dapat dikustomisasi (via mapping `roleColorMap`).
- Sistem **dimension tags** (Overworld, Nether, End). (tidak ada secara default harus di custom)
- **Custom Emoji & Color Name** via tag. (tidak ada secara default harus di custom)
- **Separator dan Prefix** bisa dikonfigurasi.
- Ditulis dengan JavaScript menggunakan `@minecraft/server` API.

## 📂 Struktur
- **BP/** → Behavior Pack (script dan logic addon)
- **scripts/** → Kode utama (`chat.js`) dan modul tambahan
- **server/chat/** → Fungsi inti format chat & handler
- **custom/chat.js** → Customisasi (color, emoji, debug, range)
- **conf/chat.js** → Konfigurasi default (separator, dim, prefix)

## 🚀 Cara Install
1. Ubah format ZIP dari **BP** (.zip → .mcpack)
2. Aktifkan di dunia Minecraft (pastikan *Beta APIs* aktif).
3. Gunakan tag sesuai role untuk menampilkan rank di chat atau nameTag. 
4. untuk addon ini default nya sama seperti tag mc vanilla yaitu "/tag rank/role" 