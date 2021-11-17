<template>
  <nav class="nav">
    <img
      class="nav__logo"
      src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png"
      alt="Logo"
    />
    <div class="nav__menu">
      <a class="nav__menu-item--active" href="#">Home</a>
      <a class="nav__menu-item" href="#">Discover</a>
      <a class="nav__menu-item" href="#">Register</a>
      <a class="nav__menu-item" href="#">
        <font-awesome-icon icon="search"
      /></a>
    </div>
  </nav>
  <div class="first">
    <div class="first__desc">
      <p class="first__text">
        <b class="first__text--hightlight">Booked Tool</b> enables you to create
        Interactive Advertisement
      </p>
      <button class="first__btn">What is it?</button>
    </div>
  </div>
  <div class="second">
    <p class="second__text">
      Please log in to start using<br />
      <b class="second__text-highlight">Booked Tool</b>
    </p>
    <div class="second__form">
      <input class="second__form-input" placeholder="Email" type="text" />
      <input class="second__form-input" placeholder="Password" type="text" />
      <button class="first__btn">Login</button>
    </div>
  </div>

  <div class="third">
    <div class="third__title">
      <!-- Logo -->
      <font-awesome-icon icon="laptop" style="margin-top: 16px" />
      <p class="third__title-text"><b>Discover</b><br />Booked Tool</p>
    </div>
    <img
      class="third__img"
      src="https://campuspedia.id/news/wp-content/uploads/2021/01/A4GDK27VMnz6LtFDy9yzk-750x375.jpg"
      alt=""
    />
    <ul class="third__nav">
      <li
        :class="[
          discover === 'A' ? 'third__nav-item--active' : 'third__nav-item',
        ]"
        @click="changeDiscover('A')"
      >
        Discover A
      </li>
      <li
        :class="[
          discover === 'B' ? 'third__nav-item--active' : 'third__nav-item',
        ]"
        @click="changeDiscover('B')"
      >
        Discover B
      </li>
      <li
        :class="[
          discover === 'C' ? 'third__nav-item--active' : 'third__nav-item',
        ]"
        @click="changeDiscover('C')"
      >
        Discover C
      </li>
      <li
        :class="[
          discover === 'D' ? 'third__nav-item--active' : 'third__nav-item',
        ]"
        @click="changeDiscover('D')"
      >
        Discover D
      </li>
    </ul>
    <p class="third__desc">
      {{ discover }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Dicta praesentium reiciendis eum earum nisi alias vero laudantium maxime
      beatae nulla vel, magnam architecto ad illum eaque, dolores laboriosam
      aliquam vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus impedit quibusdam nobis quasi quod sit, officiis ut voluptatibus
      repellat deleniti vero voluptatem iste harum corporis minus maiores eius,
      debitis molestias? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Voluptas ratione impedit tempora ad consequuntur velit vero minima
      necessitatibus eum illum eligendi, saepe mollitia repellat ex ipsam ipsa
      accusamus accusantium repellendus.
    </p>
  </div>

  <div class="fourth">
    <div class="fourth__title">
      <font-awesome-icon icon="clipboard" style="margin-top: 16px" />
      <p class="fourth__title-text"><b>Get in touch</b></p>
      <p class="fourth__title-subtext">
        Want to get in touch? We'd love to hear from you. Here's how you can
        reach us.
      </p>
    </div>
    <div class="fourth__search">
      <!-- logo search -->
      <input class="fourth__search-input" type="text" placeholder="Search..." />
    </div>

    <div class="fourth__main">
      <div class="fourth__map">
        <GMapMap
          :center="center"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GMapCluster>
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GMapCluster>
        </GMapMap>
      </div>
      <div class="fourth__form">
        <p class="fourth__form-title">Feedback</p>
        <input class="fourth__form-input" type="text" placeholder="First" />
        <input class="fourth__form-input" type="text" placeholder="Last" />
        <input class="fourth__form-input" type="text" placeholder="Email" />
        <textarea
          class="fourth__form-textarea"
          placeholder="Message"
        ></textarea>
        <button class="first__btn">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      discover: "A",
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        }, // Along list of clusters
      ],
    };
  },
  methods: {
    changeDiscover(v) {
      this.discover = v;
      console.log(v);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  margin: 0;
}

.nav {
  display: flex;
  align-items: center;
  @media only screen and (max-width: 360px) {
    flex-direction: column;
  }

  background: #f7f9f9;
  &__logo {
    width: 40px;
    margin-right: auto;
    @media only screen and (max-width: 360px) {
      margin: auto;
      margin-bottom: 8px;
    }
  }

  &__menu {
    &-item {
      color: #333333;
      padding: 6px 20px;
      border-radius: 20px;

      &--active {
        color: #333333;
        padding: 6px 20px;
        border-radius: 20px;
        background: #e0e2e2;
      }

      &:link,
      &--active:link {
        text-decoration: none;
      }
    }
  }
}

.first {
  height: 300px;
  background-image: url("https://cdn.pocket-lint.com/r/s/970x/assets/images/155087-laptops-review-microsoft-surface-laptop-go-review-image1-6ezitk9ymj-jpg.webp"),
    url("https://campuspedia.id/news/wp-content/uploads/2021/01/A4GDK27VMnz6LtFDy9yzk-750x375.jpg");
  background-repeat: no-repeat, no-repeat;
  background-position: 100% 140%, 0 0;
  background-size: 600px auto, 600px auto;
  background-color: #f4f6f5;

  &__desc {
    position: relative;
    top: 80px;
    left: 150px;
    width: 220px;
    @media only screen and (max-width: 360px) {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
    }
  }

  &__text {
    line-height: 1.3rem;
  }

  &__text--hightlight {
  }

  &__btn {
    background: #468fcc;
    color: white;
    border: 0;
    padding: 10px 18px;
    border-radius: 5px;
  }
}

.second {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e2e3e4;
  padding: 35px 250px;

  @media only screen and (max-width: 360px) {
    padding: 0%;
    flex-direction: column;
  }

  &__text {
    &-highlight {
      font-size: 30px;
    }
  }

  &__form {
    &-input {
      padding: 8px 18px;
      margin-right: 8px;
      @media only screen and (max-width: 360px) {
        padding: 8px 0;
        width: 80%;
        margin-bottom: 8px;
      }
    }
  }
}

.third {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    &-text {
      text-transform: uppercase;
      text-align: center;
    }
  }
  &__img {
    width: 500px;
    @media only screen and (max-width: 360px) {
      width: 100%;
    }
  }
  &__nav {
    display: flex;
    gap: 18px;
    list-style: none;
    padding: 0 40px;
    // background: orangered;
    border-bottom: 1px solid #e3e8ea;
    @media only screen and (max-width: 360px) {
      padding: 0;
    }
    &-item {
      padding: 8px 0;
      &--active {
        padding: 8px 0;
        font-weight: bold;
        // background: brown;
        border-bottom: 5px solid #468fcc;
      }
    }
  }
  &__desc {
    width: 500px;
    @media only screen and (max-width: 360px) {
      width: 100%;
    }
  }
}

