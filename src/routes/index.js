import { HomeLayout } from '~/components/layout';
import Category from '~/pages/Category';
import Detail from '~/pages/Detail';
import Home from '~/pages/Home';
const publicRoute = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/category', component: Category },
    { path: '/detail', component: Detail },
];

const privateRoute = [];

export { privateRoute, publicRoute };
