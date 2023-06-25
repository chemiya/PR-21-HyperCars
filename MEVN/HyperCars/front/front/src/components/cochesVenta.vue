<template>
  <div class="exterior">
    <nav class="navbar navbar-expand-lg barra">
      <div class="container-fluid">
        <img src="./../assets/icono.png" class="icono" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="menu"
            ><font-awesome-icon icon="fa-solid fa-bars" class="icono-menu"
          /></span>
        </button>
        <div class="collapse navbar-collapse mt-4 mb-4" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="boton-blanco p-2">
                <a class="enlace-normal" href="/cochesTaller"
                  >Coches en el taller</a
                >
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>






    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center titulo">Coches en venta</h1>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center">
          <a class="boton-blanco p-2" href="/crearCocheVenta"
            >Añadir coche en venta</a
          >
        </div>
      </div>
      <div class="row mt-3" v-if="!avisoNinguno">
        <div
          class="col-md-4 p-3"
          v-for="(cocheVenta, index) in cochesVenta"
          :key="index"
          @click="this.$router.push(`/detalleCocheVenta/${cocheVenta._id}`)"
        >
          <carta-coche-venta :propsCoche="cocheVenta"></carta-coche-venta>
          <!--<h1>{{ cocheVenta.matricula }}</h1>-->
        </div>
        <!--col-->
      </div>
      <!--row-->
      <div class="row mt-3" v-else>
        <div class="col">
          <h1 class="ninguno text-center">No hay ningún coche en venta</h1>
        </div>
      </div>
    </div>
  </div>
  <!--exterior-->
</template>

<style scoped>
.icono {
  width: 300px;
  object-fit: cover;
}
.boton-azul {
  background-color: #020045;
  color: white;
  font-size: 30px;
  border-radius: 10px;
}
.enlace-normal {
  text-decoration: none;
  color: black;
}

@import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");

* {
  font-family: "Orelega One", cursive;
}

.ninguno {
  font-size: 40px;
  color: white;
}
.barra {
  background-color: #020045;
  border-bottom: 5px solid white;
}
.titulo {
  font-size: 60px;
  color: white;
}
.boton-blanco {
  background-color: white;
  color: #020045;
  font-size: 30px;
  border-radius: 10px;
  text-decoration: none;
}
.boton-blanco:hover {
  transform: scale(1.05);
  background-color: #b6c6fc;
  font-weight: bold;
  cursor: pointer;
}
.exterior {
  background-color: #020045;
  padding-bottom: 400px;
}
.icono-menu {
  color: white;
  font-size: 40px;
}
</style>

<script lang="ts">
import { CocheVenta } from "@/interfaces/CocheVenta";
import { getCochesVenta } from "@/services/CocheVentaService";
import { defineComponent } from "vue";
import cartaCocheVenta from "./cartas/cartaCocheVenta.vue";

export default defineComponent({
  components: { cartaCocheVenta },
  name: "coches-venta",
  data() {
    return {
      cochesVenta: [] as CocheVenta[], //variable como elemento
      avisoNinguno: false,
    };
  },
  methods: {
    async loadCochesVenta() {
      try {
        const res = await getCochesVenta(); //cargo todas

        if (res.data.length == 0) {
          this.avisoNinguno = true;
        } else {
          this.cochesVenta = res.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.loadCochesVenta(); //al iniciar las cargo
  },
});
</script>