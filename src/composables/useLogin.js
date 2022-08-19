import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    if (!response) {
      throw new Error("Could not login");
    }

    error.value = null;
    isPending.value = false;
  } catch (e) {
    console.log(e.message);

    error.value = e.message;
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, login };
};

export default useLogin;
