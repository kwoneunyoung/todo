<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/todo"><a class="navbar-brand" href="#">Todo</a></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/"><a class="nav-link active" aria-current="page">Home</a></router-link>
            <router-link to="/diary"><a class="nav-link">Diary</a></router-link>
            <!-- <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a> -->
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <!-- <Todo /> -->

  </div>

</template>

<script>
// import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    // Todo
  }
}
</script>

<style>


</style>