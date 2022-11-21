<template>
    <div class="pdf-container">
        <iframe :src="pdfLink" class="pdf-iframe"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pdfLink: "../../../public/Manual Usuario_Finanzas.pdf"
        }
    }
}
</script>

<style scoped>
.pdf-container {
    padding: 2rem;
}
.pdf-iframe {
    width: 100%;
    height: 80rem;
}
</style>