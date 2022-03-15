function makeDragElement(elmnt) {
    let deltaX = 0, newY = 0, oldX = 0, oldY = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;

        if(e.target.tagName === "TEXTAREA"){return}
        e.preventDefault();
        // get the mouse cursor position at startup:
        oldX = e.clientX;
        oldY = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        deltaX = oldX - e.clientX;
        newY = oldY - e.clientY;
        oldX = e.clientX;
        oldY = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - newY) + "px";
        elmnt.style.left = (elmnt.offsetLeft - deltaX) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// The boilerplate code from here was too good to pass by:
// https://www.w3schools.com/howto/howto_js_draggable.asp
