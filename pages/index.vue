<template>
  <div class="page-container scroll-smooth">
    
    <HeroIntro />

    <div id="content" class="content-wrapper">
      <div class="layout">
        <div class="profile-section">
          <ProfileCard 
          @next="nextPage" 
          @prev="prevPage" 
          @play="resetToProjects" :currentPage="currentPage" />
        </div>


        <div class="main-content">
          <transition :name="transitionName" mode="out-in">
            <component :is="currentPage === 'projects' ? ProjectList : AboutMe" :key="currentPage"></component>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroIntro from '../components/HeroIntro.vue'
import ProfileCard from '~/components/ProfileCard.vue'
import ProjectList from '~/components/ProjectList.vue'
import AboutMe from '~/components/AboutMe.vue'

// Track the current page
const currentPage = ref('projects')
// Track the transition direction
const transitionName = ref('slide-right')

// Page navigation methods
const nextPage = () => {
  transitionName.value = 'slide-left'
  currentPage.value = currentPage.value === 'projects' ? 'about' : 'projects'
  console.log('Next clicked, current page:', currentPage.value)
}

const prevPage = () => {
  transitionName.value = 'slide-right'
  currentPage.value = currentPage.value === 'about' ? 'projects' : 'about'
  console.log('Prev clicked, current page:', currentPage.value)
}

const resetToProjects = () => {
  // Default to slide-right for reset (you can change this if you want)
  transitionName.value = 'slide-right'
  currentPage.value = 'projects'
  console.log('Reset to projects, current page:', currentPage.value)
}
</script>

<style>
/* Main layout styling */
.page-container {
  min-height: 100vh;
  background-color: black;
  color: white;
}

.content-wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 64px;
}

.layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
}

.profile-section {
  width: auto;
  display: flex;
  justify-content: center;
}

.main-content {
  width: 100%;
}

/* Responsive layout */
@media (min-width: 768px) {
  .layout {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
  }
  
  .profile-section {
    width: auto;
    flex-shrink: 0;
  }
  
  .main-content {
    flex-grow: 1;
    max-width: 100%;
  }
}

/* Transition effects */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* Updated Transition effects for both directions */
/* Left direction (for next button) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* Right direction (for prev button) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>