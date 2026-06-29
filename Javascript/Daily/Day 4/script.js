// DOM function
// finding the existing HTML elemrnt from DOM 

// function change(){
// //     let ele = document.getElementsByTagName("h1")
// //     ele[0].innerText = "hello India"

// //     let ele1 = document.getElementById("param")
// //     ele1.innerText = "this is new param"
    
// //     let ele2 = document.getElementsByClassName("parent")
// //     ele2[0].innerText = "this is dom manupulaton using class"

// //     ele1.style.backgroundColor ="green"
// }

const card = document.getElementById("card");

card.addEventListener("click", () => {
    card.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10" alt="Image">
    `;
});