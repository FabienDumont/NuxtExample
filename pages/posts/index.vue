<script setup lang="ts">
const title = ref("");
const content = ref("");

async function handleFormSubmit(e: Event) {
  e.preventDefault();

  try {
    const res = await $fetch("/api/posts", {
      method: "POST",
      body: {
        title: title.value,
        content: content.value,
      },
    });
    console.log("Post created:", res);
  } catch (err) {
    console.error("Failed to create post:", err);
  }
}
</script>

<template>
  <h1>Posts</h1>
  <form @submit="handleFormSubmit">
    <div>
      <label for="title">Title:</label>
      <input id="title" v-model="title" type="text" required />
    </div>
    <div>
      <label for="content">Content:</label>
      <input id="content" v-model="content" type="text" required />
    </div>
    <button type="submit">Create post</button>
  </form>
</template>
