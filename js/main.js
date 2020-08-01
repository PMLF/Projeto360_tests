/*document.querySelector(".get-qrcode").addEventListener('click',
    function (e) {
        let qrcode = document.querySelector('.qrcode');
        let cover = document.querySelector('.cover-screen');
        if (qrcode.classList.contains("qr-up")) {
            qrcode.classList.remove("qr-up");
            qrcode.classList.add("qr-down");
            cover.classList.add('hidden');
            this.innerHTML = 'Gerar Código QR';
        }
        else {
            qrcode.classList.remove("qr-down");
            qrcode.classList.add("qr-up");
            cover.classList.remove('hidden');
            this.innerHTML = 'Esconder código QR';
        }
    }
);
*/

var pointer = document.querySelector(".pointer");

document.addEventListener("mousemove",
    function (e) {
        let x = e.clientX;
        let y = e.clientY;
        pointer.style.left = x + "px";
        pointer.style.top = y + "px";
});

$(document).ready(function(){
    $('.original').mousemove(function(e) {
        let x = e.clientX;
        let y = e.clientY;
      
      $('.negative').css('-webkit-mask-position-x', x - 50);
      $('.negative').css('-webkit-mask-position-y', y - 50);
    });
});