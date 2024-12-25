function isDate(input) {
    // Check if the input is a valid Date object
    if (input instanceof Date) {
        return !isNaN(input.getTime()); // Return true if the date is valid, false if invalid (NaN)
    }
    
    // Check if the input is a string and can be parsed as a valid date
    if (typeof input === 'string' && !isNaN(Date.parse(input))) {
        return true;
    }

    // Check if the input is a valid timestamp (number)
    if (typeof input === 'number' && !isNaN(new Date(input).getTime())) {
        return true;
    }

    // If none of the conditions match, return false
    return false;
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
