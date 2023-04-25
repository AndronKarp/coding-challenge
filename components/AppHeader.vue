<template>
    <header class="py-4 border-b shadow">
        <AppContainer>
            <button class="flex sm:hidden" @click="emit('menuButtonClick')">
                <Icon name="material-symbols:menu" size="24" />
            </button>
            <div class="hidden sm:block">
                <AppNavigation />
            </div>
        </AppContainer>
    </header>
</template>

<script lang="ts" setup>
import AppContainer from './AppContainer.vue'
import AppNavigation from './AppNavigation.vue'

type AppHeaderEmits = {
    (event: 'menuButtonClick'): void
}

const emit = defineEmits<AppHeaderEmits>()
</script>
