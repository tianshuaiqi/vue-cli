<template>
    <div>
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand">Welcome to {{ this.$route.query.title }} Shop</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li v-for="(item,index) in howTodo" v-bind:class="{active:index === 0}">
                            <a>{{item.name}}</a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown">我瞅瞅<span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                              <li><router-link to="/sider/nav1">/sider/nav1路由</router-link></li>
                              <li><router-link to="/sider/nav2">/sider/nav2路由</router-link></li>
                            </ul>
                        </li>
                    </ul>
                  
                  <form class="navbar-form navbar-left pull-right" role="search">
                      <select v-model="select" class="form-group">
                          <option v-for="item of selectList">{{item}}</option>
                      </select>
                      <div class="form-group">
                          <input type="text" class="form-control" placeholder="搜一搜你想吃啥" v-model="select">
                      </div>
                      <button type="submit" class="btn btn-default">我搜</button>
                  </form>

                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
      name: 'hello',
      data () {
        return {
          howTodo: [
            {
              id: 1,
              name: '买什么'
            },
            {
              id: 2,
              name: '去哪买'
            },
            {
              id: 3,
              name: '为啥买'
            }
          ],
          select: '',
          selectList: ['hahahaha','hehehehe','lulululu']
        }
      },
      methods:{
        
      },
      created:function(){
        //console.log('created')
        this.created = 'already created！'
        this.$on('to-parent',el => {
          console.log(el)
        })
      },
      destroyed:function(){
        //console.log('destroyed')
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
