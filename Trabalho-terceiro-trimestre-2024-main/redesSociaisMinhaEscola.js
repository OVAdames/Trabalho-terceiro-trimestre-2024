async function redesSociaisFavoritasMinhaEscola() {
    const url= 'https://script.google.com/macros/s/AKfycbzoUA42kPWhf7r-z3l5c_HZLSDEJLUx7XemxQKoHYy06dWpkHBPEm7qneT1DRdZMsv8Zw/exec'
    const res = await fetch(url)
    const dados =await res.json()
    const redesSociais = dados.slide(1).map(redes = redes [1])
    
    const contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    })
}

redesSociaisFavoritasMinhaEscola()