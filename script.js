function carregar() {
   var msg=window.document.getElementById('msg')
   var data=new Date()
   var hora=data.getHours() 
   var minutos=data.getMinutes()
   var segundos=data.getSeconds()
   
   msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos e ${segundos} segundos`
   if(hora >= 0 && hora < 12){
  // bom dia
  foto.src="manhaa.png" 
  document.body.style.background="#FBE846"
   }else if(hora >= 12 && hora < 18){
    // boa tarde    
foto.src='tardee.png'
document.body.style.background="#BC896E"
   }else{
    //boa noite
    foto.src='noitee.png'
    document.body.style.background="#091918"
   }
}

