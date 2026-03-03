<template>
  <div class="app_shell">
    <HeaderPrincipal />
    <main class="app_content">
      <RouterView />
    </main>
  </div>
</template>

<script>
import HeaderPrincipal from "./components/HeaderPrincipal.vue";

export default {
  name: "App",
  components: {
    HeaderPrincipal,
  },
};
</script>

<style>
:root {
  --bg-900: #05070f;
  --bg-800: #0c1020;
  --bg-700: #141a2d;
  --surface: rgba(255, 255, 255, 0.04);
  --surface-strong: rgba(255, 255, 255, 0.08);
  --text-main: #f6f8ff;
  --text-muted: #b7c0da;
  --accent: #3bb9ff;
  --accent-strong: #0b8dd3;
  --border: rgba(255, 255, 255, 0.12);
  --shadow: 0 24px 60px rgba(4, 8, 20, 0.45);
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: "Sora", "Manrope", "Segoe UI", sans-serif;
  background: radial-gradient(circle at 10% 10%, #162449 0%, transparent 32%),
    radial-gradient(circle at 90% 25%, #0d3855 0%, transparent 30%),
    var(--bg-900);
  color: var(--text-main);
}

#app {
  min-height: 100vh;
}

.app_shell {
  min-height: 100vh;
}

.app_content {
  width: 100%;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

p {
  color: var(--text-muted);
  line-height: 1.7;
}
</style>
