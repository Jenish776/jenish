// const sidebar = document.querySelector('.sidebar');
// const box = document.querySelector(".box");
// const j = document.querySelector(".j")
// const p = document.querySelector(".p")
// const h = document.querySelector(".h")
// const q = document.querySelector(".q")

// box.addEventListener("click",( ) =>{
//     j.classList.toggle('close')
//     p.classList.toggle('close')
//     q.classList.toggle('open')
// })
// p.addEventListener("mouseenter",()=>{
//     h.classList.add('hover')
// })
// h.addEventListener("mouseout",()=>{
//     h.classList.remove('hover')
// })

// p.addEventListener("click",()=>{
//     j.classList.toggle('close')
//     p.classList.toggle('close')
// })
// h.addEventListener("mouseout")
// h.addEventListener("mouseente")
// box.addEventListener('click', toggleSidebar); 
// p.addEventListener('click');

const box = document.querySelector(".bo");
const link = document.querySelector(".title");
const btn1 = document.querySelector(".docte1")
const produ = document.querySelector(".btn20")
const produ1 = document.querySelector(".docte2")


box.addEventListener('click',() => {
    link.classList.toggle('close')
})
produ.addEventListener('click', () =>{
    btn1.classList.toggle('open')
    produ1.classList.toggle('open')
})

produ.addEventListener('click')
box.addEventListener('click')


// let item = ["a" , "b" , "c" ,"d" ,"e"]
// item.splice(2,1,"x");
// console.log(item.join(""));