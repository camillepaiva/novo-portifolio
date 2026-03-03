<template>
  <article class="project_card">
    <div class="project_info">
      <p class="project_type">
        <v-icon size="15" class="chip_icon">mdi-monitor-dashboard</v-icon>
        Projeto Frontend
      </p>
      <h3>{{ titulo }}</h3>
      <p class="project_description">{{ descricao }}</p>

      <div class="project_stack">
        <span v-for="tech in tecnologias" :key="tech">{{ tech }}</span>
      </div>

      <div v-if="impactos.length" class="project_impact">
        <p class="impact_title">
          <v-icon size="15">mdi-trending-up</v-icon>
          Impacto entregue
        </p>
        <ul>
          <li v-for="item in impactos" :key="item">
            <v-icon size="14">mdi-check-circle</v-icon>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="project_actions">
        <a
          class="btn_primary"
          :href="linkProjeto"
          target="_blank"
          rel="noreferrer"
        >
          <v-icon size="16">mdi-open-in-new</v-icon>
          Demo online
        </a>
        <a
          class="btn_ghost"
          :href="linkGit"
          target="_blank"
          rel="noreferrer"
        >
          <v-icon size="16">mdi-github</v-icon>
          Ver codigo
        </a>
      </div>
    </div>

    <CarroselFotos :imagens="imagens" class="project_carousel" />
  </article>
</template>

<script>
import CarroselFotos from "./CarroselFotos.vue";

export default {
  components: {
    CarroselFotos,
  },
  props: {
    imagens: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    tecnologias: {
      type: Array,
      default: () => [],
    },
    impactos: {
      type: Array,
      default: () => [],
    },
    linkProjeto: {
      type: String,
      required: true,
    },
    linkGit: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.project_card {
  position: relative;
  overflow: hidden;
  content-visibility: auto;
  contain-intrinsic-size: 560px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 18px;
  padding: 22px;
  border-radius: 26px;
  border: 1px solid rgba(121, 195, 255, 0.2);
  background: linear-gradient(
    145deg,
    rgba(8, 14, 28, 0.94),
    rgba(10, 18, 34, 0.96) 60%,
    rgba(7, 13, 24, 0.96)
  );
  box-shadow: 0 26px 50px rgba(5, 10, 22, 0.5);
}

.project_card::before {
  content: "";
  position: absolute;
  inset: -2px -45% auto auto;
  width: 260px;
  height: 260px;
  background: radial-gradient(
    circle,
    rgba(66, 173, 243, 0.2),
    rgba(66, 173, 243, 0)
  );
  pointer-events: none;
}

.project_info {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    165deg,
    rgba(17, 28, 49, 0.86),
    rgba(10, 17, 30, 0.92)
  );
}

.project_type {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8bd8ff;
  border-radius: 999px;
  padding: 7px 12px;
  border: 1px solid rgba(125, 212, 255, 0.34);
  background: rgba(30, 136, 201, 0.16);
}

h3 {
  font-size: clamp(24px, 3.2vw, 34px);
  line-height: 1.1;
}

.project_description {
  color: #b8c5e2;
}

.project_stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project_stack span {
  font-size: 12px;
  padding: 7px 11px;
  border-radius: 999px;
  color: #d6e9ff;
  background: rgba(59, 94, 133, 0.36);
  border: 1px solid rgba(146, 192, 238, 0.28);
}

.project_actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
}

.project_impact {
  margin-top: -2px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.impact_title {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #9edfff;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project_impact ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project_impact li {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  color: #c8d5ef;
  font-size: 13px;
}

.project_impact li .v-icon {
  color: #6ed0ff;
  margin-top: 2px;
  flex: 0 0 auto;
}

.btn_primary,
.btn_ghost {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  padding: 10px 15px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.btn_primary {
  color: #f8fcff;
  background: linear-gradient(135deg, #31b3f1, #146fbe);
  box-shadow: 0 14px 24px rgba(20, 111, 190, 0.36);
}

.btn_ghost {
  color: #dde7ff;
  border: 1px solid rgba(193, 223, 255, 0.36);
  background: rgba(18, 33, 56, 0.72);
}

.btn_primary:hover,
.btn_ghost:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 24px rgba(7, 16, 31, 0.32);
}

.chip_icon {
  color: #7bd8ff;
}

.project_carousel {
  align-self: stretch;
  z-index: 2;
}

@media (max-width: 980px) {
  .project_card {
    grid-template-columns: 1fr;
    padding: 16px;
  }
}

@media (max-width: 640px) {
  .project_actions {
    flex-direction: column;
  }

  .btn_primary,
  .btn_ghost {
    text-align: center;
    width: 100%;
  }
}
</style>
