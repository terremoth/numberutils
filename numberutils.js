const NumberUtils = {};

NumberUtils.isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

NumberUtils.isInt = function(n){
    return Number(n) === n && n % 1 === 0;
};

NumberUtils.isNatural = function(n){
    if (isInt(n)) {
        return n >= 0;
    }
    return false;
};

NumberUtils.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
};

NumberUtils.isHex = function(str) {
    return /^#[0-9A-F]{6}$/i.test(str);
};

NumberUtils.isHexColor = function(strNum){
  return (typeof strNum === "string") && strNum.length === 6 
         && ! isNaN( parseInt(strNum, 16) );
};

NumberUtils.romanToNumber = function(str) {  
    var result = 0,
        decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    
    for (var i = 0; i <= decimal.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += decimal[i];
            str = str.replace(roman[i],'');
        }
    }
    
    return result;
};

NumberUtils.numberToRoman = function(num) {
    var result = '',
        decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  
    for (var i = 0; i <= decimal.length; i++) {
        while (num%decimal[i] < num) {     
            result += roman[i];
            num -= decimal[i];
        }
    }
    
    return result;
};

NumberUtils.isNumericDigit = function(evt) {
    return (evt.keyCode >= 48 && evt.keyCode <= 57) 
        || (evt.keyCode >= 96 && evt.keyCode <= 105);
};
