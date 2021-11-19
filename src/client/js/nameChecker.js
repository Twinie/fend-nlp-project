function checkForText(inputText) {
    const regex = /^[a-zA-Z.,]/;

    if (inputText.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}
export { checkForText }
