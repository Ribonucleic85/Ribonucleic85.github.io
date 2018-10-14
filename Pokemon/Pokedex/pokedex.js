var
Pokemon = {
  Dex: {
    /* ------------------------------------------- */
    /* Pokemon look-up function, pass it a Dex No. */
    /* and it will return the Pokemon name         */
    /* ------------------------------------------- */

    No: function(n) {
      if (n==808||n==891) return Pokemon.Dex.Gen7or8[0];   //  Check for Meltan' suspected Dex Numbers
      
      // if not a Meltan lookup then do standard bounds checks
      // and if in bounds continue to lookup the relevant Pokemon
      if (n<0 || n>807) return false;  // exit with false if out of range 1-802

      if (n>0 && n<152)   return Pokemon.Dex.Gen1[n-1];    //  Gen 1 001-151     subtracting the
      if (n>151 && n<252) return Pokemon.Dex.Gen2[n-152];  //  Gen 2 152-251   lower part  of the
      if (n>251 && n<387) return Pokemon.Dex.Gen3[n-252];  //  Gen 3 252-386   range reduces n to
      if (n>386 && n<494) return Pokemon.Dex.Gen4[n-387];  //  Gen 4 387-493    0+ which puts it
      if (n>493 && n<650) return Pokemon.Dex.Gen5[n-494];  //  Gen 5 494-649    within the index
      if (n>649 && n<722) return Pokemon.Dex.Gen6[n-650];  //  Gen 6 650-721      range of the
      if (n>721 && n<808) return Pokemon.Dex.Gen7[n-722];  /*  Gen 7 722-807      relevant gen
      if (n>807 && n<???) return Pokemon.Dex.Gen8[n-802];  << redundant Gen 8 code
            ^ Gen 7 currently officially ends at 807 but it may stretch to 808 or 809 */
    },


    /* --------------------------------- */
    /* Pokemon by Generation and Dex No. */
    /* --------------------------------- */

    Gen1: [
      "Bulbasaur",    "Ivysaur",    "Venusaur",   "Charmander",    "Charmeleon",   "Charizard",
      "Squirtle",     "Wartortle",  "Blastoise",  "Caterpie",      "Metapod",      "Butterfree",
      "Weedle",       "Kakuna",     "Beedrill",   "Pidgey",        "Pidgeotto",    "Pidgeot",
      "Rattata",      "Raticate",   "Spearow",    "Fearow",        "Ekans",        "Arbok",
      "Pikachu",      "Raichu",     "Sandshrew",  "Sandslash",     "Nidoran f",    "Nidorina",
      "Nidoqueen",    "Nidoran m",  "Nidorino",   "Nidoking",      "Clefairy",     "Clefable",
      "Vulpix",       "Ninetales",  "Jigglypuff", "Wigglytuff",    "Zubat",        "Golbat",
      "Oddish",       "Gloom",      "Vileplume",  "Paras",         "Parasect",     "Venonat",
      "Venomoth",     "Diglett",    "Dugtrio",    "Meowth",        "Persian",      "Psyduck",
      "Golduck",      "Mankey",     "Primeape",   "Growlithe",     "Arcanine",     "Poliwag",
      "Poliwhirl",    "Poliwrath",  "Abra",       "Kadabra",       "Alakazam",     "Machop",
      "Machoke",      "Machamp",    "Bellsprout", "Weepinbell",    "Victreebel",   "Tentacool",
      "Tentacruel",   "Geodude",    "Graveler",   "Golem",         "Ponyta",       "Rapidash",
      "Slowpoke",     "Slowbro",    "Magnemite",  "Magneton",      "Farfetch'd",   "Doduo",
      "Dodrio",       "Seel",       "Dewgong",    "Grimer",        "Muk",          "Shellder",
      "Cloyster",     "Gastly",     "Haunter",    "Gengar",        "Onix",         "Drowzee",
      "Hypno",        "Krabby",     "Kingler",    "Voltorb",       "Electrode",    "Exeggcute",
      "Exeggutor",    "Cubone",     "Marowak",    "Hitmonlee",     "Hitmonchan",   "Lickitung",
      "Koffing",      "Weezing",    "Rhyhorn",    "Rhydon",        "Chansey",      "Tangela",
      "Kangaskhan",   "Horsea",     "Seadra",     "Goldeen",       "Seaking",      "Staryu",
      "Starmie",      "Mr.Mime",    "Scyther",    "Jynx",          "Electabuzz",   "Magmar",
      "Pinsir",       "Tauros",     "Magikarp",   "Gyarados",      "Lapras",       "Ditto",
      "Eevee",        "Vaporeon",   "Jolteon",    "Flareon",       "Porygon",      "Omanyte",
      "Omastar",      "Kabuto",     "Kabutops",   "Aerodactyl",    "Snorlax",      "Articuno",
      "Zapdos",       "Moltres",    "Dratini",    "Dragonair",     "Dragonite",    "Mewtwo",
      "Mew"
    ],
    Gen2: [
      "Chikorita",    "Bayleef",    "Meganium",   "Cyndaquil",     "Quilava",      "Typhlosion",
      "Totodile",     "Croconaw",   "Feraligatr", "Sentret",       "Furret",       "Hoothoot",
      "Noctowl",      "Ledyba",     "Ledian",     "Spinarak",      "Ariados",      "Crobat",
      "Chinchou",     "Lanturn",    "Pichu",      "Cleffa",        "Igglybuff",    "Togepi",
      "Togetic",      "Natu",       "Xatu",       "Mareep",        "Flaaffy",      "Ampharos",
      "Bellossom",    "Marill",     "Azumarill",  "Sudowoodo",     "Politoed",     "Hoppip",
      "Skiploom",     "Jumpluff",   "Aipom",      "Sunkern",       "Sunflora",     "Yanma",
      "Wooper",       "Quagsire",   "Espeon",     "Umbreon",       "Murkrow",      "Slowking",
      "Misdreavus",   "Unown",      "Wobbuffet",  "Girafarig",     "Pineco",       "Forretress",
      "Dunsparce",    "Gligar",     "Steelix",    "Snubbull",      "Granbull",     "Qwilfish",
      "Scizor",       "Shuckle",    "Heracross",  "Sneasel",       "Teddiursa",    "Ursaring",
      "Slugma",       "Magcargo",   "Swinub",     "Piloswine",     "Corsola",      "Remoraid",
      "Octillery",    "Delibird",   "Mantine",    "Skarmory",      "Houndour",     "Houndoom",
      "Kingdra",      "Phanpy",     "Donphan",    "Porygon-2",     "Stantler",     "Smeargle",
      "Tyrogue",      "Hitmontop",  "Smoochum",   "Elekid",        "Magby",        "Miltank",
      "Blissey",      "Raikou",     "Entei",      "Suicune",       "Larvitar",     "Pupitar",
      "Tyranitar",    "Lugia",      "Ho-oh",      "Celebi"
    ],
    Gen3: [
      "Treecko",      "Grovyle",    "Sceptile",   "Torchic",       "Combusken",    "Blaziken",
      "Mudkip",       "Marshtomp",  "Swampert",   "Poochyena",     "Mightyena",    "Zigzagoon",
      "Linoone",      "Wurmple",    "Silcoon",    "Beautifly",     "Cascoon",      "Dustox",
      "Lotad",        "Lombre",     "Ludicolo",   "Seedot",        "Nuzleaf",      "Shiftry",
      "Taillow",      "Swellow",    "Wingull",    "Pelipper",      "Ralts",        "Kirlia",
      "Gardevoir",    "Surskit",    "Masquerain", "Shroomish",     "Breloom",      "Slakoth",
      "Vigoroth",     "Slaking",    "Nincada",    "Ninjask",       "Shedinja",     "Whismur",
      "Loudred",      "Exploud",    "Makuhita",   "Hariyama",      "Azurill",      "Nosepass",
      "Skitty",       "Delcatty",   "Sableye",    "Mawile",        "Aron",         "Lairon",
      "Aggron",       "Meditite",   "Medicham",   "Electrike",     "Manectric",    "Plusle",
      "Minun",        "Volbeat",    "Illumise",   "Roselia",       "Gulpin",       "Swalot",
      "Carvanha",     "Sharpedo",   "Wailmer",    "Wailord",       "Numel",        "Camerupt",
      "Torkoal",      "Spoink",     "Grumpig",    "Spinda",        "Trapinch",     "Vibrava",
      "Flygon",       "Cacnea",     "Cacturne",   "Swablu",        "Altaria",      "Zangoose",
      "Seviper",      "Lunatone",   "Solrock",    "Barboach",      "Whiscash",     "Corphish",
      "Crawdaunt",    "Baltoy",     "Claydol",    "Lileep",        "Cradily",      "Anorith",
      "Armaldo",      "Feebas",     "Milotic",    "Castform",      "Kecleon",      "Shuppet",
      "Banette",      "Duskull",    "Dusclops",   "Tropius",       "Chimecho",     "Absol",
      "Wynaut",       "Snorunt",    "Glalie",     "Spheal",        "Sealeo",       "Walrein",
      "Clamperl",     "Huntail",    "Gorebyss",   "Relicanth",     "Luvdisc",      "Bagon",
      "Shelgon",      "Salamence",  "Beldum",     "Metang",        "Metagross",    "Regirock",
      "Regice",       "Registeel",  "Latias",     "Latios",        "Kyogre",       "Groudon",
      "Rayquaza",     "Jirachi",    "Deoxys"
    ],
    Gen4: [
      "Turtwig",      "Grotle",     "Torterra",   "Chimchar",      "Monferno",     "Infernape",
      "Piplup",       "Prinplup",   "Empoleon",   "Starly",        "Staravia",     "Staraptor",
      "Bidoof",       "Bibarel",    "Kricketot",  "Kricketune",    "Shinx",        "Luxio",
      "Luxray",       "Budew",      "Roserade",   "Cranidos",      "Rampardos",    "Shieldon",
      "Bastiodon",    "Burmy",      "Wormadam",   "Mothim",        "Combee",       "Vespiquen",
      "Pachirisu",    "Buizel",     "Floatzel",   "Cherubi",       "Cherrim",      "Shellos",
      "Gastrodon",    "Ambipom",    "Drifloon",   "Drifblim",      "Buneary",      "Lopunny",
      "Mismagius",    "Honchkrow",  "Glameow",    "Purugly",       "Chingling",    "Stunky",
      "Skuntank",     "Bronzor",    "Bronzong",   "Bonsly",        "Mime Jr.",     "Happiny",
      "Chatot",       "Spiritomb",  "Gible",      "Gabite",        "Garchomp",     "Munchlax",
      "Riolu",        "Lucario",    "Hippopotas", "Hippowdon",     "Skorupi",      "Drapion",
      "Croagunk",     "Toxicroak",  "Carnivine",  "Finneon",       "Lumineon",     "Mantyke",
      "Snover",       "Abomasnow",  "Weavile",    "Magnezone",     "Lickilicky",   "Rhyperior",
      "Tangrowth",    "Electivire", "Magmortar",  "Togekiss",      "Yanmega",      "Leafeon",
      "Glaceon",      "Gliscor",    "Mamoswine",  "Porygon-Z",     "Gallade",      "Probopass",
      "Dusknoir",     "Froslass",   "Rotom",      "Uxie",          "Mesprit",      "Azelf",
      "Dialga",       "Palkia",     "Heatran",    "Regigigas",     "Giratina",     "Cresselia",
      "Phione",       "Manaphy",    "Darkrai",    "Shaymin",       "Arceus"
    ],
    Gen5: [
      "Victini",      "Snivy",      "Servine",    "Serperior",     "Tepig",        "Pignite",
      "Emboar",       "Oshawott",   "Dewott",     "Samurott",      "Patrat",       "Watchog",
      "Lillipup",     "Herdier",    "Stoutland",  "Purrloin",      "Liepard",      "Pansage",
      "Simisage",     "Pansear",    "Simisear",   "Panpour",       "Simipour",     "Munna",
      "Musharna",     "Pidove",     "Tranquill",  "Unfezant",      "Blitzle",      "Zebstrika",
      "Roggenrola",   "Boldore",    "Gigalith",   "Woobat",        "Swoobat",      "Drilbur",
      "Excadrill",    "Audino",     "Timburr",    "Gurdurr",       "Conkeldurr",   "Tympole",
      "Palpitoad",    "Seismitoad", "Throh",      "Sawk",          "Sewaddle",     "Swadloon",
      "Leavanny",     "Venipede",   "Whirlipede", "Scolipede",     "Cottonee",     "Whimsicott",
      "Petilil",      "Lilligant",  "Basculin",   "Sandile",       "Krokorok",     "Krookodile",
      "Darumaka",     "Darmanitan", "Maractus",   "Dwebble",       "Crustle",      "Scraggy",
      "Scrafty",      "Sigilyph",   "Yamask",     "Cofagrigus",    "Tirtouga",     "Carracosta",
      "Archen",       "Archeops",   "Trubbish",   "Garbodor",      "Zorua",        "Zoroark",
      "Minccino",     "Cinccino",   "Gothita",    "Gothorita",     "Gothitelle",   "Solosis",
      "Duosion",      "Reuniclus",  "Ducklett",   "Swanna",        "Vanillite",    "Vanillish",
      "Vanilluxe",    "Deerling",   "Sawsbuck",   "Emolga",        "Karrablast",   "Escavalier",
      "Foongus",      "Amoonguss",  "Frillish",   "Jellicent",     "Alomomola",    "Joltik",
      "Galvantula",   "Ferroseed",  "Ferrothorn", "Klink",         "Klang",        "Klinklang",
      "Tynamo",       "Eelektrik",  "Eelektross", "Elgyem",        "Beheeyem",     "Litwick",
      "Lampent",      "Chandelure", "Axew",       "Fraxure",       "Haxorus",      "Cubchoo",
      "Beartic",      "Cryogonal",  "Shelmet",    "Accelgor",      "Stunfisk",     "Mienfoo",
      "Mienshao",     "Druddigon",  "Golett",     "Golurk",        "Pawniard",     "Bisharp",
      "Bouffalant",   "Rufflet",    "Braviary",   "Vullaby",       "Mandibuzz",    "Heatmor",
      "Durant",       "Deino",      "Zweilous",   "Hydreigon",     "Larvesta",     "Volcarona",
      "Cobalion",     "Terrakion",  "Virizion",   "Tornadus",      "Thundurus",    "Reshiram",
      "Zekrom",       "Landorus",   "Kyurem",     "Keldeo",        "Meloetta",     "Genesect"
    ],
    Gen6: [
      "Chespin",      "Quilladin",  "Chesnaught", "Fennekin",      "Braixen",      "Delphox",
      "Froakie",      "Frogadier",  "Greninja",   "Bunnelby",      "Diggersby",    "Fletchling",
      "Fletchinder",  "Talonflame", "Scatterbug", "Spewpa",        "Vivillon",     "Litleo",
      "Pyroar",       "Flabébé",    "Floette",    "Florges",       "Skiddo",       "Gogoat",
      "Pancham",      "Pangoro",    "Furfrou",    "Espurr",        "Meowstic",     "Honedge",
      "Doublade",     "Aegislash",  "Spritzee",   "Aromatisse",    "Swirlix",      "Slurpuff",
      "Inkay",        "Malamar",    "Binacle",    "Barbaracle",    "Skrelp",       "Dragalge",
      "Clauncher",    "Clawitzer",  "Helioptile", "Heliolisk",     "Tyrunt",       "Tyrantrum",
      "Amaura",       "Aurorus",    "Sylveon",    "Hawlucha",      "Dedenne",      "Carbink",
      "Goomy",        "Sliggoo",    "Goodra",     "Klefki",        "Phantump",     "Trevenant",
      "Pumpkaboo",    "Gourgeist",  "Bergmite",   "Avalugg",       "Noibat",       "Noivern",
      "Xerneas",      "Yveltal",    "Zygarde",    "Diancie",       "Hoopa",        "Volcanion"
    ],
    Gen7: [
      "Rowlet",       "Dartrix",    "Decidueye",  "Litten",        "Torracat",     "Incineroar",
      "Popplio",      "Brionne",    "Primarina",  "Pikipek",       "Trumbeak",     "Toucannon",
      "Yungoos",      "Gumshoos",   "Grubbin",    "Charjabug",     "Vikavolt",     "Crabrawler",
      "Crabominable", "Oricorio",   "Cutiefly",   "Ribombee",      "Rockruff",     "Lycanroc",
      "Wishiwashi",   "Mareanie",   "Toxapex",    "Mudbray",       "Mudsdale",     "Dewpider",
      "Araquanid",    "Fomantis",   "Lurantis",   "Morelull",      "Shiinotic",    "Salandit",
      "Salazzle",     "Stufful",    "Bewear",     "Bounsweet",     "Steenee",      "Tsareena",
      "Comfey",       "Oranguru",   "Passimian",  "Wimpod",        "Golisopod",    "Sandygast",
      "Palossand",    "Pyukumuku",  "Type: Null", "Silvally",      "Minior",       "Komala",
      "Turtonator",   "Togedemaru", "Mimikyu",    "Bruxish",       "Drampa",       "Dhelmise",
      "Jangmo-o",     "Hakamo-o",   "Kommo-o",    "Tapu Koko",     "Tapu Lele",    "Tapu Bulu",
      "Tapu Fini",    "Cosmog",     "Cosmoem",    "Solgaleo",      "Lunala",       "Nihilego",
      "Buzzwole",     "Pheromosa",  "Xurkitree",  "Celesteela",    "Kartana",      "Guzzlord",
      "Necrozma",     "Magearna",   "Marshadow",  "Poipole",       "Naganadel",    "Stakataka",
      "Blacephalon",  "Zeraora"
    ],
    Gen7or8: ["Meltan"]
  }
}
