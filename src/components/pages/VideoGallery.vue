<template>
	<section class="videoGalery">
		<h1 class="title">Lorem ipsum dolor.</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto accusantium quisquam, sed non fuga quaerat.</p>
		<div class="videoGalery_content">
			<div class="videoGalery_content-video">
				<iframe width="250" height="145" src="https://www.youtube.com/embed/iLw_LJE3m3w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div class="videoGalery_content-video">
				<iframe width="250" height="145" src="https://www.youtube.com/embed/NZ4uH4zPybo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div class="videoGalery_content-video">
				<iframe width="250" height="145" src="https://www.youtube.com/embed/FLHuZLGE14Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div class="videoGalery_content-video">
				<iframe width="250" height="145" src="https://www.youtube.com/embed/esLb_5HQ7N0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div class="videoGalery_content-video">
				<iframe width="250" height="145" src="https://www.youtube.com/embed/gu1cqjjS1i4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div class="videoGalery_content-video">
				<iframe width="250" height="145" src="https://www.youtube.com/embed/f7FozK2ENfU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		</div>		
	</section>
</template>

<script>
export default {
  name: 'VideoGallery'
}
</script>

<style lang="scss">
.videoGalery {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 80%;
	margin: 50px auto;
	background: rgba(255,255,255,0.5);
	padding: 20px;
	
	&_content {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 50px;
		
		&-video {
			margin: 10px;
			height: 145px;
			-webkit-box-shadow: 0 5px 22px 0 rgba(96,96,96,1);
		   	-moz-box-shadow: 0 5px 22px 0 rgba(96,96,96,1);
			box-shadow: 0 5px 22px 0 rgba(96,96,96,1);
		}
	}
}

</style>