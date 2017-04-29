<template>
    <div class="all">
        <div class="app pull-left">
          <div class="logo">Vue-cli</div>
            <ul class="silder-bar text-center">
                <li>
                    <a>分类</a>
                    <ul class="detailList">
                        <li><router-link to="/sider">Hello路由</router-link></li>
                        <li><router-link :to="{ path: 'next', query: { title: 'Hello路由' }}">Next路由</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <contentr></contentr>
    </div>
</template>

<script>
    import Contentr from './components/content/Content'
    import './assets/js/basic/siderbar.js'
    export default {
      name: 'app',
      components: {
        Contentr
      }
    }
</script>

<style>
.all{
  width: 100%;
  height: 100%;
  display:flex;
  background: #3e3e3e;
}
.logo{
  width: 180px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 18px;
  color: #37c298;
  background: #2a393c;
  border-radius: 8px ;
}
.app {
  width: 180px;
  height: 100%;
  ;
}
.silder-bar{
  width: 180px;
}
.silder-bar > li{
  line-height: 60px;
  color: #fff;
  background: #2a393c
}
.silder-bar > li > a{
  color: #b3c8cb;
}
.rightContent{
  margin-left: 180px;
}
.detailList{
  
}
.detailList > li{
  height: 45px;
  line-height: 45px;
  margin:3px 0 0 3px;
  background: #b5c8ce;
  color: #000;
  opacity: 0.8;
}
.bor-left{
  border-left: 5px solid #03ccbb;
}
</style>
