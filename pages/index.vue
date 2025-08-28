<template>
  <div class="page-container scroll-smooth">
    <HeroIntro />
    <div id="content" class="content-wrapper">
      <div class="layout">
        <div class="profile-section">
          <ProfileCard 
          @prev="prevPage" 
          @next="nextPage"
          @play="resetToProjects" :currentPage="currentPage" />
        </div>
        <div class="main-content">
          <transition :name="transitionName" mode="out-in">
            <component :is="currentPage === 'projects' ? ProjectList : AboutMe" :key="currentPage"></component>
          </transition>
        </div>
      </div>
      <SectionIndicator
        :current="currentPage"
        :sections="[
          { id: 'projects', label: 'Projects', icon: 'folder' },
          { id: 'about', label: 'About Me', icon: 'person' }
        ]"
        @update:current="jumpToPage" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroIntro from '../components/HeroIntro.vue'
import ProfileCard from '~/components/ProfileCard.vue'
import ProjectList from '~/components/ProjectList.vue'
import AboutMe from '~/components/AboutMe.vue'
import SectionIndicator from '../components/SectionIndicator.vue'

const jumpToPage = (id) => {
  if (id === currentPage.value) return
  transitionName.value = id === 'projects' ? 'slide-right' : 'slide-left'
  currentPage.value = id
}



const currentPage = ref('projects')
const transitionName = ref('slide-right')

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
  transitionName.value = 'slide-right'
  currentPage.value = 'projects'
  console.log('Reset to projects, current page:', currentPage.value)
}
</script>

<style>
.page-container {
  min-height: 100vh;
  background-color: #131313;
  color: white;
}

.content-wrapper {
  min-height: 100vh;
  padding-top: 42px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr minmax(0, 720px) 1fr;
  gap: 2rem;
  align-items: start;
}

.profile-section {
  grid-column: 1;
  justify-self: end;
  position: sticky;
  top: 24px;
  align-items: start;
}

.main-content {
  grid-column: 2;
  width: 100%;
  max-width: 720px;
  min-height: 768px;
  overflow: hidden;
}

.main-content > *{
  grid-area: 1 / 1;
  box-sizing: border-box;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active { 
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity .4s cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform, opacity;
  backface-visibility: hidden;
}
.slide-left-enter-from { transform: translateX(100%); opacity: 0; }
.slide-left-enter-to { transform: translateX(0%); opacity: 1; }
.slide-left-leave-from { transform: translateX(0%); opacity: 1; } 
.slide-left-leave-to { transform: translateX(-100%); opacity: 0; } 
.slide-right-enter-from { transform: translateX(-100%); opacity: 0; } 
.slide-right-enter-to { transform: translateX(0%); opacity: 1; } 
.slide-right-leave-from { transform: translateX(0%); opacity: 1; } 
.slide-right-leave-to { transform: translateX(100%); opacity: 0; }
</style>