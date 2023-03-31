function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 14) {
                 //CRIANÇA
                img.setAttribute('src', 'meninocriança.png')

            } else if (idade < 21) {
                //JOVEM 
                img.setAttribute('src', 'meninojovem.png')

            } else if(idade < 50) {
                //ADULTO
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'homemvelho.png')
            }

        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 14) {
                //CRIANÇA
                img.setAttribute('src', 'meninacriança.png')

            } else if (idade < 21) {
                //JOVEM 
                img.setAttribute('src', 'meninajovem.png')

            } else if(idade < 50) {
                //ADULTO
                img.setAttribute('src', 'mulheradulto.png')

            } else {
                //IDOSO
                img.setAttribute('src', 'mulhervelho.png')

            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}