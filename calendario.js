    const mesActualSpan = document.querySelector('.mes-actual');
    const diasMesContenedor = document.querySelector('.calendario-dias-mes');
    const botonPrev = document.querySelectorAll('.nav-boton')[0];
    const botonNext = document.querySelectorAll('.nav-boton')[1];

    let fechaActual = new Date();

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const renderizarCalendario = () => {
        const primerDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1).getDay();
        const ultimoDiaDelMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
        const hoy = new Date();

        mesActualSpan.textContent = `${meses[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`;
        diasMesContenedor.innerHTML = '';

        // Rellenar días vacíos al inicio del mes
        for (let i = 0; i < primerDiaDelMes; i++) {
            const diaVacio = document.createElement('span');
            diaVacio.classList.add('dia-vacio');
            diasMesContenedor.appendChild(diaVacio);
        }

        // Generar los días del mes
        for (let i = 1; i <= ultimoDiaDelMes; i++) {
            const dia = document.createElement('span');
            dia.classList.add('dia');
            dia.textContent = i;
            
            // Marcar el día de hoy
            if (i === hoy.getDate() && fechaActual.getMonth() === hoy.getMonth() && fechaActual.getFullYear() === hoy.getFullYear()) {
                dia.classList.add('dia-actual');
            }

            // Marcar el día de un evento (ejemplo estático)
            if (i === 6 && fechaActual.getMonth() === 7 && fechaActual.getFullYear() === 2025) {
                dia.classList.add('dia-evento');
            }
            
            diasMesContenedor.appendChild(dia);
        }
    };

    // Cambiar de mes al hacer clic en los botones
    botonPrev.addEventListener('click', () => {
        fechaActual.setMonth(fechaActual.getMonth() - 1);
        renderizarCalendario();
    });

    botonNext.addEventListener('click', () => {
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        renderizarCalendario();
    });

    // Cargar el calendario por primera vez
    renderizarCalendario();
