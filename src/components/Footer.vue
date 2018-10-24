<template>
	<footer class="footer">
		<div class="footer_social">
			<a href="https://www.facebook.com/Andrei.George.Croitoru.Portrete/" class="footer_social-icon" target="_blank" aria-label="Facebook">
				<i class="fab fa-facebook-f"></i>
			</a>
			<a href="https://twitter.com/andrei_george_c" class="footer_social-icon" target="_blank" aria-label="Twitter">
				<i class="fab fa-twitter"></i>
			</a>
			<a href="https://www.instagram.com/andrei.george.croitoru/" class="footer_social-icon" target="_blank" aria-label="Instagram">
				<i class="fab fa-instagram"></i>
			</a>
			<a href="https://www.linkedin.com/in/andrei-george-croitoru-7a7044164/" class="footer_social-icon" target="_blank" aria-label="LinkedIn">
				<i class="fab fa-linkedin-in"></i>
			</a>
			<a href="https://www.youtube.com/c/AndreiGeorgeCroitoru" class="footer_social-icon" target="_blank" aria-label="Youtube">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
		<div class="footer_copyright"><p><small>© 2018 Andrei George Croitoru </small></p></div>
	</footer>
</template>


<script>
	export default {
		name: 'Footer'
	}
</script>


<style lang="scss">
.footer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: rgba(60, 60, 60, 0.5);
  	width: 100%;
	position: relative;
	bottom: 0;
	padding: 10px;
	&_social {
		
		&-icon {
			font-size: 2rem;
			line-height: 1.2rem;
			color: #fff;
			margin: 10px;
			
			
			&:hover, &:focus {
  				color: #a9a9a9;
			}
		}
	}
	
	&_copyright {
		color: #ffffff;
		
	}

}
</style>