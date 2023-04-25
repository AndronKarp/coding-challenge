<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader @menu-button-click="openSidebar" />
        <AppSidebar v-model="isSidebarOpen" />
        <main class="grow py-6 flex items-center">
            <div class="w-full">
                <AppContainer>
                    <NuxtPage />
                </AppContainer>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

const isSidebarOpen = ref(false)

const openSidebar = () => {
    isSidebarOpen.value = true
}
</script>
