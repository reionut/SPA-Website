<template>
  <div id="app">
    <NavBar></NavBar>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
	Header,
	Footer
  }
}
</script>

<style lang="scss">
	@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');
	body {
		background: url("./assets/images/background-cover-V.jpg") no-repeat fixed;
	}

	


</style>
