//Reverse a String
/*Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh"*/

function reverseString(str) {
  let newStr="";
  for(let i=str.length-1;i>=0;i--){
    newStr+=str[i];
  }
  return newStr;
}

reverseString("hello");