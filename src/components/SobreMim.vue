<template>
  <PrimeiraSessao />
  <ExperienciaProfissional />
  <Segundasessao />
</template>

<script>
import PrimeiraSessao from "@/components/PrimeiraSessao.vue";
import ExperienciaProfissional from "./ExperienciaProfissional.vue";

import Segundasessao from "./Segundasessao.vue";

export default {
  name: "SobreMim",

  components: {
    PrimeiraSessao,
    ExperienciaProfissional,
    Segundasessao,
  },
};
</script>

<style scoped></style>
