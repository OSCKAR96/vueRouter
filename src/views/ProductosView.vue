<template>
  <Card :id="id" :titulo="titulo" :detalle="detalle" :precio="precio" :cantidad="cantidad" :imagen="imagen" />

  <router-link to="/" class="color">Volver inicio</router-link>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "ProductosView",
  props: {
    id: {
      type: Number,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
    imagen:{
        type: String,
        required: true,
    }
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.color {
  color: red;
}
</style>
