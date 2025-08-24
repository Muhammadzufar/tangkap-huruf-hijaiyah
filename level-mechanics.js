
const levelMechanics = [
    // Level 1-3: Classic Circles, steady speed increase
    {
        level: 1,
        nextLevelScore: 50,
        gameSpeed: 1.5,
        bubbleClass: 'bubble-circle',
        specialEffect: null,
        spawnInterval: 2000,
        description: "Mulai!"
    },
    {
        level: 2,
        nextLevelScore: 100,
        gameSpeed: 1.7,
        bubbleClass: 'bubble-circle',
        specialEffect: null,
        spawnInterval: 1900,
        description: "Sedikit lebih cepat!"
    },
    {
        level: 3,
        nextLevelScore: 150,
        gameSpeed: 1.9,
        bubbleClass: 'bubble-circle',
        specialEffect: null,
        spawnInterval: 1800,
        description: "Makin cepat!"
    },
    // Level 4-6: Squares with Wind effect
    {
        level: 4,
        nextLevelScore: 250,
        gameSpeed: 1.6,
        bubbleClass: 'bubble-square',
        specialEffect: 'wind',
        spawnInterval: 2000,
        description: "Gelembung Kotak & Angin!"
    },
    {
        level: 5,
        nextLevelScore: 350,
        gameSpeed: 1.8,
        bubbleClass: 'bubble-square',
        specialEffect: 'wind',
        spawnInterval: 1800,
        description: "Angin lebih kencang!"
    },
    {
        level: 6,
        nextLevelScore: 450,
        gameSpeed: 2.0,
        bubbleClass: 'bubble-square',
        specialEffect: 'wind',
        spawnInterval: 1700,
        description: "Badai!"
    },
    // Level 7-10: Stars with Zigzag movement
    {
        level: 7,
        nextLevelScore: 600,
        gameSpeed: 1.8,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1900,
        description: "Gelembung Bintang!"
    },
    {
        level: 8,
        nextLevelScore: 750,
        gameSpeed: 2.1,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1800,
        description: "Bintang Jatuh!"
    },
    {
        level: 9,
        nextLevelScore: 900,
        gameSpeed: 2.3,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1700,
        description: "Hujan Meteor!"
    },
    {
        level: 10,
        nextLevelScore: 1100,
        gameSpeed: 2.5,
        bubbleClass: 'bubble-star',
        specialEffect: 'zigzag',
        spawnInterval: 1600,
        description: "Supernova!"
    },
    // Level 11-15: Mixed shapes and effects
    {
        level: 11,
        nextLevelScore: 1300,
        gameSpeed: 2.2,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1800,
        description: "Mode Campuran!"
    },
    {
        level: 12,
        nextLevelScore: 1500,
        gameSpeed: 2.4,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1700,
        description: "Makin Kacau!"
    },
    {
        level: 13,
        nextLevelScore: 1750,
        gameSpeed: 2.6,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1600,
        description: "Tidak Terduga!"
    },
    {
        level: 14,
        nextLevelScore: 2000,
        gameSpeed: 2.8,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1500,
        description: "Luar Biasa!"
    },
    {
        level: 15,
        nextLevelScore: 2300,
        gameSpeed: 3.0,
        bubbleClass: 'bubble-random',
        specialEffect: 'random-move',
        spawnInterval: 1400,
        description: "Master!"
    }
    // Can be extended up to MAX_LEVEL
];

const MAX_LEVEL = levelMechanics.length;

// Helper function to get mechanics for a given level
function getMechanicsForLevel(level) {
    const levelIndex = Math.min(level - 1, levelMechanics.length - 1);
    return levelMechanics[levelIndex];
}
