<template>
  <div class="home-page">
    <!-- Header -->
    <header>
      <h2 class="welcome">Welcome, Nouf</h2>
      <router-link to="/profile" class="profile-btn">👤</router-link>
    </header>

    <!-- Cities Section -->
    <section class="cities-section">
      <div class="section-header">
        <h3>Cities</h3>
        <router-link to="/cities" class="show-all-btn">Show All</router-link>
      </div>

      <div class="city-list">
        <router-link to="/city/riyadh" class="city-card">Riyadh</router-link>
        <router-link to="/city/jeddah" class="city-card">Jeddah</router-link>
        <router-link to="/city/alula" class="city-card">AlUla</router-link>
        <router-link to="/city/aldahran" class="city-card">AlDhahran</router-link>
      </div>
    </section>

    <!-- Events Section -->
    <section class="events-section">
      <div class="section-header">
        <h3>Events</h3>
        <!-- 👇 هنا التعديل -->
        <router-link to="/events" class="my-tickets-btn">Show All</router-link>
      </div>

      <div class="event-list">
        <router-link to="/event/1" class="event-card">Boulevard World</router-link>
        <router-link to="/event/2" class="event-card">The Groves</router-link>
        <router-link to="/event/3" class="event-card">Comedy Night</router-link>
        <router-link to="/event/4" class="event-card">Angham Night</router-link>
      </div>
    </section>

    <!-- Footer Navigation -->
    <footer>
      <router-link to="/" class="nav-item">🏠 Home</router-link>
      <router-link to="/tickets" class="nav-item">🎟️ Tickets</router-link>
      <router-link to="/favourites" class="nav-item">❤️ Favourites</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Poppins", Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome {
  font-weight: 700;
  font-size: 1.8rem;
}

.profile-btn {
  font-size: 1.7rem;
  text-decoration: none;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.show-all-btn,
.my-tickets-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
}

.city-list,
.event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.city-card,
.event-card {
  flex: 1 1 150px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;
}

.city-card:hover,
.event-card:hover {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

footer {
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
}

.nav-item {
  text-decoration: none;
  font-size: 1.1rem;
  color: #42b983;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
