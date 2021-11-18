var regex = /^[a-zA-Z.,\s]+$/;

function checkForText(inputText) {
    if (inputText.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}
export { checkForText }
