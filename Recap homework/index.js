//1)Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
const sumOfIntergers = (int1, int2)=> {
     
    if(int1 === int2){
        return 3 * (int1 + int2)
    }else{

    } return int1 + int2

}
console.log(sumOfIntergers(4,5
    ));

//2)
//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
 function checkIntergers (num1, num2){
     if( num1 ===50 || num2=== 50 || (num1 + num2 ===50)){
         return true
     }else{
         return false
     }
 }
console.log(checkIntergers(15,35))

//3.Write a JavaScript program to remove a character at the specified position of a given string and return the new string.


function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(remove_character("Python",0));
console.log(remove_character("Python",3));
console.log(remove_character("Python",5));


 //4.Write a JavaScript program to find the largest of three given integers.
 function lagestOfIntergers (int1,int2,int3){
     if (int1> int2 && int1 > int3){
        return `max value is ${int1} `
     }else if (int2 > int1 && int2 >int3){
         return `max value is${int2} `
     }else if (int1 === int2=== int3){
         return `all numbers are equal`
     }else{
         return int3
     }
 }
 console.log(lagestOfIntergers(7,5,2))

//sol 2
 function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
 }

console.log(max_of_three(200,300,50));


//5)Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function numberInRange (num1, num2){
    if ((num1>=40 && num1<= 60) && (num2 >= 40 && num2<=60)){
        return "number is in the range 40...60"
    }else if((num1 >= 70 && num1<=100) && (num2 >=70 && num2<=100)){
        return "number is in the range 70... 100"
    }else{
        return "number is not in the range"
    }
}
console.log(numberInRange(75, 86))

//6.Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));

 //7)
//Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function cityName (str){
    if(str.startsWith('Los') || (str.startsWith('New'))){
        return str
    }else{
        return "";
    }
}
console.log(cityName('Los Angeles'))
console.log(cityName('New York'))
console.log(cityName('Jesey'))


//8.Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sum_three(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sum_three([10, 32, 20]));  
console.log(sum_three([5, 7, 9])); 
console.log(sum_three([0, 8, -11]));

//9.Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 
function arrayOfIntergers (num){
    if (num.includes(1) || num.includes(3)){
        return true
    }else{
        return false
    }
}
console.log(arrayOfIntergers([0,5]))

//10 //Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
function arrayInt(num){
    if (!num.includes(1) || !num.includes(3)){
        return true
    } else{
        return false
    }

}
console.log(arrayInt([5,6]))
console.log(arrayInt([1,8]))
console.log(arrayInt([-2,3]))

//11.Write a JavaScript to find the longest string from a given array of strings.
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  console.log(longest_string(['a', 'aa', 'aaa',
                                            'aaaaa','aaaa']))
//sol2
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
  console.log(word); 
  
  //12 /Write a JavaScript program to find the types of a given angle.

/*Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

    function angle_Type(angle) {
        if(angle < 90) {
          return "Acute angle.";
        }
        if(angle === 90) {
          return "Right angle.";
        }
        if(angle < 180) {
          return "Obtuse angle.";
        }
        return "Straight angle.";
      }
      
      console.log(angle_Type(47))
      console.log(angle_Type(90))
      console.log(angle_Type(145))
      console.log(angle_Type(180))

      //13.Write a JavaScript program to find the index of the greatest element of a given array of integers
      function findI(arr){
          let greatest = 0
          for(i = 0; i<arr.length; i++){
              if (arr[i] > arr[greatest]){
              greatest = i
              return greatest
          }else{

          }return arr[i]

          }
          console.log(findI([3,6,0,8]))


//14) Write a JavaScript program to get the largest even number from an array of integers.
function max_even(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
}
  
  console.log(max_even([20, 40, 200]));
  console.log(max_even([20, 40, 200, 301]));

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

//16 Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));

//17) Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
// sol 1
function changeCase(str){
    if (str.length > 3){
    var getFirst = str.substring(0, 3).toLowerCase();
    var remain = str.substring(3, str.length);
    console.log(getFirst + remain);
    }
    else{
    console.log(str.toUpperCase());
    }
    }

    // sol2
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
      

      //18 Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

      function sumOfInt(int1,int2){
          if ((int1 + int2 >= 50 && int1 + int2 <= 80)){
              return 65
          }else{
              return 80
          }

      }
      console.log(sumOfInt(30,60))
      console.log(sumOfInt(30,20))
      console.log(sumOfInt(50,20)
      
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


//20 Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).
function convertPhrase (){
    
}



  


