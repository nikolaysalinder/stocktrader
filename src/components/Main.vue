<template>
  <div class="main">
    <h1>Trade or View your Portfolio</h1>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr>
    <h3>Your Funds: ${{ $store.state.funds }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data() {
    return {};
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
h1, h3
  font-weight: bold
</style>
