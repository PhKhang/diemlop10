document.getElementById('nut').onclick = function () {
    randint = getRandomInt();
    randurl = "https://comment.nld.com.vn/TraDiem/Lop10/TraDiemTHPT.aspx?SoBD=" + randint;
    console.log(randurl);
    document.getElementById('frame').src = randurl;

};

document.getElementById('frame').onload = () => {
    console.log('loaded');
    //document.getElementById("frame").contentDocument.body.style.fontFamily = "lora";
    //yeet();
  }

function getRandomInt() {
    min = 100000;
    max = 200000;
    seed = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(seed);
    switch (seed) {
  case 1:
    return Math.floor(Math.random() * (96013 - 90000) + 90000);
    break;
  case 2:
    return Math.floor(Math.random() * (9571 - 9000) + 9000);
    break;
  case 3:
    return Math.floor(Math.random() * (186191 - 100000) + 100000);
    break;
  default:
    // code
}
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function yeet(){
    const elements = document.getElementsByClassName("bgxemdiemthilop10 frm-search-web");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
