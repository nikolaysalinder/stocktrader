<template>
  <div class="stocks">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3>BMW</h3>
        <p>(Price: 10000)</p>
      </div>
      <div class="panel-body">
        <input type="text" class="form-control" placeholder="Quantity">
        <button class="btn btn-success">Buy</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass">
.panel
  width: 45%
  .panel-heading
    display: flex
    align-items: baseline
  .panel-body
    width: 100%
    display: flex
    align-content: space-around
</style>
