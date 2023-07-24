function verificar() {
var data = new Date()
var ano = data.getFullYear()
var formAno = document.getElementById('txtano')
var res = document.getElementById('resultado')

if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert('Verifique os dados e tente novamente')
} else {
    var fsex = document.getElementsByName('radiosex')
    var idade = ano - Number(formAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    

    if (fsex[0].checked) {
        genero = 'Homem'

        if(idade >= 0 && idade <10) {
            img.setAttribute('src', 'homem-crianca.jpg')
        } else if (idade >= 10 && idade< 21) {
            img.setAttribute('src', 'homem-jovem.jpg')
        } else if (idade <50) {
            img.setAttribute('src', 'homem-adulto.jpg')
        } else {
            img.setAttribute('src', 'homem-idoso.jpg')
        }
        
    } else if (fsex[1].checked){
        genero = 'mulher'

        if(idade >= 0 && idade <10) {
            img.setAttribute('src', 'mulher-crianca.jpg')
        } else if (idade >= 10 && idade< 21) {
            img.setAttribute('src', 'mulher-jovem.jpg')
        } else if (idade <50) {
            img.setAttribute('src', 'mulher-adulta.jpg')
        } else {
            img.setAttribute('src', 'mulher-idosa.jpg')
        }

    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}


}