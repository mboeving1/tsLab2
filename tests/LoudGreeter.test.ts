import { Greeter } from "../src/greeter";
import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter tests", () => {
    test("Hi, Kenzie!!", () => {
        
        //Arrange
        let kenzie = new LoudGreeter("Hi");
        //Act

        //Assert
        expect(kenzie.greet("Kenzie")).toBe("Hi, Kenzie!!");
    })

    test("Heyyy Dude!!!", () => {

        //Arrange
        let heyDude = new LoudGreeter("Heyyy");

        //Act
        heyDude.addVolume();

        //Assert
        expect(heyDude.greet("Dude")).toBe("Heyyy, Dude!!!");
    })

    test("Hi, mom!!!", () => {

        //Arrange
        let hiMom = new LoudGreeter("Hi");

        //Act
        hiMom.addVolume();

        //Assert
        expect(hiMom.greet("Mom")).toBe("Hi, Mom!!!");
    })
})