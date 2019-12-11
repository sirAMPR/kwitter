import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Register from "./Register";
import MessageFeed from "./MessageFeed";
import UserSearch from "./UserSearch";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Register: { path: "/register", component: Register },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  UserSearch: { path: "/usersearch", component: UserSearch },
  NotFound: { path: "*", component: NotFound }
};
