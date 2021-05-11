const reverse = require("./reverse.js");

test('I can reverse an object which contains nested exact-one-key objects and a primitive value in the end', () => {
    let exactOneKey = {
        hired: {
            be: {
                to: {
                    deserve: "I"
                }
            }
        }
    };

    let exactOneKeyReversed = {
        I: {
            deserve: {
                to: {
                    be: 'hired'
                }
            }
        }
    };
    expect(reverse(exactOneKey)).toEqual(exactOneKeyReversed);


    let hello = {
        curtis: {
            world: "hello"
        }
    };
    let helloReversed = {
        hello: {
            world: "curtis"
        }
    }
    expect(reverse(hello)).toEqual(helloReversed);

});

test('All nested objects should contain exact one key,', () => {
    expect(() => reverse({})).toThrow('There should be only one key in an object.');
    expect(() => reverse({ key1: {} })).toThrow('There should be only one key in an object.');
    expect(() => reverse({ key1: {}, key2: {} })).toThrow('There should be only one key in an object.');
    expect(() => reverse({ key1: { key2: {} } })).toThrow('There should be only one key in an object.');

});

test('Input should be an object', () => {
    expect(() => reverse(1)).toThrow('Input should be an object.');
    expect(() => reverse(-1)).toThrow('Input should be an object.');
    expect(() => reverse('hello')).toThrow('Input should be an object.');
    expect(() => reverse([])).toThrow('Input should be an object.');
    expect(() => reverse([1, 2, 3])).toThrow('Input should be an object.');
});
