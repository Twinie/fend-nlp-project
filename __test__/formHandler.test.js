import { checkForName } from "../src/client/js/nameChecker";
import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBe(handleSubmit)
    }),
        test("Testing the checkForName() function", () => {

            expect(checkForName("Twinkle")).toBe("Welcome Captain!!")
        })
});