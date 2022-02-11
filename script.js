"use strict";

let a1 = document.querySelector("#a1");
let b1 = document.querySelector("#b1");
let c1 = document.querySelector("#c1");
let cons1 = document.querySelector("#const1");

let a2 = document.querySelector("#a2");
let b2 = document.querySelector("#b2");
let c2 = document.querySelector("#c2");
let cons2 = document.querySelector("#const2");

let a3 = document.querySelector("#a3");
let b3 = document.querySelector("#b3");
let c3 = document.querySelector("#c3");
let cons3 = document.querySelector("#const3");

let iter = document.querySelector("#iter");
let round = document.querySelector("#round");

let output = document.querySelector("#output");
let ans = document.querySelector("#ans");

output.style.display = "none";

function clickButton() {
    output.style.display = "block";
    let x = (y1, z1) => {return ((cons1.value - (b1.value * y1) - (c1.value * z1)) / a1.value)};
    let y = (x1, z1) => {return ((cons2.value - (a2.value * x1) - (c2.value * z1)) / b2.value)};
    let z = (x1, y1) => {return ((cons3.value - (a3.value * x1) - (b3.value * y1)) / c3.value)};

    let x_up = x(0, 0);
    let y_up = y(x_up, 0);
    let z_up = z(x_up, y_up);

    ans.innerHTML = `Iteration - 1: <br>x = ${math.round(x_up, round.value)}<br>
                    y = ${math.round(y_up, round.value)}<br>
                    z = ${math.round(z_up, round.value)}<br><br>`;
    

    if (iter.value > 1) {
        if (iter.value > 100) {
            iter.value = 100;
        }

        for (let i = 2; i <= iter.value; i++) {
            x_up = x(y_up, z_up);
            y_up = y(x_up, z_up);
            z_up = z(x_up, y_up);

            ans.innerHTML += `Iteration - ${i}: <br>x = ${math.round(x_up, round.value)}<br>
                            y = ${math.round(y_up, round.value)}<br>
                            z = ${math.round(z_up, round.value)}<br><br>`;
        }
    }
}
