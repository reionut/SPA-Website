<template>
	
	<!--    Header-->
	<header v-if='showHeader' class="mainHeader">
		<div class="mainHeader_content">
		<h1 class="title title_l title-grey">Andrei George Croitoru</h1>
		<p>Transforma-ti poza într-o operă de artă.<br />
		Un portret bun nu trebuie sa fie doar o reprezentare vizuală a unei persoane; trebuie sa dezvăluie si ceva din esenta persoanei respective, ceea ce va atrage atentia privitorilor. </p>
		</div>
		<img src="../assets/images/autor_foto.png" class="flexImage" alt="">
	</header>
<!--	End of Header-->

</template>


<script>
export default {
	name: 'Header',
	data: function (){
		return {
			showHeader: true
		}	
	},
	
	watch: {
		// Remove Header from about 
		
		'$route': function (to){
			if (to.name === 'About'){
				this.showHeader = false; //removing header
			}else {
				this.showHeader = true; //adding header
			}
		}
	},
	created: function (){
		if (this.$route.name === 'About'){
				this.showHeader = false; //removing header
			}else {
				this.showHeader = true; //adding header
			}
	}
	
}
</script>


<style lang="scss">
	
.mainHeader {
	display: flex;
	background: $white-transparency;
	max-width: 80%;
	justify-content: flex-end;
	margin: 60px auto 0;
	
	&_content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
	}
}

@media only screen and (max-width: 768px) {
	.mainHeader {
		flex-wrap: wrap;
	}	
}
</style>