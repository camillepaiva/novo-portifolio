<template>
  <section class="projects_page">
    <header class="projects_intro">
      <p class="section_label">Portfolio</p>
      <h1>Projetos que mostram minha evolucao em desenvolvimento e produto.</h1>
      <p>
        Aqui voce encontra projetos de frontend com Vue.js e cases de UI/UX.
        Em ambos, meu foco e resolver problema real com clareza visual,
        navegacao intuitiva e codigo que pode crescer junto com o produto.
      </p>
    </header>

    <section class="projects_group">
      <div class="group_header">
        <p>Desenvolvimento Frontend</p>
        <h2>Aplicacoes funcionais com foco em experiencia e arquitetura.</h2>
      </div>

      <CardProjetos
        v-for="project in frontendProjects"
        :key="project.titulo"
        :titulo="project.titulo"
        :descricao="project.descricao"
        :imagens="project.imagens"
        :tecnologias="project.tecnologias"
        :impactos="project.impactos"
        :linkProjeto="project.linkProjeto"
        :linkGit="project.linkGit"
      />
    </section>

    <section class="projects_group">
      <div class="group_header">
        <p>Design de Produto (UI/UX)</p>
        <h2>Cases de interface orientados a usabilidade e conversao.</h2>
      </div>

      <CardProjetosUx
        v-for="project in uxProjects"
        :key="project.titulo"
        :titulo="project.titulo"
        :descricao="project.descricao"
        :imagens="project.imagens"
        :entregaveis="project.entregaveis"
        :resultados="project.resultados"
        :linkProjeto="project.linkProjeto"
      />
    </section>
  </section>
</template>

<script>
import CardProjetos from "./CardProjetos.vue";
import CardProjetosUx from "./CardProjetosUx.vue";

