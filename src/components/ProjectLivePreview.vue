<template>
  <div class="preview_wrapper">
    <div v-if="showAutomaticPreview" class="preview_frame">
      <div class="browser_bar">
        <div class="browser_dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>{{ previewDomain }}</p>
        <a
          class="open_link"
          :href="normalizedPreviewUrl"
          target="_blank"
          rel="noreferrer"
        >
          Abrir site
        </a>
      </div>

      <img
        :src="screenshotUrl"
        :alt="`Preview do projeto ${titulo}`"
        class="preview_image"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        @error="handlePreviewError"
      />
    </div>

    <CarroselFotos v-else-if="imagens.length" :imagens="imagens" />

    <div v-else class="preview_placeholder">
      <v-icon size="24">mdi-web-off</v-icon>
      <p>Preview indisponivel no momento.</p>
    </div>
  </div>
</template>

<script>
import CarroselFotos from "./CarroselFotos.vue";

export default {
  components: {
    CarroselFotos,
  },
  props: {
    titulo: {
      type: String,
      default: "",
    },
    previewUrl: {
      type: String,
      default: "",
    },
    previewVersion: {
      type: String,
      default: "",
    },
    imagens: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      previewError: false,
      previewSourceIndex: 0,
      cacheSeed: new Date().toISOString().slice(0, 10),
    };
  },
  computed: {
    normalizedPreviewUrl() {
      const rawUrl = this.previewUrl ? this.previewUrl.trim() : "";
      if (!rawUrl) return "";

      if (/^https?:\/\//i.test(rawUrl)) {
        return rawUrl;
      }

      return `https://${rawUrl}`;
    },
    showAutomaticPreview() {
      return Boolean(this.normalizedPreviewUrl) && !this.previewError;
    },
    previewDomain() {
      if (!this.normalizedPreviewUrl) {
        return "preview";
      }

      try {
        return new URL(this.normalizedPreviewUrl).hostname.replace(/^www\./, "");
      } catch (error) {
        return "preview";
      }
    },
    normalizedPreviewVersion() {
      return this.previewVersion ? this.previewVersion.trim() : "";
    },
    screenshotTargetUrl() {
      if (!this.normalizedPreviewUrl || !this.normalizedPreviewVersion) {
        return this.normalizedPreviewUrl;
      }

      try {
        const url = new URL(this.normalizedPreviewUrl);
        url.searchParams.set("preview", this.normalizedPreviewVersion);
        return url.toString();
      } catch (error) {
        return `${this.normalizedPreviewUrl}?preview=${encodeURIComponent(
          this.normalizedPreviewVersion
        )}`;
      }
    },
    screenshotProviders() {
      if (!this.screenshotTargetUrl) {
        return [];
      }

      const encodedUrl = encodeURIComponent(this.screenshotTargetUrl);
      const previewSeed = this.normalizedPreviewVersion || this.cacheSeed;
      return [
        `https://s.wordpress.com/mshots/v1/${encodedUrl}?w=1400&h=900&date=${previewSeed}`,
        `https://image.thum.io/get/width/1400/noanimate/${encodedUrl}`,
      ];
    },
    screenshotUrl() {
      return this.screenshotProviders[this.previewSourceIndex] || "";
    },
  },
  watch: {
    previewUrl() {
      this.previewError = false;
      this.previewSourceIndex = 0;
    },
    previewVersion() {
      this.previewError = false;
      this.previewSourceIndex = 0;
    },
  },
  methods: {
    handlePreviewError() {
      if (this.previewSourceIndex < this.screenshotProviders.length - 1) {
        this.previewSourceIndex += 1;
        return;
      }

      this.previewError = true;
    },
  },
};
</script>

<style scoped>
.preview_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
}

.preview_frame {
  width: 100%;
  max-width: 530px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(175, 215, 255, 0.22);
  background: rgba(8, 13, 23, 0.86);
  box-shadow: 0 16px 30px rgba(4, 8, 18, 0.36);
}

.browser_bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 8px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    140deg,
    rgba(16, 28, 48, 0.96),
    rgba(11, 20, 36, 0.94)
  );
}

.browser_dots {
  display: flex;
  gap: 5px;
}

.browser_dots span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
}

.browser_bar p {
  margin: 0;
  font-size: 12px;
  color: #d9e8ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.open_link {
  text-decoration: none;
  color: #e8f4ff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid rgba(125, 212, 255, 0.42);
  background: rgba(35, 144, 212, 0.22);
  padding: 5px 10px;
}

.preview_image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.preview_placeholder {
  width: 100%;
  max-width: 530px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  border: 1px dashed rgba(178, 210, 244, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: #b6c7e1;
  background: linear-gradient(
    165deg,
    rgba(24, 37, 63, 0.55),
    rgba(12, 22, 39, 0.58)
  );
}

.preview_placeholder p {
  margin: 0;
  font-size: 13px;
}

@media (max-width: 640px) {
  .preview_wrapper {
    min-height: 195px;
  }

  .browser_bar {
    min-height: 36px;
    padding: 7px 8px;
  }

  .open_link {
    font-size: 10px;
    padding: 4px 8px;
  }
}
</style>
