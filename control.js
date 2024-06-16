document.addEventListener('DOMContentLoaded', () => {
    const playArea = document.getElementById('play-area');

    // Listen for entity dropped events
    playArea.addEventListener('entityDropped', (e) => {
        const { id, x, y } = e.detail;
        initializeEntity(id, x, y);
    });

    function initializeEntity(id, x, y) {
        let entity;
        if (id === 'flowering-bush') {
            entity = new FloweringBush(x, y);
        } else if (id === 'tree') {
            entity = new Tree(x, y);
        }
        if (entity) {
            entity.addToPlayArea();
        }
    }
});
