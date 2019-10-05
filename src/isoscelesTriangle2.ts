/**
 * Expectations
 *
 * #########
 *  #######
 *   #####
 *    ###
 *     #
 *
 * @param digits number
 * @param pattern string
 *
 * @returns string
 */
const newPattern = (digits: number, pattern: string = "*"): void => {
    console.log("------ ISOSCELES TRIANGLE 2 / REVERSE------");

    for (let index = digits; index > 0; index--) {
        let result: string = "";

        for (let subIndex = digits; subIndex > index; subIndex--) {
            result += " ";
        }

        for (let subIndex = 0; subIndex < index; subIndex++) {
            result += pattern;
        }

        for (let subIndex = 0; subIndex < index - 1; subIndex++) {
            result += pattern;
        }
        console.log(result);
    }
    console.log(" ");
}

export default newPattern;
