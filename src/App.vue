<template>
  <router-view />
</template>

<style lang="scss">
html,
body,
p,
ul,
li {
  margin: 0px;
  padding: 0px;
}
ul,
li {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #333;

  font-size: 0.28rem;
}

.goods-img {
  padding: 0.2rem;
  box-sizing: border-box;
  background: #fff;
}
.goods-img img {
  width: 100%;
  max-height: 100%;
}
</style>
