const EMOJI_SIZES = {
    'flowering-bush': { width: '40px', height: '40px' },
    'tree': { width: '80px', height: '80px' },
    'butterfly': { width: '20px', height: '20px' },
    'bird': { width: '30px', height: '30px' },
    'worm': { width: '15px', height: '15px' }
};

function setEmojiSize(element, type) {
    const size = EMOJI_SIZES[type];
    if (size) {
        element.style.width = size.width;
        element.style.height = size.height;
    }
}
