document.addEventListener('DOMContentLoaded', () => {
    const temaInput = document.getElementById('temaInput');
    const agregarTemaBtn = document.getElementById('agregarTema');
    const listaTemas = document.getElementById('listaTemas');

    function agregarTema() {
        const tema = temaInput.value;
        if (tema.trim() !== '') {
            fetch('https://picsum.photos/200/200')
                .then(response => response.url)
                .then(imagenURL => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <img src="${imagenURL}" alt="${tema}">
                        <span>${tema}</span>
                        <button class="eliminar">Eliminar</button>
                    `;
                    listaTemas.appendChild(listItem);
                    temaInput.value = '';
                });
        }
    }

   
    function eliminarTema(event) {
        const listItem = event.target.parentElement;
        listaTemas.removeChild(listItem);
    }

    agregarTemaBtn.addEventListener('click', agregarTema);
    listaTemas.addEventListener('click', (event) => {
        if (event.target.classList.contains('completar')) {
            completarTema(event);
        }
        if (event.target.classList.contains('eliminar')) {
            eliminarTema(event);
        }
    });
});