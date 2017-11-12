<template lang="html">
  <input
   name= 'search'
   type= 'text'
   placehoder= 'write and user!'
   class= 'search'
   v-model = 'criteria'
  />

</template>

<script>
  export default{
    name: 'CoSearch',
    data () {
      return {
        criteria: ''
      }
    },
    watch: {
      criteria () {
        this.$emit('search', this.criteria)
      }
    }
  }
</script>

<style lang='css'>

</style>
