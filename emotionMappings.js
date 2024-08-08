
//CONSTANTS
const MOODMININUMROWS = 6;
const MOODMININUMCOLS = 6;

const MOODMAXINUMROWS = 12;
const MOODMAXINUMCOLS = 12;

/***** MOODMINI MAPPINGS ******/
const moodMiniEnglishEmotionMappings = [
	"", "", 		"", 		"", 			"", 			"",
	"", "FURIOUS", 	"NERVOUS", 	"SURPRISED", 	"EXCITED", 		"", 
	"", "CONFUSED", "ANNOYED", 	"JOYFUL", 		"PROUD", 		"", 
	"", "LONELY", 	"BORED", 	"CALM", 		"GRATEFUL", 	"", 
	"", "HURT", 	"DOWN", 	"THOUGHTFUL", 	"COMFORTABLE", 	"",
	"", "", 		"", 		"", 			"",				""
];
// const moodMiniEnglishEmotionMappings = [
// 	"FURIOUS", 	"NERVOUS", 	"", "SURPRISED", 	"EXCITED",
// 	"CONFUSED", "ANNOYED", 	"", "JOYFUL", 		"PROUD",
// 	"", 		"", 		"", "",				"",
// 	"LONELY", 	"BORED", 	"", "CALM", 		"GRATEFUL",
// 	"HURT", 	"DOWN", 	"", "THOUGHTFUL", 	"COMFORTABLE"
// ];

const moodMiniSpanishEmotionMappings = [
	"", "", 			"", 		"", 			"", 			"",
	"", "furioso", 		"nervioso",	"sorprendido", 	"emocionado", 	"",
	"", "confundido", 	"molesto",	"alegre", 		"orgulloso", 	"", 
	"", "solitario", 	"aburrido",	"tranquilo", 	"agadecido", 	"", 
	"", "herido", 		"deprimido","considerado", 	"cómido", 		"", 
	"", "", 			"", 		"", 			"", 			""
];

const moodMiniImageMappings = [
	"", "", 			"", 			"", 				"", 				"",
	"", "FURIOUS.png", 	"NERVOUS.png", 	"SURPRISED.png", 	"EXCITED.png", 		"", 
	"", "CONFUSED.png", "ANNOYED.png", 	"JOYFUL.png", 		"PROUD.png", 		"", 
	"", "LONELY.png", 	"BORED.png", 	"CALM.png", 		"GRATEFUL.png", 	"", 
	"", "HURT.png", 	"DOWN.png", 	"THOUGHTFUL.png", 	"COMFORTABLE.png", 	"",
	"", "", 			"", 			"", 				"",					""
];

// const moodMiniImageMappings = [
// 	"FURIOUS.png", 	"NERVOUS.png", 	"", "SURPRISED.png", 	"EXCITED.png", 
// 	"CONFUSED.png", "ANNOYED.png", 	"",	"JOYFUL.png", 		"PROUD.png",
// 	"",				"",				"",	"",					"",
// 	"LONELY.png", 	"BORED.png", 	"", "CALM.png", 		"GRATEFUL.png", 
// 	"HURT.png", 	"DOWN.png", 	"", "THOUGHTFUL.png", 	"COMFORTABLE.png",
// ];

const moodMiniEnergyPleasantnessMappings = [
	"empty", "empty", "empty", "empty", "empty", "empty",
	"empty", "he-lp", "he-lp", "he-hp", "he-hp", "empty",
	"empty", "he-lp", "he-lp", "he-hp", "he-hp", "empty",
	"empty", "le-lp", "le-lp", "le-hp", "le-hp", "empty",
	"empty", "le-lp", "le-lp", "le-hp", "le-hp", "empty",
	"empty", "empty", "empty", "empty", "empty", "empty"
];

// const moodMiniEnergyPleasantnessMappings = [
// 	"he-lp", "he-lp", "empty", "he-hp", "he-hp",
// 	"he-lp", "he-lp", "empty", "he-hp", "he-hp",
// 	"empty", "empty", "empty", "empty", "empty",
// 	"le-lp", "le-lp", "empty", "le-hp", "le-hp",
// 	"le-lp", "le-lp", "empty", "le-hp", "le-hp"
// ];


