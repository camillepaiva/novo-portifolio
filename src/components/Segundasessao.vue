<template>
  <section class="skills_section">
    <article class="skills_intro">
      <p class="section_label">Competencias</p>
      <h2>
        Competencias organizadas para refletir seu momento profissional atual.
      </h2>
      <p>
        Minha base combina UX/UI com desenvolvimento frontend. Hoje atuo em
        ambiente corporativo com Vue.js e processos de time, mantendo foco em
        qualidade tecnica, clareza visual e entregas consistentes.
      </p>

      <div class="summary_badges">
        <span>1 ano como Dev Frontend Junior Vue.js</span>
        <span>Experiencia anterior em UX/UI freelancer</span>
        <span>Bacharela em Sistemas de Informacao (UFV)</span>
      </div>
    </article>

    <div class="capability_grid">
      <article
        v-for="group in competencyGroups"
        :key="group.title"
        class="capability_card"
      >
        <p class="card_label">{{ group.label }}</p>
        <div class="card_title">
          <v-icon class="title_icon" size="18">{{ group.icon }}</v-icon>
          <h3>{{ group.title }}</h3>
        </div>

        <ul>
          <li v-for="item in group.items" :key="item">
            <v-icon class="item_icon" size="14">mdi-check-circle</v-icon>
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "SegundaSessao",
  data() {
    return {
      competencyGroups: [
        {
          label: "Implementacao",
          title: "Stack Frontend",
          icon: "mdi-code-tags",
          items: [
            "Vue.js",
            "JavaScript (ES6+)",
            "HTML5 e CSS3",
            "Consumo de API REST",
            "Firebase (Auth e Firestore)",
          ],
        },
        {
          label: "Colaboracao",
          title: "Ferramentas de Time",
          icon: "mdi-account-group-outline",
          items: [
            "Jira",
            "Bitbucket",
            "Git e Pull Requests",
            "Code Review",
            "Scrum/Kanban",
          ],
        },
        {
          label: "Qualidade",
          title: "Boas Praticas de Entrega",
          icon: "mdi-shield-check-outline",
          items: [
            "Componentizacao",
            "Responsividade",
            "Acessibilidade",
            "Performance frontend",
            "Organizacao de codigo",
          ],
        },
        {
          label: "Produto",
          title: "Visao UX/UI Aplicada",
          icon: "mdi-palette-outline",
          items: [
            "Figma",
            "Arquitetura de informacao",
            "Prototipacao",
            "Design System",
            "UX Writing",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills_section {
  width: min(1150px, 92%);
  margin: 0 auto;
  padding: 18px 0 70px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 26px;
}

.skills_intro {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 28px;
  background: linear-gradient(
    160deg,
    rgba(10, 17, 30, 0.84),
    rgba(8, 13, 24, 0.82)
  );
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section_label {
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  font-weight: 600;
  color: #7dd4ff;
}

h2 {
  font-size: clamp(24px, 3vw, 34px);
  line-height: 1.2;
}

.summary_badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.summary_badges span {
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 12px;
  color: #d8e8ff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
}

.capability_grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 14px;
}

.capability_card {
  border-radius: 20px;
  border: 1px solid rgba(125, 194, 246, 0.28);
  background: linear-gradient(
    160deg,
    rgba(11, 21, 38, 0.9),
    rgba(8, 15, 28, 0.9)
  );
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 240px;
}

.card_label {
  width: fit-content;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #93d8ff;
  border-radius: 999px;
  border: 1px solid rgba(125, 212, 255, 0.35);
  background: rgba(46, 168, 235, 0.14);
  padding: 5px 10px;
}

h3 {
  font-size: 20px;
  line-height: 1.2;
}

.card_title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title_icon {
  color: #7cd7ff;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #c9d7f0;
}

.item_icon {
  color: #57c7ff;
  flex: 0 0 auto;
}

@media (max-width: 980px) {
  .skills_section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .skills_intro {
    padding: 20px;
  }

  .capability_grid {
    grid-template-columns: 1fr;
  }

  .capability_card {
    min-height: auto;
  }
}
</style>
