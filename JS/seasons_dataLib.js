//Enumerate Seasons
	const Season = {
		winter: 0,
		spring: 1,
		summer: 2,
		fall: 3
	}

//Map
	const Edge = new Map(document.getElementById("map-edge"), 1,1);
	const Holodrum = new Map(document.getElementById("map-holodrum"), 16,16);
	const Subrosia = new Map(document.getElementById("map-subrosia"), 11,8);

//RegionData
	const Region = {
		AncientRuins: new RegionData("Ancient Ruins", [0,1,2, 16,17,18, 33,34], Season.spring),
		TarmRuins: new RegionData ("Tarm Ruins", [32, 48,49,50, 64,65,66,67, 80,81,82,83, 99], Season.fall),
		NorthernPeak: new RegionData ("Northern Peak", [3, 19, 35], Season.winter),
		NorthernPeakAccess: new RegionData ("Northern Peak Access", [51,52, 68], Season.winter),
		TempleRemains: new RegionData ("Temple Remains", [4,5,6,7, 20,21,22,23, 36,37,38,39, 53,54,55], Season.winter),
		GoronMountain: new RegionData ("Goron Mountain", [8,9,10, 24,25,26, 40,41,42, 56,57,58], Season.winter),
		MtCucco: new RegionData ("Mt. Cucco", [11,12,13,14,15, 27,28,29,30,31, 43,44,45,46,47, 59,60,61], Season.summer),
		SpoolSwamp: new RegionData ("Spool Swamp", [96,97,98, 112,113,114,115, 128,129,130,131, 144,145,146, 160,161,162, 176,177,178, 192,193,194], Season.fall),
		HolodrumPlain: new RegionData ("Holodrum Plain", [69, 84,85, 100,101,102,103,104, 116,117,118,119,120, 132,133,134,135,136, 147,148,149, 163,164,165, 179,180,181], Season.spring),
		SunkenCity: new RegionData ("Sunken City", [62,63, 77,78,79, 93,94,95, 109,110,111], Season.summer),
		EyeglassLake: new RegionData ("Eyeglass Lake", [136,137,138, 150,151,152,153,154, 166,167,168,169,170, 182,183,184,185,186], Season.winter),
		EasternSuburbs: new RegionData ("Eastern Suburbs", [124, 139,140,143, 155,156,157,159, 171,172,173,174,175, 187,188, 202,203,204, 218,219, 234,235], Season.fall),
		WoodsOfWinter: new RegionData ("Woods of Winter", [125,126,127, 141,142, 158], Season.summer),
		WesternCoast: new RegionData ("Western Coast", [195,196, 208,209,210,211,212,213, 224,225,226,227,228,229, 240,241,242,243,244], Season.winter),
		HoronVillage: new RegionData ("Horon Village", [197,198,199,200,201, 214,215,216,217, 230,231,232,233, 245,246,247,248,249], Season.summer),
		SamasaDesert: new RegionData ("Samasa Desert", [189,190,191, 205,206,207, 220,221,222,223, 236,237,238,239, 250,251,252,253,254,255], Season.summer),
		NatzuRegion: new RegionData ("Natzu Region", [70,71,72,73,74,75,76, 86,87,88,89,90, 105,106, 121,122], -1),
		MoblinsKeep: new RegionData ("Moblin's Keep", [91,92, 107,108, 123], 0)
	}

