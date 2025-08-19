<template>
  <div class="section-indicator">
    <div class="icon-bar">
      <button
        v-for="section in sections"
        :key="section.id"
        :class="['icon-button', { active: section.id === current }]"
        :title="section.label"
        @click="$emit('update:current', section.id)"
      >
        <span class="material-symbols-rounded">{{ section.icon }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  current: String,
  sections: {
    type: Array,
    default: () => []
  }
})

defineEmits(['update:current'])
</script>

<style scoped>
.section-indicator {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

/* Rounded bar container */
.icon-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  background-color: #1f1f1f;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Individual icon buttons */
.icon-button {
  all: unset;
  cursor: pointer;
  color: #4b5563;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: transform 0.2s ease, opacity 0.3s ease, color 0.3s ease;
}

.icon-button.active {
  color: #22c55e;
  opacity: 1;
  transform: scale(1.2);
}
</style>
