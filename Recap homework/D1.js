
 //15 Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
 function checkNumbers (num1,num2){
    if ((num1 === 50 || num2 === 50) || (num1 + num2 ===50)){
        return true
    }else{
        return false
    }
}
console.log(checkNumbers(50,30))
console.log(checkNumbers(20,10))
console.log(checkNumbers(10,50))

function checkI (int1,int2){
    if(int1>0 && int2<0){
        return `${int1} is positive`
    }else if(int2<0 && int1>0){
        return `${int2} is positive`
    }else{
        'Both of them are positive'
    }
    

}
    console.log(checkI(-1,4))
    console.log(checkI(4,0))
    console.log(checkI(8,4))
    //17) Write a JavaScript program to create new string with first 3 characters 
    //are in lower case and the others in upper case.
    // If the string length is less than 3 convert all the characters in upper case. 

    
        
    
    function upper_lower(str) {
        if (str.length <= 3) {
          return str.toUpperCase();
        }
        front_part = (str.substring(0, 3)).toLowerCase();
        back_part = str.substring(3, str.length);  
        return front_part + back_part;
      }
      console.log(upper_lower("Python"));
      console.log(upper_lower("Py"));
      console.log(upper_lower("JAVAScript"));
      



//15 Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

//16 Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.




function sumOfInt(int1,int2){
    if ((int1 + int2 >= 50 && int1 + int2 <= 80)){
        return 65
    }else{
        return 80
    }

}
console.log(sumOfInt(30,60))
console.log(sumOfInt(30,20))
console.log(sumOfInt(50,20))


/*19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".*/
function convertNumberToString(num){
    let result = ""
    if(num % 3 === 0){
         return result +='pling'
    }else if(num % 5=== 0){
         return result+='plang'
    }else if(num % 7 === 0){
        return result +='plong'
    }else if (num% 3 !=0 && num%5 != 0 && num% 7 != 0){
         num.ToString()
    }else {
        return result
    }
    }
        
console.log(convertNumberToString(35))

//20)
//Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).


