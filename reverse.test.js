const reverse = require("./reverse.js");

test('All nested objects have exact one key', () => {

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
