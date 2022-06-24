document.getElementById('nut').onclick = function () {
    randint = getRandomInt();
    randurl = "https://comment.nld.com.vn/TraDiem/Lop10/TraDiemTHPT.aspx?SoBD=" + randint;
    console.log(randurl);
    document.getElementById('frame').src = randurl;

};

document.getElementById('frame').onload = () => {
    console.log('loaded');
    document.getElementById("frame").contentDocument.body.style.fontFamily = "lora";
    yeet();
  }

function getRandomInt() {
    min = 100000;
    max = 200000;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function yeet(){
    const elements = document.getElementsByClassName("bgxemdiemthilop10 frm-search-web");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}