<template>
    <div class="relative">
        <SwiperContainer
            slides-per-view="auto"
            :allow-touch-move="false"
            class="!-mx-2"
            @init="onInit"
        >
            <SwiperSlide
                v-for="auction in auctions"
                :key="auction.id"
                class="sm:!w-1/2 lg:!w-1/3 xl:!w-1/4 px-2"
            >
                <AuctionCard :auction="auction" />
            </SwiperSlide>
        </SwiperContainer>

        <button
            v-if="!slider?.isBeginning"
            class="flex absolute top-1/2 -translate-y-1/2 left-2 z-10 p-2 bg-white shadow rounded-full"
            @click="slider?.slidePrev()"
        >
            <Icon name="material-symbols:arrow-back-ios-new" size="24" />
        </button>
        <button
            v-if="!slider?.isEnd"
            class="flex absolute top-1/2 -translate-y-1/2 right-2 z-10 p-2 bg-white shadow rounded-full"
            @click="slider?.slideNext()"
        >
            <Icon name="material-symbols:arrow-forward-ios" size="24" />
        </button>
    </div>
</template>

<script lang="ts" setup>
import type { Swiper } from 'swiper/types'

import type { Auction } from '@/api'

import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import AuctionCard from './AuctionCard.vue'

type AuctionSliderProps = {
    auctions: Auction[] | null
}

defineProps<AuctionSliderProps>()

const slider = ref<Swiper | null>(null)

const onInit = (swiper: Swiper) => {
    slider.value = swiper
}
</script>
