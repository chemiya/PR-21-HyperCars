<template>
<router-link to="/crear">Crear</router-link>
    <div>
        <h1>Lista</h1>
        <div v-for="empleado in empleados" :key="empleado.id">
            <div>{{empleado.id}}</div>
             <div>{{empleado.nombre}}</div>
              <div>{{empleado.correo}}</div>
               
                <router-link :to="{name:'editar',params:{id:empleado.id}}" class="btn btn-warning" >Editar</router-link>
                <button class="btn btn-success" v-on:click="borrarEmpleado(empleado.id)">Borrar</button>
                

            </div>

           



    </div>
</template>

<script>


export default{
    data(){
        return{
            empleados:[]
        }
    },
    created:function(){
        this.consultarEmpleados();
    },
    methods:{
        consultarEmpleados(){
            fetch("http://localhost/php/vue/empleados-main/")
            .then(respuesta=>respuesta.json())
            .then((datosrespuesta)=>{
                console.log(datosrespuesta)
                this.empleados=[]
                if(typeof datosrespuesta[0].success=="undefined"){
                    this.empleados=datosrespuesta;
                }

            })
        },
        borrarEmpleado(id){
            fetch("http://localhost/php/vue/empleados-main/?borrar="+id)
            .then(respuesta=>respuesta.json())
            .then((datosrespuesta)=>{
                console.log(datosrespuesta)
                //window.location.href="listar"
                this.consultarEmpleados()
            })
        }
    }
}
</script>