
let lineIndex = 0;

function change() 
{
    lineIndex = lineIndex + 1;
document.getElementById("mainText").innerHTML += 
    lineIndex + ". " +
document.getElementById("text").value + "<br>"


}

function clearList() {
    lineIndex = 0;
    document.getElementById("mainText").innerHTML = "";

}
