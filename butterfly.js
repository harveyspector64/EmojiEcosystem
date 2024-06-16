class Butterfly {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hunger = 100;
        this.element = document.createElement('img');
        this.element.src = 'butterfly-emoji.png';
        this.element.style.position = 'absolute';
        this.element.style.left = x;
        this.element.style.top = y;
        setEmojiSize(this.element, 'butterfly');
        this.init();
    }

    init() {
        this.fly();
    }

    fly() {
        this.element.style.transition = 'all 5s linear';
        this.element.style.left = `${Math.random() * 100}%`;
        this.element.style.top = `${Math.random() * 100}%`;
        setTimeout(() => this.feed(), 5000);
    }

    feed() {
        this.hunger = 100;
        setTimeout(() => this.fly(), 3000);
    }
}
