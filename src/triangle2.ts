/**
 * Expectations
 * 
 * *****
 * ****
 * ***
 * **
 * *
 * 
 * @param digits number
 * @param pattern string 
 * 
 * @returns string
 */
const newPattern = (digits: number, pattern: string = "*"): void => {
    console.log("------ TRIANGLE 2 ------");

    for (let index = 5; index > 0; index--) {
        let result: string = "";

        for (let subIndex = 0; subIndex < index; subIndex++) {
            result += pattern;
        }
        console.log(result);
    }

    console.log(" ");
}

export default newPattern 
