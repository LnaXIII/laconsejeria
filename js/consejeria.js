function abririnfo() {
	x=document.getElementById("importante");
	x.style.display="inline-block";
}

function cerrarinfo() {
	x=document.getElementById("importante");
	x.style.display="none";
}

// estaría bien hacer que el botón "información importante" desapareciera (display:none) cuando la info estuviera activa (display:inline-block)