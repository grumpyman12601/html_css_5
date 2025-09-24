const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 250,
    reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})


#####


const terminalBody = document.getElementById('terminal-body');

terminalBody.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        const currentInput = event.target;
        currentInput.contentEditable = false;

        const newLine = document.createElement('div');
        newLine.classList.add('terminal-line');
        newLine.innerHTML = '<span class="prompt">$</span> <span contenteditable="true" class="terminal-input"></span>';

        terminalBody.appendChild(newLine);
        newLine.querySelector('.terminal-input').focus();
    }
});