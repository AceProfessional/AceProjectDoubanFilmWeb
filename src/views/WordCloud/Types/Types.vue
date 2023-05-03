<!--@ File: Types.vue-->
<!--@ Editor: WebStorm-->
<!--@ Author: Ace (From Chengdu.China)-->
<!--@ HomePage: https://github.com/AceProfessional-->
<!--@ OS: Windows 11 Professional Workstation 22H2-->
<!--@ CreatedTime: 2023-05-03-->

<template>
    <div class="image-container">
        <div class="image-wrapper">
            <img ref="image" v-if="!loading" :src="imagePath" @load="onImageLoad" @error="onImageError">
            <div v-else class="loading">Loading...</div>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref, computed} from 'vue';

export default defineComponent({
    setup() {
        const loading = ref(true);
        const image = ref(null);

        const onImageLoad = () => {
            loading.value = false;
        };

        const onImageError = () => {
            console.error(`Failed to load image`);
            loading.value = false;
        };

        const imagePath = computed(() => {
            return require(`@/assets/images/movie_type_wordcloud.png`);
        });

        return {
            loading,
            image,
            onImageLoad,
            onImageError,
            imagePath,
        };
    },
    mounted() {
        const img = new Image();
        img.onload = this.onImageLoad;
        img.onerror = this.onImageError;
        img.src = this.imagePath;
        this.image = img;
    },
});
</script>

<style scoped>
.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.image-wrapper {
    text-align: center;
}

img {
    display: block;
    max-width: 100%;
    max-height: 100%;
}

.loading {
    font-size: 24px;
    color: #999;
}
</style>
