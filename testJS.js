// Funktionen accepterar argument som är heltal
// Om heltalet är under 0 så returnerar den alltid 0
// Om heltalet är 1-10 så returnerar den heltaled
// Om heltalet är över 10 så returneras talet gånger sig själv

function wholesome (number)
{
if (number < 0) {
    return 0;   
}
if (number > 0 && number < 11) {
    return number;
}
if (number > 10) {

    return number*2;
}
}

console.log(wholesome(-1))
console.log(wholesome(5))
console.log(wholesome(15))
