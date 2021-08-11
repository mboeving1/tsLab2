import HtmlGreeter from "../src/HtmlGreeter";

describe("Html tests", () => {

    test("Hi, Leo will return <h1> Hi, Leo </h1>", () => {

        //Arrange
        let hiLeo = new HtmlGreeter("Hi");
        //Act

        //Assert
        expect(hiLeo.greet("Leo")).toBe("<h1>Hi, Leo!</h1>");
    })

    test("Hey, dad will return <p>Hey, dad!</p>", () => {

        //Arrange
        let heyDad = new HtmlGreeter("Hey");

        //Act
        heyDad.tagName = "p";

        //Assert
        expect(heyDad.greet("Dad")).toBe("<p>Hey, Dad!</p>");
    })
})