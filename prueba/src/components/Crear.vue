<template>
    <div>
        <form v-on:submit.prevent="agregarRegistro">
  <div class="form-group">
    <label for="exampleInputEmail1">Nombre</label>
    <input type="text" class="form-control" v-model="empleado.nombre" id="exampleInputEmail1" name="nombre">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Correo</label>
    <input type="email" class="form-control" v-model="empleado.correo" id="exampleInputPassword1" name="correo">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <router-link :to="{name:'listar'}" class="btn btn-warning">Cancelar</router-link>
</form>


    </div>
</template>

<script>


export default{
     data(){
        return{
            empleado:{}
        }
    },
    methods:{
        agregarRegistro(){
            var datos={nombre:this.empleado.nombre,correo:this.empleado.correo}
            fetch("http://localhost/php/vue/empleados-main/?insertar=1",{
                method:"POST",
                body:JSON.stringify(datos)
            })
            .then(respuesta=>respuesta.json())
            .then((datosrespuesta)=>{
                console.log(datosrespuesta)
                window.location.href="listar"

            })
        }
    }
}
</script>
