<template>
	
</template>
<script>
export default {
	name: 'Card'
}
</script>
<style lang="scss">
//	Card Style

.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: auto;
	margin-bottom: 20px;
    transition: all .2s ease-in-out;
	-webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
	-moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
	box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
	
 		&:hover {
			margin-bottom: 10px;
			-webkit-box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);
		   	-moz-box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);
			box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);
		}

//	Card image container style
	
	&_image {
  		opacity: .7;
  		transition: all .2s ease-in-out;
		margin: 10px;
	
		&:hover {
			opacity: 1;
		}
		
//		Image sizing and shaddow
		
		img{
			align-self: center;
			height: 180px; 
			box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);
			&:hover{
				height: 220px;
				transition: all .2s ease-in-out;
			}
		}
	}
	
//	Card title style
	
	&_title {
		text-align: center;
  		padding: 10px;
		margin-bottom: 10px;
	}	
}
</style>