var color = document.getElementById('titulo')

function aplicarEstilos() {
  var larguraTela = window.innerWidth

  if (larguraTela <= 600) {
    document.body.classList.add('titulo')
  } else {

    document.body.classList.remove('titulo')
  }
}

aplicarEstilos()
window.addEventListener('resize', aplicarEstilos)
