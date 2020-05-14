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
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/sass/index.scss';


body{
  margin: 0;
  padding: 0; 
}

.floor {
    position: fixed;
    bottom: 0;
    width: 100%;
}
.floor-ul {
    background: $bgc-theme;
    font-size: 0;

}

.floor-ul li {
    width: 25%;
    height: $tabbar-height;
    display: inline-block;
    text-align: center;
    
}

.floor-ul li img {
    margin:auto;
    width: 25px;
    height: 25px;
    margin-top: 6px;
    margin-bottom: 1px;
    display: block;
}

.floor-ul li span {
    font-size: 10px;
}

</style>