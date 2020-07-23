<template>
    <tr class="bg-white">
        <th scope="row">{{ localItem.id }}</th>
        <td>{{ localItem.word }}</td>
        <td>{{ localItem.count }}</td>
        <td>{{ localItem.synonyms }}</td>
    </tr>
</template>

<script>
import api from '@/services/api'

export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    data() {
      return {
        synonyms: ''
      }
    },
    computed: {
        localItem() {
            return Object.assign({}, {id: this.id + 1}, this.item, {synonyms: this.synonyms})
        }
    },
    methods: {
      async findSynonyms() {
        if(this.localItem.count >= 3) {
          try {
            const response = await api.get(`?ml=${this.localItem.word}`)
            this.synonyms = response.data.filter(item => item.tags.includes('syn')).map(item => item.word).join(', ')
          } catch(error) {
            this.synonyms = 'Wasn\'t able to retrieve the synonyms'
          }
        }
      }
    },
    created() {
      this.findSynonyms()
    },
    updated() {
      this.findSynonyms()
    }
}
</script>