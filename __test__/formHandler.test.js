import { checkForText } from "../src/client/js/nameChecker";

describe("Testing the checkText functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  

    test("Testing checkForText() function to not accept only numbers", () => {
        expect(checkForText("123")).toBe(false)
    })

    test("Testing checkForText() function to accept alphabets, numbers, comma and fullstop.", () => {
        expect(checkForText("abc, 123.")).toBe(true)
    })
});