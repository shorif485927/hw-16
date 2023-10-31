

  let darkBtn = document.querySelector('.dark__btn');

  let lightBtn = document.querySelector('.light__btn');

  let body = document.querySelector('body')






 function darkButton(){
    body.classList.add('dark__mode') ;
     darkBtn.style.backgroundColor = 'black';
     lightBtn.style.backgroundColor = 'yellow'     
 }

  function lightButton(){
     body.classList.remove('dark__mode');
     darkBtn.style.backgroundColor = 'yellow';
     lightBtn.style.backgroundColor = 'black' ;
  }


   lightBtn.addEventListener('click',lightButton);
  darkBtn.addEventListener('click', darkButton);



   //    mouse cursor


    let customCursor = document.querySelector('.custom__cursor');

    let smCursor = document.querySelector('  .small-cursor');



     function customMouse(event){
           let topValue = event.clientY;
           let leftValue = event.clientX;
          

           customCursor.style.top =`${topValue}px`;
           
           customCursor.style.left =`${leftValue}px`;


           smCursor.style.top =`${topValue}px`;
           
           smCursor.style.left =`${leftValue}px`;
     }




    window.addEventListener('mousemove' , customMouse)