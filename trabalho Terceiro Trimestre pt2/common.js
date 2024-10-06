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

window.criarGrafico = criarGrafico

window.tickConfig = tickConfig

window.getCSS = getCSS;