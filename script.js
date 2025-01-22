document.addEventListener("DOMContentLoaded", function() {
    // Load Call Animation
    lottie.loadAnimation({
        container: document.getElementById('call-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/cf82d2df-8d05-4f77-a982-8b3d0aa7728c/aChGAPkiWp.lottie'
    });

    // Load WhatsApp Animation
    lottie.loadAnimation({
        container: document.getElementById('whatsapp-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/58cd9742-68af-4f3a-8654-7c811b43885d/1L88jTPoST.lottie'
    });
});
