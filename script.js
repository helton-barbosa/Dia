function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()

   msg.innerHTML = `Agora são ${data.toLocaleTimeString()} horas.`

   if (data >= 0 && data < 12){
      //Bom dia
      img.src = 'imagens/manha.png'
      document.body.style.background = '#ecc573'
   } else if (data >= 12 && data < 18){
      //Boa tarde
      img.src = 'imagens/tarde.png'
      document.body.style.background = '#9BBDAC'
   } else {
      //Boa noite
      img.src = 'imagens/noite.png'
      document.body.style.background = '#4F3E3E'
   }
}