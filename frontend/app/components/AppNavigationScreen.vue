<script lang="ts" setup>
import type { NavLink } from '~/types/NavLink'
import { breakpointsTailwind, useBreakpoints, useScrollLock } from '@vueuse/core'

defineProps<Props>()

const { open } = useNavigationScreen()

onMounted(() => {
  // disable scroll when menu is open
  const body = document.querySelector('body')
  const isLocked = useScrollLock(body, false)
  watch(open, () => isLocked.value = open.value)

  // hide menu when button is hidden
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isButtonHidden = breakpoints.greaterOrEqual('sm')
  watch(isButtonHidden, () => {
    if (isButtonHidden.value) {
      open.value = false
    }
  })
})

interface Props {
  links: NavLink[]
}
</script>

<template>
  <Transition>
    <div v-if="open" class="fixed z-10 top-[61px] h-[calc(100vh-61px)] lg:top-[78px] lg:h-[calc(100vh-78px)] w-full bg-hip-bg">
      <div class="flex justify-center">
        <div class="flex flex-col gap-1 text-lg max-w-sm w-full p-5">
          <AppNavLink
            v-for="link in links"
            :key="link.to"
            :link="link"
            @click="open = false"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>
