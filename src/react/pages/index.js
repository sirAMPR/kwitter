import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Register from "./Register";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Register: { path: "/register", component: Register },
  NotFound: { path: "*", component: NotFound }
};
