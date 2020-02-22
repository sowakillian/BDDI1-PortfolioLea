<template>
  <div class="nav">
    <div class="nav-logo"><nuxt-link to="/">//</nuxt-link></div>
    <ul class="nav-list">
      <li><nuxt-link to="/projects">projets</nuxt-link></li>
      <li><a href="#lea">/éa</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
  </div>
</template>
<style lang="scss">
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
    position: relative;
    z-index: 2;

    &-logo {
      font-size: 60px;
      letter-spacing: 5px;
    }

    &-list {
      display:flex;
      font-size: 30px;

      li {
        margin-right: 80px;
      }
    }
  }
</style>
