<template>
  <div ref="carouselContainer" class="carousel_container">
    <button
      class="arrow left"
      @click="anterior"
      :disabled="isFirst"
      aria-label="Imagem anterior"
    >
      <img :src="setaLefth" alt="Seta esquerda" />
    </button>

    <div class="carousel_frame">
      <img
        v-if="isVisible"
        :src="currentImage"
        alt="Imagem do projeto"
        class="image"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
      <div v-else class="image_placeholder">
        <v-icon size="22">mdi-image-outline</v-icon>
        <span>Carregando preview</span>
      </div>
    </div>

    <button
      class="arrow right"
      @click="proximo"
      :disabled="isLast"
      aria-label="Proxima imagem"
    >
      <img :src="setaRigth" alt="Seta direita" />
    </button>

    <div v-if="imagens.length > 1" class="dots">
      <button
        v-for="(img, index) in imagens"
        :key="img + index"
        class="dot"
        :class="{ active: index === imagemAtual }"
        @click="goTo(index)"
        :aria-label="`Ir para imagem ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagens: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imagemAtual: 0,
      isVisible: false,
      observer: null,
      setaLefth: require("../assets/seta-lefth.png"),
      setaRigth: require("../assets/seta-right.png"),
    };
  },
  computed: {
    isFirst() {
      return this.imagemAtual === 0;
    },
    isLast() {
      return this.imagemAtual === this.imagens.length - 1;
    },
    currentImage() {
      return this.imagens[this.imagemAtual] || "";
    },
  },
  mounted() {
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  },
  watch: {
    imagens() {
      this.imagemAtual = 0;
    },
  },
  methods: {
    setupObserver() {
      if (!window.IntersectionObserver) {
        this.isVisible = true;
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.observer.disconnect();
            this.observer = null;
          }
        },
        {
          rootMargin: "260px 0px",
          threshold: 0.01,
        }
      );

      this.observer.observe(this.$refs.carouselContainer);
    },
    anterior() {
      if (!this.isFirst) {
        this.imagemAtual -= 1;
      }
    },
    proximo() {
      if (!this.isLast) {
        this.imagemAtual += 1;
      }
    },
    goTo(index) {
      this.imagemAtual = index;
    },
  },
};
</script>

<style scoped>
.carousel_container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
}

.carousel_frame {
  width: 100%;
  max-width: 530px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(6, 10, 22, 0.55);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image_placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  color: #a9bbdc;
  background: linear-gradient(
    165deg,
    rgba(24, 37, 63, 0.55),
    rgba(12, 22, 39, 0.58)
  );
}

.image_placeholder span {
  font-size: 12px;
}

.arrow {
  position: absolute;
  top: calc(50% - 14px);
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(8, 13, 26, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.arrow img {
  width: 14px;
}

.arrow:hover {
  transform: translateY(-50%) scale(1.08);
}

.arrow:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.left {
  left: -10px;
  transform: translateY(-50%);
}

.right {
  right: -10px;
  transform: translateY(-50%);
}

.dots {
  position: absolute;
  bottom: -18px;
  display: flex;
  gap: 7px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 0;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
}

.dot.active {
  width: 22px;
  background: #39b9f5;
}

@media (max-width: 640px) {
  .carousel_container {
    min-height: 195px;
  }

  .arrow {
    width: 30px;
    height: 30px;
    top: calc(50% - 18px);
  }

  .left {
    left: -6px;
  }

  .right {
    right: -6px;
  }
}
</style>
