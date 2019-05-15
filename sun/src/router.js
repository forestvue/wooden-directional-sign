import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import User from "./components/User.vue";

Vue.use(Router);

const router = new Router({
    routes : [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/user",
            name: "user",
            component: User
        }
    ]
});

export default router;
