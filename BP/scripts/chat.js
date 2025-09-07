import { world, system } from '@minecraft/server' // modul server
import { ConfChatRank, DimOverWolrd } from './Server/chat/chat.js' // import function ConfChatRank, DimOverWolrd dari folder server/chat

// event handle chatsend menggunakan format rank/role
world.beforeEvents.chatSend.subscribe((data) => {
    ConfChatRank(data)
});
system.run(function tick(data) {
    system.run(tick)
    DimOverWolrd(data)
});
system.run(function tick() {
    system.run(tick);
    for (const player of world.getPlayers()) {
        const runing = player.name;

        const playerTags = player.getTags();
        let formattedRanks = [];


        // atur role display yang muncul diatas pemain
        const allowedRoles = [
          "Owner", "Creator", "DEV", "Head_Admin", "Admin+", "Admin", "Administrator", 
          "Staff", "MOD", "Scripter", "Booster", "VIP", "Analyst", "GrandMarshal", "KODB", "Helper"
        ];

        // atur warna role yang di tampilkan
        const roleColorMap = {
          "Analyst": "§7",
          "Admin": "§l§d",
          "Admin+": "§l§9",
          "MOD": "§l§b",
          "Head_Admin": "§l§5",
          "Staff": "§a",
          "Scripter": "§1",
          "Administrator": "§f",
          "DEV": "§l§g",
          "Creator": "§g",
          "Owner": "§l§e",
          "Booster": "§l§d",
          "VIP": "§l§e",
          "GrandMarshal": "§l§g",
          "KODB": "§l§gKING",
          "Helper": "§l§a"
        };

        // format penulisan paksa
        for (const role of allowedRoles) {
            if (playerTags.includes(role)) {
                // Format display KODB khusus (force)
                if (role === "KODB") {
                    formattedRanks.push("§l§gKING");
                } else if (role === "Head_Admin") {
                    formattedRanks.push(roleColorMap[role] + "HEAD ADMIN");
                } else if (role === "GrandMarshal") {
                    formattedRanks.push(roleColorMap[role] + "GM");
                } else if (role === "Admin+" || role === "Admin" || role === "Staff" || role === "Helper" || role === "Owner" || role === "Booster") {
                    formattedRanks.push(roleColorMap[role] + role.toUpperCase());
                } else {
                    formattedRanks.push(roleColorMap[role] + role);
                }
            }
        }
        
        // menggunakan Separator "[ ]"
        const namePrefix = formattedRanks.length > 0 ? `§r[${formattedRanks.join('§r] §r[')}§r] ` : "";
        // set player display yang muncul diatas pemain role/rank nya dengan API name.tag
        player.nameTag = `§f${namePrefix}§r${runing}`;
    }
});