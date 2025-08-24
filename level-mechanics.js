
const levelMechanics = [
    // Level 1-3: Intro / Sky Theme
    {
        level: 1,
        nextLevelScore: 50,
        gameSpeed: 1.5,
        bubbleClass: 'bubble-circle',
        specialEffect: null,
        spawnInterval: 2000,
        description: "Awan: Mulai!",
        background: 'linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%)'
    },
    {
        level: 2,
        nextLevelScore: 100,
        gameSpeed: 1.7,
        bubbleClass: 'bubble-circle',
        specialEffect: null,
        spawnInterval: 1900,
        description: "Bukit: Sedikit lebih cepat!",
        background: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)'
    },
    {
        level: 3,
        nextLevelScore: 150,
        gameSpeed: 1.9,
        bubbleClass: 'bubble-circle',
        specialEffect: null,
        spawnInterval: 1800,
        description: "Sungai: Makin cepat!",
        background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)'
    },
    // Level 4-6: Wind / Forest & Mountain
    {
        level: 4,
        nextLevelScore: 250,
        gameSpeed: 1.6,
        bubbleClass: 'bubble-square',
        specialEffect: 'wind',
        spawnInterval: 2000,
        description: "Hutan: Gelembung Kotak & Angin!",
        background: 'linear-gradient(to top, #22422F, #3C6E47, #559B5F, #82C38E)'
    },
    {
        level: 5,
        nextLevelScore: 350,
        gameSpeed: 1.8,
        bubbleClass: 'bubble-square',
        specialEffect: 'wind',
        spawnInterval: 1800,
        description: "Gunung: Angin lebih kencang!",
        background: 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)'
    },
    {
        level: 6,
        nextLevelScore: 450,
        gameSpeed: 2.0,
        bubbleClass: 'bubble-square',
        specialEffect: 'wind',
        spawnInterval: 1700,
        description: "Gunung: Badai!",
        background: 'linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #74749a 37%, #8a7e8a 50%, #9b8a7a 62%, #b49a6a 75%, #c9b65a 87%, #d9d24a 100%)'
    },
    // Level 7-10: Zigzag / Space Theme
    {
        level: 7,
        nextLevelScore: 600,
        gameSpeed: 1.8,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1900,
        description: "Luar Angkasa: Gelembung Bintang!",
        background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
    },
    {
        level: 8,
        nextLevelScore: 750,
        gameSpeed: 2.1,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1800,
        description: "Luar Angkasa: Bintang Jatuh!",
        background: 'linear-gradient(to top, #09203f 0%, #537895 100%)'
    },
    {
        level: 9,
        nextLevelScore: 900,
        gameSpeed: 2.3,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1700,
        description: "Luar Angkasa: Hujan Meteor!",
        background: 'linear-gradient(to top, #243949 0%, #517fa4 100%)'
    },
    {
        level: 10,
        nextLevelScore: 1100,
        gameSpeed: 2.5,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1600,
        description: "Luar Angkasa: Supernova!",
        background: 'linear-gradient(to right, #243949 0%, #517fa4 100%)'
    },
    // Level 11-15: Random / Sea Theme
    {
        level: 11,
        nextLevelScore: 1300,
        gameSpeed: 2.2,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1800,
        description: "Laut: Mode Campuran!",
        background: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'
    },
    {
        level: 12,
        nextLevelScore: 1500,
        gameSpeed: 2.4,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1700,
        description: "Laut Dalam: Makin Kacau!",
        background: 'linear-gradient(to top, #1e3c72 0%, #2a5298 100%)'
    },
    {
        level: 13,
        nextLevelScore: 1750,
        gameSpeed: 2.6,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1600,
        description: "Pantai: Tidak Terduga!",
        background: 'linear-gradient(to right, #f7971e, #ffd200)'
    },
    {
        level: 14,
        nextLevelScore: 2000,
        gameSpeed: 2.8,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1500,
        description: "Senja di Laut: Luar Biasa!",
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)'
    },
    {
        level: 15,
        nextLevelScore: 2300,
        gameSpeed: 3.0,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1400,
        description: "Master Samudra!",
        background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)'
    }
    // Can be extended up to MAX_LEVEL
];

const MAX_LEVEL = levelMechanics.length;

// Helper function to get mechanics for a given level
function getMechanicsForLevel(level) {
    const levelIndex = Math.min(level - 1, levelMechanics.length - 1);
    return levelMechanics[levelIndex];
}
