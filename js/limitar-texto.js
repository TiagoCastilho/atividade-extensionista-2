function limitarTexto() {
    var elementos = document.querySelectorAll('.card-title');
    elementos.forEach(function(elemento) {
      var texto = elemento.innerText;
      if (texto.length > 58) {
        texto = texto.slice(0, 57) + '...';
      }
      elemento.innerText = texto;
    });
}
  
limitarTexto();