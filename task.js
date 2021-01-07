let element;
setInterval(checkHole, 400);

function checkHole() {
    for (let i = 1; i <= 9; i++) {
        element = document.getElementById(`hole${i}`)
        if (element.className === 'hole hole_has-mole') {
            element.onclick = clickOnMole;
        } else {
            element.onclick = clickOnHole;
        }
    }

}

function clickOnMole() {
    let timerMoleNow = parseInt(document.getElementById("dead").textContent, 10);
    document.getElementById("dead").textContent = timerMoleNow + 1;
    let checkWinner = timerMoleNow + 1;
    if (checkWinner === 10) {
        alert("Вы победили")
        document.getElementById("dead").textContent = 0;
        document.getElementById("lost").textContent = 0;
    }
};

function clickOnHole() {
    let timerHoleNow = parseInt(document.getElementById("lost").textContent, 10);
    document.getElementById("lost").textContent = timerHoleNow + 1;
    let checkLoser = timerHoleNow + 1;
    if (checkLoser === 5) {
        alert("Вы проиграли")
        document.getElementById("dead").textContent = 0;
        document.getElementById("lost").textContent = 0;
    }
};