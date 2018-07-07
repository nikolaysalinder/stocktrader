<template>
<nav class="navbar navbar-default">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <router-link
        tag="a"
        to="/"
        class="navbar-brand"
        href="#">Stock Trader</router-link>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div>
      <ul class="nav navbar-nav">
        <router-link tag="li" to="Porfolio">
          <a href="#">Portfolio</a>
        </router-link>
        <router-link tag="li" to="Stocks">
          <a href="#">Stocks</a>
        </router-link>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
export default {
  name: 'Header',
};
</script>

<style lang="sass">

</style>

