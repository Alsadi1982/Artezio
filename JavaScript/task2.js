function ButtonClick() {
  let x1 = document.getElementById("x1").value;
  let x2 = document.getElementById("x2").value;
  let num1 = parseInt(x1);
  let num2 = parseInt(x2);
  let sum = 0;
  let mult = 1;
  let snum = [];
  let val;
  let elements = document.getElementsByName("point");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      val = elements[i].value;
    }
  }
  if (x1 === "" || x2 === "") {
    alert("Поля х1 и х2 должны быть заполнены!");
  } else if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("В поля х1 и х2 должны быть введены числовые значения!");
  } else {
    if (val === "point1") {
      if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
          sum += i;
        }
      } else {
        for (let i = num2; i <= num1; i++) {
          sum += i;
        }
      }
      let ResultDiv = document.getElementById("result");
      ResultDiv.innerHTML = "SUM = " + sum;
    }
    if (val === "point2") {
      if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
          mult *= i;
        }
      } else {
        for (let i = num2; i <= num1; i++) {
          mult *= i;
        }
      }
      let ResultDiv = document.getElementById("result");
      ResultDiv.innerHTML = "multiplication = " + mult;
    }
    if (val === "point3") {
      if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
          let count = 0;
          if (i === 1 || i === 2) snum.push(i);
          else {
            for (let j = 2; j < i; j++) {
              if (i % j === 0) {
                count++;
                break;
              }
            }
            if (count === 0) snum.push(i);
          }
        }
      } else {
        for (let i = num2; i <= num1; i++) {
          let count = 0;
          if (i === 1 || i === 2) snum.push(i);
          else {
            for (let j = 2; j < i; j++) {
              if (i % j === 0) {
                count++;
                break;
              }
            }
            if (count === 0) snum.push(i);
          }
        }
      }

      let ResultDiv = document.getElementById("result");
      ResultDiv.innerHTML = "Simple Numbers: " + snum;
    }
  }
}

function CleanUp() {
  document.getElementById("x1").value = "";
  document.getElementById("x2").value = "";
}
