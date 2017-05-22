<template>
  <ul>
    <li><router-link to="patients">Patients</router-link></li> |
    <li><router-link to="patientsInfo">patientsInfo</router-link></li> | 
    <li><router-link to="patients">Patients</router-link></li> 
  </ul>
</template>

<style scoped>
  a {
    color: rgb(50, 174, 110);
    text-decoration: none;
  }

  a:hover {
    color: rgb(40, 56, 76);
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li { display: inline-block; }
</style>
