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

    if (names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
