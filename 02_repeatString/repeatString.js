const repeatString = function(word,num)
{
    let times = 0;
    phrase = "";
    if (num >= 0)
    {
        while (times < num)
            {
                phrase += word;
                times ++;
            }
        return phrase;
    }
    else
    {
        return "ERROR";
    }
};
// Do not edit below this line
module.exports = repeatString;
