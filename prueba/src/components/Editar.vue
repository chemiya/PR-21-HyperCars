<template>
    <div>
        <div>
        <form v-on:submit.prevent="actualizarRegistro">
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


    </div>
</template>

<script>


export default{
    data(){
        return{
            empleado:{}
        }
    },
       created:function(){
        this.consultarEmpleado();
    },
     methods:{
        consultarEmpleado(){
            fetch("http://localhost/php/vue/empleados-main/?consultar="+this.$route.params.id)
            .then(respuesta=>respuesta.json())
            .then((datosrespuesta)=>{
                console.log(datosrespuesta)
                this.empleado=datosrespuesta[0];

            })
        },
        actualizarRegistro(){
             var datos={id:this.$route.params.id,nombre:this.empleado.nombre,correo:this.empleado.correo}
            fetch("http://localhost/php/vue/empleados-main/?actualizar="+this.$route.params.id,{
                method:"POST",
                body:JSON.stringify(datos)
            })
            .then(respuesta=>respuesta.json())
            .then((datosrespuesta)=>{
                console.log(datosrespuesta)
                window.location.href="../listar"

            })
        }

        
      
     
    }
}
</script>