const moodMaxiEnglishEmotionMappings = [
	"", "",				"",				"",				"",				"",				"",				"",				"",				"",				"",				"",	
	"", "ENRAGED",		"PANICKED", 	"STRESSED", 	"JITTERY", 		"SHOCKED", 		"SUPRISED", 	"UPBEAT", 		"FESTIVE", 		"EXHILARATED", 	"ECSTATIC", 	"",
	"", "LIVID",     	"FURIOUS", 		"FRUSTRATED", 	"TENSE", 		"STUNNED", 		"HYPER", 		"CHEERFUL", 	"MOTIVATED", 	"INSPIRED", 	"ELATED", 		"",
	"", "FUMING",    	"FRIGHTENED", 	"ANGRY", 		"NERVOUS", 		"RESTLESS", 	"ENERGIZED", 	"LIVELY", 		"ENTHUSIASTIC", "OPTIMISTIC", 	"EXCITED",		"",
	"", "ANXIOUS",   	"APPREHENSIVE", "WORRIED", 		"IRRITATED", 	"ANNOYED", 		"PLEASED", 		"HAPPY", 		"FOCUSED", 		"PROUD", 		"THRILLED",		"",
	"", "REPULSED",  	"TROUBLED", 	"CONCERNED", 	"UNEASY", 		"PEEVED", 		"PLEASANT", 	"JOYFUL", 		"HOPEFUL", 		"PLAYFUL", 		"BLISSFUL",		"",
	"", "DISGUSTED", 	"GLUM", 		"DISSAPOINTED", "DOWN", 		"APATHETIC", 	"AT EASE", 		"EASYGOING", 	"CONTENT", 		"LOVING", 		"FULLFILLED",	"",
	"", "PESSIMISTIC", 	"MOROSE", 		"DISCOURAGED", 	"SAD", 			"BORED", 		"CALM", 		"SECURE", 		"SATISFIED",	"GRATEFUL", 	"TOUCHED",		"",
	"", "ALIENATED", 	"MISERABLE", 	"LONELY", 		"DISHEARTENED", "TIRED", 		"RELAXED", 		"CHILL", 		"RESTFUL", 		"BLESSED", 		"BALANCED",		"",
	"", "DESPONDENT", 	"DEPRESSED", 	"SULLEN", 		"EXHAUSTED", 	"FATIGUED", 	"MELLOW", 		"THOUGHTFUL", 	"PEACEFUL", 	"COMFY", 		"CAREFREE",		"",
	"", "DESPAIR", 		"HOPELESS", 	"DESOLATE", 	"SPENT", 		"DRAINED", 		"SLEEPY", 		"COMPLACENT", 	"TRANQUIL",	 	"COZY", 		"SERENE",		"",
	"", "",				"",				"",				"",				"",				"",				"",				"",				"",				"",				""
];


const moodMaxiEnergyPleasantnessMappings = [
	"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
	"empty", "he-lp", "he-lp", "he-lp", "he-lp", "he-lp", "he-hp", "he-hp", "he-hp", "he-hp", "he-hp", "empty",
	"empty", "he-lp", "he-lp", "he-lp", "he-lp", "he-lp", "he-hp", "he-hp", "he-hp", "he-hp", "he-hp", "empty",
	"empty", "he-lp", "he-lp", "he-lp", "he-lp", "he-lp", "he-hp", "he-hp", "he-hp", "he-hp", "he-hp", "empty",
	"empty", "he-lp", "he-lp", "he-lp", "he-lp", "he-lp", "he-hp", "he-hp", "he-hp", "he-hp", "he-hp", "empty",
	"empty", "he-lp", "he-lp", "he-lp", "he-lp", "he-lp", "he-hp", "he-hp", "he-hp", "he-hp", "he-hp", "empty",
	"empty", "le-lp", "le-lp", "le-lp", "le-lp", "le-lp", "le-hp", "le-hp", "le-hp", "le-hp", "le-hp", "empty",
	"empty", "le-lp", "le-lp", "le-lp", "le-lp", "le-lp", "le-hp", "le-hp", "le-hp", "le-hp", "le-hp", "empty",
	"empty", "le-lp", "le-lp", "le-lp", "le-lp", "le-lp", "le-hp", "le-hp", "le-hp", "le-hp", "le-hp", "empty",
	"empty", "le-lp", "le-lp", "le-lp", "le-lp", "le-lp", "le-hp", "le-hp", "le-hp", "le-hp", "le-hp", "empty",
	"empty", "le-lp", "le-lp", "le-lp", "le-lp", "le-lp", "le-hp", "le-hp", "le-hp", "le-hp", "le-hp", "empty",
	"empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
];