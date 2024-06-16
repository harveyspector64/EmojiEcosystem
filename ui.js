document.addEventListener('DOMContentLoaded', () => {
    const emojiPanel = document.getElementById('emoji-panel');
    const playArea = document.getElementById('play-area');

    // Initialize draggable elements
    emojiPanel.addEventListener('dragstart', handleDragStart);
    playArea.addEventListener('dragover', handleDragOver);
    playArea.addEventListener('drop', handleDrop);

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        const clone = draggableElement.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.left = `${e.clientX - playArea.offsetLeft}px`;
        clone.style.top = `${e.clientY - playArea.offsetTop}px`;

        playArea.appendChild(clone);

        // Trigger event for control script to initialize entity
        const event = new CustomEvent('entityDropped', { detail: { id, x: clone.style.left, y: clone.style.top } });
        playArea.dispatchEvent(event);
    }
});
