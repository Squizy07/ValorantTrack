const categories = document.querySelectorAll('.item-list');

categories.forEach(category => {
  new Sortable(category, {
    group: 'tierlist',
    animation: 150,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    onEnd: (evt) => {
      const draggedItem = evt.item;
      const fromCategory = evt.from.id;
      const toCategory = evt.to.id;
      console.log(`Arrastado: ${draggedItem.textContent} | De: ${fromCategory} | Para: ${toCategory}`);
    },
  });
});
