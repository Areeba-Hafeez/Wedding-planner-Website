//  let menuBars =  document.getElementById('menu-bars');
//   let navLinkItems = document.querySelector('.navbar-nav-items')
//   function showMenu (){
//      if(navLinkItems.classList.contains('hide')){
//       navLinkItems.classList.remove('hide');
//         navLinkItems.classList.add('show');
//      } else{
//       navLinkItems.classList.add('hide');
//       navLinkItems.classList.remove('show');
//      }
//   }
function counter() {
  let counts = document.querySelectorAll('.count');
  let speed = 400;

  counts.forEach((myCount) => {
    let targetCount = parseInt(myCount.dataset.count, 10);
    let initialCount = 0; 
    let countSpeed = Math.floor(targetCount / speed);
    function countUpdate() {
      initialCount += countSpeed;
      if (initialCount > targetCount) 
        initialCount = targetCount; 
      myCount.innerText = initialCount;
      if (initialCount < targetCount) {
        setTimeout(countUpdate, 5);
      }
    }

    countUpdate();
  });
}
// window.addEventListener("scroll",()=>{
//   var ourwork=document.getElementsByClassName("our-work")
// //  console.log( ourwork[0].getBoundingClientRect().top)
// if(ourwork[0].getBoundingClientRect().top <500){
//   counter() 
// }
// })

// window.removeEventListener("scroll", arguments.callee 
//  window.addEventListener('DOMContentLoaded', () =>{
// heading(); 
// ContactBox()
//  })
// home banner heading function 
function heading (){
  
  let textDiv = document.querySelector('#text-div');
  let text = textDiv.innerText;  
  textDiv.innerHTML = ""; 
  let b =  text.split('');
   for(let letter = 0 ; letter < text.length ; letter++){
          let span = document.createElement('span')
        let lett =  span.textContent = text[letter];
         span.style.opacity = 0;
       textDiv.appendChild(span);
  
       setTimeout(()=>{
         span.style.opacity = 1;
       } ,100 * letter)
   }
};

  // contact box function 
function ContactBox() {
  let contactNumberBox = document.querySelector('.contact-number-box');
  let contactBtn = document.querySelector('#call-btn');
  let closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    contactNumberBox.classList.add('hide');
     console.log("hellow")
  });

  contactBtn.addEventListener('click', () => {
    contactNumberBox.classList.remove('hide');
  });

  let copiedBtn = document.getElementById('copiedBtn');
  let ourContactNumber = document.getElementById('ourContact-number');
  copiedBtn.addEventListener('click', () => {
    ourContactNumber.select();
    document.execCommand('copy');
    copiedBtn.innerHTML = 'Copied';
  });  

  return contactNumberBox;
}
  