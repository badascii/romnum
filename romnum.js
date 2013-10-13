var decimalToRoman = function(decNumber) {
  var romNumeral = "";
  var digitsArray = ("" + decNumber).split("");
  var length = digitsArray.length;
  var numerals = {
       1 : "I",
       5 : "V",
      10 : "X",
      50 : "L",
     100 : "C",
     500 : "D",
    1000 : "M"
  };

    if (length === 4) {
      for (i = 0; i < num; i++)
      romNumerals += numerals.1000;
    }
  };

  return romNumeral;
};

var sizeChecker = function(digit, length) {
  var len = number.toString().length;
  switch(len) {
  case 1:
    processDigit(digit);
  }
};

var processDigit = function(digit) {
  var returnString = "";
  switch(digit) {
  case 1:
    switch(len) {
    case 1:
      returnString = "I";
      break;
    case 2:
      returnString = "X";
      break;
    case 3:
      returnString = "C";
      break;
    case 4:
      returnString = "M";
      break;
    default:
      returnString = "Cannot process numbers greater than 4 digits.";
    }

  case 5:

  case 6:

  case 7:

  case 8:

  case 9:

  }
}

var romanToDecimal = function(romNumeral) {
  var decNumber = 0;
  return decNumber;
};