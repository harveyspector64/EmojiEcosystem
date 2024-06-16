class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hunger = 100;
        this.element = document.createElement('img');
        this.element.src = 'bird-emoji.png';
        this.element.style.position = 'absolute';
        this.element.style.left = x;
        this.element.style.top = y;
        setEmojiSize(this.element, 'bird');
        this.init();
    }

    init() {
        this.fly();
    }

    fly() {
        this.element.style.transition = 'all 5s linear';
        this.element.style.left = `${Math.random() * 100}%`;
        this.element.style.top = `${Math.random() * 100}%`;
        setTimeout(() => this.checkHunger(), 5000);
    }

    checkHunger() {
        if (this.hunger < 50) {
            this.hunt();
        } else {
            this.roost();
        }
    }

    roost() {
        this.hunger -= 10;
        setTimeout(() => this.fly(), 3000);
    }

    hunt() {
        this.hunger += 50;
        setTimeout(() => this.fly(), 3000);
    }
}
