const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // Get the width of the range of the slider
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    // Get label width
    const label_width = getComputedStyle(label).getPropertyValue('width')
    // Remove the px from both of the widths so we just have a number
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    // Min and Max Values
    const max = +e.target.max
    const min = +e.target.min

    // Calculate the left value, initiall 110px which is right in the middle
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    // Set the left value
    label.style.left = `${left}px`
    

    label.innerHTML = value

});

// Scale used to offset slight drifting towards outer edges
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}