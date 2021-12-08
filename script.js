const btn = document.querySelector(".btn");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
let arr = [];

const generate = () => {
  //we need to write condition to create 20 numbers
  while (arr.length < 20) {
    //creating variable as a random number form 1 to 100
    const numbers = Math.floor(Math.random() * 100) + 1;
    arr.push(numbers);
    //sorting array from from the smallest to the largest number
    arr.sort((a, b) => a - b);
  }
  //iterate every item in the array and creating <li></li> element in the correct list1/list2 whether the number is odd or even
  arr.forEach((item) => {
    const li = document.createElement("li");
    if (item % 2 === 0) {
      li.innerHTML = item;
      list1.appendChild(li);
    } else if (item % 2 === 1) {
      li.innerHTML = item;
      list2.appendChild(li);
    }
  });
};

btn.addEventListener("click", generate);
