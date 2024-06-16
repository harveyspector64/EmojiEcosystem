class Butterfly {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hunger = 100;
        this.element = createEmojiElement('butterfly');
        if (this.element) {
            this.element.style.left = x;
            this.element.style.top = y;
            this.addToPlayArea();
            this.init();
        } else {
            console.error('Failed to create Butterfly element');
        }
    }

    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        if (this.element) {
            playArea.appendChild(this.element);
            console.log('Butterfly added to play area');
        }
    }

    init() {
        console.log('Initializing butterfly behavior');
        this.fly();
    }

    fly() {
        console.log('Butterfly is flying');
        this.element.style.transition = 'all 5s linear';
        this.element.style.left = `${Math.random() * 100}%`;
        this.element.style.top = `${Math.random() * 100}%`;

        setTimeout(() => {
            this.feed();
        }, 5000);
    }

    feed() {
        console.log('Butterfly is feeding');
        this.hunger = 100;
        setTimeout(() => {
            this.fly();
        }, 3000);
    }
}
