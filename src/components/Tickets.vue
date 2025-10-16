<template>
  <div class="tickets-page">
    <h2>My Tickets</h2>

    <!-- Upcoming Tickets -->
    <section class="tickets-section">
      <h3>🎟️ Upcoming Tickets</h3>
      <div class="tickets-list">
        <div
          class="ticket-card"
          v-for="(ticket, index) in upcomingTickets"
          :key="index"
        >
          <h4>{{ ticket.name }}</h4>
          <p>Seat: {{ ticket.seat }}</p>
          <p>Date: {{ ticket.date }}</p>
          <button class="cancel-btn" @click="confirmCancel(index)">Cancel</button>
        </div>
        <p v-if="upcomingTickets.length === 0">No upcoming tickets.</p>
      </div>
    </section>

    <!-- Past Tickets -->
    <section class="tickets-section">
      <h3>🕓 Past Tickets</h3>
      <div class="tickets-list">
        <div class="ticket-card past" v-for="(ticket, index) in pastTickets" :key="index">
          <h4>{{ ticket.name }}</h4>
          <p>Seat: {{ ticket.seat }}</p>
          <p>Date: {{ ticket.date }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Tickets",
  data() {
    return {
      upcomingTickets: [
        { name: "Boulevard World", seat: "A1", date: "25 Oct 2025" },
        { name: "Comedy Night", seat: "B2", date: "1 Nov 2025" },
      ],
      pastTickets: [
        { name: "Music Festival", seat: "C3", date: "10 Aug 2025" },
        { name: "Art Expo", seat: "D4", date: "5 Sep 2025" },
      ],
    };
  },
  methods: {
    confirmCancel(index) {
      const ticketName = this.upcomingTickets[index].name;
      const confirmed = confirm(`Are you sure you want to cancel your ticket for ${ticketName}?`);
      if (confirmed) {
        this.upcomingTickets.splice(index, 1);
        alert(`Your ticket for ${ticketName} has been canceled.`);
      }
    },
  },
};
</script>

<style scoped>
.tickets-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.tickets-section {
  margin-bottom: 2.5rem;
}

.tickets-section h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #444;
}

.tickets-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.ticket-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  position: relative;
}

.ticket-card:hover {
  transform: translateY(-4px);
}

.ticket-card h4 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: #2b4eff;
}

.ticket-card p {
  margin: 0.3rem 0;
  font-size: 0.95rem;
}

.ticket-card.past {
  opacity: 0.8;
  background-color: #f1f1f1;
}

.cancel-btn {
  margin-top: 0.8rem;
  padding: 0.4rem 0.8rem;
  border: none;
  background-color: #ff4b5c;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.cancel-btn:hover {
  background-color: #e03e50;
}
</style>
