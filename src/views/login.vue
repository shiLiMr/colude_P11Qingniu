<template>
  <div>login</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {testApi} from '@/api/test'

testApi().then(res=>{
  console.log(res);

})

</script>
<style lang="scss" scoped></style>
