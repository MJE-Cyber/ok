// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Change the background color of the body on button click
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Change Background Color';
    document.body.appendChild(changeColorButton);

    changeColorButton.addEventListener('click', function() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // Add a hover effect to all paragraphs
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.addEventListener('mouseover', function() {
            this.style.color = '#FF5733';
            this.style.fontSize = '1.2em';
        });
        p.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.fontSize = '';
        });
    });
});
