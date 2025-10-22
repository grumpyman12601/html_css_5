
const terminalBody = document.getElementById('terminal-body');
const filesystem = {
    "type": "directory",
    "children": {
        "AIcode.txt": { "type": "file" },
        "about.html": { "type": "file" },
        "contact.html": { "type": "file" },
        "experience.html": { "type": "file" },
        "home.html": { "type": "file" },
        "index.html": { "type": "file" },
        "projects.html": { "type": "file" },
        ".idx": {
            "type": "directory",
            "children": {
                "dev.nix": { "type": "file" },
                "integrations.json": { "type": "file" }
            }
        },
        ".vscode": {
            "type": "directory",
            "children": {
                "settings.json": { "type": "file" }
            }
        },
        "images": {
            "type": "directory",
            "children": {
                "bookshelf.png": { "type": "file" },
                "cisco.png": { "type": "file" },
                "github-mark-white.png": { "type": "file" },
                "hammertime_fitness.jpg": { "type": "file" },
                "hero-bg.jpg": { "type": "file" },
                "methodex.png": { "type": "file" },
                "photo.png": { "type": "file" },
                "pycode.png": { "type": "file" },
                "webcode.png": { "type": "file" }
            }
        },
        "midterm": {
            "type": "directory",
            "children": {
                "index.html": { "type": "file" },
                "style-guide.md": { "type": "file" },
                "images": {
                    "type": "directory",
                    "children": {
                        "bg-pattern-footer-desktop.svg": { "type": "file" },
                        "bg-pattern-footer-mobile.svg": { "type": "file" },
                        "bg-pattern-how-we-work-desktop.svg": { "type": "file" },
                        "bg-pattern-how-we-work-mobile.svg": { "type": "file" },
                        "bg-pattern-intro-left-desktop.svg": { "type": "file" },
                        "bg-pattern-intro-left-mobile.svg": { "type": "file" },
                        "bg-pattern-intro-right-desktop.svg": { "type": "file" },
                        "bg-pattern-intro-right-mobile.svg": { "type": "file" },
                        "bg-pattern-mobile-nav.svg": { "type": "file" },
                        "favicon-32x32.png": { "type": "file" },
                        "icon-affordable-prices.svg": { "type": "file" },
                        "icon-close.svg": { "type": "file" },
                        "icon-facebook.svg": { "type": "file" },
                        "icon-hamburger.svg": { "type": "file" },
                        "icon-instagram.svg": { "type": "file" },
                        "icon-people-first.svg": { "type": "file" },
                        "icon-pinterest.svg": { "type": "file" },
                        "icon-snappy-process.svg": { "type": "file" },
                        "icon-twitter.svg": { "type": "file" },
                        "image-intro-desktop.jpg": { "type": "file" },
                        "image-intro-mobile.jpg": { "type": "file" },
                        "logo.svg": { "type": "file" }
                    }
                },
                "javascript": { "type": "directory", "children": {
                    "main.js": { "type": "file" }
                } },
                "styles": { "type": "directory", "children": {
                    "main.css": { "type": "file" }
                } }
            }
        },
        "scripts": {
            "type": "directory",
            "children": {
                "footer.js": { "type": "file" },
                "main.js": { "type": "file" },
                "term.js": { "type": "file" },
                "termBU.js": { "type": "file" }
            }
        },
        "styles": {
            "type": "directory",
            "children": {
                "styles.css": { "type": "file" }
            }
        },
        "assignments": {
            "type": "directory",
            "children": {
                "demo-project": { "type": "directory", "children": { 
                    "index.html": { "type": "file" },
                    "scripts": {"type": "directory", "children": {
                        "gsap.js": { "type": "file" },
                        "main.js": { "type": "file" }
                    }},
                    "styles": {"type": "directory", "children": {
                        "main.css": { "type": "file" }
                    }}
                }},
                "demo-project2": { "type": "directory", "children": { 
                    "index.html": { "type": "file" },
                    "css": {"type": "directory", "children": {
                        "style.css": { "type": "file" }
                    }},
                    "img": {"type": "directory", "children": {
                        "C++.png": { "type": "file" },
                        "C.png": { "type": "file" },
                        "breed.jpg": { "type": "file" },
                        "chess.jpg": { "type": "file" },
                        "coding.jpg": { "type": "file" },
                        "cp-removebg-preview.png": { "type": "file" },
                        "css.png": { "type": "file" },
                        "extras.jpg": { "type": "file" },
                        "fe-removebg-preview.png": { "type": "file" },
                        "gfg.png": { "type": "file" },
                        "hackathon.jpg": { "type": "file" },
                        "html.png": { "type": "file" },
                        "js.png": { "type": "file" },
                        "lib1.jpg": { "type": "file" },
                        "ml-removebg-preview.png": { "type": "file" },
                        "price.jpg": { "type": "file" },
                        "profile.jpg": { "type": "file" },
                        "python.png": { "type": "file" },
                        "speaker.jpg": { "type": "file" },
                        "video4.mp4": { "type": "file" },
                        "weather.jpg": { "type": "file" }
                    }},
                    "js": {"type": "directory", "children":{
                        "script.js": {"type": "file"}
                    }}
                }},
                "week01": { "type": "directory", "children": { 
                    "index.html": { "type": "file" },
                    "style.css": { "type": "file" },
                    "css": {"type": "directory", "children":{
                        "term_style.css": {"type": "file"}
                    }},
                    "js": {"type": "directory", "children":{
                        "term.js": {"type": "file"}
                    }}
                }},
                "week02": { "type": "directory", "children": { 
                    "copy.css": { "type": "file" }
                }}
            }
        },
        "book_apps": {
            "type": "directory",
            "children": {
                "ch01": { "type": "directory", "children": {
                    "book.css": {"type": "file"},
                    "javascript_jquery.html": {"type": "file"},
                    "javascript_jquery.jpg": {"type": "file"}
                }},
                "ch02": { "type": "directory", "children": {
                    "book.css": {"type": "file"},
                    "javascript_jquery.html": {"type": "file"},
                    "javascript_jquery.jpg": {"type": "file"}
                }}
            }
        },
        "book_examples": {
            "type": "directory",
            "children": {
                "ch02": { "type": "directory", "children": {
                    "04_comments.html": {"type": "file"},
                    "06_basic_selectors.html": {"type": "file"},
                    "basic_selectors.css": {"type": "file"}
                }},
                "ch03": { "type": "directory", "children": {
                    "01_title_favicon_meta.html": {"type": "file"},
                    "02_lang_headings_paragraphs.html": {"type": "file"},
                    "03_structural_elements.html": {"type": "file"},
                    "04_div.html": {"type": "file"},
                    "05_inline.html": {"type": "file"},
                    "06_entities_block.html": {"type": "file"},
                    "08_links.html": {"type": "file"},
                    "09_lists.html": {"type": "file"},
                    "10_image.html": {"type": "file"},
                    "images": {"type":"directory", "children": {
                        "favicon.ico": {"type": "file"},
                        "logo.jpg": {"type": "file"},
                        "murachlogo.gif": {"type": "file"},
                        "murachlogo.jpg": {"type": "file"}
                    }}
                }}
            }
        }
    }
};
let currentDirectory = filesystem;
let currentPath = '~';

