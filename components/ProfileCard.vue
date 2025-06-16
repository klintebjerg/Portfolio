<script setup>
import { Rewind, Play, FastForward } from 'lucide-vue-next'

const props = defineProps({
  currentPage: {
    type: String,
    default: 'projects'
  }
})

const emit = defineEmits(['prev', 'next', 'play'])

const handleRewind = () => {
  emit('prev')
}

const handlePlay = () => {
  emit('play')
}

const handleFastForward = () => {
  emit('next')
}
</script>

<template>
  <div class="profile-card">
    <!-- Profile image -->
    <div class="profile-image-container">
      <img src="/images/portfolio.jpeg" alt="Mathias K. Phillip" class="profile-image">
    </div>

    <!-- Text -->
    <p class="profile-title">Mathias K. Phillip</p>
    <p class="profile-occupation">Software Ingeniør</p>
    <p class="profile-addons">Syddansk Universitet</p>
    <p class="profile-page-indicator">{{ currentPage === 'projects' ? 'Projekter' : 'Om Mig' }}</p>

    <!-- Controls -->
    <div class="controls">
      <Rewind 
        class="control-icon rewind" 
        @click="handleRewind"
      />
      <Play 
        class="control-icon play" 
        @click="handlePlay"
      />
      <FastForward 
        class="control-icon fast-forward" 
        @click="handleFastForward"
      />
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  background-color: white;
  color: black;
  width: 12rem; /* w-48 */
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-height: 480px;
}

.profile-image-container {
  width: 8rem; /* w-32 */
  height: 8rem; /* h-32 */
  margin-top: 16px;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.profile-occupation {
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* text-gray-600 */
}

.profile-addons {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

.profile-title {
  font-weight: bold;
}

.profile-page-indicator {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  text-decoration: underline;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
}

.control-icon {
  cursor: pointer;
  transition: transform 0.2s;
}

.control-icon:hover {
  transform: scale(1.1);
}

.rewind, .fast-forward {
  width: 1.25rem;
  height: 1.25rem;
}

.play {
  width: 1.5rem;
  height: 1.5rem;
}
</style>