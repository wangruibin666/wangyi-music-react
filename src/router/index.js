import WangDiscover from '@/pages/discover';
import WangFriend from '@/pages/friend';
import WangMine from '@/pages/mine';


const routes = [
  {
    path: "/",
    exact: true,
    component: WangDiscover
  },
  {
    path: "/mine",
    component: WangMine
  },
  {
    path: "/friend",
    component: WangFriend
  }

];

export default routes;
