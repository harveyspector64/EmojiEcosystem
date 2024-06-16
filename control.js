document.addEventListener('DOMContentLoaded', () => {
    const playArea = document.getElementById('play-area');

    playArea.addEventListener('entityDropped', (e) => {
        const { id, x, y } = e.detail;
        console.log(`Entity dropped: ${id} at (${x}, ${y})`);
        initializeEntity(id, x, y);
    });

    function initializeEntity(id, x, y) {
        let entity;
        if (id === 'flowering-bush') {
            entity = new FloweringBush(x, y);
        } else if (id === 'tree') {
            entity = new Tree(x, y);
        } else {
            console.error(`Unknown entity type: ${id}`);
            return;
        }
        entity.addToPlayArea();
    }
});
