<template>
  <div class="exterior">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5"
        >
          <img :src="currentCocheTaller.url" class="imagen-coche" />
        </div>

        <div class="col-12 col-md-6 datos p-3 mt-5">
          <div class="row">
            <div class="col">
              <h1 class="text-center titulo">
                {{ currentCocheTaller.marca }} {{ currentCocheTaller.modelo }}
              </h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-6 d-flex flex-column justify-content-start align-items-center"
            >
              <p>Matrícula</p>
              <h1>{{ currentCocheTaller.matricula }}</h1>
            </div>

            <div
              class="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Propietario</p>
              <h1 class="text-center">{{ currentCocheTaller.propietario }}</h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Estado</p>
              <h1>{{ currentCocheTaller.estadoTaller }}</h1>
            </div>

            <div
              class="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Fecha de llegada</p>
              <h1>{{ currentCocheTaller.fechaLlegada }}</h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Incidencia</p>
              <h1>{{ currentCocheTaller.incidencia }}</h1>
            </div>
          </div>

          <div class="row mt-5">
            <div
              class="col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <p>Comentarios</p>
              <h1>{{ currentCocheTaller.comentarios }}</h1>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-6 d-flex justify-content-center align-items-center">
              <button
                class="boton-azul"
                @click="
                  this.$router.push(
                    `/crearCocheTaller/${currentCocheTaller._id}`
                  )
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
@import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");

* {
  font-family: "Orelega One", cursive;
}
.boton-azul:hover{
  transform: scale(1.05);
  background-color: white;
  color:#020045;
  font-weight:bold;
  border:3px solid #020045;
  cursor:pointer;
}
.datos {
  background-color: white;
  border-radius: 10px;
}
.titulo {
  font-size: 50px;
}
.precio {
  font-size: 50px;
}
</style>

<script lang="ts">
import { CocheTaller } from "@/interfaces/CocheTaller";
import {
  deleteCocheTaller,
  getCocheTaller,
} from "@/services/CocheTallerService";
import { defineComponent } from "vue";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
export default defineComponent({
  name: "detalle-coche-taller",
  data() {
    return {
      currentCocheTaller: {} as CocheTaller, //variable como elemento
    };
  },
  methods: {
    async loadCocheTaller(id: string) {
      //cargo la tarea
      try {
        const { data } = await getCocheTaller(id); //llamo al servicio y la asigno
        this.currentCocheTaller = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },

    async handleDelete() {
      const $toast = useToast();
      /*$toast.success('Coche eliminado', {
    
    position: 'top-right',
    duration:4000
})*/
      try {
        if (typeof this.$route.params.id === "string") {
          //cojo el parametro, y elimino y a la ruta
          deleteCocheTaller(this.$route.params.id);
          setTimeout(() => {
            this.$router.push("/cochesTaller").then(exito=>{
              $toast.success('Coche eliminado', {
    
    position: 'top-right',
    duration:4000
})
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