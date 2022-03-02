const panels = document.querySelectorAll('.panel')

/* Loop through panels and if we click one, call the remove active class for all
    panels and add to the one we clicked */
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

/* Remove all active classes so we have no active classes before we add the one
   that we clicked */
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}