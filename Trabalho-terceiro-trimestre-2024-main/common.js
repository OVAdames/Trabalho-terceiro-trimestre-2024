const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel).trim();
}


window.getCSS = getCSS;