document.querySelector(".get-qrcode").addEventListener('click',
    function (e) {
        let qrcode = document.querySelector('.qrcode');
        if (qrcode.classList.contains("qr-up")) {
            qrcode.classList.remove("qr-up");
            qrcode.classList.add("qr-down");
            this.innerHTML = 'Gerar Código QR';
        }
        else {
            qrcode.classList.remove("qr-down");
            qrcode.classList.add("qr-up");
            this.innerHTML = 'Esconder código QR';
        }
    }
);