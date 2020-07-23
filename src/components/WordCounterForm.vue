<template>
  <div>
    <form @submit.prevent="submitText">
      <div class="form-group">
        <textarea v-model.lazy.trim="text" placeholder="Enter any text for the word count"  :class="{'form-control': true, 'is-invalid':emptyText}" cols="128" rows="16" />
        <span class="invalid-feedback" v-if="emptyText">This field is required</span>
      </div>

      <button class="btn btn-secondary mr-2" type="submit">Count</button>
      <button class="btn btn-secondary mr-2" @click="loadSample" type="button">Load Sample</button>
      <button class="btn btn-danger" @click="reset" type="button">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        text: '',
        emptyText: false
      }
    },
    methods: {
      submitText() {
        if(this.text === '') {
          this.emptyText = true  
        } else {
          this.emptyText = false
          this.$emit('submit', this.text)
        }
      },
      loadSample() {
        this.text =  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet reiciendis minima, eligendi recusandae dolore eius ab quibusdam doloremque! Veritatis neque perferendis porro quaerat quam beatae pariatur praesentium a distinctio placeat architecto illo aliquid ipsa nesciunt iure, laudantium, amet fugit corporis? Consectetur, amet. Iste aliquam repellendus, provident totam numquam ea reiciendis nihil maxime nam eveniet repudiandae, rem suscipit quod eum debitis hic inventore consequatur tempora magni error expedita ab! Enim tenetur reiciendis soluta aliquam sint odio praesentium eius, autem beatae, fugiat pariatur, vero error repellendus? Dolore?'
      },
      reset() {
        this.text = ''
        this.$emit('reset')
      }
    }
}
</script>