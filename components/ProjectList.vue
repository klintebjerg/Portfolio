<template>
<div class="project-scroll-container">
  <div class="project-list">
    <ProjectCard 
      title="World of Poaching" 
      github="https://github.com/Nico170f/world-of-zuul" 
      image="world-of-poaching.png" 
    />
    <ProjectCard 
      title="DAM system" 
      github="https://github.com/Nico170f/sdu-semesterproject-dam"
      image="dam-system.png"
    />
    <ProjectCard 
      title="Barspil" 
      github="https://github.com/Nico170f/barspil"
      image="barspil.png"
    />
     <ProjectCard 
      title="Portfolio" 
      github="https://github.com/klintebjerg/Portfolio"
      image="portfolio.png"
    />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '~/components/ProjectCard.vue'
</script>

<style scoped>

.project-scroll-container {
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  width: 100%;
  flex: 0 0 auto;
}
</style>
