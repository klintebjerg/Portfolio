<template>
  <div class="about-me">
    <h2 class="about-heading">Hej - Jeg hedder Mathias</h2>
    <p class="about-paragraph">
      Jeg læser Softwareingeniør på SDU og har en stor interesse for alt, der handler om IT. Jeg kan godt lide at forstå, hvordan ting hænger sammen – og jeg synes det er fedt, når kode ikke bare virker, men giver mening.
    </p>
    <p class="about-paragraph">
      Jeg arbejder gerne med det hele - frontend, backend og fullstack, men der hvor jeg har min kærlighed er backend. Logisk at kunne se, det dine metoder skal returnere, er det de faktisk gør. Det giver mig mere glæde, end at se på noget flot. Jeg er ikke bleg for at udfordre mig selv og det er derfor I ser på denne portfolio. Jeg kunne ikke, men jeg valgte at gøre det.
    </p>
    <p class="about-paragraph">
      Når jeg ikke sidder med et projekt, laver jeg sport – meget sport. Det er min måde at koble af på og holde energien oppe, og jeg tror på, at balance mellem hoved og krop gør mig bedre til begge dele.        
    </p>
    <p class="about-paragraph">
      Denne portfolio er en samling af det, jeg har bygget, lært og leget med – og forhåbentlig også en fornemmelse af, hvem jeg er bag koden.
    </p>
    <div class="skills-section">
      <h3 class="skills-heading">Kompetencer</h3>
      <div class="skills-container">
        <span class="skill-tag">Vue.js</span>
        <span class="skill-tag">C#</span>
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">PostgreSQL</span>
      </div>
    </div>
  </div>
</template>
  
<script setup>
// Using script setup for consistency with other components
</script>

<style scoped>
.about-me {
  background-color: white;
  color: black;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.about-heading {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.about-paragraph {
  margin-bottom: 0.75rem;
}

.skills-section {
  margin-top: 1.5rem;
}

.skills-heading {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #e5e7eb; /* bg-gray-200 */
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}
</style>