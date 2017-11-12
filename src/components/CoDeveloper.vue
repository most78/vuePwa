<template lang="html">

</template>

<script>
  export default {
    name: 'CoDeveloper',
    props: {
      avatar: {
        type: String,
        required: true,
        validator (value {
          return value.starsWith('http')
        })
        name: {
          type: String,
          required : true,
        },
        login: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: false,
        },
        repos: {
          type: Number,
        },
        gists: {
          type: Number,
        },
      }
    },
    computed: {
      metadata () {
        let meta = ''

        if(this.email) {
          meta = `${meta} ${this.email}`
        }
        if(this.location) {
          meta = `${meta} ${this.location}`
        }
        if(this.company) {
          meta = `${meta} ${this.company}`
        }

        return meta
      }
    },
    watch: {
      metadata (newValue) {
        console.log('Metadata: ', newValue)
      }
    }
  }
</script>

<style lang='css'>

</style>
