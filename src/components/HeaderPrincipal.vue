<template>
  <header class="header_container">
    <div class="header_inner">
      <router-link to="/" class="brand">
        <span class="brand_mark">CP</span>
        <span class="brand_text">
          <strong>Camille Paiva</strong>
          <small>Frontend Vue.js, Mapas Web e UX/UI</small>
        </span>
      </router-link>

      <nav class="nav_links">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav_link"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  data() {
    return {
      navItems: [
        { label: "Sobre", path: "/" },
        { label: "Projetos", path: "/projetos" },
        { label: "Contato", path: "/contatos" },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.header_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding: 18px 20px;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    to bottom,
    rgba(5, 7, 15, 0.9),
    rgba(5, 7, 15, 0.42)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.header_inner {
  width: min(1150px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand {
  text-decoration: none;
  display: inline-flex;
  gap: 12px;
  align-items: center;
}

.brand_mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 700;
  color: #f7fbff;
  background: linear-gradient(135deg, #2ea8eb, #106ebf);
  box-shadow: 0 12px 28px rgba(20, 132, 210, 0.4);
}

.brand_text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  color: #f7fbff;
}

.brand_text strong {
  font-size: 14px;
  line-height: 1.2;
}

.brand_text small {
  font-size: 11px;
  color: #a7b4d6;
}

.nav_links {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(11, 17, 31, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 6px;
}

.nav_link {
  text-decoration: none;
  color: #cdd5ef;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 10px 16px;
  border-radius: 999px;
  transition: all 0.28s ease;
}

.nav_link:hover {
  color: #f4f8ff;
  background: rgba(255, 255, 255, 0.06);
}

.nav_link.active {
  color: #f5f9ff;
  background: linear-gradient(135deg, #2199dc, #136fbe);
  box-shadow: 0 10px 22px rgba(16, 110, 191, 0.45);
}

@media (max-width: 768px) {
  .header_container {
    padding: 12px;
  }

  .brand_text small {
    display: none;
  }

  .brand_mark {
    width: 36px;
    height: 36px;
    font-size: 13px;
  }

  .nav_links {
    gap: 2px;
    padding: 4px;
  }

  .nav_link {
    font-size: 12px;
    padding: 9px 10px;
  }
}
</style>
