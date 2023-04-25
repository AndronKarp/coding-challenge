<template>
    <Head>
        <Title>Home</Title>
    </Head>

    <h1 class="mb-6 text-xl font-medium">Running auctions</h1>
    <AuctionsSlider :auctions="auctions" />
</template>

<script lang="ts" setup>
import { getAuctions } from '@/api'
import AuctionsSlider from '@/components/AuctionsSlider.vue'

const { data: auctions } = await useAsyncData(getAuctions)
</script>
