# ⚙️ Scripts - Chat Ranks V2

Folder ini berisi alur script untuk sistem **Chat Ranks**.

## 🔄 Alur Proses
1. **BP/scripts/chat.js**
   - File utama, import fungsi `ConfChatRank` & `DimOverWolrd` dari `server/chat/chat.js`.
   - Menangani event `beforeEvents.chatSend` → ganti format chat.
   - Menjalankan loop `system.run` untuk update dimension & nameTag.

2. **server/chat/chat.js**
   - Berisi fungsi inti:
     - `ConfChatRank` → format pesan chat dengan rank.
     - `DimOverWolrd` → handle tag berdasarkan dimensi.
     - `ConfNameRank`, `ConfNameColor`, `ConfNameEmoji` → kustomisasi nameTag.
   - Menyediakan mapping `allowedRoles` & `roleColorMap`.

3. **custom/chat.js**
   - Customisasi tambahan:
     - Color Name & Text (warna default).
     - Emoji (default/optional).
     - Debug & Chat Range.

4. **conf/chat.js**
   - Konfigurasi default:
     - Separator `[ ]`.
     - Prefix & Dim Prefix.
     - Default warna & emoji.

## 📌 Catatan
- Semua script ditulis dalam JavaScript (`@minecraft/server` API).
- Flow ini memungkinkan pemisahan **core logic** (server/chat), **customisasi** (custom/chat), dan **konfigurasi** (conf/chat).