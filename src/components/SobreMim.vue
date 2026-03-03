<template>
  <PrimeiraSessao />
  <ExperienciaProfissional />
  <Segundasessao />
  <FormacaoAcademica />
</template>

<script>
import PrimeiraSessao from "@/components/PrimeiraSessao.vue";
import ExperienciaProfissional from "./ExperienciaProfissional.vue";
import Segundasessao from "./Segundasessao.vue";
import FormacaoAcademica from "./FormacaoAcademica.vue";

export default {
  name: "SobreMim",

  components: {
    PrimeiraSessao,
    ExperienciaProfissional,
    Segundasessao,
    FormacaoAcademica,
  },
};
</script>

<style scoped></style>
