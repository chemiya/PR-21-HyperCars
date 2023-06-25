<template>
  <div class="exterior">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-12 formulario p-3">
          <h1 v-if="accion == 'Crear coche'" class="text-center">
            Guardar coche en taller
          </h1>
          <h1 v-else class="text-center">Editar coche en taller</h1>
          <form @submit.prevent="saveCocheTaller()">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="v$.form.marca.$model"
                    class="form-control"
                    placeholder="Marca"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.marca.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      La marca es obligatoria
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="v$.form.modelo.$model"
                    class="form-control"
                    placeholder="Modelo"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.modelo.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      El modelo es obligatorio
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="v$.form.matricula.$model"
                    class="form-control"
                    placeholder="Matrícula"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.matricula.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      La matrícula es obligatoria
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div class="d-flex">
                    <input
                      type="number"
                      v-model="v$.form.precio.$model"
                      class="form-control"
                      placeholder="Precio"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">€</span>
                    </div>
                  </div>
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.precio.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      El precio es obligatorio
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="v$.form.propietario.$model"
                    class="form-control"
                    placeholder="Propietario"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.propietario.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      El propietario es obligatorio
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <textarea
                    v-model="v$.form.incidencia.$model"
                    class="form-control"
                    placeholder="Incidencia"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.incidencia.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      La incidencia es obligatoria
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <textarea
                    v-model="v$.form.comentarios.$model"
                    class="form-control"
                    placeholder="Comentarios"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.comentarios.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      Los comentarios son obligatorios
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" v-if="accion == 'Editar coche'">
              <div class="col-12 mb-3">
                <select class="form-select" v-model="estadoTaller">
                  <option value="Pendiente">Pendiente</option>
                  <option value="Reparando">Reparando</option>
                  <option value="Listo">Listo</option>
                </select>
              </div>
            </div>

            <div class="row" v-if="accion == 'Editar coche'">
              <div class="col-12 mb-3">
                <p class="foto-titulo">Foto actual</p>
                <img :src="fotoActual" class="imagen-coche" />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <input
                    type="file"
                    @change="onAddFiles($event)"
                    class="form-control"
                  />
                </div>
              </div>
              <p class="error" v-if="avisoFoto">Por favor añade una imagen</p>
            </div>

            <div class="d-flex justify-content-center mt-2" v-if="!cargador">
              <button
                v-if="accion == 'Crear coche'"
                type="submit"
                class="boton-azul"
                :disabled="v$.form.$invalid"
              >
                Guardar
              </button>
              <button
                v-else
                :disabled="v$.form.$invalid"
                type="submit"
                class="boton-azul"
              >
                Editar
              </button>
            </div>

            <div
              class="d-flex justify-content-center align-items-center flex-column"
              v-if="cargador"
            >
              <div class="spinner-border" role="status"></div>
              <p>Guardando...</p>
            </div>
          </form>
        </div>
        <!--col-->
      </div>
      <!--row-->
    </div>
    <!--container-->
  </div>
  <!--exterior-->
</template>

<style scoped>
.exterior {
  background-color: #020045;
  padding-top: 150px;
  padding-bottom: 150px;
}
input,
textarea,
.input-group-text {
  font-size: 25px;
}
.boton-azul {
  background-color: #020045;
  color: white;
  font-size: 30px;
  border-radius: 10px;
}

.formulario {
  background-color: white;
  border-radius: 10px;
}
.imagen-coche {
  width: 250px;
  object-fit: cover;
}
.foto-titulo {
  font-size: 30px;
  font-weight: bold;
}
@import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");

* {
  font-family: "Orelega One", cursive;
}

