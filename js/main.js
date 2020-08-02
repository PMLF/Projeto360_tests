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
    $('.page-container').mousemove(function(e) {
        let x = e.clientX;
        let y = e.clientY;
      
      $('.negative').css('-webkit-mask-position-x', x - 50);
      $('.negative').css('-webkit-mask-position-y', y - 50);
    });

    let endOfCampaign = new Date("Aug 14, 2020 00:00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = endOfCampaign - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let timeMeasures = [days,hours,minutes,seconds];
        for (let i = 0; i < timeMeasures.length; i++) {
            timeMeasures[i] = ('0' + timeMeasures[i]).slice(-2);
        }

        document.querySelector(".days").innerHTML = timeMeasures[0];
        document.querySelector(".hours").innerHTML = timeMeasures[1];
        document.querySelector(".minutes").innerHTML = timeMeasures[2];
        document.querySelector(".seconds").innerHTML = timeMeasures[3];
    }, 1000);
});
