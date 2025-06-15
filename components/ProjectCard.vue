<template>
  <div class="project-card">
    <!-- Project image -->
    <div class="project-image-container">
      <img :src="`/images/${image || 'default-project.jpg'}`" :alt="title" class="project-image">
    </div>

    <!-- Title and GitHub link -->
    <div class="project-title">{{ title }}</div>
    <a
      v-if="github"
      :href="github"
      target="_blank"
      class="github-link"
    >
      GitHub
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  github: String,
  image: String
})
</script>

<style scoped>
.project-card {
  background-color: white;
  color: black;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.project-image-container {
  width: 100%;
  height: 9rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.project-title {
  font-size: 0.875rem;
  font-weight: 600;
}

.github-link {
  font-size: 0.875rem;
  color: #2563eb; /* text-blue-600 */
  text-decoration: none;
}

.github-link:hover {
  text-decoration: underline;
}
</style>
