let b = document.getElementById('input');
let broad = [];
let data = "";
for (let i = 0; i < 10; i++) {
    broad[i] = [' * ', ' * ', ' * ', ' * ', ' * ', ' * ', ' * ', ' * ', ' * ', ' * ',]
}
for (let i = 0; i < 10; i++) {
    data+="<br>";
    for (let j = 0; j < 10; j++) {
        data+=broad[i][j] + "&nbsp;&nbsp;";
    }
}
b.innerHTML = data;

function chanGe(){
    let toadoX = prompt("Nhap toa do X: ");
    let toadoY = prompt("Nhap toa do Y: ");
    data="";
    broad[toadoX][toadoY]=" o ";
    for (let i = 0; i < 10; i++) {
        data+="<br>";
        for (let j = 0; j < 10; j++) {
            data+= broad[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML= "<hr>" + data;
}
function chanGe1(){
    let toadoX = prompt("Nhap toa do X: ");
    let toadoY = prompt("Nhap toa do Y: ");
    data="";
    broad[toadoX][toadoY]=" x ";
    for (let i = 0; i < 10; i++) {
        data+="<br>";
        for (let j = 0; j < 10; j++) {
            data+= broad[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML= "<hr>" + data;
}