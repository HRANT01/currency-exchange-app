<template>
  <div v-if="selLoad" class="mt-5 animate-pulse w-30 h-10 bg-blue-400 mt-0">
  </div>
  <div v-else>
    <select v-model="value" class="outline-0 text-center mt-2 ml-1.5">
      <option></option>
      <option v-for="rate in exchangeRate">{{ rate[0] }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    exchangeRate: {
      required: true,
    },
    selLoad: Boolean,
  },
}
</script>

<style scoped>

</style>