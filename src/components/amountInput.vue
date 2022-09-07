<template>
  <div class="box-content w-full m-auto block">
    <label class="text-xs">Amount</label>
    <input :value="modelValue" @input="updateInput" type="text" class="border-2 w-full h-10 m-auto block">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>