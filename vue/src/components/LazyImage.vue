<template>
  <div
    ref="imageContainerRef"
    class="loadable-images-container"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <loader v-if="!imageLoaded" :height="height" :width="width" />
    <img :src="isVisible ? image : ''" ref="imageRef" :onload="handleOnLoad" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "./Loader.vue";

export default defineComponent({
  components: {
    Loader,
  },
  data: () => ({
    imageLoaded: false,
    isVisible: false,
  }),
  props: {
    image: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },

  // Methods
  methods: {
    handleOnLoad() {
      if (this.$refs.imageRef instanceof HTMLImageElement) {
        this.$refs.imageRef.style.display = "block";
        this.imageLoaded = true;
      }
    },
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!this.isVisible) {
          this.isVisible = entries[0].isIntersecting;
        }
      },
      {
        threshold: 0.7,
      }
    );

    observer.observe(this.$refs.imageContainerRef as Element);
  },
});
</script>

<style>
.loadable-images-container {
  margin: 5px;
}
.loadable-images-container img {
  width: 100%;
  height: 100%;

  display: none;
}
</style>
