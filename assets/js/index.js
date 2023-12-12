particlesJS.load('particles-js', '/assets/json/particles.json', () => {})

const words = [
    'everyone',
    'the community',
    'the future',
    'people',
    'you',
    'your friends',
    'fighters',
    'tinkerers',
    'builders',
    'gamers',
    'monkeys',
    'redstoneers',
    'performance',
    'innovators',
    'gardeners',
    'adventurers',
    'survivalists',
    'enthusiasts',
    'artists',
    'musicians',
    'players'
]

let typeIt = new TypeIt('#highlight', {
    speed: 100,
    waitUntilVisible: true,
    startDelay: 500,
    loop: true,
})

for (const word of words)
    typeIt.type(word).pause(2000).delete(word.length)

typeIt.go()