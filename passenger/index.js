
// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count people on the subway!")

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
   
    count = count + 1
    console.log(count)
    countEl.innerText = count

}