import Vue from "vue";
import Router from "vue-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import VideoGallery from "./components/pages/VideoGallery";
import Contact from "./components/pages/Contact";


Vue.use(Router)
export default new Router({
	routes: [
		{
			path:"/",
			name: 'Home',
			component: Home
		},
		{
			path:"/about",
			name: 'About',
			component: About
		},
		{
			path:"/videoGallery",
			name: 'VideoGallery',
			component: VideoGallery
		},
		{
			path:"/contact",
			name: 'Contact',
			component: Contact
		},
		
	]
})