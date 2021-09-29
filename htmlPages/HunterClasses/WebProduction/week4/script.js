document.querySelector('h1').innerText = "Let the wonder begin"
document.getElementById('title').style.color = 'blue'
function imageBackground(){
document.body.style.backgroundImage = "url('reference.jpeg')";
document.getElementById('title').style.color = 'white'
document.querySelector('section').style.color = 'white'
document.getElementById('section').style.left= 370+'px';
}
function backgroundChange(){
  document.body.style.backgroundImage = "url('heartRow.gif')";
}



function getFortune() {

  let numElement = O('pickNumber') // get the element
  let num = parseInt(numElement.value) //get its value and
  //convert it to a number
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = 'You will'
  let fortune = O('fortune')
  //in an if/else statement, everything should evaluate to true or false
  //
  if (name == 'Brent') {
    fortuneString += ' be a professor'
  
 }

  if (num >= 2) {
    fortuneString += ', find true love'
  } else if (num > 0) {i
    fortuneString += ', win great riches'
  } else {
    fortuneString += ', become a pauper'
  }




  switch (num) {
    case 0:
      fortuneString += ', and wander the earth forever'

      break; //this ends execution for this case - if other cases are true and you don't include a break statement, they can get executed too

    case 1:
      fortuneString += ', and develop superpowers'
      break;    
       case 2:
      fortuneString += ', and end up marooned at sea'
      break;
    case 3:
      fortuneString += ', and catch malaria'
      break;
    case 4:
      fortuneString += ', and become Poseidon, Emperor of the Seas'
      break;
    case 5:
      fortuneString += ', and die a horrible death'
      // adding a style in a switch case - dying a horrible death is no fun!
      fortune.style.backgroundColor = 'red'
      break;
       case 6:
      fortuneString += ', and find the job of your dreams'
      
      break; 
      case 7:
      fortuneString += ', and your next meal will be a good one'
      
      break;

  }
  if (name == 'Brent' && num ==3 ) {
    fortuneString += ' and write a lot of code this week'
  }

  if (num == 2 || name == 'Dave') {
    fortuneString += ' and be named Dave' //everyone named Dave picks 2, that's just a fact.
  }

   
   



  // set the inner text of the fortune element to our new string
  // you could also try HTML elements instead of just adding the text!
  fortune.innerText = fortuneString
  // and don't forget to clear out the inputs for the next fortune
  numElement.value = 0;
  nameElement.value = ''
}