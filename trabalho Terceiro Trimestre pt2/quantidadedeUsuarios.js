async function quantidadeUsuarios (){
    const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 15,
                family: getCSS('--font')                
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title:{
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color:getCSS('--secondary-color')
                }
            }
        }
    }

    criarGrafico(data, layout)
}

quantidadeUsuarios()