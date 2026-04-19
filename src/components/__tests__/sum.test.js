import {sum} from "../sum"

test("The sum function should return the sum of 2 numbers", () => {
    const result = sum(5, 6);

    //Assertion
    expect(result).toBe(11);
});