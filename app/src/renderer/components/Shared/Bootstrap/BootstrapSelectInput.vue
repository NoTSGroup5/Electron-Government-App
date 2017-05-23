<template>
    <div class="form-group row">
        <label class="col-sm-4 col-form-label" :for="name">{{ value }}</label>
        <div class="col-sm-8">
            <select class="form-control" :id="name">
                <option v-for="option in options" :value="option.value">{{ option.name }}</option>
            </select>
            <small v-if="help" class="form-text text-muted">{{ help }}</small>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['name', 'value', 'help', 'options']
    }
</script>
