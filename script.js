// script.js
document.addEventListener('DOMContentLoaded', function() {
    const cursorEffect = document.getElementById('cursor-effect');

    document.addEventListener('mousemove', function(e) {
        // Update the position of the cursor effect
        cursorEffect.style.left = `${e.pageX}px`;
        cursorEffect.style.top = `${e.pageY}px`;
    });
});
