import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

//it fires every time there is a change in the authentication: signup, login, logout
projectAuth.onAuthStateChanged((_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
