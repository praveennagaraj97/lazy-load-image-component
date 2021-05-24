<template>
  <main id="app">
    <!-- <lazy-image  :key="image" :image="image" /> -->
    <lazy-image
      v-for="(image, i) in images"
      :key="i"
      :image="image"
      :width="360"
      :height="270"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LazyImage from "./components/LazyImage.vue";

export default defineComponent({
  name: "App",
  components: { LazyImage },
  data: () => ({
    images: [
      "https://images.unsplash.com/photo-1611362487355-757f215bb5ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1518811829466-1372392d4544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80",
      "https://images.unsplash.com/photo-1492078376836-73e36fbd55e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1614582832516-59aa97f70572?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80",
      "https://images.unsplash.com/photo-1621238705348-6ef939523bae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      "https://images.unsplash.com/photo-1621230479592-74eb315c1d22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1620983379290-71e02d8ca563?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1505259839540-04105fcd8ba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80",
    ],
  }),
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
