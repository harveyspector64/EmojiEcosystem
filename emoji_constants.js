const EMOJI_SIZES = {
    'flowering-bush': { width: '2em', height: '2em' },
    'tree': { width: '3em', height: '3em' },
    'butterfly': { width: '1.5em', height: '1.5em' },
    'bird': { width: '2em', height: '2em' },
    'worm': { width: '1em', height: '1em' }
};

function setEmojiSize(element, type) {
    const size = EMOJI_SIZES[type];
    if (size) {
        element.style.fontSize = size.width; // Assuming width and height are the same for font-size
    }
}
