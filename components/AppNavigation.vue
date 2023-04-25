<template>
    <nav>
        <ul class="flex flex-col sm:flex-row items-start gap-6">
            <li
                v-for="link in navigationLinks"
                :key="link.href"
                class="text-lg font-medium underline underline-offset-4 decoration-transparent transition-colors hover:decoration-current"
            >
                <NuxtLink :to="link.href" class="block">{{
                    link.name
                }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const navigationLinks = [
    { name: 'cm24', href: '/' },
    { name: 'Kaufen', href: '/' },
    { name: 'Verkaufen', href: '/' },
    { name: 'Login', href: '/' },
]
</script>
