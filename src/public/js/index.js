const d = document;

function moverA(pagina) {
  fetch(pagina)
}

d.querySelector('#copyright').innerHTML = `<p>&copy; Autorizado ${new Date().getFullYear()}<span class="pstr">*</span>. Regresa pronto.</p>`