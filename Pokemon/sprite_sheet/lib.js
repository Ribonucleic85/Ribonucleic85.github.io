const triggerEvent = (el, eventName) => {
  var event = document.createEvent('HTMLEvents');
  event.initEvent(eventName, true, false);
  el.dispatchEvent(event);
};

const defaultOptions = {
	pkmn : 'Oddish', 
  widths : 256,
  heights : 256,
  background : '#FFFFFF'
};

function onReset() {
	let form = document.querySelector('.pkmn-form');
	Object.keys(defaultOptions).forEach(key => {
  	form.querySelector(`*[name="${key}"]`).value = defaultOptions[key];
  });
}

function onFamilyChange(e) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  loadImages(ctx, families[e.target.value], {
    widths : parseInt(document.querySelector('input[name="widths"]').value, 10),
  	heights : parseInt(document.querySelector('input[name="heights"]').value, 10),
    background : document.querySelector('input[name="background"]').value
  });
}

function loadImages(ctx, pokemon, opts) {
	opts = Object.assign(defaultOptions, opts);
  
  let cols = 2 * (pokemon.forms.length + 1);
  let rows = pokemon.evo.length;
  
  ctx.canvas.width = cols * opts.widths;
  ctx.canvas.height = rows * opts.heights;
  ctx.fillStyle = opts.background;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	pokemon.evo.forEach((name, row) => {
  	let forms = [ name, `${name} shiny` ].concat(...pokemon.forms.map(form => {
    	return [ `${name} ${form}`, `${name} ${form} shiny` ];
    }));

    // https://pokemongo.fandom.com/wiki/List_of_Pok%C3%A9mon_with_different_forms
    forms.forEach((form, index) => {
      loadImage(ctx, getImageUrl(`${form}`), index * opts.widths, row * opts.heights, opts);
    });
  });
}

function loadImage(ctx, url, x, y, opts) {
  var img = new Image();
  img.onload = function() { ctx.drawImage(img, x, y, opts.widths, opts.heights); }
  img.src = url;
}

function getImageUrl(name) {
  let baseUrl = 'https://vignette.wikia.nocookie.net/pokemongo/images',
    filename = `${name}.png`.replace(/ /g, '_'),
    digest = md5(filename),
    filepath = `${digest[0]}/${digest[0]}${digest[1]}/${encodeURIComponent(filename)}`;
  return `${baseUrl}/${filepath}`;
}

