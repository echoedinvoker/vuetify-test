<template>
  <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items-length="data ? data.total : 0"
    :items="data ? data.items : []" :loading="isLoading" :search="search" class="elevation-1" item-value="name"
    @update:options="loadItems"></v-data-table-server>
  <button @click="page = 2">page</button>
</template>

<script setup>
import { useQuery } from 'vue-query'
import { getData } from '@/service/api'
import { ref } from 'vue';
import { VDataTableServer } from 'vuetify/lib/labs/components.mjs';
import { toRef } from 'vue';

const itemsPerPage = ref(5)
const headers = ref([
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'Calories', key: 'calories', align: 'end' },
  { title: 'Fat (g)', key: 'fat', align: 'end' },
  { title: 'Carbs (g)', key: 'carbs', align: 'end' },
  { title: 'Protein (g)', key: 'protein', align: 'end' },
  { title: 'Iron (%)', key: 'iron', align: 'end' },
])

const search = ref('')
const page = ref(1)


const { isLoading, data } = useQuery({
  queryKey: [`data`, page ],
  queryFn: getData,
})


function handlePage() {
  page.value = 2
}

// function loadItems({ page: newPage, itemsPerPage: newItemsPerPage }) {
//   page.value = newPage
//   itemsPerPage.value = newItemsPerPage
// }

function loadItems(e) {
  console.log(e)
}


</script>

