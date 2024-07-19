<template>
    <section  class="container" id="productos">
      <h1 class="text-center">Nuestros Productos</h1>
      <div class="row">
        <div class="col-sm-4 col-12 px-5 mb-4" v-for="producto in productos" :key="producto.id">
          <div class="card">
            <img :src="producto.imagen" :alt="producto.nombre">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Precio: ${{ producto.precio }}</li>
              <li class="list-group-item">Cantidad disponible: {{ producto.cantidad }}</li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
    <div class="card-body">
                <button class="button-index" @click="volverInicio"> Volver al Inicio</button>
            </div>
  </template>
  
  <script>
  export default {
    methods: {
        volverInicio() {
            return this.$router.push('/');
        },
    },
    data() {
      return {
        productos: [
          {
            id: 1,
            imagen: require('../assets/img/desayunos.jpg'),
            nombre: 'Desayuno',
            descripcion: 'Contamos con desayunos nutritivos y deliciosos',
            precio: 2000,
            cantidad: 'Para dos personas'
          },
          {
            id: 2,
            imagen: require("../assets/img/bebidas.jpg"),
            nombre: 'Bebidas',
            descripcion: 'Contamos con ricas bebidas',
            precio: 1000,
            cantidad: 'Para una persona'
          },
          {
            id: 3,
            imagen: require("../assets/img/empanadas.jpg"),
            nombre: 'Empanadas',
            descripcion: 'Contamos con ricas empanadas',
            precio: 1500,
            cantidad: 'Para una persona'
          },

        ]
      }
    }
  }
  </script>
  
  <style>
  .button-index {
    margin-top: 10px;
    margin-left: 5px;
    padding: 5px;
    color: white;
    background-color: #e83e8c;
}
  </style>