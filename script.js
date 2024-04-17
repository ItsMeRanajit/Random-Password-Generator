let value;
let password = "";
const btn = document.querySelector("#btn");
const pass = document.querySelector("#Password");
const img = document.querySelector(".gen img");

const getvalue = () => {
  const choice = document.querySelector("#choice input");
  value = parseInt(choice.value);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "|", ".", "?"];
const all = numbers + uppercase + lowercase;

const gen_password = () => {
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  while (value > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
};
const clear_val = () => {
  pass.value = "";
  password = "";
};
btn.addEventListener("click", () => {
  if (value === undefined || isNaN(value)) {
    alert("Please Enter Password length");
  } else if (value < 4) {
    alert(`Password of length ${value} cannot be generated`);
  } else {
    clear_val();
    gen_password();
    // console.log(password);
    pass.value = password;
  }
});

const copy_pass = () => {
  pass.select();
  document.execCommand("copy");
};
img.addEventListener("click", () => {
  copy_pass();
});
