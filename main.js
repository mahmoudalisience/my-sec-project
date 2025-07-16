

let btn = document.querySelector('.icon-compass')
let input = document.querySelector('input')
let container = document.getElementById('container')
let anger = document.querySelector(".icon-angry")
let star = document.querySelector('.icon-star-full')
// console.log(star)
// change icone 



// remove Element

container.addEventListener('click', (eo) => {

    if (eo.target.className == "icon-bin icon") {


        eo.target.parentElement.parentElement.remove()




    } else if (eo.target.className == "icon-angry icon") {


        eo.target.style.display = 'none';
        let heart = `<span class="icon-heart"></span>`;

        //    eo.target.parentElement.parentElement.getElementByClassName('task-text')[0].classList.add('finish');
        eo.target.parentElement.innerHTML += heart;

    } else if (eo.target.className == "icon-heart") {

        eo.target.style.display = 'none'
        let addanger = `<span class="icon-angry icon"></span>`
        eo.target.parentElement.innerHTML += addanger
    } else if (eo.target.className == "icon-star-full icon") {
        eo.target.classList.add('orange')
        container.prepend(eo.target.parentElement)
    } else if (eo.target.className == "icon-star-full icon orange") {
        eo.target.classList.remove('orange')
    }

})

// add Element

btn.addEventListener('click', (eo) => {

    eo.preventDefault()

    let task =
        `  <div class="task">
    <span class="icon-star-full icon"></span>
    <p class="task-text" >${input.value}</p>
    <div class="div">

         <span class="icon-bin icon"></span>
    
     <span class="icon-angry icon"></span>
    </div>
   

     <!-- <span class="icon-heart"></span> -->
</div>
  `

    container.innerHTML += task;

    input.value = '';

})


