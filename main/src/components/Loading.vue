<template>
  <div class="micro-main-body-loading-wrapper">
    <div class="micro-main-body-loading">
      <img src="../assets/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style >
.micro-main-body-loading {
  width: 112px;
  height: 84px;
  position: absolute;
  user-select: none;
}
.micro-main-body-loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.micro-main-body-loading img {
  width: 100%;
  height: 100%;
}

</style>
