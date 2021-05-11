const reverse = require("./reverse.js");

let inputValue = {
    hired: {
        be: {
            to: {
                deserve: "I"
            }
        }
    }
};

console.log(JSON.stringify(reverse(inputValue), null, 2));

