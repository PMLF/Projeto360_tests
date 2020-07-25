document.querySelector(".get-qrcode").addEventListener('click',
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