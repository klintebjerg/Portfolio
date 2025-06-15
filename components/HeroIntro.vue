<template>
  <section class="page">
    <p class="tagline">
       I build things
    </p>    
    <h1 class="name">
       <span class="highlight">Mathias Klintebjerg Phillip</span>
    </h1>
    <p class="subtext">
      I am a software engineer and code a little bit. 
    </p>
    <a href="#content" class="scroll-button">
      <span class="material-symbols-rounded text-3xl group-hover:translate-y-1 transition:transform">
        <br>
        arrow_drop_down
      </span>
    </a>
  </section>
</template>

<style scoped>
.material-symbols-rounded {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
.page{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Outfit;
}
.tagline {
  font-size: 1.25rem; 
  color: #4b5563; 
}
.name {
  font-size: 2.5rem; 
  font-weight: bold;
  color: #4b5563; 
}
.subtext {
  font-size: 1.25rem; 
  color: #4b5563; 
}
.scroll-button {
  color: #4b5563;
}
</style>