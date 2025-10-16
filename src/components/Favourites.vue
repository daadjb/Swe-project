<template>
  <div class="favourites-page">
    <h2>My Favorites</h2>

    <div v-if="favorites.length === 0" class="empty-msg">
      <p>No favorite events yet.</p>
    </div>

    <div class="favorites-list">
      <div
        class="favorite-card"
        v-for="(event, index) in favorites"
        :key="index"
      >
        <div class="favorite-image"></div>
        <h4>{{ event.title }}</h4>
        <p>📍 {{ event.location }}</p>
        <p>{{ event.description }}</p>
        <button class="remove-btn" @click="removeFavorite(event.id)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favourites",
  data() {
    return {
      favorites: [],
    };
  },
  mounted() {
    this.loadFavorites();
  },
  methods: {
    loadFavorites() {
      this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    },
    removeFavorite(eventId) {
      this.favorites = this.favorites.filter((e) => e.id !== eventId);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
};
</script>

<style scoped>
.favourites-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.empty-msg {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
}

.favorites-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.favorite-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
}

.favorite-card:hover {
  transform: translateY(-4px);
}

.favorite-image {
  width: 100%;
  height: 150px;
  background-color: #eaeaea;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.favorite-card h4 {
  margin: 0.5rem 0;
  color: #2b4eff;
}

.favorite-card p {
  margin: 0.3rem 0;
  color: #444;
  font-size: 0.95rem;
}

.remove-btn {
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #ff4b5c;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.remove-btn:hover {
  background-color: #e03e50;
}
</style>
