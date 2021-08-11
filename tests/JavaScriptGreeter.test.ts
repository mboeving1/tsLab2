import { Greeter } from "../src/greeter"
import JavaScriptGreeter from "../src/JavaScriptGreeter"

describe("javascript greeter test", () => {
    test("input of Charlie will return a console.log('Hola, Charlie!')", () => {
        
        //Arrange
        let charlie = new JavaScriptGreeter("Hola")
        //Act

        //Assert
        expect(charlie.greet("Charlie")).toBe("console.log('Hola, Charlie!')");
    })

    test("input of Amy will return a console.log('Yo, Amy')", () => {

        //Arrange
        let amy = new JavaScriptGreeter("Yo")

        //Act

        //Assert
        expect(amy.greet("Amy")).toBe("console.log('Yo, Amy!')");
    })
})