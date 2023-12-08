let clickCounter = 0;

function activateInteractiveElement() {
    clickCounter++;

    if (clickCounter === 3) {
        alert("hoho, vous avez découvert easter egg!");
        clickCounter = 0;
    }
}