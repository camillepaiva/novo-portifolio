<template>
  <section class="hero_section">
    <div class="hero_grid">
      <article class="hero_content">
        <p class="eyebrow">Frontend Vue.js + UX/UI + Geotecnologia</p>
        <h1>
          Desenvolvimento interfaces web com foco em usabilidade, dados e
          qualidade de entrega.
        </h1>

        <p class="hero_description">
          Sou Camille Custodio de Paiva, de Bras Pires (MG), bacharela em
          Sistemas de Informacao pela UFV. Atualmente atuo como Desenvolvedora
          Frontend Junior/Pleno na Egeo Processamento de Dados, construindo
          aplicacoes com Vue.js, APIs REST, Firebase e mapas web com
          OpenLayers. Minha trajetoria inclui suporte tecnico e base em UX/UI,
          o que fortalece minha visao de produto e minha capacidade de resolver
          problemas ponta a ponta.
        </p>

        <div class="hero_highlights">
          <span>Desenvolvedora Frontend Junior/Pleno (2025-atual)</span>
          <span>Vue.js, OpenLayers, GeoJSON e APIs REST</span>
          <span>Firebase (Auth, Firestore e Storage)</span>
          <span>Bacharela em Sistemas de Informacao (UFV-CRP)</span>
        </div>

        <div class="hero_actions">
          <router-link to="/projetos" class="btn_primary">
            Ver projetos em destaque
          </router-link>
          <a href="mailto:camillep590@hotmail.com" class="btn_secondary">
            Falar por e-mail
          </a>
        </div>

        <div class="social_links">
          <a
            href="https://wa.me/5532998306120?text=Ola%20Camille,%20vi%20seu%20portfolio%20e%20quero%20conversar%20sobre%20uma%20oportunidade."
            target="_blank"
            rel="noreferrer"
            aria-label="Conversar no WhatsApp"
          >
            <img class="icon" :src="whats" alt="WhatsApp" />
          </a>
          <a
            href="https://www.linkedin.com/in/camillepaiva"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn"
          >
            <img class="icon" :src="linkedin" alt="LinkedIn" />
          </a>
        </div>
      </article>

      <aside class="hero_visual">
        <div class="photo_frame">
          <img
            class="my_photo"
            :src="minhaFoto"
            alt="Foto de Camille Paiva"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
        <p class="availability">Disponivel para vagas frontend e projetos web.</p>
      </aside>
    </div>

    <div class="scroll_hint">
      <span>Role para ver mais</span>
      <img class="arrow" :src="setaBaixo" alt="Seta para baixo" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      minhaFoto: require("../assets/minhaFoto.jpg"),
      setaBaixo: require("../assets/setasBaixo.png"),
      whats: require("../assets/icones/whatsapp.png"),
      linkedin: require("../assets/icones/linkedin.png"),
    };
  },
};
</script>

<style scoped>
.hero_section {
  width: min(1150px, 92%);
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 50px;
}

.hero_grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero_content {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.eyebrow {
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  color: #90d8ff;
  border: 1px solid rgba(125, 212, 255, 0.28);
  background: rgba(46, 168, 235, 0.12);
}

h1 {
  font-size: clamp(32px, 4.2vw, 52px);
  line-height: 1.1;
  max-width: 14ch;
}

.hero_description {
  max-width: 62ch;
}

.hero_highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero_highlights span {
  border-radius: 999px;
  padding: 9px 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  color: #d8e4ff;
  font-size: 13px;
  font-weight: 500;
}

.hero_actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn_primary,
.btn_secondary {
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 18px;
  transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
}

.btn_primary {
  background: linear-gradient(135deg, #36b6f2, #1178ca);
  color: #f8fcff;
  box-shadow: 0 16px 30px rgba(17, 120, 202, 0.38);
}

.btn_secondary {
  border: 1px solid rgba(255, 255, 255, 0.26);
  color: #eaf0ff;
  background: rgba(255, 255, 255, 0.04);
}

.btn_primary:hover,
.btn_secondary:hover {
  transform: translateY(-2px);
}

.social_links {
  display: flex;
  gap: 14px;
}

.icon {
  width: 28px;
  height: 28px;
  transition: transform 0.25s ease;
}

.icon:hover {
  transform: scale(1.12);
}

.hero_visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.photo_frame {
  padding: 14px;
  border-radius: 34px;
  background: linear-gradient(
    155deg,
    rgba(46, 168, 235, 0.55),
    rgba(12, 20, 35, 0.2) 40%,
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 0 28px 48px rgba(6, 12, 28, 0.5);
}

.my_photo {
  width: clamp(220px, 24vw, 300px);
  border-radius: 28px;
  display: block;
  filter: saturate(1.1);
}

.availability {
  width: fit-content;
  border-radius: 999px;
  padding: 8px 14px;
  color: #d5f5ff;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(117, 230, 255, 0.35);
  background: rgba(18, 121, 190, 0.18);
}

.scroll_hint {
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

.scroll_hint span {
  font-size: 12px;
  color: #a7b4d6;
}

.arrow {
  width: 42px;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

@media (max-width: 950px) {
  .hero_grid {
    grid-template-columns: 1fr;
  }

  h1 {
    max-width: 100%;
  }

  .hero_visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .hero_section {
    padding-top: 110px;
    padding-bottom: 35px;
  }

  .hero_content {
    gap: 16px;
  }

  .hero_highlights span {
    font-size: 12px;
  }

  .btn_primary,
  .btn_secondary {
    width: 100%;
    text-align: center;
  }

  .scroll_hint {
    margin-top: 30px;
  }

  .arrow {
    width: 34px;
  }
}
</style>
