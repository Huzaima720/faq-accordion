let accordianItems = document.querySelectorAll('.accordion-item');

accordianItems.forEach((item) => {
    let title = item.querySelector('.accordion-title');
    console.log(title);
    let content = item.querySelector('accordion-content');
    title.addEventListener('click', () => {
         console.log('accordion')
           item.classList.toggle('active');
    })
});
