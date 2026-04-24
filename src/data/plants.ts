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
	soilTemp: { min: number; max: number };
	spacing: { min: number; max: number };
	harvestWeeks: { min: number; max: number };
	sowingMethod: string;
	companions: string[];
	incompatible: string[];
	gardenateDescription: string;
	culinaryHints: string;
	gardenateUrl: string;
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
			sowOutdoors: ["apr", "may", "jun"],
			transplant: ["mar", "apr", "may", "jun", "jul"],
			harvest: ["jul", "aug", "sep", "oct"],
		},
		soilTemp: { min: 16, max: 35 },
		spacing: { min: 40, max: 60 },
		harvestWeeks: { min: 8, max: 17 },
		sowingMethod: "Grow in seed trays, and plant out in 4-6 weeks.",
		companions: [
			"Asparagus",
			"Chervil",
			"Carrot",
			"Celery",
			"Chives",
			"Parsley",
			"Marigold",
			"Basil",
		],
		incompatible: ["Rosemary", "Potatoes", "Fennel", "Cucumber"],
		gardenateDescription:
			"There is nothing like the taste of a freshly picked tomato, warm from the sunshine. In the smallest of gardens or even an apartment with a window-box, it is worth growing at least one tomato plant for the pleasure it will give you. They will grow in pots, troughs or even hanging baskets. Tomatoes should be grown in shelter or under cover in cool climates. Tomatoes like lots of food! In a garden bed, compost and mulching will produce a crop from one or two plants. In containers, use some suitable long term fertiliser pellets or feed regularly when you water. Feeding improves the flavour of the fruit. When you plant out, put the seedlings in a deep holes, up to the top set of leaves. The covered stems will put out extra roots and you will have a stronger, healthier plant.",
		culinaryHints:
			"Use in sauces, with fried meals, in sandwiches. Can be frozen whole or in pieces.",
		gardenateUrl: "https://gardenate.com/plant/Tomato?zone=13",
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
			sowIndoors: ["feb", "mar", "apr", "may"],
			sowOutdoors: ["apr", "may", "jun"],
			transplant: ["apr", "may", "jun", "jul"],
			harvest: ["jun", "jul", "aug", "sep"],
		},
		soilTemp: { min: 16, max: 35 },
		spacing: { min: 40, max: 60 },
		harvestWeeks: { min: 8, max: 10 },
		sowingMethod: "Grow in seed trays, and plant out in 4-6 weeks.",
		companions: [
			"Nasturtiums",
			"Beans",
			"Celery",
			"Lettuce",
			"Sweet Corn",
			"Cabbages",
			"Sunflowers",
			"Coriander",
			"Fennel",
			"Dill",
		],
		incompatible: ["Potato", "Tomatoes"],
		gardenateDescription:
			"Cucumbers are tender plants. Seeds need warm soil to germinate. Grow in seed trays or punnets first and plant out when weather is warm enough. Keep well watered.",
		culinaryHints:
			"Use fresh in salads, sandwiches, or pickle them. Best picked young and tender.",
		gardenateUrl: "https://gardenate.com/plant/Cucumber?zone=13",
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
			sowIndoors: ["jan", "feb"],
			sowOutdoors: ["feb", "mar", "aug", "sep"],
			transplant: ["mar"],
			harvest: ["apr", "may", "jun", "oct", "nov"],
		},
		soilTemp: { min: 8, max: 27 },
		spacing: { min: 20, max: 30 },
		harvestWeeks: { min: 8, max: 12 },
		sowingMethod:
			"Easy to grow. Sow in garden, or start in seed trays and plant out in 4-6 weeks.",
		companions: [
			"Carrots",
			"Onions",
			"Strawberries",
			"Beets",
			"Brassicas",
			"Radish",
			"Marigold",
			"Borage",
			"Chervil",
			"Florence fennel",
			"Leeks",
		],
		incompatible: ["Parsley", "Celery"],
		gardenateDescription:
			"Lettuce offer a range of shapes, sizes and colours but they are all easy to grow. Choose a variety marked on the seed packet as suitable for the time of year as some do badly in the very hot months. Try to provide some shade to prevent them 'bolting' to flower and seed in the hottest months. Sow in rows and use thinnings as small salad greens. Ideal crop for succession planting. Lettuce are shallow rooted so water daily in hot or dry weather to prevent bitter flavour and bolting.",
		culinaryHints:
			"Wash well, spin or shake dry and use in salads and sandwiches.",
		gardenateUrl: "https://gardenate.com/plant/Lettuce?zone=13",
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
			sowOutdoors: ["jan", "feb", "mar", "sep", "oct"],
			transplant: [],
			harvest: ["apr", "may", "nov", "dec"],
		},
		soilTemp: { min: 10, max: 25 },
		spacing: { min: 20, max: 30 },
		harvestWeeks: { min: 5, max: 11 },
		sowingMethod: "Easy to grow. Sow in garden.",
		companions: [
			"Broad beans",
			"Cabbage",
			"Cauliflower",
			"Celery",
			"Eggplant",
			"Onion",
			"Peas",
			"Strawberry",
			"Santolina",
		],
		incompatible: [],
		gardenateDescription:
			"Green leaf crop. Spinach grows best in cooler weather and quickly runs to seed in warm weather. Can be sown in Fall/Autumn and overwintered if protected by mulch. Not recommended to grow in warm areas. Alternatives suitable for warm areas are Swiss Chard (Silverbeet) or NZ spinach. Will not grow well in acid soil. Succession sowing will provide a supply through the winter months.",
		culinaryHints:
			"Use young leaves in salad. Steam and add to other vegetables.",
		gardenateUrl: "https://gardenate.com/plant/Spinach?zone=13",
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
			sowOutdoors: ["feb", "mar", "aug", "sep"],
			transplant: [],
			harvest: ["jun", "jul", "aug", "sep", "oct", "nov"],
		},
		soilTemp: { min: 8, max: 30 },
		spacing: { min: 5, max: 30 },
		harvestWeeks: { min: 12, max: 18 },
		sowingMethod: "Easy to grow. Sow in garden.",
		companions: [
			"Onions",
			"Leeks",
			"Lettuce",
			"Sage",
			"Peas",
			"Radishes",
			"Tomatoes",
			"Beans",
			"Celery",
			"Rosemary",
		],
		incompatible: [
			"Parsnips",
			"Beetroot",
			"Dill",
			"Brassicas",
			"Fennel",
		],
		gardenateDescription:
			"Sow direct into garden. Thin out seedlings as they grow. Keep moist. Hill up soil around tops to prevent green shoulders.",
		culinaryHints:
			"Use fresh in salads, roast, steam, or juice. Can be stored for weeks in the refrigerator.",
		gardenateUrl: "https://gardenate.com/plant/Carrot?zone=13",
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
			sowOutdoors: ["mar", "apr"],
			transplant: ["mar", "apr"],
			harvest: ["jul", "aug", "sep", "oct"],
		},
		soilTemp: { min: 18, max: 35 },
		spacing: { min: 20, max: 50 },
		harvestWeeks: { min: 10, max: 12 },
		sowingMethod: "Grow in seed trays, and plant out in 4-6 weeks.",
		companions: [
			"Eggplant",
			"Nasturtiums",
			"Basil",
			"Parsley",
			"Amaranth",
		],
		incompatible: [],
		gardenateDescription:
			"Small bushy plant about 40cm high. The seeds are reluctant to start germinating if temperatures drop at night. These are best sown in small trays in a warm, sheltered place: a small greenhouse if possible. Plant out when about 10-12cm (4-5in) tall. They are from the same family as chilli but are not hot and spicy. The seeds and white flesh are bitter. Capsicums are frost tender and need warmth to ripen the fruit to the brilliant reds and yellows of commercial ones. They can be used green but are not as sweet. There are a number of colours available, chocolate, black, yellow, orange as well as red. They all start off green and change as they ripen. In cool, wet weather cover with a cloche or frost fleece.",
		culinaryHints:
			"Can be sliced and seeded and used raw in salads. Will freeze successfully without blanching if seeded and sliced. Brush with olive oil, roast at a high temperature until the skin changes colour then put in a covered dish until cool and rub off the skin and remove seeds.",
		gardenateUrl: "https://gardenate.com/plant/Capsicum?zone=13",
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
			sowIndoors: ["feb"],
			sowOutdoors: ["mar", "apr", "may"],
			transplant: ["mar"],
			harvest: ["jun", "jul", "aug", "sep"],
		},
		soilTemp: { min: 21, max: 35 },
		spacing: { min: 50, max: 90 },
		harvestWeeks: { min: 6, max: 9 },
		sowingMethod: "Grow in seed trays, and plant out in 4-6 weeks.",
		companions: [
			"Beans",
			"Nasturtiums",
			"Parsley",
			"Silverbeet",
			"Tomatoes",
		],
		incompatible: ["Potatoes"],
		gardenateDescription:
			"Plant into a slightly raised, well composted bed and mulch. Needs regular plentiful water. Produces large leaves with a spread of about 1.5 m x 1.5 m. Some varieties trail a bit but don't climb. The yellow (or gold) variety is more resistant to mould damage in humid areas and remains productive even when the leaves have mildew on them. If there are no bees around and the fruit are not setting well or die off after starting to grow, try picking a male flower (straight stem) and gently brushing pollen inside female flowers. Pick frequently to keep the plant producing new flowers.",
		culinaryHints:
			"Zucchini are best picked fairly small at about 15 cm / 6 inches as they have the best texture. Bigger ones are still edible but may be a bit soft.",
		gardenateUrl: "https://gardenate.com/plant/Zucchini?zone=13",
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
			sowOutdoors: ["mar", "apr", "may"],
			transplant: [],
			harvest: ["jun", "jul", "aug", "sep"],
		},
		soilTemp: { min: 16, max: 30 },
		spacing: { min: 5, max: 15 },
		harvestWeeks: { min: 7, max: 10 },
		sowingMethod: "Easy to grow. Sow in garden.",
		companions: [
			"Sweetcorn",
			"Spinach",
			"Lettuce",
			"Summer savory",
			"Dill",
			"Carrots",
			"Brassicas",
			"Beets",
			"Radish",
			"Strawberry",
			"Cucumbers",
			"Wild marigold",
		],
		incompatible: [
			"Onions",
			"Chives",
			"Leek",
			"Garlic",
			"Sunflower",
		],
		gardenateDescription:
			"Traditionally sown in rows, dwarf beans also grow well 'broadcast' or scattered over an area. Just scatter the seed (don't worry about the odd ones which are close up). Cover with soil, potting mix, or compost and firm down with the back of a spade or rake. Grown this way the beans will mostly shade out competing weeds and 'self-mulch'. Keep watered and watch for shield bugs and green caterpillars. Pick the beans regularly to encourage new flowers. Flowering will slow right down if you let the beans get too large (hard and stringy) on the plants. For a continuous crop, plant more seed as soon as the previous planting starts to flower. Protect against snails and slugs - they will completely destroy newly sprouted beans, and will eat the leaves off grown plants.",
		culinaryHints:
			"Can be used in salads when young, blanched and cooled. Will freeze well.",
		gardenateUrl: "https://gardenate.com/plant/Beans+-+dwarf?zone=13",
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
			sowIndoors: ["feb"],
			sowOutdoors: ["feb", "mar"],
			transplant: ["feb", "mar"],
			harvest: ["jul", "aug", "sep", "oct"],
		},
		soilTemp: { min: 24, max: 32 },
		spacing: { min: 60, max: 75 },
		harvestWeeks: { min: 12, max: 15 },
		sowingMethod: "Grow in seed trays, and plant out in 4-6 weeks.",
		companions: [
			"Beans",
			"Capsicum",
			"Lettuce",
			"Amaranth",
			"Thyme",
		],
		incompatible: ["Potatoes"],
		gardenateDescription:
			"A large bushy plant with attractive purple flowers. Different varieties have different colours and sizes of fruit, ranging from the 'classic' large purple to the Thai small white varieties and Brazilian red. Has spiky stems. Wear gloves to harvest fruit as the spikes on the calyx are sharp enough to break one's skin. In cold climates grow in heated greenhouse and reduce artificial heat during summer. Perennial in tropical climates otherwise grown as an annual. Needs a long season. Start under cover and plant out when frosts have finished. Some varieties with slim, long fruit such as Asian Bride produce their fruit earlier. Mulch well and keep well watered. May need staking.",
		culinaryHints:
			"Cut and use the same day if possible. Slice, no need to peel, and fry in olive oil. Brush with oil and grill or bake. Or microwave, plain, for about 4 minutes on high. Makes a good substitute for pasta in lasagne or moussaka. Can be smoked over a gas ring or barbecue, cooled and peeled and used to make dips.",
		gardenateUrl: "https://gardenate.com/plant/Eggplant?zone=13",
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
			transplant: ["apr"],
			harvest: ["jun", "jul", "aug", "sep", "oct"],
		},
		soilTemp: { min: 18, max: 35 },
		spacing: { min: 20, max: 25 },
		harvestWeeks: { min: 10, max: 12 },
		sowingMethod: "Grow in seed trays, and plant out in 4-6 weeks.",
		companions: ["Tomato"],
		incompatible: [],
		gardenateDescription:
			"A frost tender low-growing herb. Basil is a culinary herb prominently featured in Italian cuisine, and also plays a major role in the Southeast Asian cuisines of Thailand, Vietnam, Cambodia, and Laos. The plant tastes somewhat like anise, with a strong, pungent sweet smell. There are many varieties including Thai, purple ruffles, and lemon. In frost-free regions perennial basil varieties will survive for years and the bush will keep on getting bigger and bigger. Can be grown inside in pots in winter. As the plant develops, pinch out the top to encourage bushy growth. Pick off the flowers to encourage more leaf growth.",
		culinaryHints:
			"Basil is commonly used fresh in cooked recipes. It is generally added at the last moment, as cooking quickly destroys the flavour. Tear rather than chop. The fresh herb can be kept for a short time in plastic bags in the refrigerator, or for a longer period in the freezer, after being blanched quickly in boiling water.",
		gardenateUrl: "https://gardenate.com/plant/Basil?zone=13",
	},
];
