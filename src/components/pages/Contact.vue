<template>
	<section class="contact">
			<div class="contact_form">
			<h3 class="title">Lasa un mesaj</h3>
			<p>Pentru a-ti sarbatorii momentele si persoanele importante din viata ta cu un desen personalizat realizat manual in creion. Preturile sunt in functie de nr. de persoane, dimensiunea si complexitatea desenului.</p>
			<form class="contact-form">
				<input type="text" name="name" placeholder="Nume">         
				<input type="text" name="email" placeholder="E-mail">
				<input type="tel" name="usrtel" placeholder="Telefon">
				<input type="text" name="subject" placeholder="Subiect">
				<textarea name="content" placeholder="Scrie un mesaj"></textarea>
			</form>
			<button class="button" type="submit">Trimite</button>
		</div>
	</section>
</template>

<script>

export default {
	name: 'Contact',
}
</script>

<style lang="scss">
.contact {
	display: flex;
	justify-content: center;
	background: rgba(255,255,255,0.5);
	width: 80%;
	margin: 30px auto;
	
	&_form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		text-align: center;
		
			input[type=text],[type=tel], textarea {
				padding: 10px;
				border: 1px solid #ccc;
				border-radius: 4px;
				resize: vertical;
				width: 80%;
				margin: 10px;
			}
	
			textarea {
				height: 80px;
			}
	}
}
	
</style>