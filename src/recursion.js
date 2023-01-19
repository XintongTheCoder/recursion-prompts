/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    if (array.length === 0) {
        return 0;
    }
    if (array.length === 1) {
        return array[0];
    }
    return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sum = 0;
    if (!Array.isArray(array)) {
        sum += array;
    } else {
        array.forEach(function(element) {
            sum += arraySum(element);
        });
    }
    return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n > 1) {
        return isEven(n - 2);
    }
    if (n < -1) {
        return isEven(n + 2);
    }
    
    return n === 0;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n < 0) {
        return n + 1 + sumBelow(n + 1);
    } else {
        return n - 1 + sumBelow(n - 1);
    }
    
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if (Math.abs(x - y) < 2) {
        return [];
    }
    
    if (x > y) {
        return range(y, x).reverse();
    }
    if (x + 2 === y) {
        return [x + 1];
    }
    return [x + 1].concat(range(x + 1, y - 1)).concat([y - 1]);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (base === 0) {
        return 0;
    }
    if (exp < 0) {
        return 1 / exponent(base, -exp);
    }
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }
    var halfExponent;
    if (exp % 2 === 0) {
        halfExponent = exponent(base, exp / 2);
        return halfExponent * halfExponent;
    }
    halfExponent = exponent(base, (exp - 1) / 2);
    return base * halfExponent * halfExponent;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    if (n % 2 === 0) {
        return powerOfTwo(n / 2);
    }
    return false;
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (typeof string !== 'string') {
        return null;
    }
    var len = string.length;
    if (len <= 1) {
        return string;
    }

    return string.charAt(len - 1) + reverse(string.substring(1, len - 1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if (typeof string !== 'string') {
        return null;
    }
    var len = string.length;
    if (len <= 1) {
        return true;
    }
    var start = 0;
    while (string.charAt(start) === ' ') {
        start++;
    }
    var end = len - 1;
    while (string.charAt(end) === ' ') {
        end--;
    }

    if (string.charAt(start).toLowerCase() !== string.charAt(end).toLowerCase()) {
        return false;
    }
    return palindrome(string.substring(1, len - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    if (y < 0) {
        y = -y;
    }
    var sign = 1;
    if (x < 0) {
        sign = -1;
        x = -x;
    }
    if (x === 0) {
        return 0;
    }
    if (x < y) {
        return sign === 1 ? x : -x;
    }
    
    return sign === 1 ? modulo(x - y, y) : -modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    var absX = x >= 0 ? x : -x;
    var absY = y >= 0 ? y : -y;
    if (absX < absY) {
        return multiply(y, x);
    }
    if (y < 0) {
        return multiply(-x, -y);
    }    
    if (y === 0) {
        return 0;
    }
    return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    
    if (x < 0 && y < 0) {
        return divide(-x, -y);
    }
    if (x < 0) {
        return -divide(-x, y);
    }
    if (y < 0) {
        return -divide(x, -y);
    }
   
    if (x < y) {
        return 0;
    }
    
    return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) {
        return null;
    }
    if (x === 0 || y === 0) {
        return x === 0 ? y : x;
    }
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    // if (str1.length !== str2.length) {
    //     return false;
    // }
    if (str1.length === 0 || str2.length === 0) {
        return str1.length === str2.length;
    }
    return str1.charAt(0) === str2.charAt(0) && compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    var arr = [];
    if (str.length === 0) {
        return arr;
    }
    arr.push(str.charAt(0));
    if (str.length > 1) {
        return arr.concat(createArray(str.slice(1)));
    }
    return arr;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length <= 1) {
        return array;
    }
    var reversedArr = array.slice(array.length - 1);
    return reversedArr.concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    var res = [];
    if (length === 0) {
        return res;
    }
    res.push(value);
    return res.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    var res = [];
    if (n > 1) {
        res = fizzBuzz(n - 1);
    }
    if (n % 3 === 0 && n % 5 === 0) {
        res.push('FizzBuzz');
    } else if (n % 3 === 0) {
        res.push('Fizz');
    } else if (n % 5 === 0) {
        res.push('Buzz'); 
    } else {
        res.push(n.toString());
    }
    return res;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    var count = 0;
    if (array.length > 0) {
        count += array[0] === value ? 1 : 0;
        count += countOccurrence(array.slice(1), value);
    }
    return count;    
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    var res = [];
    if (array.length === 0) {
        return res;
    }
    res.push(callback(array[0]));
    return res.concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    if (typeof obj !== 'object') {
        return 0;
    }
    var count = 0;
    for (var currKey in obj) {
        if (currKey === key) {
            count++;
        }
        if (typeof obj[currKey] === 'object') {
            count += countKeysInObj(obj[currKey], key);
        }
    }
    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var count = 0;
    if (typeof obj !== 'object') {
        return count;
    }
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            count += countValuesInObj(obj[key], value);
        } else {
            count += obj[key] === value ? 1 : 0;
        }
    }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    if (typeof obj !== 'object') {
        return;
    }
    for (var key in obj) {
        if (key === oldKey) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
        if (typeof obj[key] === 'object') {
            replaceKeysInObj(obj[key], oldKey, newKey);
        } 
    }
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n <= 0) {
        return null;
    }
    if (n === 1) {
        return [0, 1];
    }
    var res = fibonacci(n - 1);
    var len = res.length;
    res.push(res[len - 1] + res[len - 2]);
    
    return res;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    var capitalizedArr = [];
    capitalizedArr.push(array[0].toUpperCase());
    if (array.length === 1) {
        return capitalizedArr;
    }
    return capitalizedArr.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    var capitalizedArr = [];
    var capitalizedFirstWord = array[0].charAt(0).toUpperCase() + array[0].slice(1);
    capitalizedArr.push(capitalizedFirstWord);
    if (array.length === 1) {
        return capitalizedArr;
    }
    return capitalizedArr.concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var sum = 0;
    if (typeof obj !== 'object') {
        return sum;
    }

    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    var flattenedArr = [];
    if (!Array.isArray(array)) {
        return array;
    }
    for (var i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            flattenedArr.push(array[i]);
        } else {
            flattenedArr = flattenedArr.concat(flatten(array[i]));
        }
    }
    return flattenedArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
    if (obj === undefined) {
        obj = {};
    }
    if (str.length === 0) {
        return obj;
    }
    var currChar = str.charAt(0);
    if (obj[currChar] === undefined) {
        obj[currChar] = 1;
    } else {
        obj[currChar]++;
    }
    return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    if (list.length <= 1) {
        return list;
    }
    var res = compress(list.slice(1));
    if (list[0] === list[1]) {
        return res;
    }
    return [list[0]].concat(res);
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    var augmentedArr = [];
    var augmentedFirstElement = array[0];
    augmentedFirstElement.push(aug);
    augmentedArr.push(augmentedFirstElement);
    if (array.length > 1) {
        augmentedArr = augmentedArr.concat(augmentElements(array.slice(1), aug));
    }
    return augmentedArr;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length <= 1) {
        return array;
    }
    var res = minimizeZeroes(array.slice(1));
    if (array[0] === 0 && array[0] === array[1]) {
        return res;
    }
    return [array[0]].concat(res);
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    var res = [];
    res.push(Math.abs(array[0]));
    if (array.length > 1) {
        res.push(-Math.abs(array[1]));
    }
    if (array.length > 2) {
        res = res.concat(alternateSign(array.slice(2)));
    }
    return res;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var numToText = function(str) {
    var convertedStr = '';
    if (str.length === 0) {
        return convertedStr;
    }
    var num = parseInt(str.charAt(0));
    if (isNaN(num)) {
        convertedStr += str.charAt(0);
    } else {
        convertedStr += numbers[num];
    }
 
    convertedStr += numToText(str.substring(1));
    return convertedStr;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    var count = 0;
    if (node === undefined) {
        node = document.getElementsByTagName("BODY")[0];
    }
    if (node.tagName.toLowerCase() === tag) {
        count++;
    }
    var children = node.children;
    for (var i = 0; i < children.length; i++) {
        count += tagCount(tag, children[i]);
    }
    return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
    // if (min === undefined) {
    //     min = 0;
    // }
    // if (max === undefined) {
    //     max = array.length - 1;
    // }
    var len = array.length;
    // if (min > max) {
    if (len === 0 || array[0] > target || array[len - 1] < target) {
        return null;
    }

    var len = array.length;
    var mid = Math.floor(len / 2);
    if (array[mid] === target) {
        return mid;
    }
    if (array[mid] < target) {
        var res = binarySearch(array.slice(mid + 1), target);
        if (res === null) {
            return res;
        }
        return mid + 1 + res;
    } else { // array[mid] > target
        return binarySearch(array.slice(0, mid), target);
    }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    var len = array.length;
    if (len <= 1) {
        return array;
    }
    var mid = Math.floor(len / 2);
    var firstSubArray = mergeSort(array.slice(0, mid));
    var secondSubArray = mergeSort(array.slice(mid));
    return mergeAndSort(firstSubArray, secondSubArray);
};

var mergeAndSort = function(arr1, arr2) {
    var len1 = arr1.length;
    var len2 = arr2.length;
    var p1 = 0;
    var p2 = 0;
    var sortedArr = [];
    var p = 0;
    while (p1 < len1 || p2 < len2) {
        if (p2 === len2 || (p1 < len1 && arr1[p1] <= arr2[p2])) { // pick from arr1
            sortedArr[p] = arr1[p1];
            p1++;
        } else { // pick from arr2
            sortedArr[p] = arr2[p2];
            p2++;
        }
        p++;
    }
    return sortedArr;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
    var cloned = undefined;
    if (typeof input !== 'object') { // input is a primitive
        return input;
    }
    if (Array.isArray(input)) {
        cloned = [];
        for (var i = 0; i < input.length; i++) {
            cloned.push(clone(input[i]));        
        }
    } else {
        cloned = {};
        for (var key in input) {
            cloned[key] = clone(input[key]);
        }
    }
    return cloned;
};
