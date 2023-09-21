<template>
  <section class="news">
    <div class="wrapper">
      <div class="px-6">
        <div class="flex justify-between items-center mb-10">
          <title-h2>Новости</title-h2>
          <div class="flex gap-x-34">
            <button
              class="border-b-def border-black text-ordinary font-normal leading-5"
            >
              Смотреть все
            </button>
            <div class="flex gap-x-34">
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
            :slidesPerView="3"
            :spaceBetween="16"
            :cssMode="true"
            :pagination="true"
            :mousewheel="true"
            :keyboard="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="flex-col text-left">
                <img src="../../public/images/news/frame.jpg" alt="frame" />
                <div
                  class="pt-4 pr-3 pb-8 pl-3 border-r-def border-b-def border-l-def border-[#D9D9D9]"
                >
                  <div class="flex items-center gap-x-2 mb-3">
                    <span class="text-mini font-medium uppercase tracking-wider"
                      >статьи</span
                    >
                    <span>•</span>
                    <span class="text-mini font-medium text-text-gray"
                      >30.11.2022</span
                    >
                  </div>
                  <p class="text-ordinary font-medium leading-5 mb-4">
                    Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!
                  </p>
                  <p class="text-ordinary leading-5">
                    Пусковые установки Эпик Лончер подарят совершенно новый опыт
                    запуска волчка на арену даже самому умелому Игроку!
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex-col text-left">
                <img src="../../public/images/news/frameTwo.jpg" alt="frame" />
                <div
                  class="pt-4 pr-3 pb-8 pl-3 border-r-def border-b-def border-l-def border-gray"
                >
                  <div class="flex items-center gap-x-2 mb-3">
                    <span class="text-mini font-medium uppercase tracking-wider"
                      >статьи</span
                    >
                    <span> •</span>
                    <span class="text-mini font-medium text-[#808080]"
                      >30.11.2022</span
                    >
                  </div>
                  <p class="text-ordinary font-medium leading-5 mb-4">
                    Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!
                  </p>
                  <p class="text-ordinary leading-5">
                    Пусковые установки Эпик Лончер подарят совершенно новый опыт
                    запуска волчка на арену даже самому умелому Игроку!
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex-col text-left">
                <img src="../../public/images/news/frameThree.jpg" alt="frame" />
                <div
                  class="pt-4 pr-3 pb-8 pl-3 border-r-def border-b-def border-l-def border-[#D9D9D9]"
                >
                  <div class="flex items-center gap-x-2 mb-3">
                    <span class="text-mini font-medium uppercase tracking-wider"
                      >статьи</span
                    >
                    <span>•</span>
                    <span class="text-mini font-medium text-[#808080]"
                      >30.11.2022</span
                    >
                  </div>
                  <p class="text-ordinary font-medium leading-5 mb-4">
                    Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!
                  </p>
                  <p class="text-ordinary leading-5">
                    Пусковые установки Эпик Лончер подарят совершенно новый опыт
                    запуска волчка на арену даже самому умелому Игроку!
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex-col text-left">
                <img src="../../public/images/news/frame.jpg" alt="frame" />
                <div
                  class="pt-4 pr-3 pb-8 pl-3 border-r-def border-b-def border-l-def border-[#D9D9D9]"
                >
                  <div class="flex items-center gap-x-2 mb-3">
                    <span class="text-mini font-medium uppercase tracking-wider"
                      >статьи</span
                    >
                    <span> •</span>
                    <span class="text-mini font-medium text-[#808080]"
                      >30.11.2022</span
                    >
                  </div>
                  <p class="text-ordinary font-medium leading-5 mb-4">
                    Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!
                  </p>
                  <p class="text-ordinary leading-5">
                    Пусковые установки Эпик Лончер подарят совершенно новый опыт
                    запуска волчка на арену даже самому умелому Игроку!
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex-col text-left">
                <img src="../../public/images/news/frame.jpg" alt="frame" />
                <div
                  class="pt-4 pr-3 pb-8 pl-3 border-r-def border-b-def border-l-def border-[#D9D9D9]"
                >
                  <div class="flex items-center gap-x-2 mb-3">
                    <span class="text-mini font-medium uppercase tracking-wider"
                      >статьи</span
                    >
                    <span> •</span>
                    <span class="text-mini font-medium text-[#808080]"
                      >30.11.2022</span
                    >
                  </div>
                  <p class="text-ordinary font-medium leading-5 mb-4">
                    Эпик Лончер: Так блейд Инфинити Надо еще не баттлил!
                  </p>
                  <p class="text-ordinary leading-5">
                    Пусковые установки Эпик Лончер подарят совершенно новый опыт
                    запуска волчка на арену даже самому умелому Игроку!
                  </p>
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

import "swiper/css";
import { ref } from "vue";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
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
  align-items: center;
}

.swiper-slide,
.swiper-slide-active .swiper-slide-next {
  max-width: 400px !important;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
