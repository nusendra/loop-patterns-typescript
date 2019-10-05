/**
 * Expectations
 * 
 * #        #
 * ##      ##
 * ###    ###
 * ####  ####
 * ##########
 * ####  ####
 * ###    ###
 * ##      ##
 * #        #
 * 
 * @param digits number
 * @param pattern string 
 * 
 * @returns string
 */
const newPattern = (digits: number, pattern: string = "*"): void => {
    console.log("------ BUTTERFLY TIE ------");

    for (let index = 0; index < digits; index++) {
        let result: string = "";

        for (let subIndex = 0; subIndex <= index; subIndex++) {
            result += pattern;
        }

        for (let subIndex = digits - 1; subIndex > index; subIndex--) {
            result += "  ";
        }

        for (let subIndex = 0; subIndex <= index; subIndex++) {
            result += pattern;
        }
        console.log(result);
    }

    for (let index = digits - 1; index > 0; index--) {
        let result: string = "";

        for (let subIndex = 0; subIndex < index; subIndex++) {
            result += pattern;
        }

        for (let subIndex = digits; subIndex > index; subIndex--) {
            result += "  ";
        }

        for (let subIndex = 0; subIndex < index; subIndex++) {
            result += pattern;
        }
        console.log(result);
    }

    console.log(" ");
}

export default newPattern;
