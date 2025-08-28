<template>
  <section class="page">
    <div class="content">
      <p class="tagline">I build things.</p>    
      <h1 class="name"><span class="highlight">Mathias Klintebjerg Phillip</span></h1>
      <p class="subtext">Software Engineer</p>
    </div>



    <a class="scroll-button" @click="scrollDown">
      <span class="material-symbols-rounded">arrow_drop_down</span>
      </a>
  </section>
</template>


<script setup>
function scrollDown() {
  const content = document.getElementById('content');
  if (content) {
    content.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.page {
  --text-color: #384b72;
  position: relative;
  background-color: #0f0f0f;
  font-family: 'Outfit', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* centers content vertically if no space between */
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding-bottom: 3rem; /* so arrow doesn't overlap content */
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes floatDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* Keep existing grain effect */
.page::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='white' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 500px 500px;
  opacity: 0.3;
  mix-blend-mode: soft-light;
}

/* Ensure text is above grain */
.page > * {
  position: relative;
  z-index: 1;
}

.tagline,
.subtext{
  font-size: 1.25rem;
  color: var(--text-color);
}

.name {
  font-size: 3rem;
  font-weight: bold;
}

.highlight {
  color: var(--text-color);
}

.material-symbols-rounded {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  font-size: 2rem;
  color: var(--text-color);
}

.scroll-button {
  cursor: pointer;
}

.scroll-button:hover {
  animation: float 1s infinite ease-in-out;
}

@keyframes float {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(3px); } 
  100% { transform: translateY(0); }    
}
</style>
