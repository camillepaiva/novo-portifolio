<template>
  <section class="experience_section">
    <header class="experience_intro">
      <p class="section_label">Experiencia Profissional</p>
      <h2>Atuacao em desenvolvimento frontend, suporte tecnico e projetos.</h2>
      <p>
        Minha experiencia combina entrega de produto com Vue.js, integracao de
        dados e contato direto com usuarios. Isso me permite manter equilibrio
        entre qualidade tecnica, usabilidade e resultado pratico.
      </p>
    </header>

    <div class="timeline">
      <article class="timeline_item">
        <div class="timeline_dot"></div>
        <div class="timeline_content">
          <div class="item_head">
            <h3>Desenvolvedora Frontend</h3>
            <span>2025 - atual</span>
          </div>
          <p class="item_company">Egeo Processamento de Dados</p>
          <ul>
            <li>
              Desenvolvimento de aplicacoes web para geotecnologias com Vue.js
              e componentes reutilizaveis.
            </li>
            <li>
              Implementacao e manipulacao de mapas interativos com OpenLayers,
              incluindo camadas, rotas e dados GeoJSON.
            </li>
            <li>
              Integracao do frontend com APIs REST e servicos Firebase
              (Authentication, Firestore e Storage).
            </li>
            <li>
              Correcao de bugs, melhorias de performance, refatoracao de codigo
              e validacao de funcionalidades.
            </li>
          </ul>
        </div>
      </article>

      <article class="timeline_item">
        <div class="timeline_dot"></div>
        <div class="timeline_content">
          <div class="item_head">
            <h3>Analista e Suporte Tecnico</h3>
            <span>2024 - 2025</span>
          </div>
          <p class="item_company">Uni Telecom</p>
          <ul>
            <li>
              Atendimento e suporte tecnico a usuarios, com diagnostico e
              resolucao de problemas em sistemas e ambientes computacionais.
            </li>
            <li>
              Registro de ocorrencias, encaminhamento de solucoes e comunicacao
              clara durante todo o atendimento.
            </li>
            <li>
              Apoio na melhoria da experiencia do usuario e na continuidade dos
              servicos operacionais.
            </li>
          </ul>
        </div>
      </article>

      <article class="timeline_item">
        <div class="timeline_dot"></div>
        <div class="timeline_content">
          <div class="item_head">
            <h3>Estagio - Laboratorio de Sistemas de Informacao</h3>
            <span>2022 - 2024</span>
          </div>
          <p class="item_company">
            Universidade Federal de Vicosa - Campus Rio Paranaiba (UFV-CRP)
          </p>
          <ul>
            <li>
              Apoio em atividades de desenvolvimento e manutencao de sistemas no
              contexto academico.
            </li>
            <li>
              Colaboracao em testes, levantamento de requisitos e organizacao de
              documentacao tecnica.
            </li>
            <li>
              Evolucao de base tecnica em desenvolvimento web, UX/UI e boas
              praticas de software.
            </li>
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

