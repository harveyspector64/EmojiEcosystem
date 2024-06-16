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

    // Add the bird to the play area
    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        if (this.element) {
            playArea.appendChild(this.element);
            console.log('Bird added to play area');
        }
    }

    // Initialize the bird behavior
    init() {
        console.log('Initializing bird behavior');
        this.fly();
    }

    // Define bird flight pattern
    fly() {
        console.log('Bird is flying');
        this.element.style.transition = 'all 5s linear';
        this.element.style.left = `${Math.random() * 100}%`;
        this.element.style.top = `${Math.random() * 100}%`;

        // Check hunger level after flying
        setTimeout(() => {
            this.checkHunger();
        }, 5000);
    }

    // Check bird's hunger level to determine next action
    checkHunger() {
        console.log(`Checking hunger: ${this.hunger}`);
        if (this.hunger < 50) {
            this.hunt();
        } else {
            this.roost();
        }
    }

    // Simulate bird roosting
    roost() {
        console.log('Bird is roosting');
        this.hunger -= 10;
        // Bird rests for a while before flying again
        setTimeout(() => {
            this.fly();
        }, 3000);
    }

    // Simulate bird hunting for food
    hunt() {
        console.log('Bird is hunting');
        this.hunger += 50;  // Increase hunger when food is found
        // Bird hunts for a while before flying again
        setTimeout(() => {
            this.fly();
        }, 3000);
    }
}
