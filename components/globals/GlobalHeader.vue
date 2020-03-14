<template>
  <div class="nav">
    <a :href="`mailto:lea.pradel@gmail.com`" class="nav-mail"><img src="~/assets/images/icon-email.svg"></a>
    <div class="nav-logo" :style="{ color: navColor}"><nuxt-link to="/">//</nuxt-link></div>
    <ul class="nav-list" :style="{ color: navColor }">
      <li><nuxt-link to="/projects">projets</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/',hash:'#lea'}">/éa</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/',hash:'#contact'}">contact</nuxt-link></li>
    </ul>
    <div class="mobile-nav"  id="menuToggle" @click="isMobileMenuActive = !isMobileMenuActive">
      <input type="checkbox" />
      <span :style="{ backgroundColor: navColor }"></span>
      <span :style="{ backgroundColor: navColor }"></span>
      <span :style="{ backgroundColor: navColor }"></span>
    </div>
    <div class="mobile-nav-list" v-bind:class="{ 'mobile-nav-list-active': isMobileMenuActive }">
      <span class="mobile-nav-list-marquee">LET'S CREATE LET'S CREATE LET'S CREATE</span>
      <a :href="`mailto:lea.pradel@gmail.com`" class="mobile-nav-list-mail"><img src="~/assets/images/icon-email.svg"></a>
      <div @click="isMobileMenuActive = !isMobileMenuActive"><nuxt-link to="/projects">projets</nuxt-link></div>
      <div @click="isMobileMenuActive = !isMobileMenuActive"><nuxt-link :to="{ path: '/',hash:'#lea'}">/éa</nuxt-link></div>
      <div @click="isMobileMenuActive = !isMobileMenuActive"><nuxt-link :to="{ path: '/',hash:'#contact'}">contact</nuxt-link></div>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex';
  export default {

      computed: mapState(['navColor']),

      data (){
          return {
              isMobileMenuActive: false,
        }
      }

  }
</script>
<style lang="scss">
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 60px 80px 0 80px;

    &-mail {
      background-color: black;
      color: white;
      width: 70px;
      height: 290px;
      transform: rotate(23deg);
      position: fixed;
      bottom: 0;
      left: -35px;

      img {
        position: absolute;
        right: 20px;
        top: 20px;
        transform: rotate(-23deg);
      }
    }

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
        overflow: hidden;
        background-image: url("../../assets/background-header.jpg");
        height: 100vh;
        background-color: white;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 200px;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        font-size: 40px;
        transform: translateX(-100%);
        transition: all 0.6s ease;

        &-marquee {
          font-size: 300px;
          white-space: nowrap;
          will-change: transform;
          animation: marquee 32s linear infinite;
          color: white;
          position: absolute;       /* un peu d'espace pour la transition */
          bottom: 50px;
          z-index: 1;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        &-mail {
          background-color: black;
          color: white;
          width: 70px;
          height: 290px;
          transform: rotate(23deg);
          position: absolute;
          bottom: 0;
          left: -35px;
          z-index: 2;


          img {
            position: absolute;
            right: 20px;
            top: 20px;
            transform: rotate(-23deg);
          }
        }

        &-active {
          transform: translateX(0);
        }

        & > * {
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

    @media all and (max-width: 1280px) {
      &-mail {
        display: none;
      }
    }

    @media all and (max-width: 767px) {
      position: relative;
      padding: 60px 40px 0 40px;

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
