<template>
  <div class="events-page">
    <!-- Home Button -->
    <button class="home-btn" @click="$router.push('/')">🏠 Home</button>

    <header>
      <h2>Events</h2>
    </header>

    <div class="events-grid">
      <router-link to="/event/1" class="event-card">
        <div class="event-image"></div>
        <h3>Boulevard World</h3>
        <p>Riyadh</p>
      </router-link>

      <router-link to="/event/2" class="event-card">
        <div class="event-image"></div>
        <h3>The Groves</h3>
        <p>Riyadh</p>
      </router-link>

      <router-link to="/event/3" class="event-card">
        <div class="event-image"></div>
        <h3>Comedy Night</h3>
        <p>Jeddah</p>
      </router-link>

      <router-link to="/event/4" class="event-card">
        <div class="event-image"></div>
        <h3>Angham Night</h3>
        <p>AlUla</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsPage",
};
</script>

<style scoped>
.events-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Poppins", Arial, sans-serif;
}

/* Home Button */
.home-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.home-btn:hover {
  background-color: #36a376;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}

.event-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}

.event-image {
  background-color: #eaeaea;
  height: 150px;
  width: 100%;
}

.event-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.8rem 1rem 0 1rem;
}

.event-card p {
  margin: 0.3rem 1rem 1rem 1rem;
  font-size: 0.9rem;
  color: #666;
}
</style>
