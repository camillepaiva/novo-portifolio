<template>
  <section class="experience_section">
    <header class="experience_intro">
      <p class="section_label">Experiencia Profissional</p>
      <h2>Atuacao real em ambiente corporativo e entregas de produto.</h2>
      <p>
        Minha trajetoria combina experiencia em UX/UI como freelancer e atuacao
        atual com desenvolvimento frontend Vue.js em empresa de processamento de
        dados.
      </p>
    </header>

    <div class="timeline">
      <article class="timeline_item">
        <div class="timeline_dot"></div>
        <div class="timeline_content">
          <div class="item_head">
            <h3>Dev Frontend Junior Vue.js</h3>
            <span>Atual · 1 ano</span>
          </div>
          <p class="item_company">Empresa de processamento de dados</p>
          <ul>
            <li>Implementacao de interfaces Vue.js em fluxo de produto real.</li>
            <li>Integracao com APIs e manutencao de componentes reutilizaveis.</li>
            <li>Colaboracao com time via Jira, Bitbucket e code review.</li>
          </ul>
        </div>
      </article>

      <article class="timeline_item">
        <div class="timeline_dot"></div>
        <div class="timeline_content">
          <div class="item_head">
            <h3>Freelancer UX/UI</h3>
            <span>Experiencia anterior</span>
          </div>
          <p class="item_company">Projetos autorais e clientes</p>
          <ul>
            <li>Pesquisa, fluxo de telas e prototipacao no Figma.</li>
            <li>Criacao de interfaces com foco em usabilidade e conversao.</li>
            <li>Base de produto que hoje fortalece minhas entregas frontend.</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienciaProfissional",
};
</script>

<style scoped>
.experience_section {
  width: min(1150px, 92%);
  margin: 0 auto;
  padding: 10px 0 30px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
}

.experience_intro {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px;
  background: linear-gradient(
    160deg,
    rgba(9, 16, 30, 0.84),
    rgba(8, 14, 25, 0.84)
  );
  display: flex;
  flex-direction: column;
  gap: 14px;
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

.timeline {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px 24px 6px;
  background: linear-gradient(
    160deg,
    rgba(11, 20, 37, 0.84),
    rgba(8, 13, 24, 0.84)
  );
}

.timeline_item {
  position: relative;
  padding-left: 28px;
  margin-bottom: 22px;
}

.timeline_item:last-child {
  margin-bottom: 6px;
}

.timeline_item::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 20px;
  width: 2px;
  height: calc(100% + 20px);
  background: linear-gradient(
    to bottom,
    rgba(95, 197, 255, 0.4),
    rgba(95, 197, 255, 0.08)
  );
}

.timeline_item:last-child::before {
  display: none;
}

.timeline_dot {
  position: absolute;
  left: 0;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  border: 2px solid rgba(121, 213, 255, 0.6);
  background: rgba(121, 213, 255, 0.26);
}

.timeline_content {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 14px 14px 12px;
  background: rgba(255, 255, 255, 0.03);
}

.item_head {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
}

.item_head h3 {
  font-size: 18px;
  line-height: 1.2;
}

.item_head span {
  font-size: 12px;
  color: #9ddfff;
  border: 1px solid rgba(125, 212, 255, 0.36);
  border-radius: 999px;
  padding: 5px 9px;
  background: rgba(46, 168, 235, 0.12);
}

.item_company {
  margin-top: 6px;
  color: #9db2d5;
  font-size: 13px;
}

ul {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

li {
  color: #c4d2ee;
  font-size: 14px;
  position: relative;
  padding-left: 14px;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #57c7ff;
}

@media (max-width: 980px) {
  .experience_section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .experience_intro,
  .timeline {
    padding: 18px;
  }
}
</style>
