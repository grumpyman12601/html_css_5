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
                    // If there is a url, navigate to it.
                    window.location.href = argument;
                    return; // Stop the function here since we are navigating away.
                } else {
                    // If no url is provided, give an error message.
                    const errorLine = document.createElement('div');
                    errorLine.classList.add('terminal-line');
                    errorLine.textContent = 'go: missing destination, try "go index.html"';
                    terminalBody.appendChild(errorLine);
                }

             } else if (command =='clear') {
                        terminalBody.innerHTML = '';


             } else if (command =='help') { // checks for command
                    const helpLine1 = document.createElement('div'); //Creates a div tag for the help line to go
                    helpLine1.classList.add('terminal-line'); // Adds a css class 'terminal-line' to give the terminal a new line. Adds to the element's list of classes.
                    helpLine1.textContent = 'help - Displays a list of available commands'; // Displays help command on the terminal-line
                    terminalBody.appendChild(helpLine1); // Append (Adds) the terminal line to the page I assume I'm not positive.
                    // Now reuse this code for every other command listed. 

                    const helpLine2 = document.createElement('div');
                    helpLine2.classList.add('terminal-line');
                    helpLine2.textContent = 'go - Takes the user to any link on my website. To visit any website, add https:// before the url. (like https://google.com)'
                    terminalBody.appendChild(helpLine2);


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
