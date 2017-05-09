<template>
    <div class="row">
        <div class="cell small">
            {{}} bsn komt hier
        </div>
        <div class="cell">
            {{name}}
        </div>
        <div class="cell">
            Edit {{name}}
        </div>
        <div class="cell">
            Dossier of {{name}}
        </div>
    </div>
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
