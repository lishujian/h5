<template>
  <div class="floor">
    <ul class="floor-ul">
      <router-link to="/home">
        <li>
          <img src="../../assets/img/home.png" alt />
          <span>home</span>
        </li>
      </router-link>

      <router-link to="/category">
        <li>
          <img src="../../assets/img/category.png" alt />
          <span>category</span>
        </li>
      </router-link>

      <router-link to="/cart">
        <li>
          <img src="../../assets/img/cart.png" alt />
          <span>cart</span>
        </li>
      </router-link>

      <router-link to="/my">
        <li>
          <img src="../../assets/img/my.png" alt />
          <span>my</span>
        </li>
      </router-link>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'floor',
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/sass/index.scss';


</style>