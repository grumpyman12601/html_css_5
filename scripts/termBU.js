// Had chatGPT generate a terminal, hosted here(https://grumpyman12601.github.io/html_sandbox/terminal.html) and I referenced it to make my own.
// I don't have AI modify my code, I give my code to AI and have it output instructions, instead of just coding for me.
const terminalBody = document.getElementById('terminal-body');

terminalBody.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        const currentInput = event.target;
        currentInput.contentEditable = false;

        const commandText = currentInput.textContent.trim();
        const commandParts = commandText.split(' ');
        const command = commandParts[0].toLowerCase();
        const argument = commandParts[1];

        if (commandText) { // First, check if the user typed anything at all.
            if (command === 'go') {
                if (argument) {
                    let url = argument;
                    // Special case for localhost
                    if (url.startsWith('localhost')) {
                        window.location.href = 'http://' + url;
                    }
                    // If it looks like a local file path (no domain dot) or ends with .html
                    else if (!url.includes('.') || url.endsWith('.html')) {
                        if (!url.endsWith('.html')) {
                            url += '.html';
                        }
                        window.location.href = url;
                    }
                    // Otherwise, assume it's an external URL
                    else {
                        if (!url.startsWith('http')) {
                            url = 'http://' + url;
                        }
                        window.location.href = url;
                    }
                    return; // Stop the function here since we are navigating away.
                } else {
                    // If no url is provided, give an error message.
                    const errorLine = document.createElement('div');
                    errorLine.classList.add('terminal-line');
                    errorLine.textContent = 'go: missing destination, try "go index"';
                    terminalBody.appendChild(errorLine);
                }

            } else if (command === 'help') {
                const helpLine1 = document.createElement('div');
                helpLine1.classList.add('terminal-line');
                helpLine1.textContent = 'help  - Displays this list of available commands.';
                terminalBody.appendChild(helpLine1);

                const helpLine2 = document.createElement('div');
                helpLine2.classList.add('terminal-line');
                helpLine2.textContent = 'go    - Navigates to a page. Usage: "go index" or "go google.com"';
                terminalBody.appendChild(helpLine2);

                const helpLine3 = document.createElement('div');
                helpLine3.classList.add('terminal-line');
                helpLine3.textContent = 'clear - Clears the terminal screen.';
                terminalBody.appendChild(helpLine3);

            } else if (command =='clear') {
                terminalBody.innerHTML = '';

            } else {
                // Handle any other command as "unknown".
                const unknownCmdLine = document.createElement('div');
                unknownCmdLine.classList.add('terminal-line');
                unknownCmdLine.textContent = `command not found: ${commandText}`;
                terminalBody.appendChild(unknownCmdLine);
            }
        }

        // After any command is processed (or if the input was empty), add a new line for the next command.
        const newLine = document.createElement('div');
        newLine.classList.add('terminal-line');
        newLine.innerHTML = '<span class="prompt">$</span> <span contenteditable="true" class="terminal-input"></span>';

        terminalBody.appendChild(newLine);
        // Focus on the new input field.
        newLine.querySelector('.terminal-input').focus();
    }
});
