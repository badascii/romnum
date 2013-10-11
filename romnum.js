if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("53 in roman numerals is: " + decimalToRoman(53));

}
/*-----------------------------------------------------------------------------


     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";
  var digitsArray = ("" + decNumber).split("");
  var length = digitsArray.length;
  // Implement here!
  for (i = 0; i < length; i++) {
    if (length === 4) {
      var number = parseInt(digitsArray[0], 10);
      for (i = 0; i < counter; i++) {
        romNumeral += "M";
    }

    if (length > 2 && < 5) {
      var number =
    }
  };

  return romNumeral;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  // Implement here!

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;