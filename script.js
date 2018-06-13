var players = [];


$(document).ready(function(){
    var QPlayers = 4;

    $(".remove").on("click", function(){
       $(this).parent().hide();
       QPlayers = QPlayers - 1;
   });

   $("#enterNames").on("click", function(){
       var player1 = new Person($("#player1").val(), 0);
       players.push(player1);
       var player2 = new Person($("#player2").val(), 0);
       players.push(player2);
       if(QPlayers >= 3 && $("#player3").val().length != 0){
           var player3 = new Person($("#player3").val(), 0);
           players.push(player3);
       }
       if(QPlayers == 4 && $("#player4").val().length != 0){
           var player4 = new Person($("#player4").val(), 0);
           players.push(player4);
       }
       console.log(players);
       $("#setup").hide();
       $("#gameScore").show();
       setUp();
   });


});



function Person(name,score){
    this.name = name;
    this.score = score;
}

function setUp(){
    for(var i = 0; i < players.length; i ++){
        var addName = document.getElementById("addName");
        addName.innerHTML += "<option id=\"setUp"+ i + "\">" + players[i].name + "</option>";
    }
}

function wordAdder(){

}

function letterChange(){
    var letters = document.getElementById("addWord");
    var amountOfLetters = document.getElementById("numberOfLetters").value;
    letters.innerHTML = "";
    for(var i = 0; i < amountOfLetters; i ++){
        addWord.innerHTML += "<input type=\"text\" class=\"letter\" maxlength=\"1\" onclick=\"changeColor()\">";
    }
}

function changeColor(){
    $(".letter").on("click", function(){
        console.log($(this).css("background-color"));
        if($(this).css("background-color") == "white") {
            $(this).css("background-color", "light-blue");
        }
        if($(this).css("background-color") == "light-blue") {
            $(this).css("background-color", "dark-blue");
        }
        if($(this).css("background-color") == "dark-blue") {
            $(this).css("background-color", "tan");
        }
    });
}