<template>
  <div class="container d-flex flex-column justify-content-center align-items-center h-100">
    <Header />
    <WordCounterForm @submit="countWords" @reset="reset"/>
    <WordCounterTable v-if="sortedWordsCounterArray.length > 0" :items="sortedWordsCounterArray"/>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/TheHeader.vue'),
    WordCounterForm: () => import('@/components/WordCounterForm.vue'),
    WordCounterTable: () => import('@/components/WordCounterTable.vue')
  },
  data() {
    return {
      wordsCounterArray: []
    }
  },
  methods: {
    countWords(event) {
      const words = event.match(new RegExp(/([\wçáàãâéêóõôúíñ]+)/, 'gi')).map(value => value.toLowerCase())
      const uniqueWords = words.filter((value, index, array) => array.indexOf(value) === index)
      this.wordsCounterArray = uniqueWords.map(value => ({word: value, count: words.filter(subValue => value === subValue).length}))
    },
    reset() {
      this.wordsCounterArray.splice(0, this.wordsCounterArray.length);
    }
  },
  computed: {
    sortedWordsCounterArray() {
      return this.wordsCounterArray.slice().sort((word1, word2) => {
        if(word1.count === word2.count) return -(word2.word > word1.word)
        return word2.count - word1.count
      })
    }
  }
}
</script>