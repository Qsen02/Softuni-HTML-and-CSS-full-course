window.addEventListener("load", start);

function start() {
    const cssCodeEl = document.querySelectorAll(".css-code");
    for (el of cssCodeEl) {
        const text = el.textContent;
        const textWithSpaces = text.replaceAll("{", "{\n").replaceAll("}", "\n}").replaceAll(";", ";\n");
        let newTextArr = [];
        for (let i = 0; i < textWithSpaces.length; i++) {
            let space = " ";
            let spaces = 0;
            if (textWithSpaces[i] == "{") {
                spaces += 4;
            } else if (textWithSpaces[i] == "}") {
                spaces -= 4;
            }
            if (spaces <= 0) {
                newTextArr.push(textWithSpaces[i]);
            } else {
                newTextArr.push(textWithSpaces[i] + space.repeat(spaces));
            }
        }
        const newText = newTextArr.join("");
        console.log(newText);
        el.textContent = newText;
    }
}