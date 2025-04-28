<script lang="ts" setup>
import { useElementPlusDesignTokens } from '@vben/hooks';

import { ElConfigProvider } from 'element-plus';

import { elementLocale } from '#/locales';

import { useRoute  } from 'vue-router';
import {watch} from 'vue'
import { updatePreferences } from '@vben/preferences';
defineOptions({ name: 'App' });

useElementPlusDesignTokens();

// 判断是否子应用
const route = useRoute();
const isSubApp = window.$wujie
if(isSubApp) {
  console.log('子应用', route);
  updatePreferences({
    app: {
      layout: 'full-content'
    }
  })
  watch(
    () => route.path,
    async path => {
      console.log("通知主应用路由发生了变化")
      window.$wujie.bus.$emit('sub-route-change', {
        subName: 'vue3-main',
        name: route.name,
        path: path
      })
    }
  )
}
</script>

<template>
  <ElConfigProvider :locale="elementLocale">
    <RouterView />
  </ElConfigProvider>
</template>
