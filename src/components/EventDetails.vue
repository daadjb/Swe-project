<template>
  <div class="event-details-page">
    <header>
      <router-link to="/events" class="back-btn">← Back</router-link>
      <h2>{{ event.title }}</h2>
    </header>

    <div class="event-content">
      <div class="event-image"></div>
      <p class="event-location">📍 {{ event.location }}</p>
      <p class="event-description">{{ event.description }}</p>

      <div class="buttons-wrapper">
        <button class="book-btn" @click="checkLoginBeforeBooking">🎟️ Book Ticket</button>
        <br />
        <button class="favorite-btn" @click="checkLoginBeforeFavorite">❤️</button>
      </div>
    </div>

    <div v-if="showBookingModal" class="modal-overlay">
      <div class="modal">
        <h3>Book Your Tickets</h3>

        <div class="ticket-counter">
          <button @click="decreaseTicket">-</button>
          <span>{{ ticketCount }}</span>
          <button @click="increaseTicket">+</button>
        </div>

        <div class="modal-actions">
          <button class="confirm-btn" @click="confirmBooking">Confirm</button>
          <button class="cancel-btn" @click="closeBookingModal">Cancel</button>
        </div>
      </div>
    </div>

    <div v-if="popupMessage" class="popup">
      {{ popupMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
  data() {
    return {
      event: {
        id: this.$route.params.id,
        title: "Boulevard World",
        location: "Riyadh",
        description:
          "Enjoy an unforgettable experience filled with entertainment, culture, and fun at Boulevard World!",
      },
      showBookingModal: false,
      ticketCount: 1,
      popupMessage: "",
    };
  },

  methods: {
    // منع الحجز إذا مو مسجل دخول
    checkLoginBeforeBooking() {
      const isLoggedIn = localStorage.getItem("loggedIn") === "true";
      if (!isLoggedIn) {
        this.showPopup("Please log in to book a ticket 🧾");
        setTimeout(() => {
          this.$router.push({ name: "Login" });
        }, 2000);
      } else {
        this.showBookingModal = true;
      }
    },

    // منع الـ Favorite إذا مو مسجل دخول
    checkLoginBeforeFavorite() {
      const isLoggedIn = localStorage.getItem("loggedIn") === "true";
      if (!isLoggedIn) {
        this.showPopup("Please log in to add favorites ❤️");
        setTimeout(() => {
          this.$router.push({ name: "Login" });
        }, 2000);
      } else {
        this.addToFavorites();
      }
    },

    showPopup(message) {
      this.popupMessage = message;
      setTimeout(() => {
        this.popupMessage = "";
      }, 2000);
    },

    closeBookingModal() {
      this.showBookingModal = false;
      this.ticketCount = 1;
    },

    // تأكيد الحجز (والتحقّق مرّة ثانية)
    confirmBooking() {
      const isLoggedIn = localStorage.getItem("loggedIn") === "true";
      if (!isLoggedIn) {
        this.showPopup("Please log in to confirm booking!");
        setTimeout(() => {
          this.$router.push({ name: "Login" });
        }, 2000);
        return;
      }

      const ticket = {
        title: this.event.title,
        seat: `A${Math.floor(Math.random() * 100)}`,
        date: new Date().toLocaleDateString("en-GB"),
        count: this.ticketCount,
      };

      let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
      tickets.push(ticket);
      localStorage.setItem("tickets", JSON.stringify(tickets));

      this.showPopup(`Booked ${this.ticketCount} ticket(s) successfully 🎉`);
      this.closeBookingModal();
    },

    increaseTicket() {
      this.ticketCount++;
    },
    decreaseTicket() {
      if (this.ticketCount > 1) this.ticketCount--;
    },

    addToFavorites() {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const exists = favorites.some((e) => e.id === this.event.id);

      if (exists) {
        this.showPopup("Already in your favorites 💖");
        return;
      }

      favorites.push({
        id: this.event.id,
        title: this.event.title,
        location: this.event.location,
        description: this.event.description,
      });

      localStorage.setItem("favorites", JSON.stringify(favorites));
      this.showPopup("Added to Favorites ❤️");
    },
  },
};
</script>

<style scoped>
/* كل الـ CSS نفسسسه بدون تغيير */
.event-details-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Poppins", Arial, sans-serif;
}

header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-btn {
  text-decoration: none;
  color: #42b983;
  font-size: 1rem;
}

.event-content {
  margin-top: 2rem;
  text-align: center;
}

.event-image {
  width: 100%;
  height: 250px;
  background-color: #eaeaea;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.event-location {
  font-weight: 500;
  color: #666;
  margin-bottom: 0.8rem;
}

.event-description {
  font-size: 1rem;
  color: #444;
  margin-bottom: 2rem;
}

.buttons-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
}

.book-btn:hover {
  background-color: #36a376;
}

.favorite-btn {
  background-color: #ff6b81;
  color: white;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.6rem;
  transition: background-color 0.2s ease;
}

.favorite-btn:hover {
  background-color: #e0556f;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.ticket-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.ticket-counter button {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

.ticket-counter button:hover {
  background-color: #36a376;
}

.ticket-counter span {
  font-size: 1.2rem;
  min-width: 30px;
  text-align: center;
}

.modal-actions {
  display: flex;
  justify-content: space-around;
}

.confirm-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.confirm-btn:hover {
  background-color: #36a376;
}

.cancel-btn:hover {
  background-color: #aaa;
}

.popup {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #42b983;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  animation: fadeInOut 2s ease;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translate(-50%, 20px); }
  10% { opacity: 1; transform: translate(-50%, 0); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, 20px); }
}
</style>
