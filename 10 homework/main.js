const list = document.querySelector(".list");
const input = document.querySelector(".input");
const sortBtn = document.querySelector(".sort-btn");
const negBtn = document.querySelector(".neg-btn");
const posBtn = document.querySelector(".pos-btn");

let arr = [];

function getList(array) {
  list.innerHTML = "";

  array.map((number) => {
    const li = document.createElement("li");

    li.innerText = number;

    list.appendChild(li);
  });
}

function addEl() {
  arr.push(input.value);

  input.value = "";

  getList(arr);
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addEl();
  }
});

function filterArr(value) {
  let newArr =
    value === "pos" ? arr.filter((el) => el > 0) : arr.filter((el) => el < 0);

  arr = newArr;

  getList(newArr);
}

negBtn.addEventListener("click", filterArr);
posBtn.addEventListener("click", () => filterArr("pos"));

function sortArr() {
  if (sortBtn.innerText === "Сортировать по возрастанию") {
    const sortArr = arr.sort((a, b) => a - b);
    sortBtn.innerText = "Сортировать по убыванию";

    getList(sortArr);
  } else {
    const sortArr = arr.sort((a, b) => b - a);
    sortBtn.innerText = "Сортировать по возрастанию";

    getList(sortArr);
  }
}

const evenBtn = document.querySelector(".even-btn");
const oddBtn = document.querySelector(".odd-btn");

function getEvenOrOddList(evenOrOdd) {
  let newArr = [];

  if (evenOrOdd === "even") {
    newArr = arr.filter((item) => !Boolean(item % 2));
  } else {
    newArr = arr.filter((item) => item % 2);
  }

  arr = newArr;

  getList(newArr);
}

evenBtn.addEventListener("click", () => getEvenOrOddList("even"));
oddBtn.addEventListener("click", () => getEvenOrOddList("odd"));
