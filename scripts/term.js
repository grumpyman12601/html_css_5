// THIS TERMINAL IS AI GENERATED. FOR A NOT AI GENERATED TERMINAL, NAVIGATE TO termBU.js. 
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const promptText = document.getElementById('prompt-text');

const filesystem = {
    'type': 'directory',
    'children': {
        'assignments': {
            'type': 'directory',
            'children': {
                'demo-project': {
                    'type': 'directory',
                    'children': {
                        'index.html': {
                            'type': 'file',
                            'content': 'Navigate to the demo project.'
                        }
                    }
                },
                'demo-project2': {
                    'type': 'directory',
                    'children': {
                        'index.html': {
                            'type': 'file',
                            'content': 'Navigate to the second demo project.'
                        }
                    }
                },
                 'html_css_5': {
                    'type': 'directory',
                    'children': {
                        'demo-project': {
                            'type': 'directory',
                            'children': {
                                'index.html': {
                                    'type': 'file',
                                    'content': 'Navigate to the html_css_5 demo project.'
                                }
                            }
                        }
                    }
                }
            }
        },
        'demo-midterm': {
            'type': 'directory',
            'children': {
                'index.html': {
                    'type': 'file',
                    'content': 'Navigate to the demo midterm project.'
                }
            }
        },
        'scripts': {
            'type': 'directory',
            'children': {
                'main.js': {
                    'type': 'file',
                    'content': 'Main JavaScript file.'
                },
                'term.js': {
                    'type': 'file',
                    'content': 'Terminal JavaScript file.'
                }
            }
        },
        'styles': {
            'type': 'directory',
            'children': {
                'styles.css': {
                    'type': 'file',
                    'content': 'Main CSS file.'
                }
            }
        },
        'index.html': {
            'type': 'file',
            'content': 'Main HTML file.'
        },
        'home.html': {
            'type': 'file',
            'content': 'Test page for Home.'
        },
        'about.html': {
            'type': 'file',
            'content': 'Test page for About.'
        },
        'experience.html': {
            'type': 'file',
            'content': 'Test page for Experience.'
        },
        'projects.html': {
            'type': 'file',
            'content': 'Test page for Projects.'
        },
        'contact.html': {
            'type': 'file',
            'content': 'Test page for Contact.'
        }
    }
};

let currentDirectory = filesystem;
let currentPath = '~';
let commandHistory = [];
let historyIndex = -1;

function updatePrompt() {
    promptText.textContent = `${currentPath} $`;
}

function printToTerminal(content) {
    const line = document.createElement('div');
    line.classList.add('terminal-line');
    line.innerHTML = content;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        const commandText = terminalInput.value.trim();
        terminalInput.value = '';

        if (commandText) {
            commandHistory.unshift(commandText);
            historyIndex = -1;

            printToTerminal(`<span class="prompt">${currentPath} $</span> ${commandText}`);

            const commandParts = commandText.split(' ');
            const command = commandParts[0].toLowerCase();
            const argument = commandParts.slice(1).join(' ');

            switch (command) {
                case 'go':
                    if (argument) {
                        let fullPath;
                        if (argument.startsWith('~') || argument.startsWith('/')) {
                            fullPath = argument.replace(/^~\/?/, '');
                        } else if (currentPath === '~') {
                            fullPath = argument;
                        } else {
                            const basePath = currentPath.substring(2);
                            fullPath = `${basePath}/${argument}`;
                        }

                        const pathParts = fullPath.split('/').filter(p => p);
                        let target = filesystem;
                        let valid = true;
                        for (const part of pathParts) {
                            if (target && target.type === 'directory' && target.children[part]) {
                                target = target.children[part];
                            } else {
                                valid = false;
                                break;
                            }
                        }

                        if (valid && target.type === 'file') {
                            window.location.href = fullPath;
                        } else {
                            printToTerminal(`go: not a navigable file: ${argument}`);
                        }
                    } else {
                        printToTerminal('go: missing destination');
                    }
                    break;

                case 'help':
                    printToTerminal('help    - Displays this list of available commands.');
                    printToTerminal('go      - Navigates to a page. Usage: "go assignments/demo-project/index.html"');
                    printToTerminal('clear   - Clears the terminal screen.');
                    printToTerminal('ls      - Lists files and directories.');
                    printToTerminal('cd      - Changes the current directory.');
                    printToTerminal('cat     - Displays the content of a file.');
                    break;

                case 'clear':
                    terminalOutput.innerHTML = '';
                    break;

                case 'ls':
                    if (currentDirectory.type === 'directory') {
                        const items = Object.keys(currentDirectory.children);
                        printToTerminal(items.join('  '));
                    } else {
                        printToTerminal('ls: not a directory');
                    }
                    break;

                case 'cd':
                    if (!argument || argument === '~') {
                        currentDirectory = filesystem;
                        currentPath = '~';
                    } else if (argument === '..') {
                        if (currentPath !== '~') {
                            const pathParts = currentPath.replace(/^~\/?/, '').split('/');
                            pathParts.pop();

                            currentDirectory = filesystem;
                            pathParts.forEach(part => {
                                currentDirectory = currentDirectory.children[part];
                            });

                            if (pathParts.length > 0) {
                                currentPath = '~/' + pathParts.join('/');
                            } else {
                                currentPath = '~';
                            }
                        }
                    } else {
                        if (currentDirectory.children && currentDirectory.children[argument] && currentDirectory.children[argument].type === 'directory') {
                            currentDirectory = currentDirectory.children[argument];
                            if (currentPath === '~') {
                                currentPath = `~/${argument}`;
                            } else {
                                currentPath += `/${argument}`;
                            }
                        } else {
                            printToTerminal(`cd: no such file or directory: ${argument}`);
                        }
                    }
                    updatePrompt();
                    break;

                case 'cat':
                    if (argument) {
                        let fullPath;
                        if (argument.startsWith('~') || argument.startsWith('/')) {
                            fullPath = argument.replace(/^~\/?/, '');
                        } else if (currentPath === '~') {
                            fullPath = argument;
                        } else {
                            const basePath = currentPath.substring(2);
                            fullPath = `${basePath}/${argument}`;
                        }

                        const pathParts = fullPath.split('/').filter(p => p);
                        let target = filesystem;
                        let valid = true;
                        for (const part of pathParts) {
                            if (target && target.type === 'directory' && target.children[part]) {
                                target = target.children[part];
                            } else {
                                valid = false;
                                break;
                            }
                        }

                        if (valid && target.type === 'file') {
                            fetch(fullPath)
                                .then(response => {
                                    if (response.ok) {
                                        return response.text();
                                    }
                                    throw new Error(`cat: ${argument}: Cannot access file`);
                                })
                                .then(text => {
                                    const escapedText = text.replace(/&/g, "&amp;")
                                                            .replace(/</g, "&lt;")
                                                            .replace(/>/g, "&gt;")
                                                            .replace(/"/g, "&quot;")
                                                            .replace(/'/g, "&#039;");
                                    printToTerminal(`<pre>${escapedText}</pre>`);
                                })
                                .catch(error => {
                                    printToTerminal(error.toString());
                                });
                        } else {
                            printToTerminal(`cat: ${argument}: No such file or directory`);
                        }
                    } else {
                        printToTerminal('cat: missing operand');
                    }
                    break;

                default:
                    printToTerminal(`command not found: ${commandText}`);
                    break;
            }
        }
    } else if (event.key === 'ArrowUp') {
        if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = -1;
            terminalInput.value = '';
        }
    }
});

document.getElementById('terminal-body').addEventListener('click', () => {
    terminalInput.focus();
});

updatePrompt();