class FloweringBush {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.createElement('img');
        this.element.src = 'flowering-bush-emoji.png';
        this.element.style.position = 'absolute';
        this.element.style.left = x;
        this.element.style.top = y;
        setEmojiSize(this.element, 'flowering-bush');
    }

    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        playArea.appendChild(this.element);
        this.spawnButterflies();
    }

    spawnButterflies() {
        // Logic to spawn butterflies
    }
}
