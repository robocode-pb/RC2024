let lineIndex = 0;

function change() {
    lineIndex+=1;
    let спатиХочу =  document.createElement('li');
    спатиХочу.textContent =
    lineIndex + '. ' + document.getElementById('text').value;
    спатиХочу.id = lineIndex;
    спатиХочу.setAttribute('onclick', `зачеркнути(${lineIndex})`);
    document.getElementById('mainText').append(спатиХочу);
    
}
function зачеркнути(lineIndex){
    function deleteTask(){
document.getElementById(lineIndex).remove();

    }
    setTimeout(deleteTask, 3000);
document.getElementById(lineIndex).style.textDecoration = 'line-through';
document.getElementById(lineIndex).style.color = "red"
}








function clearList() {
    lineIndex = 0;
    document.getElementById('mainText').innerHTML = '';     
}