import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Register from "./Register";
import MessageFeed from "./MessageFeed";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Register: { path: "/register", component: Register },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  NotFound: { path: "*", component: NotFound }
};
