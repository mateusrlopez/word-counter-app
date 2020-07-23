<template>
  <div class="w-100 mt-5 d-flex justify-content-center">
    <table class="table table-bordered w-75">
      <thead class="thead-dark text-center">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Word</th>
          <th scope="col">Count</th>
          <th scope="col">Synonyms</th>
        </tr>
      </thead>

      <tbody class="text-center">
        <WordCounterTableItem v-for="(item, index) in items" :key="item.word" :id="index" :item="item"/>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    components: {
        WordCounterTableItem: () => import('@/components/WordCounterTableItem.vue') 
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>