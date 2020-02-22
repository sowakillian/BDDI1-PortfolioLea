
<template>
  <div class="project-header">
    <div class="project-header-content">
      <span class="project-header-content-title">{{ title }} - <span class="project-header-content-title-type">{{ type }}</span></span>
      <p>2019 projet d'école</p>
    </div>
  </div>
</template>

<script>
    export default {
        props: [
            'title',
            'type'
        ]
    }
</script>

<style lang="scss">

  .project-header {
    background-color: green;
    height: 100vh;
    width: 100%;
    padding: 0 5% 0 5%;
    margin-top: -120px;
    display: flex;
    align-items: center;
    background-image: url("../../assets/images/projects/labfive-bg.jpg");
    background-size: cover;
    background-position: center center;

    &-content {
      color: white;
      &-title {
        font-size: 80px;

        &-type {
          font-family: GTWalsheim-Regular;
        }
      }

      p {
        font-size: 40px;
        margin-top: 20px;
        font-family: GTWalsheim-Regular;
      }

    }
  }
</style>
