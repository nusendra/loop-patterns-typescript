/**
 * Expectations
 *
 *     #
 *    ###
 *   #####
 *  #######
 * #########
 *
 * @param digits number
 * @param pattern string
 *
 * @returns string
 */
const butterflyTie = (digits: number, pattern: string = "*"): void => {
    console.log("------ ISOSCELES TRIANGLE ------");

    for (let index = 0; index < digits; index++) {
        let result: string = "";

        for (let subIndex = digits - 1; subIndex > index; subIndex--) {
            result += " ";
        }

        for (let subIndex = 0; subIndex <= index; subIndex++) {
            result += pattern;
        }

        for (let subIndex = 0; subIndex < index; subIndex++) {
            result += pattern;
        }
        console.log(result);
    }
    console.log(" ");
}

export default butterflyTie;
