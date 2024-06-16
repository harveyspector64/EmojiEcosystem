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

    // Add the butterfly to the play area
    addToPlayArea() {
        const playArea = document.getElementById('play-area');
        if (this.element) {
            playArea.appendChild(this.element);
            console.log('Butterfly added to play area');
        }
    }

    // Initialize the butterfly behavior
    init() {
        console.log('Initializing butterfly behavior');
        this.fly();
    }

    // Define butterfly flight pattern
    fly() {
        console.log('Butterfly is flying');
        this.element.style.transition = 'all 5s linear';
        this.element.style.left = `${Math.random() * 100}%`;
        this.element.style.top = `${Math.random() * 100}%`;

        // Simulate feeding after flight
        setTimeout(() => {
            this.feed();
        }, 5000);
    }

    // Simulate butterfly feeding
    feed() {
        console.log('Butterfly is feeding');
        this.hunger = 100;  // Reset hunger
        // Butterfly lands and feeds for a moment
        setTimeout(() => {
            this.fly();
        }, 3000);
    }
}
