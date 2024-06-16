class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hunger = 100;
        this.element = createEmojiElement('bird');
        if (this.element) {
            this.element.style.left = x;
            this.element.style.top = y;
            this.addToPlayArea();
            this.init();
        } else {
            console.error('Failed to create Bird element');
        }
    }

    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        if (this.element) {
            playArea.appendChild(this.element);
            console.log('Bird added to play area');
        }
    }

    init() {
        console.log('Initializing bird behavior');
        this.fly();
    }

    fly() {
        console.log('Bird is flying');
        this.element.style.transition = 'all 5s linear';
        this.element.style.left = `${Math.random() * 100}%`;
        this.element.style.top = `${Math.random() * 100}%`;

        setTimeout(() => {
            this.checkHunger();
        }, 5000);
    }

    checkHunger() {
        console.log(`Checking hunger: ${this.hunger}`);
        if (this.hunger < 50) {
            this.hunt();
        } else {
            this.roost();
        }
    }

    roost() {
        console.log('Bird is roosting');
        this.hunger -= 10;
        setTimeout(() => {
            this.fly();
        }, 3000);
    }

    hunt() {
        console.log('Bird is hunting');
        this.hunger += 50;
        setTimeout(() => {
            this.fly();
        }, 3000);
    }
}
