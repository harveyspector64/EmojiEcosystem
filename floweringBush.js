class FloweringBush {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = createEmojiElement('flowering-bush');
        if (this.element) {
            this.element.style.left = x;
            this.element.style.top = y;
        } else {
            console.error('Failed to create FloweringBush element');
        }
    }

    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        if (this.element) {
            playArea.appendChild(this.element);
            console.log('FloweringBush added to play area');
            this.spawnButterflies();
        }
    }

    spawnButterflies() {
        // Logic to spawn butterflies
        console.log('Spawning butterflies');
    }
}
