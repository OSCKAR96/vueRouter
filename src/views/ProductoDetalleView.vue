<template>
    <h1>Detalle del producto</h1>
    <div v-if="id">
      <p>ID: {{ id }} - Nombre: {{ nombre }} - Precio: {{ precio }}</p>
      <router-link :to="{ name: 'comentarios' }">Ver comentarios</router-link>
      <router-view />
    </div>
    <div v-else>
      <p>Producto no encontrado.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      precio: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  