<template>
  <tr>
    <td>{{}} bsn komt hier</td>
    <td>{{name}}</td>
    <td><router-link class="btn btn-default" to="/patientsInfo"> Bewerk {{name}}</router-link></td>
    <td>Dossier van {{name}}</td>
  </tr>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style scoped>
.row {
  box-sizing: border-box;
  display: table;
  table-layout: fixed;
  width: 100%;
}

.row, .cell{
  border:1px solid black;
}

.cell {
  display: table-cell;
  flex: 1;
  flex-direction: column;
  position: relative;
}

@supports(display: flex) {
  .row {
    display: flex;
  }
  // display: block is needed to allow inline-block content inside a cell, if there is vertical alignment, we need display: flex
  .cell {
    display: block;
  }
  .cell-valign-middle,
  .cell-valign-bottom {
    display: flex;
  }
}
</style>
