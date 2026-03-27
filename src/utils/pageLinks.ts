import AboutPage from "../pages/AboutPage";
import ConnectPage from "../pages/ConnectPage";
import DetailPage from "../pages/DetailsPage";
import ExpertisePage from "../pages/ExpertisePage";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";

export const GeneralPages = [
    { component: HomePage, path: '/' },
    { component: ExpertisePage, path: '/expertise' },
    { component: AboutPage, path: '/about' },
    { component: WorkPage, path: '/work' },
    { component: ConnectPage, path: 'connect' },
    { component: DetailPage, path: 'work/:slug' },
]