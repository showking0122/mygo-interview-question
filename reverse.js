/*
Version 1
Reverse an object recursively
*/

function v1(input) {
    let [head] = reverseRecursively(input, 0);
    return head;
}

function reverseRecursively(input, level) {
    // hit the ground
    if (typeof input !== 'object') {
        let obj = {}
        let head = obj;
        return [head, input, obj];
    }

    let key = Object.keys(input)[0];
    let value = input[key];

    let [head, preKey, tail] = reverseRecursively(value, level + 1);

    // compose the result at higher recursive level
    if (level > 0) {
        let newTail = {};
        tail[preKey] = newTail;
        return [head, key, newTail];
    } else {
        tail[preKey] = key;
        return [head];
    }

}


/* 
Version 2:
Reverse an object iteratively.
*/
function v2(input) {
    let root = true;
    let output = {};
    let pre;

    while (typeof input === 'object') {

        if (Object.keys(input).length != 1) {
            throw 'There should be only one key in an object.';
        }

        let key = Object.keys(input)[0];
        let value = input[key];

        if (root) {
            pre = key;
            root = false;
        } else {
            output = { [key]: pre };
            pre = output;
        }

        input = value;

    }

    // last one 
    output = { [input]: pre };
    return output;
}

const reverse = (input) => {
    if (typeof input !== 'object' || Array.isArray(input))
        throw 'Assume the input is an object.';

    return v2(input);

};

module.exports = reverse;
