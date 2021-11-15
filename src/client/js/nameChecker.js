function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Twinkle",
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    if (inputText === "") {
        alert("Please enter a name")
    }
    else if (names.includes(inputText)) {
        return "Welcome Captain!!"
    }
}

export { checkForName }
