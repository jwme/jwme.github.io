let margin = 0;

function mudarSlide(direction) {
    let inner = document.getElementById("inner");
    let next = document.getElementById("next");
    let previous = document.getElementById("previous");

    if (direction == "right") {
        if (margin < 300)
        {
            margin += 100;
            inner.style.marginLeft = `-${margin}%`;
            previous.style.opacity = 1;
            previous.disabled = false;
        }
        else {
            next.style.opacity = 0.2;
            next.disabled = true;           
        }
    }
    else {
        if (margin > 0) {
            margin -= 100;
            inner.style.marginLeft = `-${margin}%`
            next.style.opacity = 1;
            next.disabled = false;         
        }
        else {
            previous.style.opacity = 0.2;
            previous.disabled = true;
        }
    }
}