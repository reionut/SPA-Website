<template>
	<!--	Navbar-->
	<nav class="navBar">
		<img src="../assets/images/logo-white.png" class="navBar-logo" alt="logo">
		<ul class="navBar_items">
			<li class="navBar_item"><router-link to='/' class="navBar_item-link">Home</router-link></li>
			<li class="navBar_item"><router-link to='/about' class="navBar_item-link">Despre Mine</router-link></li>
			<li class="navBar_item"><router-link to='/videoGallery' class="navBar_item-link">Galerie Video</router-link></li>
			<li class="navBar_item"><router-link to='/contact' class="navBar_item-link">Contact</router-link></li>
		</ul>
	</nav>
	<!--	End of Navbar-->
</template>

<script>
export default {
	name: 'NavBar'
}
</script>

<style lang="scss">
.navBar {
	background-color: rgba(60, 60, 60, 0.5);
  	display: flex;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	top: 0;
	height: 60px;
	z-index: 1;
	
	&_items {
		display: flex;
	}
	
	&_item {
		display: flex;
		width: 100%;
		height: auto;
		
		
		&-link {   //	Modifier for links inside the navbar
			text-align: center;
			color: #ffffff;
			white-space: nowrap;
			padding: 16px;
			width: 100%;
			
			&:hover {
					background: rgba(255,255,255,0.5);
					color: #585858;
					cursor: pointer;
					transition: all .3s ease-in-out;
				}
			}	
		}
	
	&-logo {
		align-self: center;
		height: 50px;
		width: auto;
	}
}

.router-link-exact-active {
		background: rgba(255,255,255,0.5);
					color: #585858;
	}

 		//	Navbar Media queries style

@media only screen and (max-width: 768px) {
	.navBar {
		flex-direction: column;
		align-items: center;
		height: auto;
		position: relative;
  		
		&_items {
	  		flex-direction: column;
			width: 100%;
	 	}
		
		&_item {
			border-bottom: 1px solid #808080;
		}
		
		&-logo {
			margin-top: 10px;
		}
	}
}
</style>