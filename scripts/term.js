// Had chatGPT generate a terminal, hosted here(https://grumpyman12601.github.io/html_sandbox/terminal.html) and I referenced it to make my own.
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