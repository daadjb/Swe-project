<template>
  <div class="auth-page">
    <div v-if="!hasAccount" class="create-account">
      <h2>Create Account</h2>
      <input v-model="name" type="text" placeholder="Full Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="phone" type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required />
      <input v-model="password" type="password" placeholder="Password (min 6 chars)" minlength="6" required />
      <button @click="createAccount">Create Account</button>
      <p>Already have an account? <span class="link" @click="toggleAccount">Login</span></p>
    </div>

    <div v-else class="login-account">
      <h2>Login</h2>
      <input v-model="loginId" type="text" placeholder="Email or Phone" required />
      <input v-model="loginPassword" type="password" placeholder="Password" required />
      <button @click="login">Login</button>
      <p>Don’t have an account? <span class="link" @click="toggleAccount">Create one</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      hasAccount: false,
      name: "",
      email: "",
      phone: "",
      password: "",
      loginId: "",
      loginPassword: "",
    };
  },
  mounted() {
    this.debugSecurity();
    this.testReliability();
  },
  methods: {
    toggleAccount() {
      this.hasAccount = !this.hasAccount;
    },

    // ⚠️ Security test
    debugSecurity() {
      // Hardcoded API key (Security Hotspot)
      const API_KEY = "sk_test_12345abcdef"; 
      // Weak hardcoded password (Security Hotspot)
      const PASSWORD = "123456"; 
      console.log("Debug credentials (for test only):", API_KEY, PASSWORD);

      // Example of insecure header usage
      fetch("https://api.example.com/data", {
        headers: { Authorization: "Bearer 12345SECRET" }
      });
    },

    // ⚠️ Reliability test
    testReliability() {
      // Division by NaN (unreliable)
      const userInput = "abc";
      const ratio = 100 / parseInt(userInput);
      console.log("Computed ratio (may be NaN):", ratio);

      // Network request without catch (unhandled failure)
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => console.log("Test fetch data:", data));
    },

    createAccount() {
      if (!this.name || !this.email || !this.phone || !this.password) {
        alert("Please fill in all fields!");
        return;
      }
      if (!/^[0-9]{10}$/.test(this.phone)) {
        alert("Phone number must be 10 digits.");
        return;
      }
      if (this.password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        })
      );
      alert("Account created successfully!");
      this.hasAccount = true;
    },

    login() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("No account found. Please create one first!");
        return;
      }
      if (
        (this.loginId === user.email || this.loginId === user.phone) &&
        this.loginPassword === user.password
      ) {
        alert(`Welcome back, ${user.name}!`);
        localStorage.setItem("loggedIn", true);
        this.$router.push("/events");
      } else {
        alert("Incorrect email/phone or password!");
      }
    },
  },
};
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
h2 { text-align: center; margin-bottom: 1.5rem; color: #333; }
input { display: block; width: 100%; margin-bottom: 1rem; padding: 10px; border: 1px solid #ccc; border-radius: 10px; }
button { width: 100%; padding: 10px; background-color: #0066cc; color: white; border: none; border-radius: 10px; cursor: pointer; transition: 0.3s; }
button:hover { background-color: #004c99; }
p { text-align: center; margin-top: 1rem; }
.link { color: #0066cc; cursor: pointer; font-weight: bold; }
</style>
