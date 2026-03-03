<template>
  <section class="education_section">
    <header class="education_intro">
      <p class="section_label">Formacao Academica</p>
      <h2>Base academica solida para sustentar entregas tecnicas consistentes.</h2>
      <p>
        Graduada em Sistemas de Informacao pela Universidade Federal de Vicosa
        - Campus Rio Paranaiba (UFV-CRP), com foco em desenvolvimento de
        software e aplicacao pratica em projetos reais.
      </p>
    </header>

    <article class="education_card">
      <div class="item_head">
        <h3>Bacharelado em Sistemas de Informacao</h3>
        <span>Concluido</span>
      </div>
      <p class="item_company">
        Universidade Federal de Vicosa - Campus Rio Paranaiba (UFV-CRP)
      </p>
      <ul>
        <li>Formacao com foco em desenvolvimento de software e web.</li>
        <li>Base em qualidade de software (QA), UX/UI e engenharia de software.</li>
        <li>Conhecimentos em banco de dados, usabilidade e arquitetura.</li>
        <li>Aplicacao pratica por meio de estagio em laboratorio de SI.</li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "FormacaoAcademica",
};
</script>

<style scoped>
.education_section {
  width: min(1150px, 92%);
  margin: 0 auto;
  padding: 10px 0 70px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
}

.education_intro {
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

.education_card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px;
  background: linear-gradient(
    160deg,
    rgba(11, 20, 37, 0.84),
    rgba(8, 13, 24, 0.84)
  );
}

.item_head {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
}

.item_head h3 {
  font-size: 24px;
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
  font-size: 15px;
}

ul {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  color: #c4d2ee;
  font-size: 15px;
  position: relative;
  padding-left: 16px;
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
  .education_section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .education_intro,
  .education_card {
    padding: 18px;
  }
}
</style>
