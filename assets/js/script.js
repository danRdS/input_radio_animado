function selecionar() {
    const inputSelecionadoDimensao = document.querySelector('input:checked').getBoundingClientRect();
    const formDimensao = document.querySelector('form').getBoundingClientRect();
    const marcador = document.querySelector('.marcador');

    const topMarcador = inputSelecionadoDimensao.top - formDimensao.top;
    const leftMarcador = inputSelecionadoDimensao.left - formDimensao.left;

    marcador.style.top = topMarcador + 'px';
    marcador.style.left = leftMarcador + 'px';
    marcador.style.display = 'block';

    const inputSelecionados = document.querySelectorAll('input');
    
    inputSelecionados.forEach(input => {
        input.onchange = () => {
            marcador.classList.remove('animacao');
            setTimeout(() => marcador.classList.add('animacao'));
        }
    });
}

const form = document.querySelector('form');
const bolha = document.createElement('div');
bolha.className = 'bolha';

(() => document.querySelector('form').appendChild(bolha))();

form.addEventListener('mousemove', event => {
    bolha.style.opacity = '1';
    bolha.style.top = (event.clientY - form.getBoundingClientRect().top)+'px';
    bolha.style.left = (event.clientX - form.getBoundingClientRect().left)+'px';
})

form.onmouseleave = () => bolha.style.opacity = '0';