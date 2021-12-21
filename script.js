const holes = $(".hole");
const scoreBoard = $(".score");
const moles = $(".mole");
const result = $('#result');
const account = $("#account");

function startGame() {
    $("#startGame").click(() => { //account 10 sec
        let timer = 10;
        setInterval(function () {
            if (timer > 0) {
                timer--;
                console.log(timer)
            }
        }, 1000)

        account.html(timer);
        if (timer > 0) {
            let random = Math.random() * 6;
            console.log($(`.hole${random}`));
        }
    })
}

startGame();
