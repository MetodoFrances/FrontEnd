<template>
    <div class="pdf-container">
        <a title="Logo Leasing" href="https://docs.google.com/document/d/1gus9P2s-ZNI9y_hy1V8WhF2NZjc6Jh_MF-aTbD7HczA/edit" target="_blank"><img class="logo" src="../../../src/assets/logoleasing.webp" alt="Logo" /></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
          item:{
            url:"../../../src/assets/Manual_Usuario_Finanzas.pdf",
            label:"Descargue el archivo aqui"
          }
        }
    },
    downloadItem ({ url, label }) {
      Axios.get(url, { responseType: 'blob' })
          .then(response => {
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = label
            link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)
    },
    download () {
      const url = '../../../src/assets/Manual_Usuario_Finanzas.pdf';
      window.location.href = url;
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
.logo{
  height: 1000px;
  width: 1200px;
}
</style>