.fourth {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f9f9;
  padding-bottom: 32px;
  // padding: 0 1000px;

  &__title {
    &-text {
      text-align: center;
    }
    &-subtext {
      text-align: center;
    }
  }
  &__search {
    margin-bottom: 16px;
    width: 700px;
    @media only screen and (max-width: 360px) {
      width: 100%;
    }
    &-input {
      box-sizing: border-box;
      padding: 8px 18px;
      width: 700px;
      border: 1px solid #e3e8ea;
      border-radius: 5px;
      @media only screen and (max-width: 360px) {
        width: 100%;
      }
    }
  }
  &__main {
    display: flex;
    width: 700px;
    @media only screen and (max-width: 360px) {
      width: 100%;
      flex-direction: column;
    }
  }
  &__map {
    height: 500px;
    width: 500px;
    @media only screen and (max-width: 360px) {
      width: 100%;
    }
  }
  &__form {
    text-align: left;
    padding-left: 16px;
    background: white;

    &-title {
      font-size: 1.8rem;
      font-weight: bold;
    }
    &-input {
      padding: 8px 6px;
      margin-right: 8px;
      margin-bottom: 8px;
      border: 1px solid #e3e8ea;
      border-radius: 5px;
    }
    &-textarea {
      width: 80%;
      padding: 8px 18px;
      margin-right: 8px;
      border: 1px solid #e3e8ea;
      border-radius: 5px;
    }
  }
}

.vue-map-container {
  height: 500px;
  @media only screen and (max-width: 360px) {
    width: 100%;
    flex-direction: column;
  }
}
.vue-map {
  height: 500px;
}
</style>
