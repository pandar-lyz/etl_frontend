import notfound from '@/pages/notfound';
import output from "@/pages/output";
import SearchPage from "@/pages/SearchPage";
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes:[{
        path:"/",
        name:"SearchPage",
        component:SearchPage
    },{
        path:"/output",
        name:"output",
        component:output
    }, {
            path: "/:catchAll(.*)",
            name: "notFound",
            component: notfound
        }
    ]
})
