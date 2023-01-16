const nineHundred = "nine hundred"; //900
const eightHundred = "eight hundred"; //800
const sevenHundred = "seven hundred"; //700
const sixHundred = "six hundred"; //600
const fiveHundred = "five hundred"; //500
const fourHundred = "four hundred"; //400
const threeHundred = "three hundred"; //300
const twoHundred = "two hundred"; //200
const oneHundred = "one hundred"; // 100

const nineteen = "nineteen"; //19
const neighteen = "eighteen"; //18
const seventeen = "seventeen"; //17
const sixteen = "sixteen"; //16
const fifteen = "fifteen"; //15
const fourteen = "fourteen"; //14
const thirteen = "thirteen"; //13
const twelve = "twelve"; //12
const eleven = "eleven"; //11
const ten = "ten"; //10

const nineTens = "ninety"; //90
const eightTens = "eighty"; //80
const sevenTens = "seventy"; //70
const sixTens = "sixty"; //60
const fifTens = "fifty"; //50
const fourTens = "forty"; //40
const threeTens = "thirty"; //30
const twoTens = "twenty"; //20

module.exports = function toReadable(number) {
    const hundret = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = Math.floor((number % 100) % 10);

    if (hundret == 0 && tens == 0) {
        // с 0 до 9
        if (units == 1) {
            return "one";
        } else if (units == 2) {
            return "two";
        } else if (units == 3) {
            return "three";
        } else if (units == 4) {
            return "four";
        } else if (units == 5) {
            return "five";
        } else if (units == 6) {
            return "six";
        } else if (units == 7) {
            return "seven";
        } else if (units == 8) {
            return "eight";
        } else if (units == 9) {
            return "nine";
        } else {
            return "zero";
        }
    } else if (hundret == 0 && units == 0) {
        // десятки
        if (tens == 1) {
            return ten;
        } else if (tens == 2) {
            return twoTens;
        } else if (tens == 3) {
            return threeTens;
        } else if (tens == 4) {
            return fourTens;
        } else if (tens == 5) {
            return fifTens;
        } else if (tens == 6) {
            return sixTens;
        } else if (tens == 7) {
            return sevenTens;
        } else if (tens == 8) {
            return eightTens;
        } else if (tens == 9) {
            return nineTens;
        }
    } else if (tens == 0 && units == 0) {
        // сотки
        if (hundret == 1) {
            return oneHundred;
        } else if (hundret == 2) {
            return twoHundred;
        } else if (hundret == 3) {
            return threeHundred;
        } else if (hundret == 4) {
            return fourHundred;
        } else if (hundret == 5) {
            return fiveHundred;
        } else if (hundret == 6) {
            return sixHundred;
        } else if (hundret == 7) {
            return sevenHundred;
        } else if (hundret == 8) {
            return eightHundred;
        } else if (hundret == 9) {
            return nineHundred;
        }
    } else if (number > 10 && number < 20) {
        // с 11 до 19
        if (number == 11) {
            return eleven;
        } else if (number == 12) {
            return twelve;
        } else if (number == 13) {
            return thirteen;
        } else if (number == 14) {
            return fourteen;
        } else if (number == 15) {
            return fifteen;
        } else if (number == 16) {
            return sixteen;
        } else if (number == 17) {
            return seventeen;
        } else if (number == 18) {
            return neighteen;
        } else if (number == 19) {
            return nineteen;
        }
    } else if (hundret == 0 && tens == 2) {
        // 20 >
        if (units == 1) {
            return twoTens + " one";
        } else if (units == 2) {
            return twoTens + " two";
        } else if (units == 3) {
            return twoTens + " three";
        } else if (units == 4) {
            return twoTens + " four";
        } else if (units == 5) {
            return twoTens + " five";
        } else if (units == 6) {
            return twoTens + " six";
        } else if (units == 7) {
            return twoTens + " seven";
        } else if (units == 8) {
            return twoTens + " eight";
        } else if (units == 9) {
            return twoTens + " nine";
        }
    } else if (hundret == 0 && tens == 3) {
        // 30 >
        if (units == 1) {
            return threeTens + " one";
        } else if (units == 2) {
            return threeTens + " two";
        } else if (units == 3) {
            return threeTens + " three";
        } else if (units == 4) {
            return threeTens + " four";
        } else if (units == 5) {
            return threeTens + " five";
        } else if (units == 6) {
            return threeTens + " six";
        } else if (units == 7) {
            return threeTens + " seven";
        } else if (units == 8) {
            return threeTens + " eight";
        } else if (units == 9) {
            return threeTens + " nine";
        }
    } else if (hundret == 0 && tens == 4) {
        // 40 >
        if (units == 1) {
            return fourTens + " one";
        } else if (units == 2) {
            return fourTens + " two";
        } else if (units == 3) {
            return fourTens + " three";
        } else if (units == 4) {
            return fourTens + " four";
        } else if (units == 5) {
            return fourTens + " five";
        } else if (units == 6) {
            return fourTens + " six";
        } else if (units == 7) {
            return fourTens + " seven";
        } else if (units == 8) {
            return fourTens + " eight";
        } else if (units == 9) {
            return fourTens + " nine";
        }
    } else if (hundret == 0 && tens == 5) {
        // 50 >
        if (units == 1) {
            return fifTens + " one";
        } else if (units == 2) {
            return fifTens + " two";
        } else if (units == 3) {
            return fifTens + " three";
        } else if (units == 4) {
            return fifTens + " four";
        } else if (units == 5) {
            return fifTens + " five";
        } else if (units == 6) {
            return fifTens + " six";
        } else if (units == 7) {
            return fifTens + " seven";
        } else if (units == 8) {
            return fifTens + " eight";
        } else if (units == 9) {
            return fifTens + " nine";
        }
    } else if (hundret == 0 && tens == 6) {
        // 60 >
        if (units == 1) {
            return sixTens + " one";
        } else if (units == 2) {
            return sixTens + " two";
        } else if (units == 3) {
            return sixTens + " three";
        } else if (units == 4) {
            return sixTens + " four";
        } else if (units == 5) {
            return sixTens + " five";
        } else if (units == 6) {
            return sixTens + " six";
        } else if (units == 7) {
            return sixTens + " seven";
        } else if (units == 8) {
            return sixTens + " eight";
        } else if (units == 9) {
            return sixTens + " nine";
        }
    } else if (hundret == 0 && tens == 7) {
        // 70 >
        if (units == 1) {
            return sevenTens + " one";
        } else if (units == 2) {
            return sevenTens + " two";
        } else if (units == 3) {
            return sevenTens + " three";
        } else if (units == 4) {
            return sevenTens + " four";
        } else if (units == 5) {
            return sevenTens + " five";
        } else if (units == 6) {
            return sevenTens + " six";
        } else if (units == 7) {
            return sevenTens + " seven";
        } else if (units == 8) {
            return sevenTens + " eight";
        } else if (units == 9) {
            return sevenTens + " nine";
        }
    } else if (hundret == 0 && tens == 8) {
        // 80 >
        if (units == 1) {
            return eightTens + " one";
        } else if (units == 2) {
            return eightTens + " two";
        } else if (units == 3) {
            return eightTens + " three";
        } else if (units == 4) {
            return eightTens + " four";
        } else if (units == 5) {
            return eightTens + " five";
        } else if (units == 6) {
            return eightTens + " six";
        } else if (units == 7) {
            return eightTens + " seven";
        } else if (units == 8) {
            return eightTens + " eight";
        } else if (units == 9) {
            return eightTens + " nine";
        }
    } else if (hundret == 0 && tens == 9) {
        // 90 >
        if (units == 1) {
            return nineTens + " one";
        } else if (units == 2) {
            return nineTens + " two";
        } else if (units == 3) {
            return nineTens + " three";
        } else if (units == 4) {
            return nineTens + " four";
        } else if (units == 5) {
            return nineTens + " five";
        } else if (units == 6) {
            return nineTens + " six";
        } else if (units == 7) {
            return nineTens + " seven";
        } else if (units == 8) {
            return nineTens + " eight";
        } else if (units == 9) {
            return nineTens + " nine";
        }
    } else if (hundret == 1) {
        // 100 >
        if (tens == 0) {
            if (units == 1) {
                return oneHundred + " one";
            } else if (units == 2) {
                return oneHundred + " two";
            } else if (units == 3) {
                return oneHundred + " three";
            } else if (units == 4) {
                return oneHundred + " four";
            } else if (units == 5) {
                return oneHundred + " five";
            } else if (units == 6) {
                return oneHundred + " six";
            } else if (units == 7) {
                return oneHundred + " seven";
            } else if (units == 8) {
                return oneHundred + " eight";
            } else if (units == 9) {
                return oneHundred + " nine";
            }
        } else if (tens == 1) {
            // 110 >
            if (number - 100 == 11) {
                return oneHundred + " " + eleven;
            } else if (number - 100 == 12) {
                return oneHundred + " " + twelve;
            } else if (number - 100 == 13) {
                return oneHundred + " " + thirteen;
            } else if (number - 100 == 14) {
                return oneHundred + " " + fourteen;
            } else if (number - 100 == 15) {
                return oneHundred + " " + fifteen;
            } else if (number - 100 == 16) {
                return oneHundred + " " + sixteen;
            } else if (number - 100 == 17) {
                return oneHundred + " " + seventeen;
            } else if (number - 100 == 18) {
                return oneHundred + " " + neighteen;
            } else if (number - 100 == 19) {
                return oneHundred + " " + nineteen;
            } else if (number - 100 == 10) {
                return oneHundred + " " + ten;
            }
        } else if (tens == 2) {
            // 120 >
            if (number - 100 == 21) {
                return oneHundred + " " + twoTens + " one";
            } else if (number - 100 == 22) {
                return oneHundred + " " + twoTens + " two";
            } else if (number - 100 == 23) {
                return oneHundred + " " + twoTens + " three";
            } else if (number - 100 == 24) {
                return oneHundred + " " + twoTens + " four";
            } else if (number - 100 == 25) {
                return oneHundred + " " + twoTens + " five";
            } else if (number - 100 == 26) {
                return oneHundred + " " + twoTens + " six";
            } else if (number - 100 == 27) {
                return oneHundred + " " + twoTens + " seven";
            } else if (number - 100 == 28) {
                return oneHundred + " " + twoTens + " eight";
            } else if (number - 100 == 29) {
                return oneHundred + " " + twoTens + " nine";
            } else if (number - 100 == 20) {
                return oneHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            // 130 >
            if (number - 100 == 31) {
                return oneHundred + " " + threeTens + " one";
            } else if (number - 100 == 32) {
                return oneHundred + " " + threeTens + " two";
            } else if (number - 100 == 33) {
                return oneHundred + " " + threeTens + " three";
            } else if (number - 100 == 34) {
                return oneHundred + " " + threeTens + " four";
            } else if (number - 100 == 35) {
                return oneHundred + " " + threeTens + " five";
            } else if (number - 100 == 36) {
                return oneHundred + " " + threeTens + " six";
            } else if (number - 100 == 37) {
                return oneHundred + " " + threeTens + " seven";
            } else if (number - 100 == 38) {
                return oneHundred + " " + threeTens + " eight";
            } else if (number - 100 == 39) {
                return oneHundred + " " + threeTens + " nine";
            } else if (number - 100 == 30) {
                return oneHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 100 == 41) {
                return oneHundred + " " + fourTens + " one";
            } else if (number - 100 == 42) {
                return oneHundred + " " + fourTens + " two";
            } else if (number - 100 == 43) {
                return oneHundred + " " + fourTens + " three";
            } else if (number - 100 == 44) {
                return oneHundred + " " + fourTens + " four";
            } else if (number - 100 == 45) {
                return oneHundred + " " + fourTens + " five";
            } else if (number - 100 == 46) {
                return oneHundred + " " + fourTens + " six";
            } else if (number - 100 == 47) {
                return oneHundred + " " + fourTens + " seven";
            } else if (number - 100 == 48) {
                return oneHundred + " " + fourTens + " eight";
            } else if (number - 100 == 49) {
                return oneHundred + " " + fourTens + " nine";
            } else if (number - 100 == 40) {
                return oneHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 100 == 51) {
                return oneHundred + " " + fifTens + " one";
            } else if (number - 100 == 52) {
                return oneHundred + " " + fifTens + " two";
            } else if (number - 100 == 53) {
                return oneHundred + " " + fifTens + " three";
            } else if (number - 100 == 54) {
                return oneHundred + " " + fifTens + " four";
            } else if (number - 100 == 55) {
                return oneHundred + " " + fifTens + " five";
            } else if (number - 100 == 56) {
                return oneHundred + " " + fifTens + " six";
            } else if (number - 100 == 57) {
                return oneHundred + " " + fifTens + " seven";
            } else if (number - 100 == 58) {
                return oneHundred + " " + fifTens + " eight";
            } else if (number - 100 == 59) {
                return oneHundred + " " + fifTens + " nine";
            } else if (number - 100 == 50) {
                return oneHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 100 == 61) {
                return oneHundred + " " + sixTens + " one";
            } else if (number - 100 == 62) {
                return oneHundred + " " + sixTens + " two";
            } else if (number - 100 == 63) {
                return oneHundred + " " + sixTens + " three";
            } else if (number - 100 == 64) {
                return oneHundred + " " + sixTens + " four";
            } else if (number - 100 == 65) {
                return oneHundred + " " + sixTens + " five";
            } else if (number - 100 == 66) {
                return oneHundred + " " + sixTens + " six";
            } else if (number - 100 == 67) {
                return oneHundred + " " + sixTens + " seven";
            } else if (number - 100 == 68) {
                return oneHundred + " " + sixTens + " eight";
            } else if (number - 100 == 69) {
                return oneHundred + " " + sixTens + " nine";
            } else if (number - 100 == 60) {
                return oneHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 100 == 71) {
                return oneHundred + " " + sevenTens + " one";
            } else if (number - 100 == 72) {
                return oneHundred + " " + sevenTens + " two";
            } else if (number - 100 == 73) {
                return oneHundred + " " + sevenTens + " three";
            } else if (number - 100 == 74) {
                return oneHundred + " " + sevenTens + " four";
            } else if (number - 100 == 75) {
                return oneHundred + " " + sevenTens + " five";
            } else if (number - 100 == 76) {
                return oneHundred + " " + sevenTens + " six";
            } else if (number - 100 == 77) {
                return oneHundred + " " + sevenTens + " seven";
            } else if (number - 100 == 78) {
                return oneHundred + " " + sevenTens + " eight";
            } else if (number - 100 == 79) {
                return oneHundred + " " + sevenTens + " nine";
            } else if (number - 100 == 70) {
                return oneHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 100 == 81) {
                return oneHundred + " " + eightTens + " one";
            } else if (number - 100 == 82) {
                return oneHundred + " " + eightTens + " two";
            } else if (number - 100 == 83) {
                return oneHundred + " " + eightTens + " three";
            } else if (number - 100 == 84) {
                return oneHundred + " " + eightTens + " four";
            } else if (number - 100 == 85) {
                return oneHundred + " " + eightTens + " five";
            } else if (number - 100 == 86) {
                return oneHundred + " " + eightTens + " six";
            } else if (number - 100 == 87) {
                return oneHundred + " " + eightTens + " seven";
            } else if (number - 100 == 88) {
                return oneHundred + " " + eightTens + " eight";
            } else if (number - 100 == 89) {
                return oneHundred + " " + eightTens + " nine";
            } else if (number - 100 == 80) {
                return oneHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 100 == 91) {
                return oneHundred + " " + nineTens + " one";
            } else if (number - 100 == 92) {
                return oneHundred + " " + nineTens + " two";
            } else if (number - 100 == 93) {
                return oneHundred + " " + nineTens + " three";
            } else if (number - 100 == 94) {
                return oneHundred + " " + nineTens + " four";
            } else if (number - 100 == 95) {
                return oneHundred + " " + nineTens + " five";
            } else if (number - 100 == 96) {
                return oneHundred + " " + nineTens + " six";
            } else if (number - 100 == 97) {
                return oneHundred + " " + nineTens + " seven";
            } else if (number - 100 == 98) {
                return oneHundred + " " + nineTens + " eight";
            } else if (number - 100 == 99) {
                return oneHundred + " " + nineTens + " nine";
            } else if (number - 100 == 90) {
                return oneHundred + " " + nineTens;
            }
        }
    } else if (hundret == 2) {
        // 200 >
        if (tens == 0) {
            if (units == 1) {
                return twoHundred + " one";
            } else if (units == 2) {
                return twoHundred + " two";
            } else if (units == 3) {
                return twoHundred + " three";
            } else if (units == 4) {
                return twoHundred + " four";
            } else if (units == 5) {
                return twoHundred + " five";
            } else if (units == 6) {
                return twoHundred + " six";
            } else if (units == 7) {
                return twoHundred + " seven";
            } else if (units == 8) {
                return twoHundred + " eight";
            } else if (units == 9) {
                return twoHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 200 == 11) {
                return twoHundred + " " + eleven;
            } else if (number - 200 == 12) {
                return twoHundred + " " + twelve;
            } else if (number - 200 == 13) {
                return twoHundred + " " + thirteen;
            } else if (number - 200 == 14) {
                return twoHundred + " " + fourteen;
            } else if (number - 200 == 15) {
                return twoHundred + " " + fifteen;
            } else if (number - 200 == 16) {
                return twoHundred + " " + sixteen;
            } else if (number - 200 == 17) {
                return twoHundred + " " + seventeen;
            } else if (number - 200 == 18) {
                return twoHundred + " " + neighteen;
            } else if (number - 200 == 19) {
                return twoHundred + " " + nineteen;
            } else if (number - 200 == 10) {
                return twoHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 200 == 21) {
                return twoHundred + " " + twoTens + " one";
            } else if (number - 200 == 22) {
                return twoHundred + " " + twoTens + " two";
            } else if (number - 200 == 23) {
                return twoHundred + " " + twoTens + " three";
            } else if (number - 200 == 24) {
                return twoHundred + " " + twoTens + " four";
            } else if (number - 200 == 25) {
                return twoHundred + " " + twoTens + " five";
            } else if (number - 200 == 26) {
                return twoHundred + " " + twoTens + " six";
            } else if (number - 200 == 27) {
                return twoHundred + " " + twoTens + " seven";
            } else if (number - 200 == 28) {
                return twoHundred + " " + twoTens + " eight";
            } else if (number - 200 == 29) {
                return twoHundred + " " + twoTens + " nine";
            } else if (number - 200 == 20) {
                return twoHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 200 == 31) {
                return twoHundred + " " + threeTens + " one";
            } else if (number - 200 == 32) {
                return twoHundred + " " + threeTens + " two";
            } else if (number - 200 == 33) {
                return twoHundred + " " + threeTens + " three";
            } else if (number - 200 == 34) {
                return twoHundred + " " + threeTens + " four";
            } else if (number - 200 == 35) {
                return twoHundred + " " + threeTens + " five";
            } else if (number - 200 == 36) {
                return twoHundred + " " + threeTens + " six";
            } else if (number - 200 == 37) {
                return twoHundred + " " + threeTens + " seven";
            } else if (number - 200 == 38) {
                return twoHundred + " " + threeTens + " eight";
            } else if (number - 200 == 39) {
                return twoHundred + " " + threeTens + " nine";
            } else if (number - 200 == 30) {
                return twoHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 200 == 41) {
                return twoHundred + " " + fourTens + " one";
            } else if (number - 200 == 42) {
                return twoHundred + " " + fourTens + " two";
            } else if (number - 200 == 43) {
                return twoHundred + " " + fourTens + " three";
            } else if (number - 200 == 44) {
                return twoHundred + " " + fourTens + " four";
            } else if (number - 200 == 45) {
                return twoHundred + " " + fourTens + " five";
            } else if (number - 200 == 46) {
                return twoHundred + " " + fourTens + " six";
            } else if (number - 200 == 47) {
                return twoHundred + " " + fourTens + " seven";
            } else if (number - 200 == 48) {
                return twoHundred + " " + fourTens + " eight";
            } else if (number - 200 == 49) {
                return twoHundred + " " + fourTens + " nine";
            } else if (number - 200 == 40) {
                return twoHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 200 == 51) {
                return twoHundred + " " + fifTens + " one";
            } else if (number - 200 == 52) {
                return twoHundred + " " + fifTens + " two";
            } else if (number - 200 == 53) {
                return twoHundred + " " + fifTens + " three";
            } else if (number - 200 == 54) {
                return twoHundred + " " + fifTens + " four";
            } else if (number - 200 == 55) {
                return twoHundred + " " + fifTens + " five";
            } else if (number - 200 == 56) {
                return twoHundred + " " + fifTens + " six";
            } else if (number - 200 == 57) {
                return twoHundred + " " + fifTens + " seven";
            } else if (number - 200 == 58) {
                return twoHundred + " " + fifTens + " eight";
            } else if (number - 200 == 59) {
                return twoHundred + " " + fifTens + " nine";
            } else if (number - 200 == 50) {
                return twoHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 200 == 61) {
                return twoHundred + " " + sixTens + " one";
            } else if (number - 200 == 62) {
                return twoHundred + " " + sixTens + " two";
            } else if (number - 200 == 63) {
                return twoHundred + " " + sixTens + " three";
            } else if (number - 200 == 64) {
                return twoHundred + " " + sixTens + " four";
            } else if (number - 200 == 65) {
                return twoHundred + " " + sixTens + " five";
            } else if (number - 200 == 66) {
                return twoHundred + " " + sixTens + " six";
            } else if (number - 200 == 67) {
                return twoHundred + " " + sixTens + " seven";
            } else if (number - 200 == 68) {
                return twoHundred + " " + sixTens + " eight";
            } else if (number - 200 == 69) {
                return twoHundred + " " + sixTens + " nine";
            } else if (number - 200 == 60) {
                return twoHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 200 == 71) {
                return twoHundred + " " + sevenTens + " one";
            } else if (number - 200 == 72) {
                return twoHundred + " " + sevenTens + " two";
            } else if (number - 200 == 73) {
                return twoHundred + " " + sevenTens + " three";
            } else if (number - 200 == 74) {
                return twoHundred + " " + sevenTens + " four";
            } else if (number - 200 == 75) {
                return twoHundred + " " + sevenTens + " five";
            } else if (number - 200 == 76) {
                return twoHundred + " " + sevenTens + " six";
            } else if (number - 200 == 77) {
                return twoHundred + " " + sevenTens + " seven";
            } else if (number - 200 == 78) {
                return twoHundred + " " + sevenTens + " eight";
            } else if (number - 200 == 79) {
                return twoHundred + " " + sevenTens + " nine";
            } else if (number - 200 == 70) {
                return twoHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 200 == 81) {
                return twoHundred + " " + eightTens + " one";
            } else if (number - 200 == 82) {
                return twoHundred + " " + eightTens + " two";
            } else if (number - 200 == 83) {
                return twoHundred + " " + eightTens + " three";
            } else if (number - 200 == 84) {
                return twoHundred + " " + eightTens + " four";
            } else if (number - 200 == 85) {
                return twoHundred + " " + eightTens + " five";
            } else if (number - 200 == 86) {
                return twoHundred + " " + eightTens + " six";
            } else if (number - 200 == 87) {
                return twoHundred + " " + eightTens + " seven";
            } else if (number - 200 == 88) {
                return twoHundred + " " + eightTens + " eight";
            } else if (number - 200 == 89) {
                return twoHundred + " " + eightTens + " nine";
            } else if (number - 200 == 80) {
                return twoHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 200 == 91) {
                return twoHundred + " " + nineTens + " one";
            } else if (number - 200 == 92) {
                return twoHundred + " " + nineTens + " two";
            } else if (number - 200 == 93) {
                return twoHundred + " " + nineTens + " three";
            } else if (number - 200 == 94) {
                return twoHundred + " " + nineTens + " four";
            } else if (number - 200 == 95) {
                return twoHundred + " " + nineTens + " five";
            } else if (number - 200 == 96) {
                return twoHundred + " " + nineTens + " six";
            } else if (number - 200 == 97) {
                return twoHundred + " " + nineTens + " seven";
            } else if (number - 200 == 98) {
                return twoHundred + " " + nineTens + " eight";
            } else if (number - 200 == 99) {
                return twoHundred + " " + nineTens + " nine";
            } else if (number - 200 == 90) {
                return twoHundred + " " + nineTens;
            }
        }
    } else if (hundret == 3) {
        // 300 >
        if (tens == 0) {
            if (units == 1) {
                return threeHundred + " one";
            } else if (units == 2) {
                return threeHundred + " two";
            } else if (units == 3) {
                return threeHundred + " three";
            } else if (units == 4) {
                return threeHundred + " four";
            } else if (units == 5) {
                return threeHundred + " five";
            } else if (units == 6) {
                return threeHundred + " six";
            } else if (units == 7) {
                return threeHundred + " seven";
            } else if (units == 8) {
                return threeHundred + " eight";
            } else if (units == 9) {
                return threeHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 300 == 11) {
                return threeHundred + " " + eleven;
            } else if (number - 300 == 12) {
                return threeHundred + " " + twelve;
            } else if (number - 300 == 13) {
                return threeHundred + " " + thirteen;
            } else if (number - 300 == 14) {
                return threeHundred + " " + fourteen;
            } else if (number - 300 == 15) {
                return threeHundred + " " + fifteen;
            } else if (number - 300 == 16) {
                return threeHundred + " " + sixteen;
            } else if (number - 300 == 17) {
                return threeHundred + " " + seventeen;
            } else if (number - 300 == 18) {
                return threeHundred + " " + neighteen;
            } else if (number - 300 == 19) {
                return threeHundred + " " + nineteen;
            } else if (number - 300 == 10) {
                return threeHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 300 == 21) {
                return threeHundred + " " + twoTens + " one";
            } else if (number - 300 == 22) {
                return threeHundred + " " + twoTens + " two";
            } else if (number - 300 == 23) {
                return threeHundred + " " + twoTens + " three";
            } else if (number - 300 == 24) {
                return threeHundred + " " + twoTens + " four";
            } else if (number - 300 == 25) {
                return threeHundred + " " + twoTens + " five";
            } else if (number - 300 == 26) {
                return threeHundred + " " + twoTens + " six";
            } else if (number - 300 == 27) {
                return threeHundred + " " + twoTens + " seven";
            } else if (number - 300 == 28) {
                return threeHundred + " " + twoTens + " eight";
            } else if (number - 300 == 29) {
                return threeHundred + " " + twoTens + " nine";
            } else if (number - 300 == 20) {
                return threeHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 300 == 31) {
                return threeHundred + " " + threeTens + " one";
            } else if (number - 300 == 32) {
                return threeHundred + " " + threeTens + " two";
            } else if (number - 300 == 33) {
                return threeHundred + " " + threeTens + " three";
            } else if (number - 300 == 34) {
                return threeHundred + " " + threeTens + " four";
            } else if (number - 300 == 35) {
                return threeHundred + " " + threeTens + " five";
            } else if (number - 300 == 36) {
                return threeHundred + " " + threeTens + " six";
            } else if (number - 300 == 37) {
                return threeHundred + " " + threeTens + " seven";
            } else if (number - 300 == 38) {
                return threeHundred + " " + threeTens + " eight";
            } else if (number - 300 == 39) {
                return threeHundred + " " + threeTens + " nine";
            } else if (number - 300 == 30) {
                return threeHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 300 == 41) {
                return threeHundred + " " + fourTens + " one";
            } else if (number - 300 == 42) {
                return threeHundred + " " + fourTens + " two";
            } else if (number - 300 == 43) {
                return threeHundred + " " + fourTens + " three";
            } else if (number - 300 == 44) {
                return threeHundred + " " + fourTens + " four";
            } else if (number - 300 == 45) {
                return threeHundred + " " + fourTens + " five";
            } else if (number - 300 == 46) {
                return threeHundred + " " + fourTens + " six";
            } else if (number - 300 == 47) {
                return threeHundred + " " + fourTens + " seven";
            } else if (number - 300 == 48) {
                return threeHundred + " " + fourTens + " eight";
            } else if (number - 300 == 49) {
                return threeHundred + " " + fourTens + " nine";
            } else if (number - 300 == 40) {
                return threeHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 300 == 51) {
                return threeHundred + " " + fifTens + " one";
            } else if (number - 300 == 52) {
                return threeHundred + " " + fifTens + " two";
            } else if (number - 300 == 53) {
                return threeHundred + " " + fifTens + " three";
            } else if (number - 300 == 54) {
                return threeHundred + " " + fifTens + " four";
            } else if (number - 300 == 55) {
                return threeHundred + " " + fifTens + " five";
            } else if (number - 300 == 56) {
                return threeHundred + " " + fifTens + " six";
            } else if (number - 300 == 57) {
                return threeHundred + " " + fifTens + " seven";
            } else if (number - 300 == 58) {
                return threeHundred + " " + fifTens + " eight";
            } else if (number - 300 == 59) {
                return threeHundred + " " + fifTens + " nine";
            } else if (number - 300 == 50) {
                return threeHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 300 == 61) {
                return threeHundred + " " + sixTens + " one";
            } else if (number - 300 == 62) {
                return threeHundred + " " + sixTens + " two";
            } else if (number - 300 == 63) {
                return threeHundred + " " + sixTens + " three";
            } else if (number - 300 == 64) {
                return threeHundred + " " + sixTens + " four";
            } else if (number - 300 == 65) {
                return threeHundred + " " + sixTens + " five";
            } else if (number - 300 == 66) {
                return threeHundred + " " + sixTens + " six";
            } else if (number - 300 == 67) {
                return threeHundred + " " + sixTens + " seven";
            } else if (number - 300 == 68) {
                return threeHundred + " " + sixTens + " eight";
            } else if (number - 300 == 69) {
                return threeHundred + " " + sixTens + " nine";
            } else if (number - 300 == 60) {
                return threeHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 300 == 71) {
                return threeHundred + " " + sevenTens + " one";
            } else if (number - 300 == 72) {
                return threeHundred + " " + sevenTens + " two";
            } else if (number - 300 == 73) {
                return threeHundred + " " + sevenTens + " three";
            } else if (number - 300 == 74) {
                return threeHundred + " " + sevenTens + " four";
            } else if (number - 300 == 75) {
                return threeHundred + " " + sevenTens + " five";
            } else if (number - 300 == 76) {
                return threeHundred + " " + sevenTens + " six";
            } else if (number - 300 == 77) {
                return threeHundred + " " + sevenTens + " seven";
            } else if (number - 300 == 78) {
                return threeHundred + " " + sevenTens + " eight";
            } else if (number - 300 == 79) {
                return threeHundred + " " + sevenTens + " nine";
            } else if (number - 300 == 70) {
                return threeHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 300 == 81) {
                return threeHundred + " " + eightTens + " one";
            } else if (number - 300 == 82) {
                return threeHundred + " " + eightTens + " two";
            } else if (number - 300 == 83) {
                return threeHundred + " " + eightTens + " three";
            } else if (number - 300 == 84) {
                return threeHundred + " " + eightTens + " four";
            } else if (number - 300 == 85) {
                return threeHundred + " " + eightTens + " five";
            } else if (number - 300 == 86) {
                return threeHundred + " " + eightTens + " six";
            } else if (number - 300 == 87) {
                return threeHundred + " " + eightTens + " seven";
            } else if (number - 300 == 88) {
                return threeHundred + " " + eightTens + " eight";
            } else if (number - 300 == 89) {
                return threeHundred + " " + eightTens + " nine";
            } else if (number - 300 == 80) {
                return threeHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 300 == 91) {
                return threeHundred + " " + nineTens + " one";
            } else if (number - 300 == 92) {
                return threeHundred + " " + nineTens + " two";
            } else if (number - 300 == 93) {
                return threeHundred + " " + nineTens + " three";
            } else if (number - 300 == 94) {
                return threeHundred + " " + nineTens + " four";
            } else if (number - 300 == 95) {
                return threeHundred + " " + nineTens + " five";
            } else if (number - 300 == 96) {
                return threeHundred + " " + nineTens + " six";
            } else if (number - 300 == 97) {
                return threeHundred + " " + nineTens + " seven";
            } else if (number - 300 == 98) {
                return threeHundred + " " + nineTens + " eight";
            } else if (number - 300 == 99) {
                return threeHundred + " " + nineTens + " nine";
            } else if (number - 300 == 90) {
                return threeHundred + " " + nineTens;
            }
        }
    } else if (hundret == 4) {
        // 400 >
        if (tens == 0) {
            if (units == 1) {
                return fourHundred + " one";
            } else if (units == 2) {
                return fourHundred + " two";
            } else if (units == 3) {
                return fourHundred + " three";
            } else if (units == 4) {
                return fourHundred + " four";
            } else if (units == 5) {
                return fourHundred + " five";
            } else if (units == 6) {
                return fourHundred + " six";
            } else if (units == 7) {
                return fourHundred + " seven";
            } else if (units == 8) {
                return fourHundred + " eight";
            } else if (units == 9) {
                return fourHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 400 == 11) {
                return fourHundred + " " + eleven;
            } else if (number - 400 == 12) {
                return fourHundred + " " + twelve;
            } else if (number - 400 == 13) {
                return fourHundred + " " + thirteen;
            } else if (number - 400 == 14) {
                return fourHundred + " " + fourteen;
            } else if (number - 400 == 15) {
                return fourHundred + " " + fifteen;
            } else if (number - 400 == 16) {
                return fourHundred + " " + sixteen;
            } else if (number - 400 == 17) {
                return fourHundred + " " + seventeen;
            } else if (number - 400 == 18) {
                return fourHundred + " " + neighteen;
            } else if (number - 400 == 19) {
                return fourHundred + " " + nineteen;
            } else if (number - 400 == 10) {
                return fourHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 400 == 21) {
                return fourHundred + " " + twoTens + " one";
            } else if (number - 400 == 22) {
                return fourHundred + " " + twoTens + " two";
            } else if (number - 400 == 23) {
                return fourHundred + " " + twoTens + " three";
            } else if (number - 400 == 24) {
                return fourHundred + " " + twoTens + " four";
            } else if (number - 400 == 25) {
                return fourHundred + " " + twoTens + " five";
            } else if (number - 400 == 26) {
                return fourHundred + " " + twoTens + " six";
            } else if (number - 400 == 27) {
                return fourHundred + " " + twoTens + " seven";
            } else if (number - 400 == 28) {
                return fourHundred + " " + twoTens + " eight";
            } else if (number - 400 == 29) {
                return fourHundred + " " + twoTens + " nine";
            } else if (number - 400 == 20) {
                return fourHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 400 == 31) {
                return fourHundred + " " + threeTens + " one";
            } else if (number - 400 == 32) {
                return fourHundred + " " + threeTens + " two";
            } else if (number - 400 == 33) {
                return fourHundred + " " + threeTens + " three";
            } else if (number - 400 == 34) {
                return fourHundred + " " + threeTens + " four";
            } else if (number - 400 == 35) {
                return fourHundred + " " + threeTens + " five";
            } else if (number - 400 == 36) {
                return fourHundred + " " + threeTens + " six";
            } else if (number - 400 == 37) {
                return fourHundred + " " + threeTens + " seven";
            } else if (number - 400 == 38) {
                return fourHundred + " " + threeTens + " eight";
            } else if (number - 400 == 39) {
                return fourHundred + " " + threeTens + " nine";
            } else if (number - 400 == 30) {
                return fourHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 400 == 41) {
                return fourHundred + " " + fourTens + " one";
            } else if (number - 400 == 42) {
                return fourHundred + " " + fourTens + " two";
            } else if (number - 400 == 43) {
                return fourHundred + " " + fourTens + " three";
            } else if (number - 400 == 44) {
                return fourHundred + " " + fourTens + " four";
            } else if (number - 400 == 45) {
                return fourHundred + " " + fourTens + " five";
            } else if (number - 400 == 46) {
                return fourHundred + " " + fourTens + " six";
            } else if (number - 400 == 47) {
                return fourHundred + " " + fourTens + " seven";
            } else if (number - 400 == 48) {
                return fourHundred + " " + fourTens + " eight";
            } else if (number - 400 == 49) {
                return fourHundred + " " + fourTens + " nine";
            } else if (number - 400 == 40) {
                return fourHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 400 == 51) {
                return fourHundred + " " + fifTens + " one";
            } else if (number - 400 == 52) {
                return fourHundred + " " + fifTens + " two";
            } else if (number - 400 == 53) {
                return fourHundred + " " + fifTens + " three";
            } else if (number - 400 == 54) {
                return fourHundred + " " + fifTens + " four";
            } else if (number - 400 == 55) {
                return fourHundred + " " + fifTens + " five";
            } else if (number - 400 == 56) {
                return fourHundred + " " + fifTens + " six";
            } else if (number - 400 == 57) {
                return fourHundred + " " + fifTens + " seven";
            } else if (number - 400 == 58) {
                return fourHundred + " " + fifTens + " eight";
            } else if (number - 400 == 59) {
                return fourHundred + " " + fifTens + " nine";
            } else if (number - 400 == 50) {
                return fourHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 400 == 61) {
                return fourHundred + " " + sixTens + " one";
            } else if (number - 400 == 62) {
                return fourHundred + " " + sixTens + " two";
            } else if (number - 400 == 63) {
                return fourHundred + " " + sixTens + " three";
            } else if (number - 400 == 64) {
                return fourHundred + " " + sixTens + " four";
            } else if (number - 400 == 65) {
                return fourHundred + " " + sixTens + " five";
            } else if (number - 400 == 66) {
                return fourHundred + " " + sixTens + " six";
            } else if (number - 400 == 67) {
                return fourHundred + " " + sixTens + " seven";
            } else if (number - 400 == 68) {
                return fourHundred + " " + sixTens + " eight";
            } else if (number - 400 == 69) {
                return fourHundred + " " + sixTens + " nine";
            } else if (number - 400 == 60) {
                return fourHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 400 == 71) {
                return fourHundred + " " + sevenTens + " one";
            } else if (number - 400 == 72) {
                return fourHundred + " " + sevenTens + " two";
            } else if (number - 400 == 73) {
                return fourHundred + " " + sevenTens + " three";
            } else if (number - 400 == 74) {
                return fourHundred + " " + sevenTens + " four";
            } else if (number - 400 == 75) {
                return fourHundred + " " + sevenTens + " five";
            } else if (number - 400 == 76) {
                return fourHundred + " " + sevenTens + " six";
            } else if (number - 400 == 77) {
                return fourHundred + " " + sevenTens + " seven";
            } else if (number - 400 == 78) {
                return fourHundred + " " + sevenTens + " eight";
            } else if (number - 400 == 79) {
                return fourHundred + " " + sevenTens + " nine";
            } else if (number - 400 == 70) {
                return fourHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 400 == 81) {
                return fourHundred + " " + eightTens + " one";
            } else if (number - 400 == 82) {
                return fourHundred + " " + eightTens + " two";
            } else if (number - 400 == 83) {
                return fourHundred + " " + eightTens + " three";
            } else if (number - 400 == 84) {
                return fourHundred + " " + eightTens + " four";
            } else if (number - 400 == 85) {
                return fourHundred + " " + eightTens + " five";
            } else if (number - 400 == 86) {
                return fourHundred + " " + eightTens + " six";
            } else if (number - 400 == 87) {
                return fourHundred + " " + eightTens + " seven";
            } else if (number - 400 == 88) {
                return fourHundred + " " + eightTens + " eight";
            } else if (number - 400 == 89) {
                return fourHundred + " " + eightTens + " nine";
            } else if (number - 400 == 80) {
                return fourHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 400 == 91) {
                return fourHundred + " " + nineTens + " one";
            } else if (number - 400 == 92) {
                return fourHundred + " " + nineTens + " two";
            } else if (number - 400 == 93) {
                return fourHundred + " " + nineTens + " three";
            } else if (number - 400 == 94) {
                return fourHundred + " " + nineTens + " four";
            } else if (number - 400 == 95) {
                return fourHundred + " " + nineTens + " five";
            } else if (number - 400 == 96) {
                return fourHundred + " " + nineTens + " six";
            } else if (number - 400 == 97) {
                return fourHundred + " " + nineTens + " seven";
            } else if (number - 400 == 98) {
                return fourHundred + " " + nineTens + " eight";
            } else if (number - 400 == 99) {
                return fourHundred + " " + nineTens + " nine";
            } else if (number - 400 == 90) {
                return fourHundred + " " + nineTens;
            }
        }
    } else if (hundret == 5) {
        // 500 >
        if (tens == 0) {
            if (units == 1) {
                return fiveHundred + " one";
            } else if (units == 2) {
                return fiveHundred + " two";
            } else if (units == 3) {
                return fiveHundred + " three";
            } else if (units == 4) {
                return fiveHundred + " four";
            } else if (units == 5) {
                return fiveHundred + " five";
            } else if (units == 6) {
                return fiveHundred + " six";
            } else if (units == 7) {
                return fiveHundred + " seven";
            } else if (units == 8) {
                return fiveHundred + " eight";
            } else if (units == 9) {
                return fiveHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 500 == 11) {
                return fiveHundred + " " + eleven;
            } else if (number - 500 == 12) {
                return fiveHundred + " " + twelve;
            } else if (number - 500 == 13) {
                return fiveHundred + " " + thirteen;
            } else if (number - 500 == 14) {
                return fiveHundred + " " + fourteen;
            } else if (number - 500 == 15) {
                return fiveHundred + " " + fifteen;
            } else if (number - 500 == 16) {
                return fiveHundred + " " + sixteen;
            } else if (number - 500 == 17) {
                return fiveHundred + " " + seventeen;
            } else if (number - 500 == 18) {
                return fiveHundred + " " + neighteen;
            } else if (number - 500 == 19) {
                return fiveHundred + " " + nineteen;
            } else if (number - 500 == 10) {
                return fiveHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 500 == 21) {
                return fiveHundred + " " + twoTens + " one";
            } else if (number - 500 == 22) {
                return fiveHundred + " " + twoTens + " two";
            } else if (number - 500 == 23) {
                return fiveHundred + " " + twoTens + " three";
            } else if (number - 500 == 24) {
                return fiveHundred + " " + twoTens + " four";
            } else if (number - 500 == 25) {
                return fiveHundred + " " + twoTens + " five";
            } else if (number - 500 == 26) {
                return fiveHundred + " " + twoTens + " six";
            } else if (number - 500 == 27) {
                return fiveHundred + " " + twoTens + " seven";
            } else if (number - 500 == 28) {
                return fiveHundred + " " + twoTens + " eight";
            } else if (number - 500 == 29) {
                return fiveHundred + " " + twoTens + " nine";
            } else if (number - 500 == 20) {
                return fiveHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 500 == 31) {
                return fiveHundred + " " + threeTens + " one";
            } else if (number - 500 == 32) {
                return fiveHundred + " " + threeTens + " two";
            } else if (number - 500 == 33) {
                return fiveHundred + " " + threeTens + " three";
            } else if (number - 500 == 34) {
                return fiveHundred + " " + threeTens + " four";
            } else if (number - 500 == 35) {
                return fiveHundred + " " + threeTens + " five";
            } else if (number - 500 == 36) {
                return fiveHundred + " " + threeTens + " six";
            } else if (number - 500 == 37) {
                return fiveHundred + " " + threeTens + " seven";
            } else if (number - 500 == 38) {
                return fiveHundred + " " + threeTens + " eight";
            } else if (number - 500 == 39) {
                return fiveHundred + " " + threeTens + " nine";
            } else if (number - 500 == 30) {
                return fiveHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 500 == 41) {
                return fiveHundred + " " + fourTens + " one";
            } else if (number - 500 == 42) {
                return fiveHundred + " " + fourTens + " two";
            } else if (number - 500 == 43) {
                return fiveHundred + " " + fourTens + " three";
            } else if (number - 500 == 44) {
                return fiveHundred + " " + fourTens + " four";
            } else if (number - 500 == 45) {
                return fiveHundred + " " + fourTens + " five";
            } else if (number - 500 == 46) {
                return fiveHundred + " " + fourTens + " six";
            } else if (number - 500 == 47) {
                return fiveHundred + " " + fourTens + " seven";
            } else if (number - 500 == 48) {
                return fiveHundred + " " + fourTens + " eight";
            } else if (number - 500 == 49) {
                return fiveHundred + " " + fourTens + " nine";
            } else if (number - 500 == 40) {
                return fiveHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 500 == 51) {
                return fiveHundred + " " + fifTens + " one";
            } else if (number - 500 == 52) {
                return fiveHundred + " " + fifTens + " two";
            } else if (number - 500 == 53) {
                return fiveHundred + " " + fifTens + " three";
            } else if (number - 500 == 54) {
                return fiveHundred + " " + fifTens + " four";
            } else if (number - 500 == 55) {
                return fiveHundred + " " + fifTens + " five";
            } else if (number - 500 == 56) {
                return fiveHundred + " " + fifTens + " six";
            } else if (number - 500 == 57) {
                return fiveHundred + " " + fifTens + " seven";
            } else if (number - 500 == 58) {
                return fiveHundred + " " + fifTens + " eight";
            } else if (number - 500 == 59) {
                return fiveHundred + " " + fifTens + " nine";
            } else if (number - 500 == 50) {
                return fiveHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 500 == 61) {
                return fiveHundred + " " + sixTens + " one";
            } else if (number - 500 == 62) {
                return fiveHundred + " " + sixTens + " two";
            } else if (number - 500 == 63) {
                return fiveHundred + " " + sixTens + " three";
            } else if (number - 500 == 64) {
                return fiveHundred + " " + sixTens + " four";
            } else if (number - 500 == 65) {
                return fiveHundred + " " + sixTens + " five";
            } else if (number - 500 == 66) {
                return fiveHundred + " " + sixTens + " six";
            } else if (number - 500 == 67) {
                return fiveHundred + " " + sixTens + " seven";
            } else if (number - 500 == 68) {
                return fiveHundred + " " + sixTens + " eight";
            } else if (number - 500 == 69) {
                return fiveHundred + " " + sixTens + " nine";
            } else if (number - 500 == 60) {
                return fiveHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 500 == 71) {
                return fiveHundred + " " + sevenTens + " one";
            } else if (number - 500 == 72) {
                return fiveHundred + " " + sevenTens + " two";
            } else if (number - 500 == 73) {
                return fiveHundred + " " + sevenTens + " three";
            } else if (number - 500 == 74) {
                return fiveHundred + " " + sevenTens + " four";
            } else if (number - 500 == 75) {
                return fiveHundred + " " + sevenTens + " five";
            } else if (number - 500 == 76) {
                return fiveHundred + " " + sevenTens + " six";
            } else if (number - 500 == 77) {
                return fiveHundred + " " + sevenTens + " seven";
            } else if (number - 500 == 78) {
                return fiveHundred + " " + sevenTens + " eight";
            } else if (number - 500 == 79) {
                return fiveHundred + " " + sevenTens + " nine";
            } else if (number - 500 == 70) {
                return fiveHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 500 == 81) {
                return fiveHundred + " " + eightTens + " one";
            } else if (number - 500 == 82) {
                return fiveHundred + " " + eightTens + " two";
            } else if (number - 500 == 83) {
                return fiveHundred + " " + eightTens + " three";
            } else if (number - 500 == 84) {
                return fiveHundred + " " + eightTens + " four";
            } else if (number - 500 == 85) {
                return fiveHundred + " " + eightTens + " five";
            } else if (number - 500 == 86) {
                return fiveHundred + " " + eightTens + " six";
            } else if (number - 500 == 87) {
                return fiveHundred + " " + eightTens + " seven";
            } else if (number - 500 == 88) {
                return fiveHundred + " " + eightTens + " eight";
            } else if (number - 500 == 89) {
                return fiveHundred + " " + eightTens + " nine";
            } else if (number - 500 == 80) {
                return fiveHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 500 == 91) {
                return fiveHundred + " " + nineTens + " one";
            } else if (number - 500 == 92) {
                return fiveHundred + " " + nineTens + " two";
            } else if (number - 500 == 93) {
                return fiveHundred + " " + nineTens + " three";
            } else if (number - 500 == 94) {
                return fiveHundred + " " + nineTens + " four";
            } else if (number - 500 == 95) {
                return fiveHundred + " " + nineTens + " five";
            } else if (number - 500 == 96) {
                return fiveHundred + " " + nineTens + " six";
            } else if (number - 500 == 97) {
                return fiveHundred + " " + nineTens + " seven";
            } else if (number - 500 == 98) {
                return fiveHundred + " " + nineTens + " eight";
            } else if (number - 500 == 99) {
                return fiveHundred + " " + nineTens + " nine";
            } else if (number - 500 == 90) {
                return fiveHundred + " " + nineTens;
            }
        }
    } else if (hundret == 6) {
        // 600 >
        if (tens == 0) {
            if (units == 1) {
                return sixHundred + " one";
            } else if (units == 2) {
                return sixHundred + " two";
            } else if (units == 3) {
                return sixHundred + " three";
            } else if (units == 4) {
                return sixHundred + " four";
            } else if (units == 5) {
                return sixHundred + " five";
            } else if (units == 6) {
                return sixHundred + " six";
            } else if (units == 7) {
                return sixHundred + " seven";
            } else if (units == 8) {
                return sixHundred + " eight";
            } else if (units == 9) {
                return sixHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 600 == 11) {
                return sixHundred + " " + eleven;
            } else if (number - 600 == 12) {
                return sixHundred + " " + twelve;
            } else if (number - 600 == 13) {
                return sixHundred + " " + thirteen;
            } else if (number - 600 == 14) {
                return sixHundred + " " + fourteen;
            } else if (number - 600 == 15) {
                return sixHundred + " " + fifteen;
            } else if (number - 600 == 16) {
                return sixHundred + " " + sixteen;
            } else if (number - 600 == 17) {
                return sixHundred + " " + seventeen;
            } else if (number - 600 == 18) {
                return sixHundred + " " + neighteen;
            } else if (number - 600 == 19) {
                return sixHundred + " " + nineteen;
            } else if (number - 600 == 10) {
                return sixHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 600 == 21) {
                return sixHundred + " " + twoTens + " one";
            } else if (number - 600 == 22) {
                return sixHundred + " " + twoTens + " two";
            } else if (number - 600 == 23) {
                return sixHundred + " " + twoTens + " three";
            } else if (number - 600 == 24) {
                return sixHundred + " " + twoTens + " four";
            } else if (number - 600 == 25) {
                return sixHundred + " " + twoTens + " five";
            } else if (number - 600 == 26) {
                return sixHundred + " " + twoTens + " six";
            } else if (number - 600 == 27) {
                return sixHundred + " " + twoTens + " seven";
            } else if (number - 600 == 28) {
                return sixHundred + " " + twoTens + " eight";
            } else if (number - 600 == 29) {
                return sixHundred + " " + twoTens + " nine";
            } else if (number - 600 == 20) {
                return sixHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 600 == 31) {
                return sixHundred + " " + threeTens + " one";
            } else if (number - 600 == 32) {
                return sixHundred + " " + threeTens + " two";
            } else if (number - 600 == 33) {
                return sixHundred + " " + threeTens + " three";
            } else if (number - 600 == 34) {
                return sixHundred + " " + threeTens + " four";
            } else if (number - 600 == 35) {
                return sixHundred + " " + threeTens + " five";
            } else if (number - 600 == 36) {
                return sixHundred + " " + threeTens + " six";
            } else if (number - 600 == 37) {
                return sixHundred + " " + threeTens + " seven";
            } else if (number - 600 == 38) {
                return sixHundred + " " + threeTens + " eight";
            } else if (number - 600 == 39) {
                return sixHundred + " " + threeTens + " nine";
            } else if (number - 600 == 30) {
                return sixHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 600 == 41) {
                return sixHundred + " " + fourTens + " one";
            } else if (number - 600 == 42) {
                return sixHundred + " " + fourTens + " two";
            } else if (number - 600 == 43) {
                return sixHundred + " " + fourTens + " three";
            } else if (number - 600 == 44) {
                return sixHundred + " " + fourTens + " four";
            } else if (number - 600 == 45) {
                return sixHundred + " " + fourTens + " five";
            } else if (number - 600 == 46) {
                return sixHundred + " " + fourTens + " six";
            } else if (number - 600 == 47) {
                return sixHundred + " " + fourTens + " seven";
            } else if (number - 600 == 48) {
                return sixHundred + " " + fourTens + " eight";
            } else if (number - 600 == 49) {
                return sixHundred + " " + fourTens + " nine";
            } else if (number - 600 == 40) {
                return sixHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 600 == 51) {
                return sixHundred + " " + fifTens + " one";
            } else if (number - 600 == 52) {
                return sixHundred + " " + fifTens + " two";
            } else if (number - 600 == 53) {
                return sixHundred + " " + fifTens + " three";
            } else if (number - 600 == 54) {
                return sixHundred + " " + fifTens + " four";
            } else if (number - 600 == 55) {
                return sixHundred + " " + fifTens + " five";
            } else if (number - 600 == 56) {
                return sixHundred + " " + fifTens + " six";
            } else if (number - 600 == 57) {
                return sixHundred + " " + fifTens + " seven";
            } else if (number - 600 == 58) {
                return sixHundred + " " + fifTens + " eight";
            } else if (number - 600 == 59) {
                return sixHundred + " " + fifTens + " nine";
            } else if (number - 600 == 50) {
                return sixHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 600 == 61) {
                return sixHundred + " " + sixTens + " one";
            } else if (number - 600 == 62) {
                return sixHundred + " " + sixTens + " two";
            } else if (number - 600 == 63) {
                return sixHundred + " " + sixTens + " three";
            } else if (number - 600 == 64) {
                return sixHundred + " " + sixTens + " four";
            } else if (number - 600 == 65) {
                return sixHundred + " " + sixTens + " five";
            } else if (number - 600 == 66) {
                return sixHundred + " " + sixTens + " six";
            } else if (number - 600 == 67) {
                return sixHundred + " " + sixTens + " seven";
            } else if (number - 600 == 68) {
                return sixHundred + " " + sixTens + " eight";
            } else if (number - 600 == 69) {
                return sixHundred + " " + sixTens + " nine";
            } else if (number - 600 == 60) {
                return sixHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 600 == 71) {
                return sixHundred + " " + sevenTens + " one";
            } else if (number - 600 == 72) {
                return sixHundred + " " + sevenTens + " two";
            } else if (number - 600 == 73) {
                return sixHundred + " " + sevenTens + " three";
            } else if (number - 600 == 74) {
                return sixHundred + " " + sevenTens + " four";
            } else if (number - 600 == 75) {
                return sixHundred + " " + sevenTens + " five";
            } else if (number - 600 == 76) {
                return sixHundred + " " + sevenTens + " six";
            } else if (number - 600 == 77) {
                return sixHundred + " " + sevenTens + " seven";
            } else if (number - 600 == 78) {
                return sixHundred + " " + sevenTens + " eight";
            } else if (number - 600 == 79) {
                return sixHundred + " " + sevenTens + " nine";
            } else if (number - 600 == 70) {
                return sixHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 600 == 81) {
                return sixHundred + " " + eightTens + " one";
            } else if (number - 600 == 82) {
                return sixHundred + " " + eightTens + " two";
            } else if (number - 600 == 83) {
                return sixHundred + " " + eightTens + " three";
            } else if (number - 600 == 84) {
                return sixHundred + " " + eightTens + " four";
            } else if (number - 600 == 85) {
                return sixHundred + " " + eightTens + " five";
            } else if (number - 600 == 86) {
                return sixHundred + " " + eightTens + " six";
            } else if (number - 600 == 87) {
                return sixHundred + " " + eightTens + " seven";
            } else if (number - 600 == 88) {
                return sixHundred + " " + eightTens + " eight";
            } else if (number - 600 == 89) {
                return sixHundred + " " + eightTens + " nine";
            } else if (number - 600 == 80) {
                return sixHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 600 == 91) {
                return sixHundred + " " + nineTens + " one";
            } else if (number - 600 == 92) {
                return sixHundred + " " + nineTens + " two";
            } else if (number - 600 == 93) {
                return sixHundred + " " + nineTens + " three";
            } else if (number - 600 == 94) {
                return sixHundred + " " + nineTens + " four";
            } else if (number - 600 == 95) {
                return sixHundred + " " + nineTens + " five";
            } else if (number - 600 == 96) {
                return sixHundred + " " + nineTens + " six";
            } else if (number - 600 == 97) {
                return sixHundred + " " + nineTens + " seven";
            } else if (number - 600 == 98) {
                return sixHundred + " " + nineTens + " eight";
            } else if (number - 600 == 99) {
                return sixHundred + " " + nineTens + " nine";
            } else if (number - 600 == 90) {
                return sixHundred + " " + nineTens;
            }
        }
    } else if (hundret == 7) {
        // 700 >
        if (tens == 0) {
            if (units == 1) {
                return sevenHundred + " one";
            } else if (units == 2) {
                return sevenHundred + " two";
            } else if (units == 3) {
                return sevenHundred + " three";
            } else if (units == 4) {
                return sevenHundred + " four";
            } else if (units == 5) {
                return sevenHundred + " five";
            } else if (units == 6) {
                return sevenHundred + " six";
            } else if (units == 7) {
                return sevenHundred + " seven";
            } else if (units == 8) {
                return sevenHundred + " eight";
            } else if (units == 9) {
                return sevenHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 700 == 11) {
                return sevenHundred + " " + eleven;
            } else if (number - 700 == 12) {
                return sevenHundred + " " + twelve;
            } else if (number - 700 == 13) {
                return sevenHundred + " " + thirteen;
            } else if (number - 700 == 14) {
                return sevenHundred + " " + fourteen;
            } else if (number - 700 == 15) {
                return sevenHundred + " " + fifteen;
            } else if (number - 700 == 16) {
                return sevenHundred + " " + sixteen;
            } else if (number - 700 == 17) {
                return sevenHundred + " " + seventeen;
            } else if (number - 700 == 18) {
                return sevenHundred + " " + neighteen;
            } else if (number - 700 == 19) {
                return sevenHundred + " " + nineteen;
            } else if (number - 700 == 10) {
                return sevenHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 700 == 21) {
                return sevenHundred + " " + twoTens + " one";
            } else if (number - 700 == 22) {
                return sevenHundred + " " + twoTens + " two";
            } else if (number - 700 == 23) {
                return sevenHundred + " " + twoTens + " three";
            } else if (number - 700 == 24) {
                return sevenHundred + " " + twoTens + " four";
            } else if (number - 700 == 25) {
                return sevenHundred + " " + twoTens + " five";
            } else if (number - 700 == 26) {
                return sevenHundred + " " + twoTens + " six";
            } else if (number - 700 == 27) {
                return sevenHundred + " " + twoTens + " seven";
            } else if (number - 700 == 28) {
                return sevenHundred + " " + twoTens + " eight";
            } else if (number - 700 == 29) {
                return sevenHundred + " " + twoTens + " nine";
            } else if (number - 700 == 20) {
                return sevenHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 700 == 31) {
                return sevenHundred + " " + threeTens + " one";
            } else if (number - 700 == 32) {
                return sevenHundred + " " + threeTens + " two";
            } else if (number - 700 == 33) {
                return sevenHundred + " " + threeTens + " three";
            } else if (number - 700 == 34) {
                return sevenHundred + " " + threeTens + " four";
            } else if (number - 700 == 35) {
                return sevenHundred + " " + threeTens + " five";
            } else if (number - 700 == 36) {
                return sevenHundred + " " + threeTens + " six";
            } else if (number - 700 == 37) {
                return sevenHundred + " " + threeTens + " seven";
            } else if (number - 700 == 38) {
                return sevenHundred + " " + threeTens + " eight";
            } else if (number - 700 == 39) {
                return sevenHundred + " " + threeTens + " nine";
            } else if (number - 700 == 30) {
                return sevenHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 700 == 41) {
                return sevenHundred + " " + fourTens + " one";
            } else if (number - 700 == 42) {
                return sevenHundred + " " + fourTens + " two";
            } else if (number - 700 == 43) {
                return sevenHundred + " " + fourTens + " three";
            } else if (number - 700 == 44) {
                return sevenHundred + " " + fourTens + " four";
            } else if (number - 700 == 45) {
                return sevenHundred + " " + fourTens + " five";
            } else if (number - 700 == 46) {
                return sevenHundred + " " + fourTens + " six";
            } else if (number - 700 == 47) {
                return sevenHundred + " " + fourTens + " seven";
            } else if (number - 700 == 48) {
                return sevenHundred + " " + fourTens + " eight";
            } else if (number - 700 == 49) {
                return sevenHundred + " " + fourTens + " nine";
            } else if (number - 700 == 40) {
                return sevenHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 700 == 51) {
                return sevenHundred + " " + fifTens + " one";
            } else if (number - 700 == 52) {
                return sevenHundred + " " + fifTens + " two";
            } else if (number - 700 == 53) {
                return sevenHundred + " " + fifTens + " three";
            } else if (number - 700 == 54) {
                return sevenHundred + " " + fifTens + " four";
            } else if (number - 700 == 55) {
                return sevenHundred + " " + fifTens + " five";
            } else if (number - 700 == 56) {
                return sevenHundred + " " + fifTens + " six";
            } else if (number - 700 == 57) {
                return sevenHundred + " " + fifTens + " seven";
            } else if (number - 700 == 58) {
                return sevenHundred + " " + fifTens + " eight";
            } else if (number - 700 == 59) {
                return sevenHundred + " " + fifTens + " nine";
            } else if (number - 700 == 50) {
                return sevenHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 700 == 61) {
                return sevenHundred + " " + sixTens + " one";
            } else if (number - 700 == 62) {
                return sevenHundred + " " + sixTens + " two";
            } else if (number - 700 == 63) {
                return sevenHundred + " " + sixTens + " three";
            } else if (number - 700 == 64) {
                return sevenHundred + " " + sixTens + " four";
            } else if (number - 700 == 65) {
                return sevenHundred + " " + sixTens + " five";
            } else if (number - 700 == 66) {
                return sevenHundred + " " + sixTens + " six";
            } else if (number - 700 == 67) {
                return sevenHundred + " " + sixTens + " seven";
            } else if (number - 700 == 68) {
                return sevenHundred + " " + sixTens + " eight";
            } else if (number - 700 == 69) {
                return sevenHundred + " " + sixTens + " nine";
            } else if (number - 700 == 60) {
                return sevenHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 700 == 71) {
                return sevenHundred + " " + sevenTens + " one";
            } else if (number - 700 == 72) {
                return sevenHundred + " " + sevenTens + " two";
            } else if (number - 700 == 73) {
                return sevenHundred + " " + sevenTens + " three";
            } else if (number - 700 == 74) {
                return sevenHundred + " " + sevenTens + " four";
            } else if (number - 700 == 75) {
                return sevenHundred + " " + sevenTens + " five";
            } else if (number - 700 == 76) {
                return sevenHundred + " " + sevenTens + " six";
            } else if (number - 700 == 77) {
                return sevenHundred + " " + sevenTens + " seven";
            } else if (number - 700 == 78) {
                return sevenHundred + " " + sevenTens + " eight";
            } else if (number - 700 == 79) {
                return sevenHundred + " " + sevenTens + " nine";
            } else if (number - 700 == 70) {
                return sevenHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 700 == 81) {
                return sevenHundred + " " + eightTens + " one";
            } else if (number - 700 == 82) {
                return sevenHundred + " " + eightTens + " two";
            } else if (number - 700 == 83) {
                return sevenHundred + " " + eightTens + " three";
            } else if (number - 700 == 84) {
                return sevenHundred + " " + eightTens + " four";
            } else if (number - 700 == 85) {
                return sevenHundred + " " + eightTens + " five";
            } else if (number - 700 == 86) {
                return sevenHundred + " " + eightTens + " six";
            } else if (number - 700 == 87) {
                return sevenHundred + " " + eightTens + " seven";
            } else if (number - 700 == 88) {
                return sevenHundred + " " + eightTens + " eight";
            } else if (number - 700 == 89) {
                return sevenHundred + " " + eightTens + " nine";
            } else if (number - 700 == 80) {
                return sevenHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 700 == 91) {
                return sevenHundred + " " + nineTens + " one";
            } else if (number - 700 == 92) {
                return sevenHundred + " " + nineTens + " two";
            } else if (number - 700 == 93) {
                return sevenHundred + " " + nineTens + " three";
            } else if (number - 700 == 94) {
                return sevenHundred + " " + nineTens + " four";
            } else if (number - 700 == 95) {
                return sevenHundred + " " + nineTens + " five";
            } else if (number - 700 == 96) {
                return sevenHundred + " " + nineTens + " six";
            } else if (number - 700 == 97) {
                return sevenHundred + " " + nineTens + " seven";
            } else if (number - 700 == 98) {
                return sevenHundred + " " + nineTens + " eight";
            } else if (number - 700 == 99) {
                return sevenHundred + " " + nineTens + " nine";
            } else if (number - 700 == 90) {
                return sevenHundred + " " + nineTens;
            }
        }
    } else if (hundret == 8) {
        // 800 >
        if (tens == 0) {
            if (units == 1) {
                return eightHundred + " one";
            } else if (units == 2) {
                return eightHundred + " two";
            } else if (units == 3) {
                return eightHundred + " three";
            } else if (units == 4) {
                return eightHundred + " four";
            } else if (units == 5) {
                return eightHundred + " five";
            } else if (units == 6) {
                return eightHundred + " six";
            } else if (units == 7) {
                return eightHundred + " seven";
            } else if (units == 8) {
                return eightHundred + " eight";
            } else if (units == 9) {
                return eightHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 800 == 11) {
                return eightHundred + " " + eleven;
            } else if (number - 800 == 12) {
                return eightHundred + " " + twelve;
            } else if (number - 800 == 13) {
                return eightHundred + " " + thirteen;
            } else if (number - 800 == 14) {
                return eightHundred + " " + fourteen;
            } else if (number - 800 == 15) {
                return eightHundred + " " + fifteen;
            } else if (number - 800 == 16) {
                return eightHundred + " " + sixteen;
            } else if (number - 800 == 17) {
                return eightHundred + " " + seventeen;
            } else if (number - 800 == 18) {
                return eightHundred + " " + neighteen;
            } else if (number - 800 == 19) {
                return eightHundred + " " + nineteen;
            } else if (number - 800 == 10) {
                return eightHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 800 == 21) {
                return eightHundred + " " + twoTens + " one";
            } else if (number - 800 == 22) {
                return eightHundred + " " + twoTens + " two";
            } else if (number - 800 == 23) {
                return eightHundred + " " + twoTens + " three";
            } else if (number - 800 == 24) {
                return eightHundred + " " + twoTens + " four";
            } else if (number - 800 == 25) {
                return eightHundred + " " + twoTens + " five";
            } else if (number - 800 == 26) {
                return eightHundred + " " + twoTens + " six";
            } else if (number - 800 == 27) {
                return eightHundred + " " + twoTens + " seven";
            } else if (number - 800 == 28) {
                return eightHundred + " " + twoTens + " eight";
            } else if (number - 800 == 29) {
                return eightHundred + " " + twoTens + " nine";
            } else if (number - 800 == 20) {
                return eightHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 800 == 31) {
                return eightHundred + " " + threeTens + " one";
            } else if (number - 800 == 32) {
                return eightHundred + " " + threeTens + " two";
            } else if (number - 800 == 33) {
                return eightHundred + " " + threeTens + " three";
            } else if (number - 800 == 34) {
                return eightHundred + " " + threeTens + " four";
            } else if (number - 800 == 35) {
                return eightHundred + " " + threeTens + " five";
            } else if (number - 800 == 36) {
                return eightHundred + " " + threeTens + " six";
            } else if (number - 800 == 37) {
                return eightHundred + " " + threeTens + " seven";
            } else if (number - 800 == 38) {
                return eightHundred + " " + threeTens + " eight";
            } else if (number - 800 == 39) {
                return eightHundred + " " + threeTens + " nine";
            } else if (number - 800 == 30) {
                return eightHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 800 == 41) {
                return eightHundred + " " + fourTens + " one";
            } else if (number - 800 == 42) {
                return eightHundred + " " + fourTens + " two";
            } else if (number - 800 == 43) {
                return eightHundred + " " + fourTens + " three";
            } else if (number - 800 == 44) {
                return eightHundred + " " + fourTens + " four";
            } else if (number - 800 == 45) {
                return eightHundred + " " + fourTens + " five";
            } else if (number - 800 == 46) {
                return eightHundred + " " + fourTens + " six";
            } else if (number - 800 == 47) {
                return eightHundred + " " + fourTens + " seven";
            } else if (number - 800 == 48) {
                return eightHundred + " " + fourTens + " eight";
            } else if (number - 800 == 49) {
                return eightHundred + " " + fourTens + " nine";
            } else if (number - 800 == 40) {
                return eightHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 800 == 51) {
                return eightHundred + " " + fifTens + " one";
            } else if (number - 800 == 52) {
                return eightHundred + " " + fifTens + " two";
            } else if (number - 800 == 53) {
                return eightHundred + " " + fifTens + " three";
            } else if (number - 800 == 54) {
                return eightHundred + " " + fifTens + " four";
            } else if (number - 800 == 55) {
                return eightHundred + " " + fifTens + " five";
            } else if (number - 800 == 56) {
                return eightHundred + " " + fifTens + " six";
            } else if (number - 800 == 57) {
                return eightHundred + " " + fifTens + " seven";
            } else if (number - 800 == 58) {
                return eightHundred + " " + fifTens + " eight";
            } else if (number - 800 == 59) {
                return eightHundred + " " + fifTens + " nine";
            } else if (number - 800 == 50) {
                return eightHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 800 == 61) {
                return eightHundred + " " + sixTens + " one";
            } else if (number - 800 == 62) {
                return eightHundred + " " + sixTens + " two";
            } else if (number - 800 == 63) {
                return eightHundred + " " + sixTens + " three";
            } else if (number - 800 == 64) {
                return eightHundred + " " + sixTens + " four";
            } else if (number - 800 == 65) {
                return eightHundred + " " + sixTens + " five";
            } else if (number - 800 == 66) {
                return eightHundred + " " + sixTens + " six";
            } else if (number - 800 == 67) {
                return eightHundred + " " + sixTens + " seven";
            } else if (number - 800 == 68) {
                return eightHundred + " " + sixTens + " eight";
            } else if (number - 800 == 69) {
                return eightHundred + " " + sixTens + " nine";
            } else if (number - 800 == 60) {
                return eightHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 800 == 71) {
                return eightHundred + " " + sevenTens + " one";
            } else if (number - 800 == 72) {
                return eightHundred + " " + sevenTens + " two";
            } else if (number - 800 == 73) {
                return eightHundred + " " + sevenTens + " three";
            } else if (number - 800 == 74) {
                return eightHundred + " " + sevenTens + " four";
            } else if (number - 800 == 75) {
                return eightHundred + " " + sevenTens + " five";
            } else if (number - 800 == 76) {
                return eightHundred + " " + sevenTens + " six";
            } else if (number - 800 == 77) {
                return eightHundred + " " + sevenTens + " seven";
            } else if (number - 800 == 78) {
                return eightHundred + " " + sevenTens + " eight";
            } else if (number - 800 == 79) {
                return eightHundred + " " + sevenTens + " nine";
            } else if (number - 800 == 70) {
                return eightHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 800 == 81) {
                return eightHundred + " " + eightTens + " one";
            } else if (number - 800 == 82) {
                return eightHundred + " " + eightTens + " two";
            } else if (number - 800 == 83) {
                return eightHundred + " " + eightTens + " three";
            } else if (number - 800 == 84) {
                return eightHundred + " " + eightTens + " four";
            } else if (number - 800 == 85) {
                return eightHundred + " " + eightTens + " five";
            } else if (number - 800 == 86) {
                return eightHundred + " " + eightTens + " six";
            } else if (number - 800 == 87) {
                return eightHundred + " " + eightTens + " seven";
            } else if (number - 800 == 88) {
                return eightHundred + " " + eightTens + " eight";
            } else if (number - 800 == 89) {
                return eightHundred + " " + eightTens + " nine";
            } else if (number - 800 == 80) {
                return eightHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 800 == 91) {
                return eightHundred + " " + nineTens + " one";
            } else if (number - 800 == 92) {
                return eightHundred + " " + nineTens + " two";
            } else if (number - 800 == 93) {
                return eightHundred + " " + nineTens + " three";
            } else if (number - 800 == 94) {
                return eightHundred + " " + nineTens + " four";
            } else if (number - 800 == 95) {
                return eightHundred + " " + nineTens + " five";
            } else if (number - 800 == 96) {
                return eightHundred + " " + nineTens + " six";
            } else if (number - 800 == 97) {
                return eightHundred + " " + nineTens + " seven";
            } else if (number - 800 == 98) {
                return eightHundred + " " + nineTens + " eight";
            } else if (number - 800 == 99) {
                return eightHundred + " " + nineTens + " nine";
            } else if (number - 800 == 90) {
                return eightHundred + " " + nineTens;
            }
        }
    } else if (hundret == 9) {
        // 900 >
        if (tens == 0) {
            if (units == 1) {
                return nineHundred + " one";
            } else if (units == 2) {
                return nineHundred + " two";
            } else if (units == 3) {
                return nineHundred + " three";
            } else if (units == 4) {
                return nineHundred + " four";
            } else if (units == 5) {
                return nineHundred + " five";
            } else if (units == 6) {
                return nineHundred + " six";
            } else if (units == 7) {
                return nineHundred + " seven";
            } else if (units == 8) {
                return nineHundred + " eight";
            } else if (units == 9) {
                return nineHundred + " nine";
            }
        } else if (tens == 1) {
            if (number - 900 == 11) {
                return nineHundred + " " + eleven;
            } else if (number - 900 == 12) {
                return nineHundred + " " + twelve;
            } else if (number - 900 == 13) {
                return nineHundred + " " + thirteen;
            } else if (number - 900 == 14) {
                return nineHundred + " " + fourteen;
            } else if (number - 900 == 15) {
                return nineHundred + " " + fifteen;
            } else if (number - 900 == 16) {
                return nineHundred + " " + sixteen;
            } else if (number - 900 == 17) {
                return nineHundred + " " + seventeen;
            } else if (number - 900 == 18) {
                return nineHundred + " " + neighteen;
            } else if (number - 900 == 19) {
                return nineHundred + " " + nineteen;
            } else if (number - 900 == 10) {
                return nineHundred + " " + ten;
            }
        } else if (tens == 2) {
            if (number - 900 == 21) {
                return nineHundred + " " + twoTens + " one";
            } else if (number - 900 == 22) {
                return nineHundred + " " + twoTens + " two";
            } else if (number - 900 == 23) {
                return nineHundred + " " + twoTens + " three";
            } else if (number - 900 == 24) {
                return nineHundred + " " + twoTens + " four";
            } else if (number - 900 == 25) {
                return nineHundred + " " + twoTens + " five";
            } else if (number - 900 == 26) {
                return nineHundred + " " + twoTens + " six";
            } else if (number - 900 == 27) {
                return nineHundred + " " + twoTens + " seven";
            } else if (number - 900 == 28) {
                return nineHundred + " " + twoTens + " eight";
            } else if (number - 900 == 29) {
                return nineHundred + " " + twoTens + " nine";
            } else if (number - 900 == 20) {
                return nineHundred + " " + twoTens;
            }
        } else if (tens == 3) {
            if (number - 900 == 31) {
                return nineHundred + " " + threeTens + " one";
            } else if (number - 900 == 32) {
                return nineHundred + " " + threeTens + " two";
            } else if (number - 900 == 33) {
                return nineHundred + " " + threeTens + " three";
            } else if (number - 900 == 34) {
                return nineHundred + " " + threeTens + " four";
            } else if (number - 900 == 35) {
                return nineHundred + " " + threeTens + " five";
            } else if (number - 900 == 36) {
                return nineHundred + " " + threeTens + " six";
            } else if (number - 900 == 37) {
                return nineHundred + " " + threeTens + " seven";
            } else if (number - 900 == 38) {
                return nineHundred + " " + threeTens + " eight";
            } else if (number - 900 == 39) {
                return nineHundred + " " + threeTens + " nine";
            } else if (number - 900 == 30) {
                return nineHundred + " " + threeTens;
            }
        } else if (tens == 4) {
            if (number - 900 == 41) {
                return nineHundred + " " + fourTens + " one";
            } else if (number - 900 == 42) {
                return nineHundred + " " + fourTens + " two";
            } else if (number - 900 == 43) {
                return nineHundred + " " + fourTens + " three";
            } else if (number - 900 == 44) {
                return nineHundred + " " + fourTens + " four";
            } else if (number - 900 == 45) {
                return nineHundred + " " + fourTens + " five";
            } else if (number - 900 == 46) {
                return nineHundred + " " + fourTens + " six";
            } else if (number - 900 == 47) {
                return nineHundred + " " + fourTens + " seven";
            } else if (number - 900 == 48) {
                return nineHundred + " " + fourTens + " eight";
            } else if (number - 900 == 49) {
                return nineHundred + " " + fourTens + " nine";
            } else if (number - 900 == 40) {
                return nineHundred + " " + fourTens;
            }
        } else if (tens == 5) {
            if (number - 900 == 51) {
                return nineHundred + " " + fifTens + " one";
            } else if (number - 900 == 52) {
                return nineHundred + " " + fifTens + " two";
            } else if (number - 900 == 53) {
                return nineHundred + " " + fifTens + " three";
            } else if (number - 900 == 54) {
                return nineHundred + " " + fifTens + " four";
            } else if (number - 900 == 55) {
                return nineHundred + " " + fifTens + " five";
            } else if (number - 900 == 56) {
                return nineHundred + " " + fifTens + " six";
            } else if (number - 900 == 57) {
                return nineHundred + " " + fifTens + " seven";
            } else if (number - 900 == 58) {
                return nineHundred + " " + fifTens + " eight";
            } else if (number - 900 == 59) {
                return nineHundred + " " + fifTens + " nine";
            } else if (number - 900 == 50) {
                return nineHundred + " " + fifTens;
            }
        } else if (tens == 6) {
            if (number - 900 == 61) {
                return nineHundred + " " + sixTens + " one";
            } else if (number - 900 == 62) {
                return nineHundred + " " + sixTens + " two";
            } else if (number - 900 == 63) {
                return nineHundred + " " + sixTens + " three";
            } else if (number - 900 == 64) {
                return nineHundred + " " + sixTens + " four";
            } else if (number - 900 == 65) {
                return nineHundred + " " + sixTens + " five";
            } else if (number - 900 == 66) {
                return nineHundred + " " + sixTens + " six";
            } else if (number - 900 == 67) {
                return nineHundred + " " + sixTens + " seven";
            } else if (number - 900 == 68) {
                return nineHundred + " " + sixTens + " eight";
            } else if (number - 900 == 69) {
                return nineHundred + " " + sixTens + " nine";
            } else if (number - 900 == 60) {
                return nineHundred + " " + sixTens;
            }
        } else if (tens == 7) {
            if (number - 900 == 71) {
                return nineHundred + " " + sevenTens + " one";
            } else if (number - 900 == 72) {
                return nineHundred + " " + sevenTens + " two";
            } else if (number - 900 == 73) {
                return nineHundred + " " + sevenTens + " three";
            } else if (number - 900 == 74) {
                return nineHundred + " " + sevenTens + " four";
            } else if (number - 900 == 75) {
                return nineHundred + " " + sevenTens + " five";
            } else if (number - 900 == 76) {
                return nineHundred + " " + sevenTens + " six";
            } else if (number - 900 == 77) {
                return nineHundred + " " + sevenTens + " seven";
            } else if (number - 900 == 78) {
                return nineHundred + " " + sevenTens + " eight";
            } else if (number - 900 == 79) {
                return nineHundred + " " + sevenTens + " nine";
            } else if (number - 900 == 70) {
                return nineHundred + " " + sevenTens;
            }
        } else if (tens == 8) {
            if (number - 900 == 81) {
                return nineHundred + " " + eightTens + " one";
            } else if (number - 900 == 82) {
                return nineHundred + " " + eightTens + " two";
            } else if (number - 900 == 83) {
                return nineHundred + " " + eightTens + " three";
            } else if (number - 900 == 84) {
                return nineHundred + " " + eightTens + " four";
            } else if (number - 900 == 85) {
                return nineHundred + " " + eightTens + " five";
            } else if (number - 900 == 86) {
                return nineHundred + " " + eightTens + " six";
            } else if (number - 900 == 87) {
                return nineHundred + " " + eightTens + " seven";
            } else if (number - 900 == 88) {
                return nineHundred + " " + eightTens + " eight";
            } else if (number - 900 == 89) {
                return nineHundred + " " + eightTens + " nine";
            } else if (number - 900 == 80) {
                return nineHundred + " " + eightTens;
            }
        } else if (tens == 9) {
            if (number - 900 == 91) {
                return nineHundred + " " + nineTens + " one";
            } else if (number - 900 == 92) {
                return nineHundred + " " + nineTens + " two";
            } else if (number - 900 == 93) {
                return nineHundred + " " + nineTens + " three";
            } else if (number - 900 == 94) {
                return nineHundred + " " + nineTens + " four";
            } else if (number - 900 == 95) {
                return nineHundred + " " + nineTens + " five";
            } else if (number - 900 == 96) {
                return nineHundred + " " + nineTens + " six";
            } else if (number - 900 == 97) {
                return nineHundred + " " + nineTens + " seven";
            } else if (number - 900 == 98) {
                return nineHundred + " " + nineTens + " eight";
            } else if (number - 900 == 99) {
                return nineHundred + " " + nineTens + " nine";
            } else if (number - 900 == 90) {
                return nineHundred + " " + nineTens;
            }
        }
    }
};
