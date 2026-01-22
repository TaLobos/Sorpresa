// ===== VARIABLES =====
const envelope = document.getElementById('envelope');
const envelopeSection = document.getElementById('envelopeSection');
const messageSection1 = document.getElementById('messageSection1');
const messageSection2 = document.getElementById('messageSection2');
const messageSection3 = document.getElementById('messageSection3');
const messageSection4 = document.getElementById('messageSection4');
const messageSection5 = document.getElementById('messageSection5');
const messageSection6 = document.getElementById('messageSection6');
const successMessage = document.getElementById('successMessage');
const rejectMessage = document.getElementById('rejectMessage');
const btnContinue1 = document.getElementById('btnContinue1');
const btnConfetti1 = document.getElementById('btnConfetti1');
const btnContinue3 = document.getElementById('btnContinue3');
const btnContinue4 = document.getElementById('btnContinue4');
const btnContinue5 = document.getElementById('btnContinue5');
const btnContinue6 = document.getElementById('btnContinue6');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const btnRestart = document.getElementById('btnRestart');
const btnRestartNo = document.getElementById('btnRestartNo');
const heartButton = document.getElementById('heartButton');

// ===== FUNCIÓN: ALEATORIZAR DELAYS DE LAS FOTOS =====
function randomizePhotoDelays() {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
        let randomDelay;
        
        if (index < 3) {
            // Primeras 3 fotos: delay aleatorio entre 0 y 1 segundo
            randomDelay = Math.random() * 1;
        } else {
            // Últimas 2 fotos: delay aleatorio entre 4 y 6 segundos
            randomDelay = 4 + Math.random() * 2;
        }
        
        photo.style.animationDelay = randomDelay + 's';
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', randomizePhotoDelays);

// ===== EVENTO: ABRIR SOBRE =====
envelope.addEventListener('click', function() {
    // Añadir clase para abrir
    envelope.classList.add('open');
    
    // Mostrar primer mensaje después de la animación
    setTimeout(() => {
        envelopeSection.style.display = 'none';
        messageSection1.style.display = 'block';
    }, 800);
});

// ===== EVENTO: CORAZÓN (Abrir sobre) =====
heartButton.addEventListener('click', function(e) {
    e.stopPropagation();
    envelope.click();
});

// ===== EVENTO: MÁS CONFETI (Primer Mensaje) =====
btnConfetti1.addEventListener('click', function() {
    extraConfetti();
});

// ===== EVENTO: BOTÓN CONTINUAR (Primer Mensaje) =====
btnContinue1.addEventListener('click', function() {
    messageSection1.style.display = 'none';
    messageSection3.style.display = 'block';
});

// ===== EVENTO: BOTÓN CONTINUAR (Mensaje 3) =====
btnContinue3.addEventListener('click', function() {
    messageSection3.style.display = 'none';
    messageSection4.style.display = 'block';
});

// ===== EVENTO: BOTÓN CONTINUAR (Mensaje 4) =====
btnContinue4.addEventListener('click', function() {
    messageSection4.style.display = 'none';
    messageSection5.style.display = 'block';
});

// ===== EVENTO: BOTÓN CONTINUAR (Mensaje 5) =====
btnContinue5.addEventListener('click', function() {
    messageSection5.style.display = 'none';
    messageSection6.style.display = 'block';
});

// ===== EVENTO: BOTÓN CONTINUAR (Mensaje 6) =====
btnContinue6.addEventListener('click', function() {
    messageSection6.style.display = 'none';
    messageSection2.style.display = 'block';
});

// ===== EVENTO: BOTÓN SÍ =====
btnYes.addEventListener('click', function() {
    messageSection2.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Lanzar confeti
    launchConfetti();
});

// ===== EVENTO: BOTÓN NO =====
btnNo.addEventListener('click', function() {
    messageSection2.style.display = 'none';
    rejectMessage.style.display = 'block';
});

// ===== EVENTO: BOTÓN REINICIAR =====
btnRestart.addEventListener('click', function() {
    // Reiniciar página
    location.reload();
});

// ===== EVENTO: BOTÓN REINICIAR (NO) =====
btnRestartNo.addEventListener('click', function() {
    // Reiniciar página
    location.reload();
});

// ===== FUNCIÓN: LANZAR CONFETI =====
function launchConfetti() {
    // Confeti masivo en el centro
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        duration: 3000,
    });
    
    // Confeti desde los lados
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            duration: 2000,
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            duration: 2000,
        });
    }, 200);
    
    // Más confeti
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 180,
            origin: { y: 0.5 },
            duration: 2000,
        });
    }, 400);
}

// ===== FUNCIÓN: CONFETI EXTRA =====
function extraConfetti() {
    // Breve ráfaga adicional para el primer mensaje
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.7 },
        duration: 1800,
    });

    setTimeout(() => {
        confetti({ particleCount: 80, spread: 140, origin: { x: 0.1, y: 0.6 }, angle: 45 });
        confetti({ particleCount: 80, spread: 140, origin: { x: 0.9, y: 0.6 }, angle: 135 });
    }, 200);
}

// ===== FIN DEL SCRIPT =====
