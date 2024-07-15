const reverseString = function(word) 
{
    let reverseWord = [];
    for (let i = word.length; i >= 0; i--) {
        reverseWord.push(word.charAt(i));
    }
    reverseWord =reverseWord.join("");
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
