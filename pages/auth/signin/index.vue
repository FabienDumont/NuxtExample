<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const error = ref("");

async function handleSignIn(e: Event) {
  e.preventDefault();

  try {
    const res = await $fetch("/api/auth/signin", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });

    console.log("Signed in!", res);
    navigateTo("/");
  } catch (err: any) {
    error.value = err?.data?.message || "Login failed";
    console.error("Sign-in error:", err);
  }
}
</script>

<template>
  <h1>Sign In</h1>

  <form @submit="handleSignIn">
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" required />
    </div>

    <div>
      <label for="password">Password:</label>
      <input id="password" v-model="password" type="password" required />
    </div>

    <button type="submit">Sign In</button>

    <p v-if="error" style="color: red">{{ error }}</p>
  </form>
</template>
