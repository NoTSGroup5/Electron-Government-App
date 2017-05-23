<template>
    <div class="form-group row">
        <label :for="type + '_' + name" class="col-sm-4 col-form-label" :aria-describedby="type + '_' + name">{{ name }}</label>
        <div class="col-sm-10">
            <input :type="type" class="form-control" :id="type + '_' + name" placeholder="Address">
            <small v-if="help" class="form-text text-muted">{{ help }}</small>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['type', 'name', 'help']
  }
</script>