<template>
  <div class="exterior">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-12 formulario p-5">
          <h1 class="text-center titulo-arriba">Registro de empleados</h1>




          
          <form @submit.prevent="saveEmpleado()">

            <div class="row mt-5">






              <div class="col">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="v$.form.username.$model"
                    class="form-control"
                    placeholder="Username"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.username.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      El username es obligatorio
                    </div>
                  </div>
                </div>
              </div>







              <div class="col">
                <div class="mb-3">
                  <input
                    type="password"
                    v-model="v$.form.password.$model"
                    class="form-control"
                    placeholder="Contraseña"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.password.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="error.$message == 'Value is required'"
                    >
                      La contraseña es obligatoria
                    </div>
                  </div>
                </div>
              </div>
            </div>






            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <input
                    type="email"
                    v-model="v$.form.email.$model"
                    class="form-control"
                    placeholder="Email"
                  />
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.email.$errors"
                    :key="index"
                  >
                    <div class="error">Debe ser en formato de email</div>
                  </div>
                </div>
              </div>






              <div class="col">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="v$.form.idEmpleado.$model"
                    class="form-control"
                    placeholder="Id empleado"
                  />

                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.idEmpleado.$errors"
                    :key="index"
                  >
                    <div
                      class="error"
                      v-if="
                        error.$message == 'Value is required' ||
                        error.$message == 'The maximum length allowed is 7' ||
                        error.$message ==
                          'This field should be at least 7 characters long'
                      "
                    >
                      Este campo debe tener 7 caracteres
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div class="div-boton d-flex justify-content-center p-2">
              <button
                :disabled="v$.form.$invalid"
                type="submit"
                class="boton-azul"
              >
                Registrarse
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
  padding-top: 180px;
  padding-bottom: 180px;
}
.formulario {
  background-color: white;
  border-radius: 10px;
}
.error {
  color: red;
}
.boton-azul:hover {
  transform: scale(1.05);
  background-color: white;
  color: #020045;
  font-weight: bold;
  border: 3px solid #020045;
  cursor: pointer;
}

.titulo-arriba {
  font-size: 50px;
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
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Empleado } from "./../interfaces/Empleado";
import { createEmpleado } from "./../services/EmpleadoService";
import useVuelidate from "@vuelidate/core";
import "vue-toast-notification/dist/theme-sugar.css";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { useToast } from "vue-toast-notification";
export default defineComponent({
  name: "registro",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      empleado: {} as Empleado, //variable como elemento
      form: {
        username: "",
        password: "",
        email: "",
        idEmpleado: "",
      },
    };
  },
  methods: {
    async saveEmpleado() {
      const $toast = useToast();
      this.empleado.username = this.form.username;
      this.empleado.password = this.form.password;
      this.empleado.email = this.form.email;
      this.empleado.idEmpleado = this.form.idEmpleado;

      try {
        const res = await createEmpleado(this.empleado); //sevicio llamo para que lo guarde y voy a la ruta
        console.log(res);
        this.$router.push({ name: "principal" }).then((exito) => {
          $toast.success("Te has registrado con éxito", {
            position: "top-right",
            duration: 4000,
          });
        });
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
        email: {
          email,
          required,
        },
        idEmpleado: {
          required,
          min: minLength(7),
          max: maxLength(7),
        },
      },
    };
  },
});
</script>