.boton-azul:hover {
  transform: scale(1.05);
  background-color: white;
  color: #020045;
  font-weight: bold;
  border: 3px solid #020045;
  cursor: pointer;
}
.error {
  color: red;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { CocheTaller } from "@/interfaces/CocheTaller";
import {
  createCocheTaller,
  updateCocheTaller,
} from "@/services/CocheTallerService";
import {
  deleteCocheTaller,
  getCocheTaller,
} from "@/services/CocheTallerService";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default defineComponent({
  name: "crear-coches-venta",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      cocheTaller: {} as CocheTaller, //variable como elemento
      accion: "Crear coche",
      files: "",
      avisoFoto: false,
      cargador: false,
      estadoTaller: "",
      fotoActual: "",
      form: {
        marca: "",
        modelo: "",
        incidencia: "",
        comentarios: "",
        propietario: "",
        matricula: "",
        precio: "",
      },
    };
  },
  methods: {
    onAddFiles(event: any) {
      console.log("anadida");
      this.files = event.target.files[0];
    },
    async uploadFileToCloudinary(file: any, coche: CocheTaller, idCoche: any) {
      return new Promise(function (resolve, reject) {
        console.log("subo");
        //Ideally these to lines would be in a .env file
        const CLOUDINARY_URL =
          "https://api.cloudinary.com/v1_1/dg8yqncy0/upload";
        const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET";

        let formData = new FormData();
        formData.append("upload_preset", "evgd7cws");
        formData.append("folder", "cloudinary-demo");
        formData.append("file", file);

        let request = new XMLHttpRequest();
        request.open("POST", CLOUDINARY_URL, true);
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        var envio = "";

        request.onreadystatechange = () => {
          // File uploaded successfully
          if (request.readyState === 4 && request.status === 200) {
            let response = JSON.parse(request.responseText);
            console.log("correcto");
            console.log(response.secure_url);
            envio = response.secure_url;
            coche.url = envio;
            setTimeout(() => {
              updateCocheTaller(idCoche, coche);
            }, 1000);
          }

          // Not successfull, let find our what happened
          if (request.status !== 200) {
            let response = JSON.parse(request.responseText);
            console.log(response);
          }
        };

        request.send(formData);
      });
    },
    async saveCocheTaller() {
      const $toast = useToast();

      if (this.files == "" && this.accion == "Crear coche") {
        this.avisoFoto = true;
      } else {
        this.cargador = true;
        try {
          this.cocheTaller.estadoTaller = "Pendiente";
          var fecha = new Date();
          var agno = fecha.getFullYear();
          var mes = fecha.getMonth() + 1;
          var dia = fecha.getDate();
          this.cocheTaller.fechaLlegada = dia + "/" + mes + "/" + agno;

          this.cocheTaller.marca = this.form.marca;
          this.cocheTaller.modelo = this.form.modelo;
          this.cocheTaller.precio = Number(this.form.precio);
          this.cocheTaller.comentarios = this.form.comentarios;
          this.cocheTaller.incidencia = this.form.incidencia;
          this.cocheTaller.propietario = this.form.propietario;
          this.cocheTaller.matricula = this.form.matricula;

          if (this.accion == "Crear coche") {
            const res = await createCocheTaller(this.cocheTaller); //sevicio llamo para que lo guarde y voy a la ruta
            console.log(res);
            var cocheEnvio: CocheTaller = res.data;
            this.uploadFileToCloudinary(
              this.files,
              cocheEnvio,
              res.data._id
            ).then((fileResponse) => {
              console.log(fileResponse);
            });

            setTimeout(() => {
              this.$router.push({ name: "coches-taller" }).then((exito) => {
                $toast.success("Coche guardado", {
                  position: "top-right",
                  duration: 4000,
                });
              });
            }, 4000);
          } else {
            if (typeof this.$route.params.id === "string") {
              this.cocheTaller.estadoTaller = this.estadoTaller;

              if (this.files != "") {
                this.uploadFileToCloudinary(
                  this.files,
                  this.cocheTaller,
                  this.$route.params.id
                ).then((fileResponse) => {
                  console.log(fileResponse);
                });
              }

              const res = await updateCocheTaller(
                this.$route.params.id,
                this.cocheTaller
              ); //sevicio llamo para que lo guarde y voy a la ruta
              console.log(res);

              setTimeout(() => {
                this.$router.push({ name: "coches-taller" }).then((exito) => {
                  $toast.success("Coche actualizado", {
                    position: "top-right",
                    duration: 4000,
                  });
                });
              }, 4000);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    async buscarCocheTaller(id: string) {
      //cargo la tarea
      try {
        const { data } = await getCocheTaller(id); //llamo al servicio y la asigno
        this.cocheTaller = data;
        console.log(data);
        this.estadoTaller = this.cocheTaller.estadoTaller;
        this.form.matricula = this.cocheTaller.matricula;
        this.form.marca = this.cocheTaller.marca;
        this.form.modelo = this.cocheTaller.modelo;
        this.form.precio = String(this.cocheTaller.precio);
        this.form.comentarios = this.cocheTaller.comentarios;
        this.form.incidencia = this.cocheTaller.incidencia;
        this.form.propietario = this.cocheTaller.propietario;
        this.fotoActual = this.cocheTaller.url;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    //al inicial cargo la tarea
    if (typeof this.$route.params.id === "string") {
      this.buscarCocheTaller(this.$route.params.id);
      this.accion = "Editar coche";
    }
    console.log(this.accion);
  },
  validations() {
    return {
      form: {
        marca: {
          required,
        },
        modelo: {
          required,
        },
        matricula: {
          required,
        },
        comentarios: {
          required,
        },
        incidencia: {
          required,
        },
        propietario: {
          required,
        },
        precio: {
          required,
        },
      },
    };
  },
});
</script>