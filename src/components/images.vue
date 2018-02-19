<template>
  <div class="card">
    Octocat
    <img src="../assets/octocat.png" style="width:100%">
    <button class="btn-card">Copy clipboard</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}
.btn-card {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  background-color: #000;
  color: #fff;
}
.btn-card:hover {
  opacity: 0.7;
}
</style>