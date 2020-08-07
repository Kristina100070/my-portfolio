<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img class="swiper__image" :src="banner" />
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        '/photo-1589987616737-50f054888459.jpg',
        '/photo-1593642632559-0c6d3fc62b89.jpg',
        '/photo-1593642533144-3d62aa4783ec.jpg',
        '/photo-1593642634402-b0eb5e2eebc9.jpg',
      ],
      swiperOption: {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper);
    this.mySwiper.slideNext(5000, true);
  },
};
</script>
<style>
.swiper__image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.swiper-button-next,
.swiper-button-prev {
  color: rgb(17, 19, 19);
  opacity: 0.7;
}
.swiper-button-next:hover {
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: rgb(17, 19, 19);
}
</style>
