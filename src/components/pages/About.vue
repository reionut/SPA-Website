<template>
	<article class="about">
	<h1 class="title title_l">Despre mine</h1>
			<div class="about_info-qutes">
			<figure>
				<img src="../../assets/images/autor_foto.png" alt="Autor">
			</figure>
				<h2 class="title">Salut, sunt Andrei</h2>
				<p>Creez desene in creion care te inspiră să sărbătorești pe cineva special, o poveste, o pasiune sau o realizare.</p>
			</div>
			<div class="about_info">
				<h2 class="title">Ma barfeste</h2>
				<p>"Andrei George Croitoru este un tânăr artist care ne demonstrează că artă înseamnă şi precizia creionului, că un desen realizat cu fineţe şi migală poate dezvălui frumuseţe, sensibilitate şi idei strălucite. Sub măiestria creionului său reliefează o lume deosebită, ştiind cum să pună în valoare formele şi trăsăturile, dar şi cum să le îmbine.
     Artistul desenează de când se ştie, însă de vreo 12 ani de zile s-a concentrat asupra acestei pasiuni şi a reuşit să ajungă la un nivel profesionist. Nu are studii în domeniu, este autodidact. În toţi aceşti ani de când Andrei şi-a îndreptat întreaga atenţie şi concentrare asupra desenului în creion, acesta a realizat sute de astfel de desene, printre care stau mărturie portrete ale unor valori din domeniul artei, dar şi logo-uri, etichete şi desene pe pereţi. Toate au fost create cu pasiune şi suflet, iar rezultatul este pe măsură. Munceşte intens pentru a evolua din ce în ce mai frumos. 
     Astfel, ne demonstrează că acolo unde este talent, prin muncă poţi şlefui harul tău în opere deosebite prin care să transmiţi mesaje care să ajungă la sufletul privitorului, iubitorului de artă şi frumos." <br>Alexandra Mihalache - <a href="http://confluente.org/alexandra_mihalache_1444728671.html" target="_blank">Confluente Literare</a></p>
			</div>
			<div class="about_info">
				<h2 class="title">Si...</h2>
				<p>“Roma însăşi, învingătoarea tuturor popoarelor, a trebuit să slujească supusă şi să primească jugul triumfului getic …” <br><a href="https://povestea-locurilor.ro/2018/01/28/alaric-regele-vizigotilor/" target="_blank">povestea-locurilor.ro</a></p>
			</div>
			<div class="about_info">
				<h2 class="title">Apoi...</h2>
				<p>"Andrei George Croitoru este un artist roman care a inceput un proiect inedit: România în creion. Este vorba despre pagina de Facebook cu acelasi nume, acolo unde Andrei George Croitoru posteaza reconstituiri faciale in creion negru ale marilor domnitori romani..."<br><a href="https://glasul.info/2015/01/21/romania-in-creion-un-proiect-de-reconstituiri-faciale-in-creion-a-marilor-conducatori-romani/" target="_blank">glasul.info</a></p>
			</div>
		
	</article>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
.about{
	display: flex;
	margin: 60px auto;
	flex-direction: column;
	padding: 20px;
	width: 80%;
	background: rgba(255,255,255,0.5);
	
	&_info {
		display: flex;
		flex-direction: column;
	}
}

	.mainHeader {
		display: none;
	}
	
@media only screen and (min-width: 768px) {
	.about {
		img {
		margin: 0 20px 20px 0;
		float: left;
	}
}
	.about_info {
		flex-direction: row;
	}
}

</style>