//EntranceData
	const Entrances = {
		AncientRuins: [
			new EntranceData("Dungeon 6 (Ancient Ruins)", EntranceData.type.single, 64, 48),
			new EntranceData("Old Man (Give)", EntranceData.type.generic, 448, 16),
			new EntranceData("Wooden Basement", EntranceData.type.single, 16, 224),
		],
		TarmRuins: [
			new EntranceData("Great Fairy", EntranceData.type.generic, 224, 400),
			new EntranceData("Helpful Scrub's Cave", EntranceData.type.single, 608, 528),
			new EntranceData("Music-Loving Scrub's Cave", EntranceData.type.single, 256, 720),
		],
		NorthernPeak: [
			new EntranceData("Onox's Castle", EntranceData.type.single, 552, 48),
		],
		TempleRemains: [
			new EntranceData("Lava-Filled Cave", EntranceData.type.single, 864, 128),
			new EntranceData("Temple Ascent - Lower", EntranceData.type.connector, 1088, 128),
			new EntranceData("Temple Ascent - Upper", EntranceData.type.connector, 1168, 16),
			new EntranceData("Bastion - L", EntranceData.type.connector, 1008, 16),
			new EntranceData("Bastion - R", EntranceData.type.connector, 1056, 16),
			new EntranceData("Portal (Temple Remains Lower)", EntranceData.type.portal, 832, 288),
			new EntranceData("Portal (Temple Remains Upper)", EntranceData.type.special, 752, 32),
		],
		GoronMountain: [
			new EntranceData("Goron Ascent A - Lower", EntranceData.type.connector, 1552, 272),
			new EntranceData("Goron Ascent A - Upper", EntranceData.type.connector, 1552, 208),
			new EntranceData("Goron Ascent B - Lower", EntranceData.type.connector, 1568, 128),
			new EntranceData("Goron Ascent B - Upper", EntranceData.type.connector, 1536, 32),
			new EntranceData("Gorons' Cave - Lower", EntranceData.type.connector, 1456, 400),
			new EntranceData("Gorons' Cave - Middle", EntranceData.type.connector, 1328, 272),
			new EntranceData("Gorons' Cave - Upper", EntranceData.type.connector, 1392, 144),
			new EntranceData("Lone Goron's Cave", EntranceData.type.single, 1472, 160),
			new EntranceData("Old Man", EntranceData.type.generic, 1312, 336),
			new EntranceData("Small Pot Cave", EntranceData.type.single, 1536, 128),
		],
		MtCucco: [
			new EntranceData("Dungeon 4 (Dancing Dragon Dungeon)", EntranceData.type.single, 2128, 144),
			new EntranceData("Floating Platform Cave", EntranceData.type.single, 2512, 176),
			new EntranceData("Great Fairy", EntranceData.type.generic, 2272, 144),
			new EntranceData("Mushroom Cave", EntranceData.type.single, 1872, 160),
			new EntranceData("Mt. Cucco Portal", EntranceData.type.portal, 2304, 208),
			new EntranceData("Pyramid Jewel Cave", EntranceData.type.single, 2208, 144),
			new EntranceData("Cucco Ascent W - Lower", EntranceData.type.connector, 1936, 144),
			new EntranceData("Cucco Ascent W - Upper", EntranceData.type.connector, 1888, 32),
			new EntranceData("Cucco Ascent E - Lower", EntranceData.type.connector, 2480, 80),
			new EntranceData("Cucco Ascent E - Upper", EntranceData.type.connector, 2480, 16),
			new EntranceData("Passage to Sunken City", EntranceData.type.connector, 2176, 480),
		],
		SpoolSwamp: [
			new EntranceData("Dungeon 3 (Poison Moth's Lair)", EntranceData.type.single, 80, 800),
			new EntranceData("Floodgate Keeper's House", EntranceData.type.single, 384, 816),
			new EntranceData("Floodgate Passage - L", EntranceData.type.connector, 16, 800),
			new EntranceData("Floodgate Passage - R", EntranceData.type.connector, 432, 800),
			new EntranceData("Spool Swamp Portal", EntranceData.type.portal, 80, 1456),
			new EntranceData("Square Jewel Cave", EntranceData.type.single, 432, 1536),
		],
		HolodrumPlain: [
			new EntranceData("Blaino's Gym", EntranceData.type.single, 1376, 944),
			new EntranceData("Flooded Cave (West)", EntranceData.type.single, 512, 1408, "Octo Ring"),
			new EntranceData("Flooded Cave (East)", EntranceData.type.single, 1136, 1072, "Quicksand Ring"),
			new EntranceData("Old Man (Give)", EntranceData.type.single, 1040, 848, "Atop the plateau"),
			new EntranceData("Mrs Ruul's House", EntranceData.type.single, 512, 1344),
			new EntranceData("Old Man (Take)", EntranceData.type.generic, 736, 1360),
			new EntranceData("Round Jewel Guardian", EntranceData.type.single, 928, 1424),
		],
		SunkenCity: [
			new EntranceData("Flooded Cave", EntranceData.type.single, 2432, 528),
			new EntranceData("Ingo's House", EntranceData.type.single, 2096, 528),
			new EntranceData("Potion Shop", EntranceData.type.single, 2304, 704),
			new EntranceData("Man's House", EntranceData.type.single, 2112, 816),
			new EntranceData("Master Diver's House", EntranceData.type.single, 2176, 704),
			new EntranceData("Moblins' Hideout", EntranceData.type.single, 2512, 848),
			new EntranceData("Woman's House", EntranceData.type.single, 2512, 464),
			new EntranceData("Passage to Mt. Cucco", EntranceData.type.connector, 2160, 528),
			new EntranceData("Passage to Woods of Winter", EntranceData.type.connector, 2336, 864),
			new EntranceData("Sunken Falls - Master Diver's Test", EntranceData.type.single, 2264, 336),
			new EntranceData("Sunken Falls - Master Diver's Cave", EntranceData.type.single, 2320, 352),
		],
		NorthHoron: [
			new EntranceData("Dungeon 1 (Gnarled Root)", EntranceData.type.single, 1024, 1216),
			new EntranceData("Impa's Refuge", EntranceData.type.single, 976, 1424),
			new EntranceData("Malon's House", EntranceData.type.single, 1328, 1040),
			new EntranceData("Old Man (Give)", EntranceData.type.generic, 1168, 1184),
			new EntranceData("Red Ring Guardian", EntranceData.type.single, 1072, 1312),
		],   
		EyeglassLake: [
			new EntranceData("Booby Trapped Cave", EntranceData.type.single, 1712, 1328),
			new EntranceData("Dungeon 5 (Unicorn's Cave)", EntranceData.type.single, 1680, 1056),
			new EntranceData("Lakebed Bomb Cave", EntranceData.type.single, 1248, 1328),
			new EntranceData("Eyeglass Lake Portal", EntranceData.type.portal, 1472, 1440),
			new EntranceData("Eastern Suburbs Portal", EntranceData.type.portal, 1648, 1200),
		],
		EasternSuburbs: [
			new EntranceData("Magnetic Glove Cave", EntranceData.type.single, 1936, 1552),
			new EntranceData("Windmill Cave - Lower", EntranceData.type.connector, 1680, 1808),
			new EntranceData("Windmill Cave - Middle", EntranceData.type.connector, 1712, 1792),
			new EntranceData("Windmill Cave - Upper", EntranceData.type.connector, 1680, 1760),
			new EntranceData("Old Man (Take)", EntranceData.type.generic, 2432, 1072),
		],
		WoodsOfWinter: [
			new EntranceData("Big Cave", EntranceData.type.single, 2112, 912),
			new EntranceData("Dungeon 2 (Snake's Remains) - Front", EntranceData.type.connector, 2144, 1056),
			new EntranceData("Dungeon 2 (Snake's Remains) - Middle", EntranceData.type.connector, 2208, 1040),
			new EntranceData("Dungeon 2b", EntranceData.type.single, 2272, 1040),
			new EntranceData("Holly's House - Chimney", EntranceData.type.connector, 2512, 928),
			new EntranceData("Holly's House - Front Door", EntranceData.type.connector, 2512, 960),
			new EntranceData("Magnetic Glove Cave", EntranceData.type.single, 2368, 1088),
			new EntranceData("Small Fairy Cave", EntranceData.type.single, 2288, 1088),
			new EntranceData("Passage from Sunken City", EntranceData.type.connector, 2256, 912),
		],
		Graveyard: [
			new EntranceData("Dungeon 7 (Ancient Crypt)", EntranceData.type.single, 64, 1712),
			new EntranceData("Graveyard Secret", EntranceData.type.single, 64, 1808),
			new EntranceData("Graveyard/Western Shore - Graveyard Passage - Lower", EntranceData.type.connector, 256, 1920),
			new EntranceData("Graveyard/Western Shore - Graveyard Passage - Upper", EntranceData.type.connector, 272, 1840),
		],
		WesternCoast: [
			new EntranceData("Great Fairy", EntranceData.type.generic, 576, 1664),
			new EntranceData("Hero's Cave - Dropdown", EntranceData.type.connector, 752, 1744),
			new EntranceData("Hero's Cave - Entrance", EntranceData.type.connector, 704, 1744),
			new EntranceData("Shore House - Main", EntranceData.type.connector, 384, 1696),
			new EntranceData("Shore House - Shed", EntranceData.type.connector, 416, 1680),
			new EntranceData("Pirate Ship (Docked)", EntranceData.type.single, 416, 1888),
			new EntranceData("Old Man", EntranceData.type.generic, 352, 1680),
		],
		HoronVillage: [
			new EntranceData("Advance Shop", EntranceData.type.single, 816, 1552),
			new EntranceData("Bipin & Blossom's House - L", EntranceData.type.connector, 1024, 1952),
			new EntranceData("Bipin & Blossom's House - R", EntranceData.type.connector, 1056, 1952),
			new EntranceData("Clock Shop", EntranceData.type.single, 1168, 1728),
			new EntranceData("Clock Shop Basement", EntranceData.type.single, 1184, 1680),
			new EntranceData("Know-It-All Birds' Hut", EntranceData.type.single, 864, 1552),
			new EntranceData("Mako Tree", EntranceData.type.single, 1536, 1576),
			new EntranceData("Mayor Ruul's House", EntranceData.type.single, 1344, 1600),
			new EntranceData("Mr. Left's House - Main", EntranceData.type.connector, 1488, 1968),
			new EntranceData("Mr. Left's House - Shed", EntranceData.type.connector, 1520, 1952),
			new EntranceData("Old Man", EntranceData.type.generic, 1472, 2016),
			new EntranceData("Horon Village Portal", EntranceData.type.special, 1168, 1968),
			new EntranceData("Vasu Jewelers", EntranceData.type.single, 1360, 1856),
			new EntranceData("Village Shop", EntranceData.type.single, 1040, 1856),
		],
		SamasaDesert: [
			new EntranceData("Desert Cave", EntranceData.type.single, 2016, 1680),
			new EntranceData("Great Fairy", EntranceData.type.generic, 2480, 1424),
			new EntranceData("Pirate Ship (Beached)", EntranceData.type.single, 2320, 1872),
			new EntranceData("Desert Passage - Entrance", EntranceData.type.connector, 2168, 1992),
			new EntranceData("Desert Passage - Exit", EntranceData.type.connector, 2496, 1968),
		],
		NatzuPrairie: [
			new EntranceData("Small Platform Cave", EntranceData.type.single, 1552, 528),
			new EntranceData("Great Fairy", EntranceData.type.generic, 1152, 688),
			new EntranceData("Seed-Loving Scrub", EntranceData.type.single, 1568, 960),
		],
		NatzuRiver: [
			new EntranceData("Small Platform Cave", EntranceData.type.single, 1552, 528),
			new EntranceData("Great Fairy", EntranceData.type.generic, 1152, 688),
			new EntranceData("Seed-Loving Scrub", EntranceData.type.single, 1568, 960),
		],
		NatzuWasteland: [
			new EntranceData("Small Platform Cave", EntranceData.type.single, 1552, 528),
			new EntranceData("Great Fairy", EntranceData.type.generic, 1152, 688),
			new EntranceData("Seed-Loving Scrub", EntranceData.type.single, 1568, 960),
		],
		MoblinsKeep: [
			new EntranceData("Moblin's Fortress - L", EntranceData.type.connector, 1808, 688),
			new EntranceData("Moblin's Fortress - R", EntranceData.type.connector, 1840, 688),
		],
	}



