const terminalBody = document.getElementById('terminal-body');

/* ============================
   FILESYSTEM (UNCHANGED)
============================ */
const filesystem = /* KEEP YOUR HUGE FILESYSTEM OBJECT EXACTLY AS IT IS */;

/* ============================
   STATE
============================ */
let currentDirectory = filesystem;
let pathStack = [];

/* ============================
   UTILITIES
============================ */
function getPromptPath() {
  return "~" + (pathStack.length ? "/" + pathStack.join("/") : "");
}

function findNode(startDir, path) {
  if (!path || path === "~") return filesystem;

  const parts = path.split("/").filter(Boolean);
  let current = path.startsWith("/") || path.startsWith("~")
    ? filesystem
    : startDir;

  for (let part of parts) {
    if (part === "..") {
      if (pathStack.length) pathStack.pop();
      current = findNode(filesystem, pathStack.join("/")) || filesystem;
      continue;
    }

    if (!current.children || !current.children[part]) return null;
    current = current.children[part];
  }

  return current;
}

function resolvePath(path) {
  if (!path) return null;

  if (path.startsWith("~")) {
    return findNode(filesystem, path.replace("~", ""));
  }

  return findNode(currentDirectory, path);
}

/* ============================
   TYPEWRITER
============================ */
function typeWriter(text, outputElement, callback) {
  let i = 0;
  const speed = 20;

  function type() {
    if (i < text.length) {
      const char = text.charAt(i);
      if (char === "<") {
        const tagEnd = text.indexOf(">", i);
        if (tagEnd !== -1) {
          outputElement.innerHTML += text.substring(i, tagEnd + 1);
          i = tagEnd + 1;
          type();
          return;
        }
      }
      outputElement.innerHTML += char;
      terminalBody.scrollTop = terminalBody.scrollHeight;
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

/* ============================
   INPUT LINE
============================ */
function createNewInputLine() {
  const newLine = document.createElement("div");
  newLine.classList.add("terminal-line");
  newLine.innerHTML = `<span class="prompt">${getPromptPath()}$</span> <span contenteditable="true" class="terminal-input"></span>`;
  terminalBody.appendChild(newLine);

  const newInput = newLine.querySelector(".terminal-input");
  newInput.focus();
  newInput.addEventListener("keydown", handleKeyDown);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const currentInput = event.target;
    currentInput.contentEditable = false;
    currentInput.removeEventListener("keydown", handleKeyDown);

    const commandText = currentInput.textContent.trim();
    processCommand(commandText, () => {
      createNewInputLine();
    });
  }
}

/* ============================
   COMMAND PROCESSOR
============================ */
function processCommand(commandText, onComplete) {
  const commandParts = commandText.split(" ");
  const command = commandParts[0].toLowerCase();
  const argument = commandParts.slice(1).join(" ");

  if (!commandText) {
    if (onComplete) onComplete();
    return;
  }

  if (command === "clear") {
    terminalBody.innerHTML = "";
    if (onComplete) onComplete();
    return;
  }

  const outputLine = document.createElement("div");
  outputLine.classList.add("terminal-line");
  terminalBody.appendChild(outputLine);

  let outputText = "";
  let shouldHaveOutput = true;

  switch (command) {
    case "help":
      outputText =
        "help  - Displays this list of available commands.<br>" +
        "go    - Navigates to a page or URL.<br>" +
        "clear - Clears the terminal screen.<br>" +
        "ls    - Lists files and directories.<br>" +
        "cd    - Changes the current directory.";
      break;

    case "ls":
      if (currentDirectory.type === "directory") {
        const items = Object.keys(currentDirectory.children || {});
        outputText = items.join("  ");
      } else {
        outputText = "ls: not a directory";
      }
      break;

    case "cd":
      if (!argument || argument === "~") {
        currentDirectory = filesystem;
        pathStack = [];
        shouldHaveOutput = false;
        break;
      }

      if (argument === "..") {
        if (pathStack.length) pathStack.pop();
        currentDirectory =
          findNode(filesystem, pathStack.join("/")) || filesystem;
        shouldHaveOutput = false;
        break;
      }

      const target = resolvePath(argument);

      if (!target) {
        outputText = `cd: no such file or directory: ${argument}`;
        break;
      }

      if (target.type !== "directory") {
        outputText = `cd: not a directory: ${argument}`;
        break;
      }

      argument.split("/").forEach(p => {
        if (p && p !== ".") pathStack.push(p);
      });

      currentDirectory = target;
      shouldHaveOutput = false;
      break;

    case "go":
      if (!argument) {
        outputText = "go: missing destination";
        break;
      }

      const fileNode = resolvePath(argument);

      if (fileNode && fileNode.type === "file") {
        const urlPath =
          pathStack.length ? pathStack.join("/") + "/" + argument : argument;
        window.location.href = urlPath;
        return;
      }

      // Assume URL fallback
      let url = argument;
      if (!url.startsWith("http")) url = "https://" + url;
      window.location.href = url;
      return;

    default:
      outputText = `command not found: ${commandText}`;
      break;
  }

  if (outputText && shouldHaveOutput) {
    typeWriter(outputText, outputLine, onComplete);
  } else {
    terminalBody.removeChild(outputLine);
    if (onComplete) onComplete();
  }
}

/* ============================
   BOOT
============================ */
document.addEventListener("DOMContentLoaded", () => {
  createNewInputLine();
});
