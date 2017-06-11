<template>
  <tr>
    <td>{{bsn}}</td>
    <td>{{getFullName()}}</td>
    <td><router-link class="btn btn-default" :to="{ name: 'healthCareProfessionalInfo', params: { bsn: bsn }}">Bewerk</router-link></td>
  </tr>
</template>

<script>
  export default {
      props: {
          bsn: {
              type: String,
              required: true
          },
          firstName: {
              type: String,
              required: true
          },
          lastName: {
              type: String,
              required: true,
          },
          namePrefix: {
              type: String,
              required: true
          }
      },
      methods : {
          getFullName(){
              let name = this.firstName;

              if(this.namePrefix){
                  name += " " + this.namePrefix;
              }

              name += " " + this.lastName;

              return name;
          }
      }
  }
</script>

<style scoped>
</style>
