<template>
  <tr>
        <td>{{ medicine.name }}</td>
        <td>{{ medicine.startDate | formatDate }}  {{medicine.endDate? " - " : "" }}  {{medicine.endDate | formatDate }}</td>
        <td><a v-on:click="showDescription">Zie beschrijving</a></td>
        <td><span class="glyphicon glyphicon-remove pull-right" v-on:click="removeMedicine"></span></td>
  </tr>
</template>

<script>
  export default {
    props: [
      'medicine'
    ],
    methods: {
        showDescription(){
              this.$emit('showDescription', this.medicine)
        },
        removeMedicine(){
            this.$emit('removeMedicine', this.medicine)
        }  
    }
    
  }
</script>

