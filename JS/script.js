    let q1 = document.querySelector('#q1')
    let q2 = document.querySelector('#q2')
    let q3 = document.querySelector('#q3')
    let q4 = document.querySelector('#q4')
    let q5 = document.querySelector('#q5')
    let q6 = document.querySelector('#q6')
    let q7 = document.querySelector('#q7')
    let q8 = document.querySelector('#q8')
    let q9 = document.querySelector('#q9')
    let q10 = document.querySelector('#q10')
    let resultado = document.querySelector('#resultado')

    let botao = document.querySelector('#verificar')
    botao.addEventListener('click', setVerificar)

    function setVerificar(){

        let pontos = 0
        if (q1.value == "1") {
            pontos += 10
        } 

        if (q2.value == "1"){
            pontos += 10
        } 

        if (q3.value == "1"){
            pontos += 10
        }

        if (q4.value == "1"){
            pontos += 10
        }

        if (q5.value == "1"){
            pontos += 10
        }

        if (q6.value == "1"){
            pontos += 10
        }

        if (q7.value == "1"){
            pontos += 10
        }

        if (q8.value == "1"){
            pontos += 10
        }

        if (q9.value == "1"){
            pontos += 10
        }

        if (q10.value == "1"){
            pontos += 10
        }

        const name = document.querySelector ("#name")
        let value = name.value;

    
        if (value == ""){
        alert('Por favor, coloque seu nome!')
        return 0 }
        console.log(value);
        resultado.innerHTML = ("<h1>Resultado</h1> <br> Pontos: " + pontos)
     names.innerHTML = "<br> Nome: " + value
    }