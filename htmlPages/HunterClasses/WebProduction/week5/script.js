let myImages = [
{'src': 'https://static.wikia.nocookie.net/kingdomhearts/images/3/30/Kingdom_Key_KH.png/revision/latest?cb=20191014151511', 'caption': 'Kingdom Key'}, 
{'src': 'https://static.wikia.nocookie.net/kingdomhearts/images/f/f0/Keyblade_of_People%27s_Hearts_KH.png/revision/latest?/cb=20101011143647', 'caption': 'Keyblade of Heart'},
{'src': 'https://static.wikia.nocookie.net/kingdomhearts/images/a/a1/Oathkeeper_KH.png/revision/latest?/cb=20191014225713', 'caption': 'OathKeeper'},
{'src': 'https://static.wikia.nocookie.net/kingdomhearts/images/1/1d/Oblivion_KH.png/revision/latest?/cb=20191014230202', 'caption': 'Oblivion'},
{'src': 'https://static.wikia.nocookie.net/kingdomhearts/images/5/52/Ultima_Weapon_KH.png/revision/latest?/cb=20101017221931', 'caption': 'Ultima Weapon'}
]


function addImages(imageArray) {
  let container = O('image-container')
  //loop over our list of objects
    //inside the loop 
    //create an image div
    for(let i = 0; i<=myImages.length; i++){
    //let imgDiv = createImage(imageArray[i])
      let imgDiv = createImage(imageArray[i])
      imgDiv.innerHTML += "<p>" + imageArray[i].caption+"</p>"
      container.appendChild(imgDiv)
      //add caption:
    //imgDiv.innerHTML += "<p>" + imageArray[i].caption + "</p>"
  //container.appendChild(imgDiv)
    }
   
    
    
}

function createImage(imageObject) {
  // create the element to add to the page
  // we're using a div so we can add things like captions to it
  let containerDiv = document.createElement("div")
  //set container class
  containerDiv.className = "image-container"
  //set container div styles
  // S(containerDiv).top = imageObject.top
  // S(containerDiv).left =  imageObject.left
  S(containerDiv).backgroundColor = "#8f3134"
  S(containerDiv).color = "white"
  S(containerDiv).border = "5px dashed white";

  let img = document.createElement("img")
  // set image attributes
  img.setAttribute("src", imageObject.src);
  //set image style
  S(img).height = '180px';
  S(img).width = '180px';

  //add the image to our container div
  containerDiv.appendChild(img)
  return containerDiv;
}

var hideBtn = document.querySelector('#hiddenPic');
const imageList = document.querySelector('#image-container');
hideBtn.onclick = function hide(){
   if(imageList.style.display === 'none'){
    imageList.style.display = 'block';
    hideBtn.innerHTML = 'Hide img';
   }else{
    imageList.style.display = 'none';
    hideBtn.innerHTML = 'Show img';
   }
   }

//   var btn = document.querySelector('#shuffle');
//   btn.onclick = function shuffleTime(myImages){
//   // get random number
//    var random = Math.floor(Math.random()* myImages.length);
// // get image at random image
// var imageShifted = myImages[random]

// //display image
// document.getElementById('image-container')
// //.src = '${imageShifted}'
//  }
  

addImages(myImages)
