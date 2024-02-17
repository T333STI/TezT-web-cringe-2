document.addEventListener('DOMContentLoaded', function () {
    const cmdInput = document.getElementById('cmd-input');
    const progressBar = document.getElementById('progress-bar');
    const progressDetails = document.getElementById('progress-details');
    const progressPercentage = document.getElementById('progress-percentage');

    cmdInput.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {  // 13 es el código de tecla para Enter
            const command = cmdInput.value.trim().toLowerCase();

            if (command === 'cmd') {
                progressBar.style.width = '100%';
                progressDetails.textContent = 'Cargando...';
                progressPercentage.textContent = '100%';

                progressBar.addEventListener('transitionend', function () {
                    window.location.href = 'index2.html';
                });
            } else {
                progressDetails.textContent = 'Comando no reconocido';
                console.log('Comando no reconocido');
            }

            cmdInput.value = '';
        }
    });
});
