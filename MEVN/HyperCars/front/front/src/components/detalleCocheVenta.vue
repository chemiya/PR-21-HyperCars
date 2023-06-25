<template>
  <div class="exterior">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5"
        >
          <img :src="currentCocheVenta.url" class="imagen-coche" />
        </div>

        <div class="col-12 col-md-6 datos p-3 mt-5">
          <div class="row">
            <div class="col">
              <h1 class="text-center titulo">
                {{ currentCocheVenta.marca }} {{ currentCocheVenta.modelo }}
              </h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-4 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Caballos</p>
              <h1>{{ currentCocheVenta.caballos }} cv</h1>
            </div>

            <div
              class="col-4 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Año</p>
              <h1>{{ currentCocheVenta.agno }}</h1>
            </div>

            <div
              class="col-4 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Fecha de publicación</p>
              <h1>{{ currentCocheVenta.fechaPublicacion }}</h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Estado</p>
              <h1>{{ currentCocheVenta.estadoVenta }}</h1>
            </div>

            <div
              class="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Matrícula</p>
              <h1>{{ currentCocheVenta.matricula }}</h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-12 d-flex justify-content-center align-items-center"
            >
              <h1 class="precio">{{ currentCocheVenta.precio }} €</h1>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <button
                class="boton-azul"
                @click="
                  this.$router.push(`/crearCocheVenta/${currentCocheVenta._id}`)
                "
              >
                Editar
              </button>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <button class="boton-azul" @click="handleDelete()">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imagen-coche {
  width: 400px;
  object-fit: cover;
}
.exterior {
  background-color: #020045;
  padding-top: 100px;
  padding-bottom: 100px;
}
.boton-azul {
  background-color: #020045;
  color: white;
  font-size: 30px;
  border-radius: 10px;
}
.datos {
  background-color: white;
  border-radius: 10px;
}
.boton-azul:hover {
  transform: scale(1.05);
  background-color: white;
  color: #020045;
  font-weight: bold;
  border: 3px solid #020045;
  cursor: pointer;
}
@import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");

* {
  font-family: "Orelega One", cursive;
}
.titulo {
  font-size: 50px;
}
.precio {
  font-size: 50px;
}
</style>

<script lang="ts">
import { CocheVenta } from "@/interfaces/CocheVenta";
import { deleteCocheVenta, getCocheVenta } from "@/services/CocheVentaService";
import { defineComponent } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
export default defineComponent({
  name: "detalle-coche-venta",
  data() {
    return {
      currentCocheVenta: {} as CocheVenta, //variable como elemento
    };
  },
  methods: {
    async loadCocheTaller(id: string) {
      //cargo la tarea
      try {
        const { data } = await getCocheVenta(id); //llamo al servicio y la asigno
        this.currentCocheVenta = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },

    async handleDelete() {
      const $toast = useToast();
      try {
        if (typeof this.$route.params.id === "string") {
          //cojo el parametro, y elimino y a la ruta
          deleteCocheVenta(this.$route.params.id);
          setTimeout(() => {
            this.$router.push("/cochesVenta").then((exito) => {
              $toast.success("Coche eliminado", {
                position: "top-right",
                duration: 4000,
              });
            });
          }, 500);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    //al inicial cargo la tarea
    if (typeof this.$route.params.id === "string") {
      this.loadCocheTaller(this.$route.params.id);
    }
  },
});
</script>