function getFamilies() {
  return { 
    'Bulbasaur'  : { 'evo' : [ 'Bulbasaur', 'Ivysaur', 'Venusaur' ], 'forms' : [ ] },
    'Charmander' : { 'evo' : [ 'Charmander', 'Charmeleon', 'Charizard' ], 'forms' : [ ] },
    'Squirtle'   : { 'evo' : [ 'Squirtle', 'Wartortle', 'Blastoise' ], 'forms' : [ ] },
    'Caterpie'   : { 'evo' : [ 'Caterpie', 'Metapod', 'Butterfree' ], 'forms' : [ ] },
    'Weedle'     : { 'evo' : [ 'Weedle', 'Kakuna', 'Beedrill' ], 'forms' : [ ] },
    'Pidgey'     : { 'evo' : [ 'Pidgey', 'Pidgeotto', 'Pidgeot' ], 'forms' : [ ] },
    'Rattata'    : { 'evo' : [ 'Rattata', 'Raticate' ], 'forms' : [ ] },
    'Spearow'    : { 'evo' : [ 'Spearow', 'Fearow' ], 'forms' : [ ] },
    'Ekans'      : { 'evo' : [ 'Ekans', 'Arbok' ], 'forms' : [ ] },
    'Pikachu'    : { 'evo' : [ 'Pichu', 'Pikachu', 'Raichu' ], 'forms' : [ 'alolan' ] },
    'Sandshrew'  : { 'evo' : [ 'Sandshrew', 'Sandslash' ], 'forms' : [ 'alolan' ] },
    'Nidoran♀'   : { 'evo' : [ 'Nidoran♀', 'Nidorina', 'Nidoqueen' ], 'forms' : [ ] },
    'Nidoran♂'   : { 'evo' : [ 'Nidoran♂', 'Nidorino', 'Nidoking' ], 'forms' : [ ] },
    'Clefairy'   : { 'evo' : [ 'Cleffa', 'Clefairy', 'Clefable' ], 'forms' : [ ] },
    'Vulpix'     : { 'evo' : [ 'Vulpix', 'Ninetales' ], 'forms' : [ 'alolan' ] },
    'Jigglypuff' : { 'evo' : [ 'Igglybuff', 'Jigglypuff', 'Wigglytuff' ], 'forms' : [ ] },
    'Zubat'      : { 'evo' : [ 'Zubat', 'Golbat', 'Crobat' ], 'forms' : [ ] },
    'Oddish'     : { 'evo' : [ 'Oddish', 'Gloom', 'Vileplume', 'Bellossom' ], 'forms' : [ ] },
    'Paras'      : { 'evo' : [ 'Paras', 'Parasect' ], 'forms' : [ ] },
    'Venonat'    : { 'evo' : [ 'Venonat', 'Venomoth' ], 'forms' : [ ] },
    'Diglett'    : { 'evo' : [ 'Diglett', 'Dugtrio' ], 'forms' : [ 'alolan' ] },
    'Meowth'     : { 'evo' : [ 'Meowth', 'Persian' ], 'forms' : [ 'alolan' ] },
    'Psyduck'    : { 'evo' : [ 'Psyduck', 'Golduck' ], 'forms' : [ ] },
    'Mankey'     : { 'evo' : [ 'Mankey', 'Primeape' ], 'forms' : [ ] },
    'Growlithe'  : { 'evo' : [ 'Growlithe', 'Arcanine' ], 'forms' : [ ] },
    'Poliwag'    : { 'evo' : [ 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Politoed' ], 'forms' : [ ] },
    'Abra'       : { 'evo' : [ 'Abra', 'Kadabra', 'Alakazam' ], 'forms' : [ ] },
    'Machop'     : { 'evo' : [ 'Machop', 'Machoke', 'Machamp' ], 'forms' : [ ] },
    'Bellsprout' : { 'evo' : [ 'Bellsprout', 'Weepinbell', 'Victreebel' ], 'forms' : [ ] },
    'Tentacool'  : { 'evo' : [ 'Tentacool', 'Tentacruel' ], 'forms' : [ ] },
    'Geodude'    : { 'evo' : [ 'Geodude', 'Graveler', 'Golem' ], 'forms' : [ 'alolan' ] },
    'Ponyta'     : { 'evo' : [ 'Ponyta', 'Rapidash' ], 'forms' : [ ] },
    'Slowpoke'   : { 'evo' : [ 'Slowpoke', 'Slowbro', 'Slowking' ], 'forms' : [ ] },
    'Magnemite'  : { 'evo' : [ 'Magnemite', 'Magneton', 'Magnezone' ], 'forms' : [ ] },
    'Farfetch\'d': { 'evo' : [ 'Farfetch\'d' ], 'forms' : [ ] },
    'Doduo'      : { 'evo' : [ 'Doduo', 'Dodrio' ], 'forms' : [ ] },
    'Seel'       : { 'evo' : [ 'Seel', 'Dewgong' ], 'forms' : [ ] },
    'Grimer'     : { 'evo' : [ 'Grimer', 'Muk' ], 'forms' : [ 'alolan' ] },
    'Shellder'   : { 'evo' : [ 'Shellder', 'Cloyster' ], 'forms' : [ ] },
    'Gastly'     : { 'evo' : [ 'Gastly', 'Haunter', 'Gengar' ], 'forms' : [ ] },
    'Onix'       : { 'evo' : [ 'Onix', 'Steelix' ], 'forms' : [ ] },
    'Drowzee'    : { 'evo' : [ 'Drowzee', 'Hypno' ], 'forms' : [ ] },
    'Krabby'     : { 'evo' : [ 'Krabby', 'Kingler' ], 'forms' : [ ] },
    'Voltorb'    : { 'evo' : [ 'Voltorb', 'Electrode' ], 'forms' : [ ] },
    'Exeggcute'  : { 'evo' : [ 'Exeggcute', 'Exeggutor' ], 'forms' : [ 'alolan' ] },
    'Cubone'     : { 'evo' : [ 'Cubone', 'Marowak' ], 'forms' : [ 'alolan' ] },
    'Tyrogue'    : { 'evo' : [ 'Tyrogue', 'Hitmonlee', 'Hitmonchan', 'Hitmontop' ], 'forms' : [ ] },
    'Lickitung'  : { 'evo' : [ 'Lickitung', 'Lickilicky' ], 'forms' : [ ] },
    'Koffing'    : { 'evo' : [ 'Koffing', 'Weezing' ], 'forms' : [ ] },
    'Rhyhorn'    : { 'evo' : [ 'Rhyhorn', 'Rhydon', 'Rhyperior' ], 'forms' : [ ] },
    'Chansey'    : { 'evo' : [ 'Happiny', 'Chansey', 'Blissey' ], 'forms' : [ ] },
    'Tangela'    : { 'evo' : [ 'Tangela', 'Tangrowth' ], 'forms' : [ ] },
    'Kangaskhan' : { 'evo' : [ 'Kangaskhan' ], 'forms' : [ ] },
    'Horsea'     : { 'evo' : [ 'Horsea', 'Seadra', 'Kingdra' ], 'forms' : [ ] },
    'Goldeen'    : { 'evo' : [ 'Goldeen', 'Seaking' ], 'forms' : [ ] },
    'Staryu'     : { 'evo' : [ 'Staryu', 'Starmie' ], 'forms' : [ ] },
    'Mr. Mime'   : { 'evo' : [ 'Mime Jr.', 'Mr. Mime' ], 'forms' : [ ] },
    'Scyther'    : { 'evo' : [ 'Scyther', 'Scizor' ], 'forms' : [ ] },
    'Jynx'       : { 'evo' : [ 'Smoochum', 'Jynx' ], 'forms' : [ ] },
    'Electabuzz' : { 'evo' : [ 'Elekid', 'Electabuzz', 'Electivire' ], 'forms' : [ ] },
    'Magmar'     : { 'evo' : [ 'Magby', 'Magmar', 'Magmortar' ], 'forms' : [ ] },
    'Pinsir'     : { 'evo' : [ 'Pinsir' ], 'forms' : [ ] },
    'Tauros'     : { 'evo' : [ 'Tauros' ], 'forms' : [ ] },
    'Magikarp'   : { 'evo' : [ 'Magikarp', 'Gyarados' ], 'forms' : [ ] },
    'Lapras'     : { 'evo' : [ 'Lapras' ], 'forms' : [ ] },
    'Ditto'      : { 'evo' : [ 'Ditto' ], 'forms' : [ ] },
    'Eevee'      : { 'evo' : [ 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Espeon', 'Umbreon', 'Leafeon', 'Glaceon' ], 'forms' : [ ] },
    'Porygon'    : { 'evo' : [ 'Porygon', 'Porygon2', 'Porygon-Z' ], 'forms' : [ ] },
    'Omanyte'    : { 'evo' : [ 'Omanyte', 'Omastar' ], 'forms' : [ ] },
    'Kabuto'     : { 'evo' : [ 'Kabuto', 'Kabutops' ], 'forms' : [ ] },
    'Aerodactyl' : { 'evo' : [ 'Aerodactyl' ], 'forms' : [ ] },
    'Snorlax'    : { 'evo' : [ 'Munchlax', 'Snorlax' ], 'forms' : [ ] },
    'Articuno'   : { 'evo' : [ 'Articuno' ], 'forms' : [ ] },
    'Zapdos'     : { 'evo' : [ 'Zapdos' ], 'forms' : [ ] },
    'Moltres'    : { 'evo' : [ 'Moltres' ], 'forms' : [ ] },
    'Dratini'    : { 'evo' : [ 'Dratini', 'Dragonair', 'Dragonite' ], 'forms' : [ ] },
    'Mewtwo'     : { 'evo' : [ 'Mewtwo' ], 'forms' : [ 'armored' ] },
    'Mew'        : { 'evo' : [ 'Mew' ], 'forms' : [ ] },
    'Chikorita'  : { 'evo' : [ 'Chikorita', 'Bayleef', 'Meganium' ], 'forms' : [ ] },
    'Cyndaquil'  : { 'evo' : [ 'Cyndaquil', 'Quilava', 'Typhlosion' ], 'forms' : [ ] },
    'Totodile'   : { 'evo' : [ 'Totodile', 'Croconaw', 'Feraligatr' ], 'forms' : [ ] },
    'Sentret'    : { 'evo' : [ 'Sentret', 'Furret' ], 'forms' : [ ] },
    'Hoothoot'   : { 'evo' : [ 'Hoothoot', 'Noctowl' ], 'forms' : [ ] },
    'Ledyba'     : { 'evo' : [ 'Ledyba', 'Ledian' ], 'forms' : [ ] },
    'Spinarak'   : { 'evo' : [ 'Spinarak', 'Ariados' ], 'forms' : [ ] },
    'Chinchou'   : { 'evo' : [ 'Chinchou', 'Lanturn' ], 'forms' : [ ] },
    'Togepi'     : { 'evo' : [ 'Togepi', 'Togetic', 'Togekiss' ], 'forms' : [ ] },
    'Natu'       : { 'evo' : [ 'Natu', 'Xatu' ], 'forms' : [ ] },
    'Mareep'     : { 'evo' : [ 'Mareep', 'Flaaffy', 'Ampharos' ], 'forms' : [ ] },
    'Marill'     : { 'evo' : [ 'Azurill', 'Marill', 'Azumarill' ], 'forms' : [ ] },
    'Sudowoodo'  : { 'evo' : [ 'Bonsly', 'Sudowoodo' ], 'forms' : [ ] },
    'Hoppip'     : { 'evo' : [ 'Hoppip', 'Skiploom', 'Jumpluff' ], 'forms' : [ ] },
    'Aipom'      : { 'evo' : [ 'Aipom', 'Ambipom' ], 'forms' : [ ] },
    'Sunkern'    : { 'evo' : [ 'Sunkern', 'Sunflora' ], 'forms' : [ ] },
    'Yanma'      : { 'evo' : [ 'Yanma', 'Yanmega' ], 'forms' : [ ] },
    'Wooper'     : { 'evo' : [ 'Wooper', 'Quagsire' ], 'forms' : [ ] },
    'Murkrow'    : { 'evo' : [ 'Murkrow', 'Honchkrow' ], 'forms' : [ ] },
    'Misdreavus' : { 'evo' : [ 'Misdreavus', 'Mismagius' ], 'forms' : [ ] },
    'Unown'      : { 'evo' : [ 'Unown' ], 'forms' : [ ] },
    'Wobbuffet'  : { 'evo' : [ 'Wynaut', 'Wobbuffet' ], 'forms' : [ ] },
    'Girafarig'  : { 'evo' : [ 'Girafarig' ], 'forms' : [ ] },
    'Pineco'     : { 'evo' : [ 'Pineco', 'Forretress' ], 'forms' : [ ] },
    'Dunsparce'  : { 'evo' : [ 'Dunsparce' ], 'forms' : [ ] },
    'Gligar'     : { 'evo' : [ 'Gligar', 'Gliscor' ], 'forms' : [ ] },
    'Snubbull'   : { 'evo' : [ 'Snubbull', 'Granbull' ], 'forms' : [ ] },
    'Qwilfish'   : { 'evo' : [ 'Qwilfish' ], 'forms' : [ ] },
    'Shuckle'    : { 'evo' : [ 'Shuckle' ], 'forms' : [ ] },
    'Heracross'  : { 'evo' : [ 'Heracross' ], 'forms' : [ ] },
    'Sneasel'    : { 'evo' : [ 'Sneasel', 'Weavile' ], 'forms' : [ ] },
    'Teddiursa'  : { 'evo' : [ 'Teddiursa', 'Ursaring' ], 'forms' : [ ] },
    'Slugma'     : { 'evo' : [ 'Slugma', 'Magcargo' ], 'forms' : [ ] },
    'Swinub'     : { 'evo' : [ 'Swinub', 'Piloswine', 'Mamoswine' ], 'forms' : [ ] },
    'Corsola'    : { 'evo' : [ 'Corsola' ], 'forms' : [ ] },
    'Remoraid'   : { 'evo' : [ 'Remoraid', 'Octillery' ], 'forms' : [ ] },
    'Delibird'   : { 'evo' : [ 'Delibird' ], 'forms' : [ ] },
    'Mantine'    : { 'evo' : [ 'Mantyke', 'Mantine' ], 'forms' : [ ] },
    'Skarmory'   : { 'evo' : [ 'Skarmory' ], 'forms' : [ ] },
    'Houndour'   : { 'evo' : [ 'Houndour', 'Houndoom' ], 'forms' : [ ] },
    'Phanpy'     : { 'evo' : [ 'Phanpy', 'Donphan' ], 'forms' : [ ] },
    'Stantler'   : { 'evo' : [ 'Stantler' ], 'forms' : [ ] },
    'Smeargle'   : { 'evo' : [ 'Smeargle' ], 'forms' : [ ] },
    'Miltank'    : { 'evo' : [ 'Miltank' ], 'forms' : [ ] },
    'Raikou'     : { 'evo' : [ 'Raikou' ], 'forms' : [ ] },
    'Entei'      : { 'evo' : [ 'Entei' ], 'forms' : [ ] },
    'Suicune'    : { 'evo' : [ 'Suicune' ], 'forms' : [ ] },
    'Larvitar'   : { 'evo' : [ 'Larvitar', 'Pupitar', 'Tyranitar' ], 'forms' : [ ] },
    'Lugia'      : { 'evo' : [ 'Lugia' ], 'forms' : [ ] },
    'Ho-Oh'      : { 'evo' : [ 'Ho-Oh' ], 'forms' : [ ] },
    'Celebi'     : { 'evo' : [ 'Celebi' ], 'forms' : [ ] },
    'Treecko'    : { 'evo' : [ 'Treecko', 'Grovyle', 'Sceptile' ], 'forms' : [ ] },
    'Torchic'    : { 'evo' : [ 'Torchic', 'Combusken', 'Blaziken' ], 'forms' : [ ] },
    'Mudkip'     : { 'evo' : [ 'Mudkip', 'Marshtomp', 'Swampert' ], 'forms' : [ ] },
    'Poochyena'  : { 'evo' : [ 'Poochyena', 'Mightyena' ], 'forms' : [ ] },
    'Zigzagoon'  : { 'evo' : [ 'Zigzagoon', 'Linoone' ], 'forms' : [ ] },
    'Wurmple'    : { 'evo' : [ 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox' ], 'forms' : [ ] },
    'Lotad'      : { 'evo' : [ 'Lotad', 'Lombre', 'Ludicolo' ], 'forms' : [ ] },
    'Seedot'     : { 'evo' : [ 'Seedot', 'Nuzleaf', 'Shiftry' ], 'forms' : [ ] },
    'Taillow'    : { 'evo' : [ 'Taillow', 'Swellow' ], 'forms' : [ ] },
    'Wingull'    : { 'evo' : [ 'Wingull', 'Pelipper' ], 'forms' : [ ] },
    'Ralts'      : { 'evo' : [ 'Ralts', 'Kirlia', 'Gardevoir', 'Gallade' ], 'forms' : [ ] },
    'Surskit'    : { 'evo' : [ 'Surskit', 'Masquerain' ], 'forms' : [ ] },
    'Shroomish'  : { 'evo' : [ 'Shroomish', 'Breloom' ], 'forms' : [ ] },
    'Slakoth'    : { 'evo' : [ 'Slakoth', 'Vigoroth', 'Slaking' ], 'forms' : [ ] },
    'Nincada'    : { 'evo' : [ 'Nincada', 'Ninjask', 'Shedinja' ], 'forms' : [ ] },
    'Whismur'    : { 'evo' : [ 'Whismur', 'Loudred', 'Exploud' ], 'forms' : [ ] },
    'Makuhita'   : { 'evo' : [ 'Makuhita', 'Hariyama' ], 'forms' : [ ] },
    'Nosepass'   : { 'evo' : [ 'Nosepass', 'Probopass' ], 'forms' : [ ] },
    'Skitty'     : { 'evo' : [ 'Skitty', 'Delcatty' ], 'forms' : [ ] },
    'Sableye'    : { 'evo' : [ 'Sableye' ], 'forms' : [ ] },
    'Mawile'     : { 'evo' : [ 'Mawile' ], 'forms' : [ ] },
    'Aron'       : { 'evo' : [ 'Aron', 'Lairon', 'Aggron' ], 'forms' : [ ] },
    'Meditite'   : { 'evo' : [ 'Meditite', 'Medicham' ], 'forms' : [ ] },
    'Electrike'  : { 'evo' : [ 'Electrike', 'Manectric' ], 'forms' : [ ] },
    'Plusle'     : { 'evo' : [ 'Plusle' ], 'forms' : [ ] },
    'Minun'      : { 'evo' : [ 'Minun' ], 'forms' : [ ] },
    'Volbeat'    : { 'evo' : [ 'Volbeat' ], 'forms' : [ ] },
    'Illumise'   : { 'evo' : [ 'Illumise' ], 'forms' : [ ] },
    'Roselia'    : { 'evo' : [ 'Budew', 'Roselia', 'Roserade' ], 'forms' : [ ] },
    'Gulpin'     : { 'evo' : [ 'Gulpin', 'Swalot' ], 'forms' : [ ] },
    'Carvanha'   : { 'evo' : [ 'Carvanha', 'Sharpedo' ], 'forms' : [ ] },
    'Wailmer'    : { 'evo' : [ 'Wailmer', 'Wailord' ], 'forms' : [ ] },
    'Numel'      : { 'evo' : [ 'Numel', 'Camerupt' ], 'forms' : [ ] },
    'Torkoal'    : { 'evo' : [ 'Torkoal' ], 'forms' : [ ] },
    'Spoink'     : { 'evo' : [ 'Spoink', 'Grumpig' ], 'forms' : [ ] },
    'Spinda'     : { 'evo' : [ 'Spinda' ], 'forms' : [ ] },
    'Trapinch'   : { 'evo' : [ 'Trapinch', 'Vibrava', 'Flygon' ], 'forms' : [ ] },
    'Cacnea'     : { 'evo' : [ 'Cacnea', 'Cacturne' ], 'forms' : [ ] },
    'Swablu'     : { 'evo' : [ 'Swablu', 'Altaria' ], 'forms' : [ ] },
    'Zangoose'   : { 'evo' : [ 'Zangoose' ], 'forms' : [ ] },
    'Seviper'    : { 'evo' : [ 'Seviper' ], 'forms' : [ ] },
    'Lunatone'   : { 'evo' : [ 'Lunatone' ], 'forms' : [ ] },
    'Solrock'    : { 'evo' : [ 'Solrock' ], 'forms' : [ ] },
    'Barboach'   : { 'evo' : [ 'Barboach', 'Whiscash' ], 'forms' : [ ] },
    'Corphish'   : { 'evo' : [ 'Corphish', 'Crawdaunt' ], 'forms' : [ ] },
    'Baltoy'     : { 'evo' : [ 'Baltoy', 'Claydol' ], 'forms' : [ ] },
    'Lileep'     : { 'evo' : [ 'Lileep', 'Cradily' ], 'forms' : [ ] },
    'Anorith'    : { 'evo' : [ 'Anorith', 'Armaldo' ], 'forms' : [ ] },
    'Feebas'     : { 'evo' : [ 'Feebas', 'Milotic' ], 'forms' : [ ] },
    'Castform'   : { 'evo' : [ 'Castform' ], 'forms' : [ 'Sunny', 'Rainy', 'Snowy' ] },
    'Kecleon'    : { 'evo' : [ 'Kecleon' ], 'forms' : [ ] },
    'Shuppet'    : { 'evo' : [ 'Shuppet', 'Banette' ], 'forms' : [ ] },
    'Duskull'    : { 'evo' : [ 'Duskull', 'Dusclops', 'Dusknoir' ], 'forms' : [ ] },
    'Tropius'    : { 'evo' : [ 'Tropius' ], 'forms' : [ ] },
    'Chimecho'   : { 'evo' : [ 'Chingling', 'Chimecho' ], 'forms' : [ ] },
    'Absol'      : { 'evo' : [ 'Absol' ], 'forms' : [ ] },
    'Snorunt'    : { 'evo' : [ 'Snorunt', 'Glalie', 'Froslass' ], 'forms' : [ ] },
    'Spheal'     : { 'evo' : [ 'Spheal', 'Sealeo', 'Walrein' ], 'forms' : [ ] },
    'Clamperl'   : { 'evo' : [ 'Clamperl', 'Huntail', 'Gorebyss' ], 'forms' : [ ] },
    'Relicanth'  : { 'evo' : [ 'Relicanth' ], 'forms' : [ ] },
    'Luvdisc'    : { 'evo' : [ 'Luvdisc' ], 'forms' : [ ] },
    'Bagon'      : { 'evo' : [ 'Bagon', 'Shelgon', 'Salamence' ], 'forms' : [ ] },
    'Beldum'     : { 'evo' : [ 'Beldum', 'Metang', 'Metagross' ], 'forms' : [ ] },
    'Regirock'   : { 'evo' : [ 'Regirock' ], 'forms' : [ ] },
    'Regice'     : { 'evo' : [ 'Regice' ], 'forms' : [ ] },
    'Registeel'  : { 'evo' : [ 'Registeel' ], 'forms' : [ ] },
    'Latias'     : { 'evo' : [ 'Latias' ], 'forms' : [ ] },
    'Latios'     : { 'evo' : [ 'Latios' ], 'forms' : [ ] },
    'Kyogre'     : { 'evo' : [ 'Kyogre' ], 'forms' : [ ] },
    'Groudon'    : { 'evo' : [ 'Groudon' ], 'forms' : [ ] },
    'Rayquaza'   : { 'evo' : [ 'Rayquaza' ], 'forms' : [ ] },
    'Jirachi'    : { 'evo' : [ 'Jirachi' ], 'forms' : [ ] },
    'Deoxys'     : { 'evo' : [ 'Deoxys' ], 'forms' : [ 'attack', 'defense', 'speed' ] },
    'Turtwig'    : { 'evo' : [ 'Turtwig', 'Grotle', 'Torterra' ], 'forms' : [ ] },
    'Chimchar'   : { 'evo' : [ 'Chimchar', 'Monferno', 'Infernape' ], 'forms' : [ ] },
    'Piplup'     : { 'evo' : [ 'Piplup', 'Prinplup', 'Empoleon' ], 'forms' : [ ] },
    'Starly'     : { 'evo' : [ 'Starly', 'Staravia', 'Staraptor' ], 'forms' : [ ] },
    'Bidoof'     : { 'evo' : [ 'Bidoof', 'Bibarel' ], 'forms' : [ ] },
    'Kricketot'  : { 'evo' : [ 'Kricketot', 'Kricketune' ], 'forms' : [ ] },
    'Shinx'      : { 'evo' : [ 'Shinx', 'Luxio', 'Luxray' ], 'forms' : [ ] },
    'Cranidos'   : { 'evo' : [ 'Cranidos', 'Rampardos' ], 'forms' : [ ] },
    'Shieldon'   : { 'evo' : [ 'Shieldon', 'Bastiodon' ], 'forms' : [ ] },
    'Burmy'      : { 'evo' : [ 'Burmy', 'Wormadam', 'Mothim' ], 'forms' : [ 'sandy', 'trash' ] },
    'Combee'     : { 'evo' : [ 'Combee', 'Vespiquen' ], 'forms' : [ ] },
    'Pachirisu'  : { 'evo' : [ 'Pachirisu' ], 'forms' : [ ] },
    'Buizel'     : { 'evo' : [ 'Buizel', 'Floatzel' ], 'forms' : [ ] },
    'Cherubi'    : { 'evo' : [ 'Cherubi', 'Cherrim' ], 'forms' : [ ] },
    'Shellos'    : { 'evo' : [ 'Shellos', 'Gastrodon' ], 'forms' : [ 'east' ] },
    'Drifloon'   : { 'evo' : [ 'Drifloon', 'Drifblim' ], 'forms' : [ ] },
    'Buneary'    : { 'evo' : [ 'Buneary', 'Lopunny' ], 'forms' : [ ] },
    'Glameow'    : { 'evo' : [ 'Glameow', 'Purugly' ], 'forms' : [ ] },
    'Stunky'     : { 'evo' : [ 'Stunky', 'Skuntank' ], 'forms' : [ ] },
    'Bronzor'    : { 'evo' : [ 'Bronzor', 'Bronzong' ], 'forms' : [ ] },
    'Chatot'     : { 'evo' : [ 'Chatot' ], 'forms' : [ ] },
    'Spiritomb'  : { 'evo' : [ 'Spiritomb' ], 'forms' : [ ] },
    'Gible'      : { 'evo' : [ 'Gible', 'Gabite', 'Garchomp' ], 'forms' : [ ] },
    'Lucario'    : { 'evo' : [ 'Riolu', 'Lucario' ], 'forms' : [ ] },
    'Hippopotas' : { 'evo' : [ 'Hippopotas', 'Hippowdon' ], 'forms' : [ ] },
    'Skorupi'    : { 'evo' : [ 'Skorupi', 'Drapion' ], 'forms' : [ ] },
    'Croagunk'   : { 'evo' : [ 'Croagunk', 'Toxicroak' ], 'forms' : [ ] },
    'Carnivine'  : { 'evo' : [ 'Carnivine' ], 'forms' : [ ] },
    'Finneon'    : { 'evo' : [ 'Finneon', 'Lumineon' ], 'forms' : [ ] },
    'Snover'     : { 'evo' : [ 'Snover', 'Abomasnow' ], 'forms' : [ ] },
    'Rotom'      : { 'evo' : [ 'Rotom' ], 'forms' : [ 'heat', 'wash', 'fan', 'frost', 'mow' ] },
    'Uxie'       : { 'evo' : [ 'Uxie' ], 'forms' : [ ] },
    'Mesprit'    : { 'evo' : [ 'Mesprit' ], 'forms' : [ ] },
    'Azelf'      : { 'evo' : [ 'Azelf' ], 'forms' : [ ] },
    'Dialga'     : { 'evo' : [ 'Dialga' ], 'forms' : [ ] },
    'Palkia'     : { 'evo' : [ 'Palkia' ], 'forms' : [ ] },
    'Heatran'    : { 'evo' : [ 'Heatran' ], 'forms' : [ ] },
    'Regigigas'  : { 'evo' : [ 'Regigigas' ], 'forms' : [ ] },
    'Giratina'   : { 'evo' : [ 'Giratina' ], 'forms' : [ 'origin' ] },
    'Cresselia'  : { 'evo' : [ 'Cresselia' ], 'forms' : [ ] },
    'Phione'     : { 'evo' : [ 'Phione' ], 'forms' : [ ] },
    'Manaphy'    : { 'evo' : [ 'Manaphy' ], 'forms' : [ ] },
    'Darkrai'    : { 'evo' : [ 'Darkrai' ], 'forms' : [ ] },
    'Shaymin'    : { 'evo' : [ 'Shaymin' ], 'forms' : [ 'sky' ] },
    'Arceus'     : { 'evo' : [ 'Arceus' ], 'forms' : [ 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'poison', 'psychic', 'rock', 'steel', 'water' ] },
    'Victini'    : { 'evo' : [ 'Victini' ], 'forms' : [ ] },
    'Snivy'      : { 'evo' : [ 'Snivy', 'Servine', 'Serperior' ], 'forms' : [ ] },
    'Tepig'      : { 'evo' : [ 'Tepig', 'Pignite', 'Emboar' ], 'forms' : [ ] },
    'Oshawott'   : { 'evo' : [ 'Oshawott', 'Dewott', 'Samurott' ], 'forms' : [ ] },
    'Patrat'     : { 'evo' : [ 'Patrat', 'Watchog' ], 'forms' : [ ] },
    'Lillipup'   : { 'evo' : [ 'Lillipup', 'Herdier', 'Stoutland' ], 'forms' : [ ] },
    'Purrloin'   : { 'evo' : [ 'Purrloin', 'Liepard' ], 'forms' : [ ] },
    'Pansage'    : { 'evo' : [ 'Pansage', 'Simisage' ], 'forms' : [ ] },
    'Pansear'    : { 'evo' : [ 'Pansear', 'Simisear' ], 'forms' : [ ] },
    'Panpour'    : { 'evo' : [ 'Panpour', 'Simipour' ], 'forms' : [ ] },
    'Munna'      : { 'evo' : [ 'Munna', 'Musharna' ], 'forms' : [ ] },
    'Pidove'     : { 'evo' : [ 'Pidove', 'Tranquill', 'Unfezant' ], 'forms' : [ ] },
    'Blitzle'    : { 'evo' : [ 'Blitzle', 'Zebstrika' ], 'forms' : [ ] },
    'Roggenrola' : { 'evo' : [ 'Roggenrola', 'Boldore', 'Gigalith' ], 'forms' : [ ] },
    'Woobat'     : { 'evo' : [ 'Woobat', 'Swoobat' ], 'forms' : [ ] },
    'Drilbur'    : { 'evo' : [ 'Drilbur', 'Excadrill' ], 'forms' : [ ] },
    'Audino'     : { 'evo' : [ 'Audino' ], 'forms' : [ ] },
    'Timburr'    : { 'evo' : [ 'Timburr', 'Gurdurr', 'Conkeldurr' ], 'forms' : [ ] },
    'Tympole'    : { 'evo' : [ 'Tympole', 'Palpitoad', 'Seismitoad' ], 'forms' : [ ] },
    'Throh'      : { 'evo' : [ 'Throh' ], 'forms' : [ ] },
    'Sawk'       : { 'evo' : [ 'Sawk' ], 'forms' : [ ] },
    'Sewaddle'   : { 'evo' : [ 'Sewaddle', 'Swadloon', 'Leavanny' ], 'forms' : [ ] },
    'Venipede'   : { 'evo' : [ 'Venipede', 'Whirlipede', 'Scolipede' ], 'forms' : [ ] },
    'Cottonee'   : { 'evo' : [ 'Cottonee', 'Whimsicott' ], 'forms' : [ ] },
    'Petilil'    : { 'evo' : [ 'Petilil', 'Lilligant' ], 'forms' : [ ] },
    'Basculin'   : { 'evo' : [ 'Basculin' ], 'forms' : [ ] },
    'Sandile'    : { 'evo' : [ 'Sandile', 'Krokorok', 'Krookodile' ], 'forms' : [ ] },
    'Darumaka'   : { 'evo' : [ 'Darumaka' ], 'forms' : [ ] },
    'Maractus'   : { 'evo' : [ 'Maractus' ], 'forms' : [ ] },
    'Dwebble'    : { 'evo' : [ 'Dwebble', 'Crustle' ], 'forms' : [ ] },
    'Scraggy'    : { 'evo' : [ 'Scraggy', 'Scrafty' ], 'forms' : [ ] },
    'Sigilyph'   : { 'evo' : [ 'Sigilyph' ], 'forms' : [ ] },
    'Yamask'     : { 'evo' : [ 'Yamask', 'Cofagrigus' ], 'forms' : [ ] },
    'Tirtouga'   : { 'evo' : [ 'Tirtouga', 'Carracosta' ], 'forms' : [ ] },
    'Archen'     : { 'evo' : [ 'Archen', 'Archeops' ], 'forms' : [ ] },
    'Trubbish'   : { 'evo' : [ 'Trubbish', 'Garbodor' ], 'forms' : [ ] },
    'Zorua'      : { 'evo' : [ 'Zorua', 'Zoroark' ], 'forms' : [ ] },
    'Minccino'   : { 'evo' : [ 'Minccino', 'Cinccino' ], 'forms' : [ ] },
    'Gothita'    : { 'evo' : [ 'Gothita', 'Gothorita', 'Gothitelle' ], 'forms' : [ ] },
    'Solosis'    : { 'evo' : [ 'Solosis', 'Duosion', 'Reuniclus' ], 'forms' : [ ] },
    'Ducklett'   : { 'evo' : [ 'Ducklett', 'Swanna' ], 'forms' : [ ] },
    'Vanillite'  : { 'evo' : [ 'Vanillite', 'Vanillish', 'Vanilluxe' ], 'forms' : [ ] },
    'Deerling'   : { 'evo' : [ 'Deerling', 'Sawsbuck' ], 'forms' : [ ] },
    'Emolga'     : { 'evo' : [ 'Emolga' ], 'forms' : [ ] },
    'Karrablast' : { 'evo' : [ 'Karrablast', 'Escavalier' ], 'forms' : [ ] },
    'Foongus'    : { 'evo' : [ 'Foongus', 'Amoonguss' ], 'forms' : [ ] },
    'Frillish'   : { 'evo' : [ 'Frillish', 'Jellicent' ], 'forms' : [ ] },
    'Alomomola'  : { 'evo' : [ 'Alomomola' ], 'forms' : [ ] },
    'Joltik'     : { 'evo' : [ 'Joltik', 'Galvantula' ], 'forms' : [ ] },
    'Ferroseed'  : { 'evo' : [ 'Ferroseed', 'Ferrothorn' ], 'forms' : [ ] },
    'Klink'      : { 'evo' : [ 'Klink', 'Klang', 'Klinklang' ], 'forms' : [ ] },
    'Tynamo'     : { 'evo' : [ 'Tynamo', 'Eelektrik', 'Eelektross' ], 'forms' : [ ] },
    'Elgyem'     : { 'evo' : [ 'Elgyem', 'Beheeyem' ], 'forms' : [ ] },
    'Litwick'    : { 'evo' : [ 'Litwick', 'Lampent', 'Chandelure' ], 'forms' : [ ] },
    'Axew'       : { 'evo' : [ 'Axew', 'Fraxure', 'Haxorus' ], 'forms' : [ ] },
    'Cubchoo'    : { 'evo' : [ 'Cubchoo', 'Beartic' ], 'forms' : [ ] },
    'Cryogonal'  : { 'evo' : [ 'Cryogonal' ], 'forms' : [ ] },
    'Shelmet'    : { 'evo' : [ 'Shelmet', 'Accelgor' ], 'forms' : [ ] },
    'Stunfisk'   : { 'evo' : [ 'Stunfisk' ], 'forms' : [ ] },
    'Mienfoo'    : { 'evo' : [ 'Mienfoo', 'Mienshao' ], 'forms' : [ ] },
    'Druddigon'  : { 'evo' : [ 'Druddigon' ], 'forms' : [ ] },
    'Golett'     : { 'evo' : [ 'Golett', 'Golurk' ], 'forms' : [ ] },
    'Pawniard'   : { 'evo' : [ 'Pawniard', 'Bisharp' ], 'forms' : [ ] },
    'Bouffalant' : { 'evo' : [ 'Bouffalant' ], 'forms' : [ ] },
    'Rufflet'    : { 'evo' : [ 'Rufflet', 'Braviary' ], 'forms' : [ ] },
    'Vullaby'    : { 'evo' : [ 'Vullaby', 'Mandibuzz' ], 'forms' : [ ] },
    'Heatmor'    : { 'evo' : [ 'Heatmor' ], 'forms' : [ ] },
    'Durant'     : { 'evo' : [ 'Durant' ], 'forms' : [ ] },
    'Deino'      : { 'evo' : [ 'Deino', 'Zweilous', 'Hydreigon' ], 'forms' : [ ] },
    'Larvesta'   : { 'evo' : [ 'Larvesta', 'Volcarona' ], 'forms' : [ ] },
    'Cobalion'   : { 'evo' : [ 'Cobalion' ], 'forms' : [ ] },
    'Terrakion'  : { 'evo' : [ 'Terrakion' ], 'forms' : [ ] },
    'Virizion'   : { 'evo' : [ 'Virizion' ], 'forms' : [ ] },
    'Reshiram'   : { 'evo' : [ 'Reshiram' ], 'forms' : [ ] },
    'Zekrom'     : { 'evo' : [ 'Zekrom' ], 'forms' : [ ] },
    'Genesect'   : { 'evo' : [ 'Genesect' ], 'forms' : [ ] },
    'Meltan'     : { 'evo' : [ 'Meltan', 'Melmetal' ], 'forms' : [ ] }
  };
}




var families, ctx, selectEl;

function startUp() {
	families = getFamilies();
	ctx = document.getElementById('sheet').getContext('2d');
	selectEl = document.querySelector('select[name="pkmn"]');

	Object.keys(families).sort().forEach(family => selectEl.appendChild(new Option(family, family)));
	selectEl.addEventListener('change', onFamilyChange);

	document.querySelector('.reset-btn').addEventListener('click', onReset);
	document.querySelector('.render-btn').addEventListener('click', (e) => {
		onFamilyChange({ target : { value : document.querySelector('select[name="pkmn"]').value } });
	});

	triggerEvent(document.querySelector('.reset-btn'), 'click');
	triggerEvent(selectEl, 'change');
}

document.body.onload = startUp;

