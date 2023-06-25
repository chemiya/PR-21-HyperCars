<template>
  <div class="exterior-principal">
    <video autoplay loop muted plays-inline>
      <source src="./../assets/video.mp4" type="video/mp4" />
    </video>
    <div
      class="capa d-flex flex-column justify-content-center align-items-center"
    >
      <img src="./../assets/icono.png" class="icono" />
      <h1 class="text-center titulo-grande-arriba">
        Encuentra el coche de tus sueños en HyperCars
      </h1>
    </div>
  </div>





  <div class="exterior-segunda-seccion">
    <div class="container">
      <div class="row">
        <div class="col d-flex flex-column justify-content-center">
          <h1 class="text-center titulo">
            El coche que siempre has querido...
          </h1>
          <h1 class="text-center titulo-grande">LO TENEMOS</h1>
        </div>
      </div>

      <div class="row mt-3" v-if="!avisoNinguno">
        <div
          class="col-md-3 p-3"
          v-for="(cocheVenta, index) in cochesVenta"
          :key="index"
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





  <div class="marcas">
    <div class="container">
      <div class="row">
        <div
          class="col-md-8 col-12 d-flex justify-content-center align-items-center"
        >
          <h1 class="titulo-marcas text-center">
            Solo vendemos coches de las principales marcas del automóvil
          </h1>
        </div>

        <div class="col-md-4 col-12">
          <div class="row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-icono-marca p-2">
                <img src="./../assets/mercedes.png" class="icono-marca" />
              </div>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-icono-marca p-2">
                <img src="./../assets/lambor.png" class="icono-marca" />
              </div>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-icono-marca p-2">
                <img src="./../assets/ferrari.jpg" class="icono-marca" />
              </div>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-icono-marca p-2">
                <img src="./../assets/audi.png" class="icono-marca" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






  <div class="marcas">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="row">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-mecanico p-3">
                <img src="./../assets/mecanico.jpg" class="icono-marca" />
                <p class="nombre">Javier</p>
                <p class="especialidad">Experto en Ferrari</p>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-mecanico p-3">
                <img src="./../assets/mecanico1.jpg" class="icono-marca" />
                <p class="nombre">Fernando</p>
                <p class="especialidad">Ex-mecánico Formula1</p>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-mecanico p-3">
                <img src="./../assets/mecanico4.jpg" class="icono-marca" />
                <p class="nombre">Luis</p>
                <p class="especialidad">Trabajó en Audi</p>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <div class="col-mecanico p-3">
                <img src="./../assets/mecanico3.jpg" class="icono-marca" />
                <p class="nombre">Manuel</p>
                <p class="especialidad">Experto en motores</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-12 d-flex justify-content-center align-items-center"
        >
          <h1 class="titulo-marcas text-center">
            También reparamos vehículos en nuestro taller con nuestros mecánicos
            especializados
          </h1>
        </div>
      </div>
    </div>
  </div>







  <div class="contacto">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center titulo-marcas">No dudes en contactarnos</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 col-6 p-4">
          <div
            class="interior d-flex justify-content-start align-items-center flex-column p-3"
          >
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="icono-contacto"
            />
            <h1>Valladolid</h1>
          </div>
        </div>

        <div class="col-md-3 col-6 p-4">
          <div
            class="interior d-flex justify-content-start align-items-center flex-column p-3"
          >
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="icono-contacto"
            />
            <h1 class="text-center">Hypercars@<br />gmail.com</h1>
          </div>
        </div>

        <div class="col-md-3 col-6 p-4">
          <div
            class="interior d-flex justify-content-start align-items-center flex-column p-3"
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="icono-contacto"
            />
            <h1>@Hypercars</h1>
          </div>
        </div>

        <div class="col-md-3 col-6 p-4">
          <div
            class="interior d-flex justify-content-start align-items-center flex-column p-3"
          >
            <font-awesome-icon
              icon="fa-solid fa-phone"
              class="icono-contacto"
            />
            <h1>654854745</h1>
          </div>
        </div>
      </div>
    </div>
  </div>







  <div class="exterior-empleado">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center titulo-empleado">¿Eres empleado?</h1>
        </div>
      </div>

      <div class="row fila-botones">
        <div class="col-md-6 col-12 d-flex justify-content-center col-boton">
          <div>
            <button class="boton-blanco">
              <a href="/identificacion" class="enlace-normal">Identificación</a>
            </button>
          </div>
        </div>

        <div class="col-md-6 col-12 d-flex justify-content-center col-boton">
          <div>
            <button class="boton-blanco">
              <a href="/registro" class="enlace-normal">Registro</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--container-->
  </div>








  <div class="footer mt-5 pb-5">
    <div class="container">
      <div class="row">
        <div
          class="col d-flex flex-column justify-content-center align-items-center"
        >
          <h1>José María Lozano Olmedo &copy;</h1>
          <h1>All rights reserved</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");

* {
  font-family: "Orelega One", cursive;
}
.icono {
  width: 500px;
  object-fit: cover;
}

.exterior-principal {
  background-color: #020045;
  padding-top: 150px;
  padding-bottom: 150px;
}

.exterior-empleado {
  background-color: #020045;
  color: white;
  padding-top: 150px;
  padding-bottom: 150px;
}

.enlace-normal {
  text-decoration: none;
  color: black;
}

.boton-blanco {
  background-color: white;
  color: #020045;
  font-size: 50px;
  border-radius: 10px;
  text-decoration: none;
  padding: 20px;
}
.boton-blanco:hover {
  transform: scale(1.05);
  background-color: #b6c6fc;
  font-weight: bold;
  cursor: pointer;
  cursor: pointer;
}

.col-boton {
  margin-top: 50px;
}

video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  object-fit: cover;
}

.contacto {
  background-color: #020045;
  padding-top: 150px;
  padding-bottom: 150px;
}

.interior {
  background-color: white;
  border-radius: 10px;
  height: 100%;
}

.capa {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #0200459a;
  width: 100%;
  padding-top: 300px;
  padding-bottom: 300px;
}

.icono-marca {
  width: 190px;
  object-fit: cover;
  height: 190px;
}

.marcas {
  background-color: #020045;
  padding-top: 100px;
  padding-bottom: 100px;
}
.col-mecanico {
  background-color: white;
  border-radius: 10px;
}

.titulo-empleado {
  font-size: 60px;
}

.icono-contacto {
  font-size: 90px;
}

.titulo-marcas {
  color: white;
  font-size: 80px;
}

.col-icono-marca {
  background-color: white;
}

.titulo {
  color: white;
  font-size: 50px;
}

.ninguno {
  color: white;
}

.titulo-grande {
  color: white;
  font-size: 80px;
}

.titulo-grande-arriba {
  color: white;
  font-size: 80px;
}

.nombre {
  font-weight: bold;
  font-size: 30px;
}

.especialidad {
  font-style: italic;
  font-size: 20px;
}

.exterior-segunda-seccion {
  background-color: #020045;
  margin-top: 500px;
  padding-top: 200px;
}
</style>

<script lang="ts">
import { CocheVenta } from "@/interfaces/CocheVenta";
import { getCochesVenta } from "@/services/CocheVentaService";
import { defineComponent } from "vue";
import cartaCocheVenta from "./cartas/cartaCocheVenta.vue";

export default defineComponent({
  components: { cartaCocheVenta },
  name: "principal",
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