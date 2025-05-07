<template>
  <div class="project-list">
    <ProjectCard 
      title="World of Poaching" 
      github="https://github.com/Nico170f/world-of-zuul" 
      image="world-of-poaching.jpg" 
    />
    <ProjectCard 
      title="DAM system" 
      github="https://github.com/Nico170f/sdu-semesterproject-dam"
      image="dam-system.png"
    />
    <ProjectCard 
      title="Barspil" 
      github="https://github.com/Nico170f/barspil"
      image="barspil.jpg"
    />
  </div>
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  width: 100%;
}
</style>
