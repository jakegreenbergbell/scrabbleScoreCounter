function name(number){
    var divvy = document.getElementById("realName" + number);
    var textField = document.getElementById("input" + number);
    divvy.innerHTML = textField.value;
    divvy.removeAttribute("input");
}