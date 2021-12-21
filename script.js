const holes = $(".hole");
const scoreBoard = $(".score");
const moles = $(".mole");
const account = $("#account");

function startGame() {
    $("#startGame").click(() => { //account 10 sec
        let timer = 10;
        setInterval(function () {
            if (timer > 0) {
                timer--;
            }
        }, 1000)

        let durate = Math.floor(Math.random() *800 + 200);
        setInterval(function () {
            if (timer > 0) {
                let random = Math.floor(Math.random() * 7);
                holes.eq(random).addClass("up");
            }
            else {
                account.html("Finished!")
            }
        },durate)
    })
}
moles.click(function () {
    scoreBoard.text(parseInt(scoreBoard.text())+1);
    $(this).parent().removeClass("up");
})

startGame();
