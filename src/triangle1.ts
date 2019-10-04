/**
 * Expectations
 * 
 * *
 * **
 * ***
 * ****
 * *****
 * 
 * @param digits number
 * @param pattern string 
 * 
 * @returns string
 */
const triangle1 = (digits: number, pattern: string = "*"): void => {
    console.log("------ TRIANGLE 1 ------");

    for (let index = 0; index < digits; index++) {
        let result: string = "";

        for (let subIndex = 0; subIndex <= index; subIndex++) {
            result += pattern;
        }
        console.log(result);
    }

    console.log(" ");
}

export default triangle1