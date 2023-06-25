<template>
  <div class="exterior">
    <div class="container">
      <div
        class="row d-flex flex-row-reverse justify-content-center align-items-center"
      >
        <div class="col-md-6 col-12 d-flex justify-content-center">
          <img src="./../assets/icono.png" class="icono" />
        </div>
        <div class="col-md-6 col-12 formulario p-5 mt-2">
          <h1 class="text-center titulo-arriba">Identifícate</h1>




          <form @submit.prevent="identificarEmpleado()">




            <div class="mb-3">
              <label class="form-label">Username</label>
              <input
                type="text"
                v-model="v$.form.username.$model"
                class="form-control"
              />
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.username.$errors"
                :key="index"
              >
                <div class="error" v-if="error.$message == 'Value is required'">
                  El username es obligatorio
                </div>
              </div>
            </div>






            <div class="mb-3">
              <label class="form-label">Contraseña</label>
              <input
                type="password"
                v-model="v$.form.password.$model"
                class="form-control"
              />

              <div
                class="input-errors"
                v-for="(error, index) of v$.form.password.$errors"
                :key="index"
              >
                <div class="error" v-if="error.$message == 'Value is required'">
                  La contraseña es obligatoria
                </div>
              </div>
            </div>




            <div
              class="d-flex justify-content-center p-2"
              v-if="avisoIncorrecto"
            >
              <p class="error text-center">Usuario y contraseña incorrectos</p>
            </div>





            <div class="div-boton d-flex justify-content-center p-2">
              <button
                :disabled="v$.form.$invalid"
                type="submit"
                class="boton-azul"
              >
                Identificarse
              </button>
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
  padding-top: 160px;
  padding-bottom: 160px;
}

.icono {
  width: 500px;
  object-fit: cover;
}

.boton-azul {
  background-color: #020045;
  color: white;
  font-size: 30px;
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

.formulario {
  background-color: white;
  border-radius: 10px;
}
.titulo-arriba {
  font-size: 50px;
}

@import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");

* {
  font-family: "Orelega One", cursive;
}

.error {
  color: red;
}
</style>

<script lang="ts">
import { Empleado } from "@/interfaces/Empleado";
import { identificarEmpleado } from "@/services/EmpleadoService";
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default defineComponent({
  name: "identificacion",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      empleado: {} as Empleado, //variable como elemento
      form: {
        username: "",
        password: "",
      },
      avisoIncorrecto: false,
    };
  },
  methods: {
    async identificarEmpleado() {
      this.empleado.username = this.form.username;
      this.empleado.password = this.form.password;

      try {
        const res = await identificarEmpleado(this.empleado); //sevicio llamo para que lo guarde y voy a la ruta
        if (res.data.length > 0) {
          this.$router.push({ name: "coches-venta" });
        } else {
          this.avisoIncorrecto = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  validations() {
    return {
      form: {
        username: {
          required,
        },
        password: {
          required,
        },
      },
    };
  },
});
</script>