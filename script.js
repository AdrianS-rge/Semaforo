trocar = () => {
    if(numero == 1) {
        document.getElementById('verde').style.backgroundColor = 'rgb(0, 49, 0)'
        document.getElementById('verde').style.boxShadow = 'none'
        
        document.getElementById('vermelho').style.backgroundColor = 'red'
        document.getElementById('vermelho').style.boxShadow = '0px 0px 20px red'
        numero = 2
        setTimeout(trocar, 3000)
    } else if (numero == 2) {
        document.getElementById('vermelho').style.boxShadow = 'none'
        document.getElementById('vermelho').style.backgroundColor = 'rgb(88, 0, 0)'
        document.getElementById('amarelo').style.backgroundColor = 'orange'
        document.getElementById('amarelo').style.boxShadow = '0px 0px 20px orange'
        numero = 3
        setTimeout(trocar, 2000)
    } else {
        document.getElementById('amarelo').style.boxShadow = 'none'
        document.getElementById('amarelo').style.backgroundColor = 'rgb(87, 39, 0)'
        document.getElementById('verde').style.backgroundColor = 'green'
        document.getElementById('verde').style.boxShadow = '0px 0px 20px green'
        numero = 1
        setTimeout(trocar, 3000)
    }
}

iniciar = () => {
    numero = 1
    setTimeout(trocar, 0)
}



/*maior = () => {
    numero = 1
    window.document.getElementById('demo').innerHTML = eval(numero + 1)
}*/
