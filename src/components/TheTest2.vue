<template>
  <div>TEST</div>
  <button @click="page = 2">page 2</button>
</template>

<script setup>
import { getD } from '@/service/api';
import { ref } from 'vue';
import { useQuery } from 'vue-query';

const page = ref(1)
useQuery({
  queryKey: ['query', page],
  queryFn: getD
})
</script>