export default {
  components: {
    CardProjetos,
    CardProjetosUx,
  },
  data() {
    return {
      frontendProjects: [
        {
          titulo: "Shopping Bag",
          descricao:
            "E-commerce com consumo de API REST, controle de carrinho e fluxo de compra. O projeto usa Vuex para estado global e Vue Router para navegacao entre etapas.",
          tecnologias: ["Vue.js", "Vuex", "Vue Router", "API REST"],
          impactos: [
            "Fluxo de carrinho com atualizacao de quantidade em tempo real.",
            "Estado centralizado para manter previsibilidade de dados.",
            "Navegacao entre etapas com experiencia consistente.",
          ],
          imagens: [
            require("@/assets/projetos/shoppingBag/img1.png"),
            require("@/assets/projetos/shoppingBag/img2.png"),
            require("@/assets/projetos/shoppingBag/img3.png"),
          ],
          linkProjeto: "https://shopping-bag-psi.vercel.app/#/",
          linkGit: "https://github.com/CamillePaivaa/Shopping-Bag",
        },
        {
          titulo: "Catalogo de Filmes",
          descricao:
            "Aplicacao que integra API de filmes para listar conteudos, exibir detalhes e permitir favoritos. A interface foi desenhada para navegacao rapida em mobile e desktop.",
          tecnologias: ["Vue.js", "API REST", "Local Storage", "Responsividade"],
          impactos: [
            "Consulta dinamica de titulos e detalhes direto da API.",
            "Persistencia de favoritos para continuidade da experiencia.",
            "Interface adaptada para uso rapido em mobile e desktop.",
          ],
          imagens: [
            require("@/assets/projetos/catalogoFilmes/img1.png"),
            require("@/assets/projetos/catalogoFilmes/img2.png"),
          ],
          linkProjeto: "https://catalogodefilmeconsimindoapi.vercel.app/",
          linkGit:
            "https://github.com/CamillePaivaa/Cat-logo-de-Filmes_consumindoApi",
        },
        {
          titulo: "Lista de Compras",
          descricao:
            "Projeto com autenticacao, persistencia no Firebase e compartilhamento de lista via WhatsApp. A proposta foi criar uma experiencia simples para uso cotidiano.",
          tecnologias: ["Vue.js", "Firebase", "Autenticacao", "UX Writing"],
          impactos: [
            "Autenticacao para manter listas vinculadas a cada usuario.",
            "Persistencia de dados no Firebase para uso recorrente.",
            "Compartilhamento rapido por WhatsApp para colaboracao familiar.",
          ],
          imagens: [
            require("@/assets/projetos/listaCompras/img1.png"),
            require("@/assets/projetos/listaCompras/img2.png"),
            require("@/assets/projetos/listaCompras/img3.png"),
          ],
          linkProjeto: "https://minha-lista-de-compras-lac.vercel.app/lista-produtos",
          linkGit: "https://github.com/CamillePaivaa/Minha-Lista-de-Compras",
        },
        {
          titulo: "Pet Mania",
          descricao:
            "Site de servicos para pet shop com fluxo de agendamento, apresentacao de servicos e prova social. O objetivo foi facilitar a escolha e reduzir atrito na conversao.",
          tecnologias: ["Vue.js", "UI Components", "Formulario", "Mobile First"],
          impactos: [
            "Fluxo de agendamento pensado para reduzir friccao de contato.",
            "Organizacao visual dos servicos para decisao mais rapida.",
            "Prova social aplicada para reforco de confianca.",
          ],
          imagens: [
            require("@/assets/projetos/petMania/img1.png"),
            require("@/assets/projetos/petMania/img2.png"),
            require("@/assets/projetos/petMania/img3.png"),
            require("@/assets/projetos/petMania/img4.png"),
          ],
          linkProjeto: "https://pet-mania-vue-js.vercel.app",
          linkGit: "https://github.com/CamillePaivaa/Pet-Mania_VueJs",
        },
        {
          titulo: "Jogo de Perguntas",
          descricao:
            "Game interativo com perguntas dinamicas vindas de API externa e regra de tempo por rodada. O foco foi performance, fluidez de interacao e rejogabilidade.",
          tecnologias: ["Vue.js", "API REST", "Timer", "Gerenciamento de estado"],
          impactos: [
            "Perguntas dinamicas para aumentar variacao da jogabilidade.",
            "Timer por rodada para reforcar ritmo e engajamento.",
            "Regras de pontuacao claras com feedback imediato.",
          ],
          imagens: [
            require("../assets/projetos/jogoPerguntas/img1.png"),
            require("../assets/projetos/jogoPerguntas/img2.png"),
            require("../assets/projetos/jogoPerguntas/img3.png"),
          ],
          linkProjeto: "https://jogo-de-perguntas-com-api.vercel.app/",
          linkGit: "https://github.com/CamillePaivaa/Jogo-de-Perguntas-Com-Api",
        },
        {
          titulo: "Lista de Tarefas",
          descricao:
            "To-do list com criacao, edicao e remocao de tarefas em tempo real. O projeto reforca boas praticas de componentizacao e interacao orientada ao usuario.",
          tecnologias: ["Vue.js", "CRUD", "Componentes", "Usabilidade"],
          impactos: [
            "Fluxo CRUD completo para organizacao diaria de tarefas.",
            "Interacoes objetivas para reduzir cliques desnecessarios.",
            "Estrutura de componentes com foco em manutencao simples.",
          ],
          imagens: [
            require("../assets/projetos/listaTarefas/img1.png"),
            require("../assets/projetos/listaTarefas/img2.png"),
          ],
          linkProjeto: "https://lista-de-tarefas-tan-zeta.vercel.app/",
          linkGit: "https://github.com/CamillePaivaa/Lista-de-Tarefas",
        },
        {
          titulo: "Self Service Lunch",
          descricao:
            "Interface de autoatendimento para fast food com selecao de itens, calculo de total e experiencia guiada. O desafio foi manter clareza com multiplas escolhas.",
          tecnologias: ["Vue.js", "Logica de negocio", "UX Flow", "Responsividade"],
          impactos: [
            "Calculo de total integrado ao fluxo de selecao de itens.",
            "Experiencia guiada para reduzir erro na montagem do pedido.",
            "Layout responsivo para operacao em telas diversas.",
          ],
          imagens: [
            require("@/assets/projetos/selfService/img1.png"),
            require("@/assets/projetos/selfService/img2.png"),
          ],
          linkProjeto: "https://self-service-lunch.vercel.app/",
          linkGit: "https://github.com/CamillePaivaa/Self-Service-Lunch",
        },
      ],
      uxProjects: [
        {
          titulo: "Faxinex",
          descricao:
            "Plataforma para contratacao de diaristas em pequenas cidades, conectando profissionais e clientes com filtros por localidade, servico e disponibilidade.",
          entregaveis: ["Pesquisa", "Fluxo de telas", "Prototipo navegavel"],
          resultados: [
            "Fluxo simplificado de busca e contratacao por localidade.",
            "Proposta visual orientada a confianca entre cliente e profissional.",
          ],
          imagens: [
            require("../assets/projetos/faxinex/img1.png"),
            require("../assets/projetos/faxinex/img2.png"),
            require("../assets/projetos/faxinex/img3.png"),
          ],
          linkProjeto:
            "https://www.behance.net/gallery/192795073/Faxinex-App-UI-UX-Design-XD-FIGMAPSD",
        },
        {
          titulo: "BanGeek",
          descricao:
            "Conceito de banco digital para publico geek com personalizacao de tema e avatar. O objetivo foi unir funcionalidade financeira com identidade de marca forte.",
          entregaveis: ["Benchmark", "UI kit", "Design de interacao"],
          resultados: [
            "Experiencia de marca diferenciada com personalizacao de interface.",
            "Padronizacao visual em UI kit para escalabilidade do produto.",
          ],
          imagens: [
            require("../assets/projetos/banGeek/img1.png"),
            require("../assets/projetos/banGeek/img2.png"),
            require("../assets/projetos/banGeek/img3.png"),
          ],
          linkProjeto:
            "https://www.behance.net/gallery/191356779/Bangeek-UI-UX-Design-Digital-Bank-XD-PSD",
        },
        {
          titulo: "Food Facil",
          descricao:
            "Aplicativo para pedidos de salgados por delivery com fluxo rapido de escolha e acompanhamento. O foco foi reduzir tempo de decisao e simplificar checkout.",
          entregaveis: ["Mapa de jornada", "Wireframes", "Prototipo visual"],
          resultados: [
            "Jornada de pedido otimizada para reduzir passos de checkout.",
            "Arquitetura de telas pensada para decisao rapida de compra.",
          ],
          imagens: [
            require("../assets/projetos/foodFacil/img1.png"),
            require("../assets/projetos/foodFacil/img2.png"),
            require("../assets/projetos/foodFacil/img3.png"),
          ],
          linkProjeto:
            "https://www.behance.net/gallery/194187151/FoodFacil-App-UI-UX-Design-XD-FIGMA-PSD",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects_page {
  position: relative;
  width: min(1150px, 92%);
  margin: 0 auto;
  padding-top: 138px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.projects_page::before {
  content: "";
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: min(920px, 96%);
  height: 250px;
  border-radius: 999px;
  background: radial-gradient(
      circle at 22% 40%,
      rgba(59, 178, 255, 0.22),
      transparent 60%
    ),
    radial-gradient(circle at 80% 42%, rgba(18, 110, 194, 0.22), transparent 62%);
  filter: blur(34px);
  opacity: 0.72;
  pointer-events: none;
  z-index: 0;
}

.projects_intro {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 78ch;
  padding: 10px 0 30px;
}

.projects_intro::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: min(320px, 68%);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(84, 194, 255, 0.95),
    rgba(84, 194, 255, 0.05)
  );
}

.section_label {
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  font-weight: 600;
  color: #7dd4ff;
}

h1 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.1;
  max-width: 19ch;
}

.projects_intro p {
  max-width: 70ch;
  color: #c7d3ee;
}

.projects_group {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 22px;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    160deg,
    rgba(8, 14, 26, 0.78),
    rgba(7, 12, 23, 0.7)
  );
}

.group_header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.group_header p {
  width: fit-content;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #93b8d3;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 6px 12px;
}

.group_header h2 {
  font-size: clamp(22px, 3vw, 34px);
  line-height: 1.2;
}

@media (max-width: 768px) {
  .projects_page {
    padding-top: 112px;
    gap: 40px;
  }

  .projects_intro,
  .projects_group {
    padding: 16px;
  }
}
</style>
