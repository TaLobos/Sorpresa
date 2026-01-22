// ===== VARIABLES =====
const elements = {
    envelope: document.getElementById('envelope'),
    envelopeSection: document.getElementById('envelopeSection'),
    messageSection1: document.getElementById('messageSection1'),
    messageSection2: document.getElementById('messageSection2'),
    messageSection3: document.getElementById('messageSection3'),
    messageSection4: document.getElementById('messageSection4'),
    messageSection5: document.getElementById('messageSection5'),
    messageSection6: document.getElementById('messageSection6'),
    messageSection7: document.getElementById('messageSection7'),
    successMessage: document.getElementById('successMessage'),
    rejectMessage: document.getElementById('rejectMessage'),
    btnContinue1: document.getElementById('btnContinue1'),
    btnConfetti1: document.getElementById('btnConfetti1'),
    btnContinue3: document.getElementById('btnContinue3'),
    btnContinue4: document.getElementById('btnContinue4'),
    btnContinue5: document.getElementById('btnContinue5'),
    btnContinue6: document.getElementById('btnContinue6'),
    btnContinue7: document.getElementById('btnContinue7'),
    btnYes: document.getElementById('btnYes'),
    btnNo: document.getElementById('btnNo'),
    btnRestart: document.getElementById('btnRestart'),
    btnRestartNo: document.getElementById('btnRestartNo'),
    heartButton: document.getElementById('heartButton')
};

// ===== FUNCIÓN: CAMBIAR SECCIÓN =====
function switchSection(hideElements, showElement, delay = 0) {
    setTimeout(() => {
        hideElements.forEach(el => el.style.display = 'none');
        showElement.style.display = 'block';
    }, delay);
}

// ===== FUNCIÓN: ALEATORIZAR DELAYS DE LAS FOTOS =====
function randomizePhotoDelays() {
    document.querySelectorAll('.photo').forEach((photo, index) => {
        const randomDelay = index < 3 ? Math.random() : 4 + Math.random() * 2;
        photo.style.animationDelay = randomDelay + 's';
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', randomizePhotoDelays);

// ===== EVENTO: ABRIR SOBRE =====
elements.envelope.addEventListener('click', function() {
    elements.envelope.classList.add('open');
    switchSection([elements.envelopeSection], elements.messageSection1, 800);
});

// ===== EVENTO: CORAZÓN (Abrir sobre) =====
elements.heartButton.addEventListener('click', function(e) {
    e.stopPropagation();
    elements.envelope.click();
});

// ===== EVENTO: MÁS CONFETI =====
elements.btnConfetti1.addEventListener('click', extraConfetti);

// ===== EVENTOS: BOTONES CONTINUAR =====
elements.btnContinue1.addEventListener('click', () => 
    switchSection([elements.messageSection1], elements.messageSection3)
);
elements.btnContinue3.addEventListener('click', () => 
    switchSection([elements.messageSection3], elements.messageSection4)
);
elements.btnContinue4.addEventListener('click', () => 
    switchSection([elements.messageSection4], elements.messageSection5)
);
elements.btnContinue5.addEventListener('click', () => 
    switchSection([elements.messageSection5], elements.messageSection6)
);
elements.btnContinue6.addEventListener('click', () => 
    switchSection([elements.messageSection6], elements.messageSection7)
);
elements.btnContinue7.addEventListener('click', () => 
    switchSection([elements.messageSection7], elements.messageSection2)
);

// ===== EVENTO: BOTÓN SÍ =====
elements.btnYes.addEventListener('click', function() {
    switchSection([elements.messageSection2], elements.successMessage);
    launchConfetti();
});

// ===== EVENTO: BOTÓN NO =====
elements.btnNo.addEventListener('click', () => 
    switchSection([elements.messageSection2], elements.rejectMessage)
);

// ===== EVENTOS: REINICIAR =====
elements.btnRestart.addEventListener('click', () => location.reload());
elements.btnRestartNo.addEventListener('click', () => location.reload());

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