//Subrosia Locations
const locs_subrosianVillage = [
    new EntranceData("Subrosian Village", "Gasha Seed House", 4,4, 3,4, "single", "B"),
    new EntranceData("Subrosian Village", "Locked Passage - L", 5,3, 3,4, "connector", "TLL"),
    new EntranceData("Subrosian Village", "Locked Passage - R", 5,3, 6,4, "connector", "TRR"),
    new EntranceData("Subrosian Village", "Portal (Subrosian Market)" /*to Spool Swamp"*/, 7,5, 2,2, "portal", "LLL"),
    new EntranceData("Subrosian Village", "Subrosian Chef's House", 2,2, 2,3, "single", "B"),
    new EntranceData("Subrosian Village", "Subrosian's House", 3,2, 8,4, "single", "B"),
    new EntranceData("Subrosian Village", "Subrosian Market", 5,4, 2.5,4, "single", "B"),
    new EntranceData("Subrosian Village", "Subrosian Smithy", 3,3, 6,4, "single", "B"), 
];

const locs_subrosianVolcanoes = [
    new EntranceData("Subrosian Volcanoes", "Big Empty Cave", 4,0, 7,6, "single", "B"),
    new EntranceData("Subrosian Volcanoes", "Dancing Game", 4,2, 4,2, "single", "BRR"),
    new EntranceData("Subrosian Volcanoes", "Dungeon 8 (Sword & Shield Maze)", 0,0, 3,2, "single", "B"),
    new EntranceData("Subrosian Volcanoes", "Locked Cave", 2,1, 8,5, "generic", "B"),
    new EntranceData("Subrosian Volcanoes", "Portal (Dancing Game)" /*to Eastern Suburbs"*/, 5,0, 4,2, "portal", "RRR"),
    new EntranceData("Subrosian Volcanoes", "Portal (Destructive Volcano)" /*to Temple Remains Lower"*/, 3,1, 7,2, "portal", "B"),
    new EntranceData("Subrosian Volcanoes", "Portal (Dungeon 8)" /*to Temple Remains Bastion"*/, 0,2, 2,3, "portal", "B"),
    new EntranceData("Subrosian Volcanoes", "Small Chest Cave", 1,1, 1,3, "generic", "B"),
    new EntranceData("Subrosian Volcanoes", "Remains Volcano", 3,0, 7,6, "single", "T")
];

