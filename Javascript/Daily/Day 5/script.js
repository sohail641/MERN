

// function dataPrint(){
//     let ele = document.getElementById("color-dropdown")
//     let res = document.getElementById("result")

//     ele.addEventListener("change", (event)=>{
//         let selectedValue = event.target.value;
//         res.textContent = `Selected data : ${selectedValue}`
//     })
// }

// dataPrint()

// function dataPrint() {
//     let ele = document.getElementById("dropdown-btn")
//     let res = document.getElementById("dropdown-content")


//     ele.addEventListener("click",()=>{
//         res.classList.toggle("hiddin")
//     })

//     window.addEventListener("click",(event)=>{
//         if(!ele.contains(event.target)){
//             res.classList.add("hidden")
//         }
//     })
// }

// Fist class funcnction in JS
// function which get treated as a variabile it can bhe passed as a arument to another function can be assigned as a value to a variable 

const foo = function(){
    console.log("hello world")
}
foo()();