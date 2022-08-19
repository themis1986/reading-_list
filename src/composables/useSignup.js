import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!response) {
      throw new Error("Could not complete signup");
    }

    error.value = null;
    isPending.value = false;
  } catch (e) {
    console.log(e.message);

    error.value = e.message;
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, isPending, signup };
};

export default useSignup;
