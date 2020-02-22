<template>
  <div class="container">
    <project-header />
    <project-description />
    <project-images />
    <project-back />
  </div>
</template>

<script>
    import ProjectHeader from '~/components/project/ProjectHeader.vue';
    import ProjectDescription from '~/components/project/ProjectDescription.vue';
    import ProjectBack from '~/components/project/ProjectBack.vue';
    import ProjectImages from '~/components/project/ProjectImages.vue'

    export default {
        components: {
            ProjectHeader,
            ProjectDescription,
            ProjectBack,
            ProjectImages
        },
    }
</script>

<style>

</style>
