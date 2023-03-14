<template>

   <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">Navbar</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
         </li>
         <li class="nav-item">
          <router-link class="nav-link" to="gallery">Gallery</router-link>
         </li>
         <li class="nav-item">
          <router-link class="nav-link" to="about">About</router-link>
         </li>
       </ul>
          <router-link class="nav-link" to="registration" style="color:black; font-weight:bold">Registration</router-link>
          <router-link class="nav-link" to="login" style="color:black; font-weight:bold">Login</router-link>
          <a style="color:black; font-weight:bold; cursor:pointer">Logout</a>

      
     </div>
   </nav>



  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
