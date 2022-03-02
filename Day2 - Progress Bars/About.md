# Progress Bars
# Javascript 
Grab the elements we need from the page
```
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
```

Our currentActive begins at 1 whenever the form loads
```
let currentActive = 1
```

Event listener for the next button. On click we increment the currentActive unless we are at the max
```
next.addEventListener('click', () => {
    currentActive++;
    // Keep current active at max possible number
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})
```
Event listener for the previous button. On click we decrement the currentActive unless we are at the min
```
prev.addEventListener('click', () => {
    currentActive--;
    // Keep current active at min possible number
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})
```
## Update function has several parts:
### Part 1
First for each circle we get where we are in the index and everything before that is set as active,
everything after still needs to be completed so we remove the active status. 
```
function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')

        } else {
            circle.classList.remove('active')
        }
    })
```
### Part 2
After this we grab all of the actives in a const and set the progress style width to be the active length
which will be (1,2,3,4) and subtract one+ and divide it by the circles length -1 which is 3. This gives 
us a width in terms of 0/3, 1/3, 2/3, 3/3 which sets our bar to fill the screen in thirds
```

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
```
### Part 3
Finally we check where we are in the active state and disable/enable the next/prev buttons as needed.
```
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}
```