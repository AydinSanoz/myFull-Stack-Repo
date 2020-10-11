

document.getElementById('button').addEventListener('click',function(){
  const sentence = document.getElementById('sentence').value;

  reverseWords(sentence)
});





console.log(sentence)


function reverseWords(sentence){
  const myArray = sentence.split(' ')
  const lengthSent = myArray.length
  console.log(myArray)
  console.log(lengthSent)
  const reversedArray = []
  
  for(i=lengthSent; i>0; i--){

    reversedArray.push(myArray[i-1])
  }

  console.log(reversedArray)
  
  }

  
  
  

  


