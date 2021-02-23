// all elements with box class
const boxes = document.querySelectorAll(".box");

// listen for scroll, fire checkBoxes function
window.addEventListener("scroll", checkBoxes);

// call checkBoxes to begin with
checkBoxes();

function checkBoxes() {
    // trigger point for when to bring in new boxes
    const triggerBottom = (window.innerHeight / 5 * 4);
    // iterate through boxes
    boxes.forEach(box => {
        // return value of position of top of box
        const boxTop = box.getBoundingClientRect().top;
        // boxTop less than triggerBottom (within 4/5 of top of viewport)
        if (boxTop < triggerBottom) {
            // add "show" class to box
            box.classList.add("show");
            //otherwise
        } else {
            // remove "show" class to box
            box.classList.remove("show");
        }
    })
};