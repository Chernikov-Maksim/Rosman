<template>
  <section class="news">
    <div class="news-wrapper">
      <div class="news-container">
        <div class="row">
          <div class="column">
            <title-h2>Новости</title-h2>
            <button class="watch-all active">Смотреть все</button>
          </div>
          <div class="row-item">
            <button class="watch-all">Смотреть все</button>
            <div class="switches">
              <div ref="prev" class="swiper-button-prev">
                <img src="../../public/images/news/prev.svg" alt="prev" />
              </div>
              <div ref="next" class="swiper-button-next">
                <img src="../../public/images/news/next.svg" alt="next" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <swiper
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :spaceBetween="16"
            :cssMode="true"
            :pagination="true"
            :mousewheel="true"
            :keyboard="true"
            :modules="modules"
            class="mySwiper"
            :breakpoints="{
              '851': {
                slidesPerView: 3,
              },
              '850': {
                slidesPerView: 1,
              },
              '640': {
                slidesPerView: 1,
              },
              '500': {
                slidesPerView: 1,
              },
              '320': {
                slidesPerView: 1,
              },
            }"
          >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <div class="swiper-cards">
                <img :src="slide.image" alt="frame" />
                <div class="cards-content">
                  <div class="test">
                    <div class="box-text">
                      <span class="articles">статьи</span>
                      <span>•</span>
                      <span class="date">{{ slide.date }}</span>
                    </div>
                    <p class="punch-title">{{ slide.title }}</p>
                    <p class="sub-title">
                      {{ slide.subtitle }}
                    </p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: "../../public/images/news/frame.jpg",
          date: "30.11.2022",
          title: "Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!",
          subtitle:
            "Пусковые установки Эпик Лончер подарят совершенно новый опыт запуска волчка на арену даже самому умелому Игроку!",
        },
        {
          image: "../../public/images/news/frameTwo.jpg",
          date: "30.11.2022",
          title: "Стань Мастером Высшей Лиги с блейдами СТАКИНГ!",
          subtitle:
            " Переходи на новый уровень блейд-баттла и докажи, что достоин звания Мастера Высшей лиги!",
        },
        {
          image: "../../public/images/news/frameThree.jpg",
          date: "30.11.2022",
          title: "Новый закон накладывает вето на полуночный",
          subtitle:
            "Противоположная точка зрения подразумевает, что явные признаки победы институционализации лишь добавляют фракционных разногласий и объявлены нарушающими общечеловеческие нормы этики и морали.",
        },
        {
          image: "../../public/images/news/frameThree.jpg",
          date: "30.11.2022",
          title: "Новый закон накладывает вето на полуночный",
          subtitle:
            "Противоположная точка зрения подразумевает, что явные признаки победы институционализации лишь добавляют фракционных разногласий и объявлены нарушающими общечеловеческие нормы этики и морали.",
        },
      ],
    };
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>

<style scoped>
.news-wrapper {
  @apply max-w-7xl mx-auto px-3 sm:px-6 2xl:px-0;
}

.news-container {
  @apply pb-12 pt-12 sm:pt-[64px];
}

.row {
  @apply flex justify-between items-center mb-6  sm:mb-10;
}

.row-item {
  @apply flex items-end gap-x-[34px];
}

.watch-all {
  @apply border-b-def border-black text-ordinary font-normal leading-5 hidden sm:flex;
}
.active {
  @apply mt-2 flex sm:hidden;
}
.switches {
  @apply flex gap-x-[44px] sm:gap-x-[54px];
}

.swiper-cards {
  @apply flex-col text-left;
}

.test {
  @apply pt-4 pr-3 pb-3 pl-3;
}

.box-text {
  @apply flex items-center gap-x-2 mb-3;
}

.articles {
  @apply text-mini font-medium uppercase tracking-wider;
}
.date {
  @apply text-mini font-medium text-[#808080];
}

.punch-title {
  @apply text-ordinary font-medium leading-5 mb-4;
}

.sub-title {
  @apply text-mini leading-5 sm:text-ordinary font-normal;
}
.swiper {
  width: 100%;
  height: 100%;
}
.navigations {
  position: relative;
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

.swiper-slide {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.swiper-slide,
.swiper-slide-active,
.swiper-slide-next {
  height: auto;
  @apply border-r-def border-b-def border-l-def border-[#D9D9D9];
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
