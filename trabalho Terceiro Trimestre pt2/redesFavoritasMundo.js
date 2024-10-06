async function redesFavoritasMundo (){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url);
    const dados = await res.json();
    
    const redes = Object.keys(dados);
    const porcentagem = Object.values(dados);

    const data = [
        {
            values: porcentagem,
            labels: redes,
            textinfo: 'label+percent',
            type: 'pie'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
          text: 'Redes sociais que os usuários mais gostam',
          x: 0,
          font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 15,
          },
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
      };

    criarGrafico(data, layout)
}

redesFavoritasMundo();