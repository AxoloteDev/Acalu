// Função para o Menu Mobile

function abrirMenu() {
	return (document.getElementById("menuAtivo").style.width = "100%");
}

function fecharMenu() {
	return (document.getElementById("menuAtivo").style.width = "0");
}

// Função para o Carrocel do SwiperJs

const swiper = new Swiper(".swiper", {
	autoplay: {
		delay: 2500,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});
