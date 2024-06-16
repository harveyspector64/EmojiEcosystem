class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.createElement('img');
        this.element.src = 'tree-emoji.png';
        this.element.style.position = 'absolute';
        this.element.style.left = x;
        this.element.style.top = y;
        setEmojiSize(this.element, 'tree');
    }

    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        playArea.appendChild(this.element);
        this.spawnBird();
    }

    spawnBird() {
        // Logic to spawn a bird
    }
}
