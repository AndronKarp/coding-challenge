<template>
    <article>
        <div class="relative">
            <div class="absolute inset-0 -z-10 bg-slate-200 animate-pulse" />
            <NuxtImg
                :src="auction.image"
                sizes="sm:100vw lg:50vw xl:33vw xxl:25vw"
                loading="lazy"
                class="w-full aspect-square"
            />
        </div>
        <div class="mt-4 p-4 border border-black">
            <h2 class="text-lg font-medium">{{ auction.name }}</h2>
            <p>Endet am {{ end.date }} um {{ end.time }} Uhr</p>
        </div>
    </article>
</template>

<script lang="ts" setup>
import type { Auction } from '@/api'

type AuctionCardProps = {
    auction: Auction
}

const props = defineProps<AuctionCardProps>()

const applyTwoDigitFormat = (num: number) => {
    return num < 10 ? `0${num}` : num.toString()
}

const end = computed(() => {
    const end = new Date(props.auction.end)

    return {
        date: `${applyTwoDigitFormat(end.getUTCDate())}.${applyTwoDigitFormat(
            end.getUTCMonth() + 1
        )}`,
        time: `${applyTwoDigitFormat(end.getUTCHours())}:${applyTwoDigitFormat(
            end.getUTCMinutes()
        )}`,
    }
})
</script>
