
<template>
    <nuxt-link to="/" class="project-back">
      <span class="project-back-arrow"><img src="~/assets/images/icon-back.svg"></span>
      <span class="project-back-text">Retour aux projets</span>
    </nuxt-link>
</template>

<script>

</script>

<style lang="scss">
  .project-back {
    margin: 170px 8% 0 8%;
    font-size: 30px;
    display: flex;
    align-items: center;

    &-arrow {
      margin-right: 26px;
    }
  }
</style>
