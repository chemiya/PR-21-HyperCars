<template>
  
    <div class="interior d-flex justify-content-center align-items-center flex-column p-3">
      <img :src="propsCoche.url" class="imagen-coche" />
      <h3 class="mt-2">{{propsCoche.marca}}</h3>
      <h3>{{propsCoche.modelo}}</h3>
      <h3>{{propsCoche.precio}}€</h3>
      
    </div>
  
</template>


<style scoped>
.imagen-coche {
  width: 250px;
  height:250px;
  object-fit: cover;
}
.interior{
    background-color: white;
    border-radius:10px;
    cursor: pointer;
}
.interior:hover{
  transform: scale(1.05);
  background-color:#B6C6FC;
  color:white;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import {CocheVenta} from "./../../interfaces/CocheVenta";

export default defineComponent({
  name: "carta-coche-venta",
    props: {
           propsCoche: {
               type: Object,
               default: () => ({}),
           }
       }
     
}); //barra de arriba
</script>