const locs_subrosianWilds = [
    new EntranceData("Subrosian Wilds", "House of Pirates - L", 2,7, 2,3, "connector", "LLL"),
    new EntranceData("Subrosian Wilds", "House of Pirates - U", 2,7, 3,5, "connector", "RRR"),
    new EntranceData("Subrosian Wilds", "Pirate ship (Beached)", 4,7, 7,2, "single", "B"),
    new EntranceData("Subrosian Wilds", "Portal (House of Pirates)" /*to Horon Village"*/, 2,7, 4,2, "portal", "T"),
    new EntranceData("Subrosian Wilds", "Portal (Small Volcanoes)" /*to Mt. Cucco"*/, 3,5, 3,6, "portal", "T"),
    new EntranceData("Subrosian Wilds", "Strange Brothers' House - L", 1,5, 8,2, "connector", "BLL"),
    new EntranceData("Subrosian Wilds", "Strange Brothers' House - R", 2,5, 1,3, "connector", "BR"),
];

const locs_templeOfSeasons = [
    new EntranceData("Temple of Seasons", "Main Temple", 9,0, 4.5,4, "single", "B"),
    new EntranceData("Temple of Seasons", "Tower of Fall", 10,0, 3,2, "single", "BR"),
    new EntranceData("Temple of Seasons", "Tower of Spring", 8,2, 3,4, "single", "T"),
    new EntranceData("Temple of Seasons", "Tower of Spring Passage - L", 4,5, 4,6, "connector", "B"),
    new EntranceData("Temple of Seasons", "Tower of Spring Passage - R", 8,2, 5,5, "connector", "B"),
    new EntranceData("Temple of Seasons", "Tower of Summer", 8,0, 3,5, "single", "B"),
    new EntranceData("Temple of Seasons", "Tower of Winter", 10,2, 7,4, "connector", "B")
];

const locs_easternSubrosia = [
    new EntranceData("Subrosian Village", "Subrosian Ascent - L", 8,5, 2,5, "connector", "BR"),
    new EntranceData("Subrosian Village", "Subrosian Ascent - U", 8,5, 5,2, "connector", "TL"),
    new EntranceData("Subrosian Village", "Great Furnace", 9,4, 5,6, "single", "B"),
    new EntranceData("Subrosian Village", "Sign-Loving Subrosian's House", 10,5, 4,2, "single", "B"),
    new EntranceData("Subrosian Village", "Portal (Great Furnace)" /*to Eyeglass Lake"*/, 10,4, 4,3, "portal", "T")
];