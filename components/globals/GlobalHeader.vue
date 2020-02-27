<template>
  <div class="nav">
    <div class="nav-logo"><nuxt-link to="/">//</nuxt-link></div>
    <ul class="nav-list">
      <li><nuxt-link to="/projects">projets</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/',hash:'#lea'}">/éa</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/',hash:'#contact'}">contact</nuxt-link></li>
    </ul>
    <div class="mobile-nav" id="menuToggle" @click="toggleMenu">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="mobile-nav-list">
      <li><nuxt-link to="/projects">projets</nuxt-link></li>
      <li><nuxt-link to="{ path: '/', hash:'#lea'}">/éa</nuxt-link></li>
      <li><nuxt-link to="{ path: '/', hash:'#contact'}">contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
      methods: {
          toggleMenu()  {
              const el = document.querySelector('.mobile-nav-list');
              el.classList.toggle('mobile-nav-list-active');
              console.warn('toggleMenu');
          }
      }
  }
</script>
<style lang="scss">
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    padding: 60px 80px 0 80px;

    &-logo {
      font-size: 60px;
      letter-spacing: 0px
    ;z-index: 3;
    }

    &-list {
      display:flex;
      font-size: 30px;

      li {
        margin-right: 80px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    .mobile-nav {
      display: none;
      position: relative;
      z-index: 1;

      -webkit-user-select: none;
      user-select: none;

      &-list {
        height: 100vh;
        background-color: white;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        font-size: 40px;
        transform: translateX(-100%);
        transition: all 0.6s ease;

        &-active {
          transform: translateX(0);
        }

        li {
          margin-bottom: 50px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }

      input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;

        cursor: pointer;

        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */

        -webkit-touch-callout: none;


      }

      input:checked ~ span
      {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
      }

      input:checked ~ span:nth-of-type(2)
      {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      input:checked ~ span:nth-of-type(3)
      {
        transform: rotate(-45deg) translate(0, -2px);
      }

      input:checked ~ ul
      {
        transform: none;
      }

      span {
        display: block;
        width: 30px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;

        background: black;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        opacity 0.55s ease;

        &:nth-of-type(2) {
          width: 24px;
          margin-left: auto;
          margin-right: auto;
        }

        &:first-child {
          transform-origin: 0% 0%;
        }

        &:last-of-type {
          transform-origin: 0% 0%;
        }
      }
    }

    @media all and (max-width: 767px) {
      &-list {
        display: none;
      }

      &-logo {
        font-size: 30px;
      }

      .mobile-nav {
        display: block;
      }
    }


  }
</style>
