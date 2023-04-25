<template>
    <Transition name="slide">
        <aside
            v-if="modelValue"
            ref="sidebarRef"
            class="sm:hidden fixed top-0 z-20 w-[240px] h-full p-4 bg-white shadow-2xl"
        >
            <AppNavigation />
        </aside>
    </Transition>
</template>

<script lang="ts" setup>
import AppNavigation from './AppNavigation.vue'

type AppSidebarProps = {
    modelValue: boolean
}

type AppSidebarEmits = {
    (event: 'update:modelValue', payload: boolean): void
}

const props = defineProps<AppSidebarProps>()

const emit = defineEmits<AppSidebarEmits>()

const sidebarRef = ref<HTMLElement | null>(null)

const onPageClick = (event: MouseEvent | TouchEvent) => {
    if (
        event.target instanceof Node &&
        sidebarRef.value?.contains(event.target)
    )
        return

    emit('update:modelValue', false)
}

watch(
    () => props.modelValue,
    (isOpen, _, onCleanup) => {
        if (!isOpen) return

        document.addEventListener('mousedown', onPageClick)
        document.addEventListener('touchstart', onPageClick)

        onCleanup(() => {
            document.removeEventListener('mousedown', onPageClick)
            document.removeEventListener('touchstart', onPageClick)
        })
    }
)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    @apply transition-transform;
}

.slide-enter-from,
.slide-leave-to {
    @apply -translate-x-full;
}
</style>
