const EMOJI_DATA = {
    'flowering-bush': { emoji: '🌺', width: '40px', height: '40px' },
    'tree': { emoji: '🌳', width: '80px', height: '80px' },
    'butterfly': { emoji: '🦋', width: '20px', height: '20px' },
    'bird': { emoji: '🐦', width: '30px', height: '30px' },
    'worm': { emoji: '🐛', width: '15px', height: '15px' }
};

function createEmojiElement(type) {
    const data = EMOJI_DATA[type];
    if (!data) {
        console.error(`Emoji type ${type} not found in constants`);
        return null;
    }

    const element = document.createElement('div');
    element.innerText = data.emoji;
    element.classList.add('emoji');
    element.style.fontSize = data.width; // Use fontSize as width and height
    element.style.position = 'absolute';

    return element;
}

function setEmojiSize(element, type) {
    const data = EMOJI_DATA[type];
    if (data) {
        element.style.fontSize = data.width;
    }
}
