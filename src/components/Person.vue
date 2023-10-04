<template>
  <section class="person">
    <div class="person-wrapper">
      <div class="person-container">
        <swiper
          :slides-per-view="1"
          :spaceBetween="30"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          :pagination="{
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: renderFraction,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <div class="navigations">
            <div ref="pagination" class="swiper-pagination"></div>
            <div class="switches">
              <div ref="prev" class="swiper-button-prev">
                <img src="../../public/images/news/prev.svg" alt="prev" />
              </div>
              <div ref="next" class="swiper-button-next">
                <img src="../../public/images/news/next.svg" alt="next" />
              </div>
            </div>
          </div>
          <swiper-slide>
            <img src="../../public/images/news/jia.jpg" alt="jia" />
            <div class="column">
              <div class="item-name">
                <h2 class="title">Джия</h2>
              </div>
              <div class="item-text">
                <p class="text-top">
                  Животное в опасности? Команда Петроникс, вперед, на
                  помощь!Игрушки Петроникс – персонажи одноименного мультсериала
                  и их робо-питомцы! Отправляйся на миссии по спасению животных
                  вместе с твоими любимыми героями!
                </p>
                <p class="text-bottom">
                  Джия – веселая и отважная участница команды.Фигурка подвижна,
                  за счет чего ты сможешь придать ей нужную позу. Вращай
                  головой, двигай руками, сгибай ноги и колени! В набор также
                  входит Петроникс-рюкзак, его можно снять и надеть обратно в
                  любой момент.
                </p>
              </div>
              <div class="item-btn">
                <btn-wotch>Смотреть</btn-wotch>
                <btn-site>На сайт</btn-site>
              </div>
              <div class="networks">
                <span class="social-networks">Мы в соцсетях</span>
                <div class="box-icons">
                  <a class="networks-icons" href="">
                    <img
                      class="icons"
                      v-for="image in images"
                      :src="image.src"
                      alt="icon"
                    />
                  </a>
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide>
            <img src="../../public/images/news/jia.jpg" alt="jia" />
            <div class="column">
              <div class="item-name">
                <h2 class="title">Джия</h2>
              </div>
              <div class="item-text">
                <p class="text-top">
                  Животное в опасности? Команда Петроникс, вперед, на
                  помощь!Игрушки Петроникс – персонажи одноименного мультсериала
                  и их робо-питомцы! Отправляйся на миссии по спасению животных
                  вместе с твоими любимыми героями!
                </p>
                <p class="text-bottom">
                  Джия – веселая и отважная участница команды.Фигурка подвижна,
                  за счет чего ты сможешь придать ей нужную позу. Вращай
                  головой, двигай руками, сгибай ноги и колени! В набор также
                  входит Петроникс-рюкзак, его можно снять и надеть обратно в
                  любой момент.
                </p>
              </div>
              <div class="item-btn">
                <button class="btn-wotch">Смотреть</button>
                <button class="btn-site">На сайт</button>
              </div>
              <div class="networks">
                <span class="social-networks">Мы в соцсетях</span>
                <div class="networks-icons">
                  <img
                    class="icons"
                    v-for="image in images"
                    :src="image.src"
                    alt="icon"
                  />
                </div>
              </div></div
          ></swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import { ref } from "vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const pagination = ref(null);
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation, Pagination],
      prev,
      next,
      pagination,
    };
  },
  data() {
    return {
      images: [
        { id: 1, src: "../../public/images/news/vk.svg" },
        { id: 2, src: "../../public/images/news/tikTok.svg" },
        { id: 3, src: "../../public/images/news/facebook.svg" },
        { id: 4, src: "../../public/images/news/like.svg" },
        { id: 5, src: "../../public/images/news/youTube.svg" },
        { id: 6, src: "../../public/images/news/in.svg" },
        { id: 7, src: "../../public/images/news/twitter.svg" },
      ],
    };
  },
  methods: {
    renderFraction(currentClass, totalClass) {
      return `<span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
    },
  },
};
</script>

<style lang="scss" scoped>
.person-wrapper {
  @apply max-w-[1056px] mx-auto px-3 sm:px-6 2xl:px-0;
}
.person-container {
  @apply pt-[31px] sm:pt-[92px];
}
.column {
  @apply flex flex-col items-start text-start;
}
.item-name {
  @apply mb-6 relative flex items-center justify-between;
  .title {
    @apply text-[27px] leading-[32px] sm:text-[43px] sm:leading-[48px] font-medium;
  }
}

.item-text {
  @apply text-ordinary mb-6 sm:mb-8;
  .text-top {
    @apply mb-4 leading-5 font-normal;
  }
  .text-bottom {
    @apply leading-5 font-normal;
  }
}

.item-btn {
  @apply mb-6 sm:mb-8 flex items-center gap-x-6;
}
.swiper-pagination {
  top: 0px;
}
.networks {
  .social-networks {
    @apply mb-4 font-normal text-ordinary leading-5 block;
  }
  .networks-icons {
    @apply flex items-center gap-x-5;

    .icons {
      @apply w-[20px] h-[20px];
    }
  }
}

.navigations {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 34px;
  top: 24px;
  right: -10px;
  .switches {
    @apply flex gap-x-[44px] sm:gap-x-[54px];
  }
}

.swiper-pagination {
  position: relative;
  top: -12px;
}

.swiper-button-next,
.swiper-button-prev {
  position: relative;
  width: 21.33px;
  height: 20.74px;
}
.swiper-button-next::after {
  display: none;
}
.swiper-button-prev::after {
  display: none;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    gap: 31px;
  }
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  gap: 48px;
  height: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
