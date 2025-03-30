// Everything between " " or ' ' is a string
let greeting  = "Welcome to JavaScript";

// String concatenation
let firstNam = "John";
let lastName = "Doe";
// We can concatenate firstName and lastName in many ways
let fullName = firstNam + " " + lastName; // Using + operator
let fullName2 = `${firstNam} ${lastName}`; // Using template literals
let fullName3 = firstNam.concat(" ", lastName); // Using concat() method
let fullName4 = firstNam.concat(lastName); // Using concat() method without space
let fullName5 = firstNam.concat(" ", lastName, " ", "Smith"); // Using concat() method with multiple arguments
// concat() appends all the arguments to the string 
// and returns a new string
// The original string remains unchanged


// Finding length of a string
// The length of a string means, how many characters are there in a string
let str = "Hello"
// In the str variable, we have a string "Hello". there are 5 characters in the string which are (H, e, l, l, o)
// So the length of the string is 5
let strLength = str.length; // 5
// The length property returns the length of the string


// Getting a character from a string
// To get a character from a string, we can use the charAt() method
let str2 = "Hello World";
// The first character of the string is at index 0
let firstChar = str2.charAt(0); // H
// The second character of the string is at index 1
let secondChar = str2.charAt(1); // e
//  and so on
// The last character of the string is at index length - 1
let lastChar = str2.charAt(str2.length - 1); // d
// The charAt() method returns the character at the specified index
// If the index is out of range, it returns an empty string

// Getting a character from a string using bracket notation
let firstChar2 = str2[0]; // H
let secondChar2 = str2[1]; // e
//  and so on
// The last character of the string is at index length - 1
let lastChar2 = str2[str2.length - 1]; // d
// The bracket notation returns the character at the specified index
// If the index is out of range, it returns undefined
let undefinedChar = str2[100]; // undefined
// The bracket notation is faster than the charAt() method


// Getting a substring from a string
// There are many way to get a sequence of characters or a substring  from a string
// 1. Using substring() method
let str3 = "Hello World";
// The substring() method returns a substring of the string
// The substring() method takes two arguments, start index and end index
let subStr = str3.substring(0, 5); // Hello
// The substring() method returns the substring from start index to end index - 1
// 2. Using slice() method
let str4 = "Hello World";
// The slice() method returns a substring of the string
// The slice() method takes two arguments, start index and end index
let subStr2 = str4.slice(0, 5); // Hello
// The slice() method returns the substring from start index to end index - 1
// 3. Using substr() method
let str5 = "Hello World";
// The substr() method returns a substring of the string
// The substr() method takes two arguments, start index and length
let subStr3 = str5.substr(0, 5); // Hello
// The substr() method is deprecated and should not be used
// 4. Using split() method
let str6 = "Hello World";
// The split() method splits the string into an array of substrings
// The split() method takes one argument, separator
let hello = str6.split(" ")[0]; // Hello
let world = str6.split(" ")[1]; // World
// The split() method returns an array of substrings
// 5. Using regular expressions
let str7 = "Hello World";
// The match() method returns an array of matches
// The match() method takes one argument, regular expression
let regex = /Hello/;
let match = str7.match(regex); // ["Hello"]


// Trimming Whitespace from a string

let inputText = "   Hello World   ";
// The trim() method  removes whitespace from both ends of the string
let trimmedText = inputText.trim(); // "Hello World"
// The trimStart() method removes whitespace from the beginning of the string
let trimmedTextStart = inputText.trimStart(); // "Hello World   "
// The trimEnd() method removes whitespace from the end of the string
let trimmedTextEnd = inputText.trimEnd(); // "   Hello World"
// The trim() method returns a new string
// The original string remains unchanged

// Converting to Uppercase and Lowercase
let str8 = "Hello World";
// The toUpperCase() method converts the string to uppercase
let upperCaseStr = str8.toUpperCase(); // "HELLO WORLD"
// The toLowerCase() method converts the string to lowercase
let lowerCaseStr = str8.toLowerCase(); // "hello world"
// The toUpperCase() and toLowerCase() methods return a new string
// The original string remains unchanged
// Converting to Title Case
let str9 = "hello world";
// The toTitleCase() method converts the string to title case
let titleCaseStr = str9.replace(/\b\w/g, (char) => char.toUpperCase()); // "Hello World"
// The toTitleCase() method returns a new string
// The original string remains unchanged


// Replacing a substring in a string
let str10 = "Hello World";
// The replace() method replaces a substring in the string
// The replace() method takes two arguments, substring to be replaced and new substring
let replacedStr = str10.replace("World", "JavaScript"); // "Hello JavaScript"
// The replace() method returns a new string
// The original string remains unchanged
// Replacing all occurrences of a substring in a string
let str11 = "Hello World World";
// The replaceAll() method replaces all occurrences of a substring in the string
// The replaceAll() method takes two arguments, substring to be replaced and new substring
let replacedStr2 = str11.replaceAll("World", "JavaScript"); // "Hello JavaScript JavaScript"
// The replaceAll() method returns a new string
// The original string remains unchanged
// Replacing a substring using regular expressions
let str12 = "Hello World";
// The replace() method replaces a substring in the string
// The replace() method takes two arguments, regular expression and new substring
let regex2 = /World/;
let replacedStr3 = str12.replace(regex2, "JavaScript"); // "Hello JavaScript"
// The replace() method returns a new string
// The original string remains unchanged
// Replacing all occurrences of a substring using regular expressions
let str13 = "Hello World World";
// The replaceAll() method replaces all occurrences of a substring in the string
// The replaceAll() method takes two arguments, regular expression and new substring
let regex3 = /World/g;
let replacedStr4 = str13.replaceAll(regex3, "JavaScript"); // "Hello JavaScript JavaScript"


// Escaping Characters in a String
let str14 = "Hello \"World\"";
// The backslash (\) is used to escape characters in a string
// The backslash is used to escape the double quotes in the string
// The backslash is used to escape the single quotes in the string
let str15 = 'Hello \'World\'';
// The backslash is used to escape the single quotes in the string

// In general, the backslash is used to escape characters in a string
// The backslash is used to escape the following characters in a string
// \n - newline
// \r - carriage return
// \t - tab
// \\ - backslash
// \' - single quote
// \" - double quote
// \b - backspace
// \f - form feed
// \v - vertical tab
// \0 - null character
// \x - hexadecimal escape sequence
// \u - unicode escape sequence
// \c - control escape sequence
// \u{...} - unicode escape sequence


// String Comparison
let str16 = "Hello World";
let str17 = "Hello World";
// The == operator compares the values of the strings
let isEqual = str16 == str17; // true
let str18 = "hello world";

let isEqual2 = str16 == str18; // false

// The === operator compares the values and types of the strings
let isStrictEqual = str16 === str17; // true
let isStrictEqual2 = str16 === str18; // false
// The == operator performs type coercion
// The === operator does not perform type coercion

// Undefined and Null
let newStr;
let newStr2 = null;
// The undefined value means the variable has been declared but has no value
// The null value means the variable has been declared and has no value
// The null value is an object
// The undefined value is a primitive value

