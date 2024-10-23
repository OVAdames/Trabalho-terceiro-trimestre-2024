async function redesSociaisFavoritasMinhaEscola() {
    const url= 'https://script.google.com/macros/s/AKfycbzoUA42kPWhf7r-z3l5c_HZLSDEJLUx7XemxQKoHYy06dWpkHBPEm7qneT1DRdZMsv8Zw/exec'
    const res = await fetch(url)
    const dados =await res.json()

    const redesSociais = dados.slide(1).map(redes => redes [1])
    
    const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    }, {})
}

const valores = Object.values(contagemRedesSociais)
const labels = Object.keys(contagemRedesSociais)

const data = [
    {
        values: valores,
        labels: labels,
        textinfo: 'label+percent',
        type: 'pie'
    }
]

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    height: 700,
    title: {
      text: 'Redes sociais que as pessoas da minha escola mais gostam',
      x: 0,
      font: {
        color: getCSS('--primary-color'),
        family: getCSS('--font'),
        size: 15,
      }
    },
    legend: {
        font: {
            color: getCSS('--primary-color'),
            size: 16
        }
    }
  }

criarGrafico(data, layout)
incluirTexto('')


redesSociaisFavoritasMinhaEscola()