function createNewInputLine() {
    const newLine = document.createElement('div');
    newLine.classList.add('terminal-line');
    newLine.innerHTML = `<span class="prompt">${currentPath}$</span> <span contenteditable="true" class="terminal-input"></span>`;
    terminalBody.appendChild(newLine);
    const newInput = newLine.querySelector('.terminal-input');
    newInput.focus();
    newInput.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const currentInput = event.target;
        currentInput.contentEditable = false;
        const commandText = currentInput.textContent.trim();
        processCommand(commandText);
        createNewInputLine();
    }
}

function processCommand(commandText) {
    const commandParts = commandText.split(' ');
    const command = commandParts[0].toLowerCase();
    const argument = commandParts.slice(1).join(' ');

    const outputLine = document.createElement('div');
    outputLine.classList.add('terminal-line');

    if (!commandText) {
        terminalBody.appendChild(outputLine);
        return;
    }

    function findNode(startDir, path) {
        const parts = path.split('/').filter(p => p);
        let current = startDir;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (current.children && current.children[part]) {
                current = current.children[part];
            } else {
                return null;
            }
        }
        return current;
    }

    switch (command) {
        case 'go':
            if (argument) {
                let node = findNode(currentDirectory, argument);
                let pathPrefix = (currentPath === '~') ? '' : currentPath.substring(2) + '/';

                if (!node) {
                    node = findNode(filesystem, argument);
                    pathPrefix = '';
                }

                if (node) {
                    if (node.type === 'file') {
                        window.location.href = pathPrefix + argument;
                    } else { // It's a directory
                        outputLine.textContent = `go: '${argument}' is a directory.`;
                        terminalBody.appendChild(outputLine);
                    }
                } else {
                    // Not a file or directory, treat as URL
                    let url = argument;
                    if (!url.startsWith('http://') && !url.startsWith('https://')) {
                        url = 'http://' + url;
                    }
                    window.location.href = url;
                }
            } else {
                outputLine.textContent = 'go: missing destination. Usage: go <file_path> or go <url>';
                terminalBody.appendChild(outputLine);
            }
            break;
        case 'help':
            outputLine.innerHTML = 'help  - Displays this list of available commands.<br>' +
                                   'go    - Navigates to a page. Usage: "go index"<br>' +
                                   'clear - Clears the terminal screen.<br>' +
                                   'ls    - Lists files and directories.<br>' +
                                   'cd    - Changes the current directory.';
            terminalBody.appendChild(outputLine);
            break;
        case 'clear':
            terminalBody.innerHTML = '';
            break;
        case 'ls':
            if (currentDirectory.type === 'directory') {
                const items = Object.keys(currentDirectory.children);
                outputLine.textContent = items.join('  ');
            } else {
                outputLine.textContent = 'ls: not a directory';
            }
            terminalBody.appendChild(outputLine);
            break;
        case 'cd':
            if (!argument || argument === '~') {
                currentDirectory = filesystem;
                currentPath = '~';
            } else if (argument === '..') {
                 outputLine.textContent = 'cd: ".." not fully supported in this version.';
                 terminalBody.appendChild(outputLine);
            } else if (currentDirectory.children[argument] && currentDirectory.children[argument].type === 'directory') {
                currentDirectory = currentDirectory.children[argument];
                currentPath = currentPath === '~' ? `~/${argument}` : `${currentPath}/${argument}`;
            } else {
                outputLine.textContent = `cd: no such file or directory: ${argument}`;
                terminalBody.appendChild(outputLine);
            }
            break;
        default:
            outputLine.textContent = `command not found: ${commandText}`;
            terminalBody.appendChild(outputLine);
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const firstInput = document.querySelector('.terminal-input');
    if (firstInput) {
        firstInput.addEventListener('keydown', handleKeyDown);
    }
});

createNewInputLine();
const initialLine = document.getElementById('initial-line');
if(initialLine){
    initialLine.remove();
}
