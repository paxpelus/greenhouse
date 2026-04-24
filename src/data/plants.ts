export type Month =
	| "jan"
	| "feb"
	| "mar"
	| "apr"
	| "may"
	| "jun"
	| "jul"
	| "aug"
	| "sep"
	| "oct"
	| "nov"
	| "dec";

export const MONTHS: Month[] = [
	"jan",
	"feb",
	"mar",
	"apr",
	"may",
	"jun",
	"jul",
	"aug",
	"sep",
	"oct",
	"nov",
	"dec",
];

export const MONTH_LABELS: Record<Month, string> = {
	jan: "Jan",
	feb: "Feb",
	mar: "Mar",
	apr: "Apr",
	may: "May",
	jun: "Jun",
	jul: "Jul",
	aug: "Aug",
	sep: "Sep",
	oct: "Oct",
	nov: "Nov",
	dec: "Dec",
};

export interface GrowingSchedule {
	sowIndoors: Month[];
	sowOutdoors: Month[];
	transplant: Month[];
	harvest: Month[];
}

export interface Plant {
	id: string;
	name: string;
	scientificName: string;
	family: string;
	genus: string;
	year: number;
	author: string;
	imageUrl: string;
	description: string;
	schedule: GrowingSchedule;
}

export const plants: Plant[] = [
	{
		id: "solanum-lycopersicum",
		name: "Tomato",
		scientificName: "Solanum lycopersicum",
		family: "Solanaceae",
		genus: "Solanum",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/400851a79391dbe6f667c66e4bf70299e9921853",
		description:
			"The tomato is a widely cultivated plant in the nightshade family, prized for its edible fruit. Originally from western South America, it is now grown worldwide in a variety of climates.",
		schedule: {
			sowIndoors: ["feb", "mar"],
			sowOutdoors: [],
			transplant: ["apr", "may"],
			harvest: ["jul", "aug", "sep", "oct"],
		},
	},
	{
		id: "cucumis-sativus",
		name: "Cucumber",
		scientificName: "Cucumis sativus",
		family: "Cucurbitaceae",
		genus: "Cucumis",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/6d90d18a0ca76aa1ff0653e5b29b7b0381006e58",
		description:
			"Cucumber is a creeping vine that roots in the ground and grows up on supporting frames, wrapping thin tendril-like structures around supports. Widely cultivated for its cylindrical green fruit.",
		schedule: {
			sowIndoors: ["mar"],
			sowOutdoors: ["apr", "may"],
			transplant: ["may"],
			harvest: ["jun", "jul", "aug", "sep"],
		},
	},
	{
		id: "lactuca-sativa",
		name: "Garden Lettuce",
		scientificName: "Lactuca sativa",
		family: "Asteraceae",
		genus: "Lactuca",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/f341ecda99b08989111b43876fd6e81bdf5a783f",
		description:
			"Lettuce is an annual plant of the aster family, most often grown as a leaf vegetable. It is easily cultivated and does well in cool climates with adequate moisture.",
		schedule: {
			sowIndoors: ["feb"],
			sowOutdoors: ["mar", "apr", "sep", "oct"],
			transplant: ["mar", "apr"],
			harvest: ["apr", "may", "jun", "oct", "nov"],
		},
	},
	{
		id: "spinacia-oleracea",
		name: "Spinach",
		scientificName: "Spinacia oleracea",
		family: "Amaranthaceae",
		genus: "Spinacia",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/9a94b709c585490a302c614ee638c45f81c35aa2",
		description:
			"Spinach is a leafy green flowering plant native to central and western Asia. Its leaves are a common edible vegetable consumed fresh or after being preserved by canning, freezing, or dehydration.",
		schedule: {
			sowIndoors: [],
			sowOutdoors: ["feb", "mar", "sep", "oct", "nov"],
			transplant: [],
			harvest: ["apr", "may", "nov", "dec"],
		},
	},
	{
		id: "daucus-carota",
		name: "Carrot",
		scientificName: "Daucus carota",
		family: "Apiaceae",
		genus: "Daucus",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/051631f859a3a433e2954747fa1bdb6bc09a0e66",
		description:
			"The carrot is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist. It is native to Europe and Southwestern Asia.",
		schedule: {
			sowIndoors: [],
			sowOutdoors: ["mar", "apr", "may", "jun"],
			transplant: [],
			harvest: ["jun", "jul", "aug", "sep", "oct"],
		},
	},
	{
		id: "capsicum-annuum",
		name: "Bell Pepper",
		scientificName: "Capsicum annuum",
		family: "Solanaceae",
		genus: "Capsicum",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/5fd5b1c84d4751583ce12cea7cd24d2d1da4fce6",
		description:
			"Bell pepper is a cultivar group of the species Capsicum annuum. Peppers are native to Mexico, Central America, and northern South America. The fruit can come in green, red, yellow, or orange colors.",
		schedule: {
			sowIndoors: ["feb", "mar"],
			sowOutdoors: [],
			transplant: ["may"],
			harvest: ["jul", "aug", "sep", "oct"],
		},
	},
	{
		id: "cucurbita-pepo",
		name: "Zucchini",
		scientificName: "Cucurbita pepo",
		family: "Cucurbitaceae",
		genus: "Cucurbita",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/0e3e8cb8780e032c69047fca5d3287b7443afbb2",
		description:
			"Zucchini is a summer squash in the gourd family. It is a vigorous, monoecious plant that produces edible fruits harvested while immature. Native to the Americas.",
		schedule: {
			sowIndoors: ["apr"],
			sowOutdoors: ["may"],
			transplant: ["may"],
			harvest: ["jun", "jul", "aug", "sep"],
		},
	},
	{
		id: "phaseolus-vulgaris",
		name: "Green Bean",
		scientificName: "Phaseolus vulgaris",
		family: "Fabaceae",
		genus: "Phaseolus",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/522abc68dfd3f04b6c08effce88776bbea9810b8",
		description:
			"Green bean is the unripe fruit of any kind of bean in the genus Phaseolus. Originally from the Americas, it is now grown worldwide. The pods are eaten while still young and tender.",
		schedule: {
			sowIndoors: [],
			sowOutdoors: ["apr", "may", "jun"],
			transplant: [],
			harvest: ["jun", "jul", "aug", "sep"],
		},
	},
	{
		id: "solanum-melongena",
		name: "Eggplant",
		scientificName: "Solanum melongena",
		family: "Solanaceae",
		genus: "Solanum",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/bead71bbadbe1f20fdd1e7e594c037b527ea1ae7",
		description:
			"Eggplant is a plant species in the nightshade family, grown for its edible fruit. Typically purple, the spongy fruit is used in several cuisines worldwide. Native to South Asia.",
		schedule: {
			sowIndoors: ["feb", "mar"],
			sowOutdoors: [],
			transplant: ["may"],
			harvest: ["jul", "aug", "sep", "oct"],
		},
	},
	{
		id: "ocimum-basilicum",
		name: "Basil",
		scientificName: "Ocimum basilicum",
		family: "Lamiaceae",
		genus: "Ocimum",
		year: 1753,
		author: "L.",
		imageUrl:
			"https://bs.plantnet.org/image/o/eaf722de31333a8724b4bb72c8d51959530fae56",
		description:
			"Basil is a culinary herb of the mint family, native to tropical regions from Central Africa to Southeast Asia. It is a tender plant with fragrant leaves used in cuisines worldwide.",
		schedule: {
			sowIndoors: ["mar"],
			sowOutdoors: ["apr", "may"],
			transplant: ["may"],
			harvest: ["jun", "jul", "aug", "sep", "oct"],
		},
	},
];
