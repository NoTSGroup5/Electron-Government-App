<template>
    <div class="form-group row">
        <label :for="type + '_' + name" class="col-sm-4 col-form-label" :aria-describedby="type + '_' + name">{{ value }}</label>
        <div class="col-sm-8">
            <input :type="type" class="form-control" :id="type + '_' + name" :placeholder="value">
            <small v-if="help" class="form-text text-muted">{{ help }}</small>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['type', 'name', 'help', 'value']
  }
</script>
