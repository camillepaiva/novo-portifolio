<template>
  <section class="contact_page">
    <header class="contact_intro">
      <p class="section_label">Contato</p>
      <h1>Vamos conversar sobre vagas frontend e projetos web?</h1>
      <p>
        Se voce busca uma desenvolvedora frontend Vue.js com experiencia em
        geotecnologias, integracao com APIs REST, Firebase e foco em
        usabilidade, posso contribuir desde a ideacao ate a entrega em
        producao.
      </p>

      <div class="contact_links">
        <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
        <a href="https://www.linkedin.com/in/camillepaiva" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a
          href="https://wa.me/5532998306120?text=Ola%20Camille,%20quero%20falar%20sobre%20uma%20oportunidade."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>

    <v-container class="form_wrapper">
      <v-form
        ref="formRef"
        v-model="isValid"
        lazy-validation
        class="form_container"
        @submit.prevent="submitForm"
      >
        <v-text-field
          label="Nome"
          v-model="formData.name"
          :rules="nameRules"
          required
          variant="outlined"
        ></v-text-field>

        <v-text-field
          label="E-mail"
          v-model="formData.email"
          :rules="emailRules"
          required
          variant="outlined"
        ></v-text-field>

        <v-textarea
          label="Mensagem"
          v-model="formData.message"
          :rules="messageRules"
          required
          variant="outlined"
          rows="5"
        ></v-textarea>

        <v-btn
          class="btn_send"
          :loading="isSending"
          :disabled="isSending"
          type="submit"
        >
          Enviar mensagem
        </v-btn>
      </v-form>
    </v-container>
  </section>
</template>

<script>
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL =
  process.env.VUE_APP_CONTACT_RECEIVER_EMAIL || "camillep590@hotmail.com";
const EMAILJS_SERVICE_ID =
  process.env.VUE_APP_EMAILJS_SERVICE_ID || "service_md1x22b";
const EMAILJS_TEMPLATE_ID =
  process.env.VUE_APP_EMAILJS_TEMPLATE_ID || "template_uin992w";
const EMAILJS_PUBLIC_KEY =
  process.env.VUE_APP_EMAILJS_PUBLIC_KEY || "e4spiPqgfETLx7HX7";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isValid: false,
      isSending: false,
      contactEmail: CONTACT_EMAIL,
      nameRules: [(v) => !!v || "Informe seu nome"],
      emailRules: [
        (v) => !!v || "Informe seu e-mail",
        (v) => /.+@.+\..+/.test(v) || "Digite um e-mail valido",
      ],
      messageRules: [
        (v) => !!v || "Escreva sua mensagem",
        (v) => (v && v.length >= 15) || "Minimo de 15 caracteres",
      ],
    };
  },
  methods: {
    async submitForm() {
      const validation = await this.$refs.formRef.validate();
      const isFormValid =
        typeof validation === "boolean" ? validation : validation.valid;

      if (!isFormValid) {
        alert("Revise os campos antes de enviar.");
        return;
      }

      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
      };

      this.isSending = true;

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );
        alert("Mensagem enviada com sucesso.");
        this.resetForm();
      } catch (error) {
        const reason = this.getEmailErrorMessage(error);
        console.error("Falha ao enviar", reason, error);
        const shouldOpenMailClient = window.confirm(
          `${reason}\n\nDeseja abrir seu app de e-mail para enviar manualmente?`
        );
        if (shouldOpenMailClient) {
          this.sendByMailto();
        }
      } finally {
        this.isSending = false;
      }
    },
    getEmailErrorMessage(error) {
      const status = Number(error && error.status);
      const rawText = (error && (error.text || error.message)) || "";
      const text = String(rawText).trim();
      const textLower = text.toLowerCase();

      if (
        status === 412 &&
        (textLower.includes("invalid grant") || textLower.includes("outlook"))
      ) {
        return "O servico de e-mail esta desconectado no EmailJS (Outlook Invalid grant). Reconecte a conta Outlook no painel do EmailJS e tente novamente.";
      }

      if (status === 403) {
        return "A requisicao foi bloqueada pelo EmailJS (403). Verifique se o dominio do portfolio esta liberado em Allowed Origins e se a public key esta correta.";
      }

      if (status === 400) {
        return "Falha de configuracao no EmailJS (400). Confira Service ID, Template ID e variaveis do template.";
      }

      if (status === 429) {
        return "Muitas tentativas em pouco tempo (429). Aguarde alguns segundos e tente novamente.";
      }

      if (text) {
        return `Nao foi possivel enviar agora. Detalhe: ${text}`;
      }

      return "Nao foi possivel enviar agora. Tente novamente em alguns minutos.";
    },
    sendByMailto() {
      const subject = this.formData.name
        ? `Contato portfolio - ${this.formData.name}`
        : "Contato portfolio";

      const body = [
        `Nome: ${this.formData.name || "(nao informado)"}`,
        `E-mail: ${this.formData.email || "(nao informado)"}`,
        "",
        this.formData.message || "",
      ].join("\n");

      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    },
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
      this.isValid = false;
      this.$refs.formRef.reset();
      if (this.$refs.formRef.resetValidation) {
        this.$refs.formRef.resetValidation();
      }
    },
  },
};
</script>

<style scoped>
.contact_page {
  width: min(980px, 92%);
  margin: 0 auto;
  padding-top: 138px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact_intro {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 70ch;
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
  font-size: clamp(30px, 4vw, 44px);
  line-height: 1.12;
}

.contact_links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.contact_links a {
  text-decoration: none;
  color: #e0e8ff;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.04);
  padding: 8px 13px;
  font-size: 13px;
  transition: border-color 0.25s ease;
}

.contact_links a:hover {
  border-color: rgba(125, 212, 255, 0.55);
}

.form_wrapper {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  padding: 20px;
}

.form_container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btn_send {
  width: fit-content;
  border-radius: 12px;
  padding: 0 22px;
  height: 42px;
  background: linear-gradient(135deg, #31b3f1, #146fbe);
  color: #f7fbff;
  font-weight: 600;
}

:deep(.v-field) {
  border-radius: 14px;
  background: rgba(9, 14, 28, 0.64);
}

:deep(.v-field__input),
:deep(.v-label),
:deep(input),
:deep(textarea) {
  color: #ecf2ff !important;
}

@media (max-width: 768px) {
  .contact_page {
    padding-top: 112px;
  }

  .form_wrapper {
    padding: 12px;
  }

  .btn_send {
    width: 100%;
  }
}
</style>
