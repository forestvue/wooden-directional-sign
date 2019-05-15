import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import User from "./components/User.vue";

const routes = [
    
    {path: "/", components: Home},
    {path: "/about", components: About},
    {path: "/contact", components: Contact},
    {path: "/user", components: User}
    
];

export default routes;