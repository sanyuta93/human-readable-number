module.exports = function toReadable (number) {
    let obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven', 
        '8': 'eight',
        '9': 'nine'
      };
    
      let obj1 = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen'
      };
      
      let obj2 = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred'
      };
    
      if (number >= 0 && number <= 9) {
        return obj[number];
      }
     if (number >= 10 && number <= 19) {
        return obj1[number];
     }
     if (number >= 20 && number < 100 && (number % 10 == 0)) {
        return obj2[number];
      } else if (number >= 20 && number < 100 && (number % 10 != 0)) {
       let n = number % 10;
       let n1 = number - n;
       return (obj2[n1] + ' ' + obj[n]);
      }
      if (number >= 100 && number <= 999) {
        let k2 = number % 10;
        let k = number % 100;
        let k3 = k - k2;
        let k1 = (number - k)/100;
        if (k == 0) {
          return obj[k1] + ' ' + obj2[100];
        } else if (k >= 1 && k <= 9) {
          return obj[k1] + ' ' + obj2[100] + ' ' + obj[k];  
        } else if (k >= 10 && k <= 19) {
          return obj[k1] + ' ' + obj2[100] + ' ' + obj1[k];
        } else if (k >= 20 && k < 100 && (k % 10 == 0)) {
          return obj[k1] + ' ' + obj2[100] + ' ' + obj2[k];
        } else if (k >= 20 && k < 100 && (k % 10 != 0)) {
          return obj[k1] + ' ' + obj2[100] + ' ' + obj2[k3] + ' ' + obj[k2];
        }
      }
    
}
