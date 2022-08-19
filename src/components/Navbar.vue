<template>
  <div>
    <nav>
      <h1>My Book List</h1>

      <!-- for logged in users -->
      <div>
        <router-link to="/">Home</router-link>
        <button @click="handleLogout">Logout</button>
      </div>

      <!-- for logged out users -->
      <div>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { signOut } from "@firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../firebase/config";

export default {
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      signOut(auth);
      router.push({ name: "Login" });
    };

    return { handleLogout };
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
}
nav h1 {
  margin-right: auto;
  margin-bottom: 0;
}
nav a {
  margin-left: 16px;
  color: #2c3e50;
}
nav button {
  margin-left: 16px;
}
nav a.router-link-exact-active {
  color: #0ec58e;
}
nav + p {
  margin-top: 0;
  margin-bottom: 30px;
}
</style>
