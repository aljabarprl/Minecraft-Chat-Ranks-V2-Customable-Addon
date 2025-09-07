import { world, system } from '@minecraft/server' // modul server
import { PrefixColorN, PrefixEmoj } from './conf/chat.js' // menggunakan Separator
import { overworld, nether, end, DColorN, DEmoji } from './custom/chat.js' // import function (overworld, nether, end, DColorN, DEmoji) dari folder custom (sebenarnya hanya untuk custom prefix calls)

// format chatsend
function ConfChatRank(data) {
    data.cancel = true
    const player = data.sender;
    const runing = player.name;

    // custom rank detection berdasarkan tag
    const playerTags = player.getTags();
    let formattedRanks = [];

    // atur role yang muncul di display chat  
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
    const rankDisplay = formattedRanks.length > 0 ? `§r[${formattedRanks.join('§r] §r[')}§r] ` : "";

    // build full chat display 
    const Form = `§f${rankDisplay}§r<${runing}> §r${data.message.replaceAll('§', '')}`;
    world.sendMessage(Form); // mereplace chatsend dengan function yang sudah di build
}
// konfigurasi dalam dimensi yang berbeda
function DimOverWolrd() {
    const Replace = Array.from(world.getPlayers(), All => All)
    Replace.forEach(player => { if (player.hasTag(`${PrefixDim}${overworld}`) && player.dimension.id != 'minecraft:overworld') player.removeTag(`${PrefixDim}${overworld}`) })
    Replace.forEach(player => { if (player.hasTag(`${PrefixDim}${nether}`) && player.dimension.id != 'minecraft:nether') player.removeTag(`${PrefixDim}${nether}`) })
    Replace.forEach(player => { if (player.hasTag(`${PrefixDim}${end}`) && player.dimension.id != 'minecraft:the_end') player.removeTag(`${PrefixDim}${end}`) })
    Replace.forEach(player => {
    switch (player.dimension.id) { 
        case 'minecraft:overworld': player.addTag(`${PrefixDim}${overworld}`) 
        break 
        case 'minecraft:nether': player.addTag(`${PrefixDim}${nether}`) 
        break 
        case 'minecraft:the_end': player.addTag(`${PrefixDim}${end}`) 
        break
        }
    })
}
// format role
function ConfNameRank(player) {
    try {
        const allowedRoles = [
            "Owner", "Creator", "DEV", "Head_Admin", "Admin+", "Admin", "Administrator",
            "Staff", "MOD", "Scripter", "Booster", "VIP", "Analyst", "GrandMarshal", "KODB", "Helper"
        ];
    
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

        const playerTags = player.getTags();
        let formattedRanks = [];

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

        if (formattedRanks.length === 0) {
            return "";
        }

        return '§f[' + formattedRanks.join('§r§f]§r §f[') + '§r§f]§r ';
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
// format color handler
function ConfNameColor(player) {
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixColorN)) {
                pushd.push(inter[i].replace(PrefixColorN, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DColorN
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}
// format emoji
function ConfNameEmoji(player) {
    try {
        const inter = player.getTags()
        const pushd = []
        for (let i = 0; i <= inter.length - 1; i++) {
            if (inter[i].startsWith(PrefixEmoj)) {
                pushd.push(inter[i].replace(PrefixEmoj, '') + '')
            }
        }
        if (pushd.length == 0) {
            return DEmoji
        }
        else {
            return pushd.join("§r")
        }
    }
    catch (error) {
    }
}
// Role list & prioritas
const allowedRoles = [
  "Owner", "Creator", "DEV", "Head_Admin", "Admin+", "Admin", "Administrator", 
  "Staff", "MOD", "Scripter", "Booster", "VIP", "Analyst", "GrandMarshal", "KODB", "Helper"
];

// Role ke warna
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

// Fungsi untuk ambil rank sesuai prioritas dan format
function getFormattedRanks(player) {
    const tags = player.getTags();
    let ranks = [];

    for (const role of allowedRoles) {
        if (tags.includes(role)) {
            // Format display KODB khusus (force)
            if (role === "KODB") {
                ranks.push("§l§gKING");
            }
            else if (role === "Head_Admin") {
                ranks.push(roleColorMap[role] + "HEAD ADMIN");
            } else if (role === "GrandMarshal") {
                ranks.push(roleColorMap[role] + "GM");
            }
            else if (role === "Admin+" || role === "Admin" || role === "Staff" || role === "Helper" || role === "Owner" || role === "Booster") {
                ranks.push(roleColorMap[role] + role.toUpperCase());
            }
            else {
                ranks.push(roleColorMap[role] + role);
            }
        }
    }

    return ranks.join("§r§f]§r §f[§r"); // sama separator kayak SD
}

// export agar bisa di import oleh tag display dan server
export { ConfChatRank, DimOverWolrd, ConfNameRank, ConfNameColor, ConfNameEmoji }