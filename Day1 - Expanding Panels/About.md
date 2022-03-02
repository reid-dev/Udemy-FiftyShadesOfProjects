# Day 1

## Expanding Cards Project

*Images taken from Unsplash.com*

A series of panels that have a background image that expand whenever clicked

# Javascript
For every panel we add an Event Listener that runs the removeActiveClasses function (explained below) and then adds the active status to the one clicked
```
panels.forEach((panel) => {
   panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
 })
```
The removeActiveClasses function strips ALL the panels of their active status. If we run this before we add the active class on click, it removes the previous active class.
```
 function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
 }
 ```

 # CSS

The active panel has the flex width to be higher than it's siblings, as well as adding a transition to the opacity of the heading so that it's not as clunky while the panel is transitioning in.
```
.panel.active {
    flex: 5;
}

.panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
}
```

On smaller width devices we remove the 4th and 5th panel. This means that the panels aren't as squished, but does remove some functionality when used on mobile devices
 ```
 @media (max-width: 480px) {
    .container {
        width: 100vw;
    }
    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
```