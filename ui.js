document.addEventListener('DOMContentLoaded', () => {
    const emojiPanel = document.getElementById('emoji-panel');
    const playArea = document.getElementById('play-area');

    // Initialize emoji panel with emojis from constants
    Object.keys(EMOJI_DATA).forEach(type => {
        const element = createEmojiElement(type);
        if (element) {
            element.id = type;
            element.draggable = true;
            element.addEventListener('dragstart', handleDragStart);
            emojiPanel.appendChild(element);
        }
    });

    playArea.addEventListener('dragover', handleDragOver);
    playArea.addEventListener('drop', handleDrop);

    function handleDragStart(e) {
        console.log(`Drag start: ${e.target.id}`);
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const clone = createEmojiElement(id);
        if (!clone) {
            console.error(`Failed to create emoji element for type: ${id}`);
            return;
        }

        clone.style.left = `${e.clientX - playArea.offsetLeft}px`;
        clone.style.top = `${e.clientY - playArea.offsetTop}px`;
        clone.removeAttribute('id'); // Remove id to avoid duplicates

        playArea.appendChild(clone);

        console.log(`Dropped ${id} at (${clone.style.left}, ${clone.style.top})`);

        // Trigger event for control script to initialize entity
        const event = new CustomEvent('entityDropped', { detail: { id, x: clone.style.left, y: clone.style.top } });
        playArea.dispatchEvent(event);
    }
});
