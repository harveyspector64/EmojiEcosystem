class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = createEmojiElement('tree');
        if (this.element) {
            this.element.style.left = x;
            this.element.style.top = y;
        } else {
            console.error('Failed to create Tree element');
        }
    }

    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        if (this.element) {
            playArea.appendChild(this.element);
            console.log('Tree added to play area');
            this.spawnBird();
        }
    }

    spawnBird() {
        // Logic to spawn a bird
        console.log('Spawning bird');
    }
}
