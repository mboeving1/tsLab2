import  {Greeter} from "../src/greeter";

describe("greeter tests", () => {
    test("with input matthew, return Hello Matthew", () =>{
        //Arrange
        let matthew = new Greeter("Hello");
        //Act

        //Assert

        expect(matthew.greet("Matthew")).toBe("Hello, Matthew!");
    });

    test("input Jude will return 'Hey, Jude", () => {

        //Assert
        let judy = new Greeter("Hey");
        //Act

        //Arrange
        expect(judy.greet("Jude")).toBe("Hey, Jude!");
    })
})