const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel).trim();
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

function criarGrafico(data, layout){
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout)
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

window.incluirTexto = incluirTexto
window.criarGrafico = criarGrafico
window.tickConfig = tickConfig
window.getCSS = getCSS