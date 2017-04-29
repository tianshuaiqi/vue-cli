# vue-cli 
新项目有向vue靠拢的倾向，故抽了一些零碎时间学习了一下，分享本简易教程，方便童鞋们更快速上手vue
****
### Author:Tian Shuaiqi
### E-mail:tianshuaiqi@360.cn
****
## 目录
* [About Vue-cli](#vue-cli)
* [About vue-router](#About vue-router)
* [About vue-resource](#About vue-resource)
* [About vue-spinner](#About vue-spinner)
* [Learn communication](#Learn communication)
* [About vue-vuex](#About vue-vuex)
###  About Vue-cli
就是用着得劲 <br >
###### \## 安装node
```
https://nodejs.org/en/download/ 
```
###### \## 从github上clone vue-cli 简单粗暴
```
https://github.com/vuejs/vue-cli.git 
```
###### \## 运行 vue-cli 
```
npm run dev 
```
###### \## 相信同学们就看到了vue-cli的欢迎界面了,俩字,怪好看
```
let us begin!
```
### About vue-router
###### \##  先注释掉eslit，不然恶心死，在build文件夹下的webpack.base.config.js里面哟 <br >
![note-eslit.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/note_eslit.png)<br>
###### \##  先看整体目录吧 <br >
![filet.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/file.png)<br>
###### \##  看看我们的页面 <br >
![sider.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/sider.png)<br>
###### \##  页面左侧 nav 代码<br >
![App.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/App.png)<br>
###### \##  页面右侧 content 代码,上图的\<contentr>\</contentr>组件就是下图所示，\<router-view>\</router-view>是非常重要的<br >
![content.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/content.png)<br>
###### \##  不管是vue,react,angular系列,所有单页面应用路由配置是第一步，自己当时写的时候，都是即兴起名字，所以别走眼了，正如我们所见，Hello组件和Next组件是一级路由，见下图 (这是整个路由的配置)<br >
![router.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/router.png)<br>
###### \##  一级路由看完了，我们去看看二级路由吧(先看看页面)<br >
![table.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/table.png)<br>
###### \##  先看二级路由的代码<br >
![table-code.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/table_code.png)<br>
###### \##  二级路由的视图<br >
![table-view.png](https://github.com/tianshuaiqi/vue-cli/blob/tt-dev/imager/table_view.png)<br>
###### \##  路由这块就懂了撒，哈哈哈，简单吧！<br >
## About vue-resource
处理vue异步http请求
###### \## 安装vue-resource
```
cnpm i vue-resource --save-dev
```
###### \## 使用vue-resource
```
Vue.use(VueResource)
```
###### \## 示例,注意删除我的那些变量
```
this.$http.jsonp('http://datainfo.duapp.com/shopdata/getGoods.php').then(
    res => {
        this.goodsBasicInfo.paper = res.body.length;
            if(res){
              this.loadingStatus = false	
            }

            let basicListData = $.extend(true,{},res.body); 
            let tmp = [];
            $.each(basicListData,(idx,item) => {
                tmp.push(item)
            })
        this.tableList = tmp;
    })
```
###### \## 使用get请求
```
this.$http.get('http:172.10.21.21:8080/example.php')
```
###### \## 使用post请求
```
this.$http.post('http:172.10.21.21:8080/example.php',this.sentParams)
```
###### \## 使用put请求
```
this.$http.put('http:172.10.21.21:8080/example.php' + this.id,this.sentParams)
```
###### \## 使用delete请求
```
this.$http.delete请求('http:172.10.21.21:8080/example.php' + this.sentParams)
```
## About vue-spinner
###### \## 安装vue-spinner
```
cnpm i vue-spinner --save-dev
```
###### \## 使用vue-spinner(详细可以百度，很多种样式，也可以自己用css3搞一个)
```
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
```
###### \## 插入组件(记得把这些变量都声明了，效果自己预览吧，哈哈哈)
```
<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
```
## Learn communication
###### \## parent to child
##### \## →→ 现在是在父组件内部，detail-show是子组件
```  
<template>
    <detail-Show :tell="{say}"></detail-Show>
    <button @click="changeNum">改变num的值</button>
</template>
<script>
    import DetailShow from './detail_show'
    export default { 
      data(){
          return {
              say:'儿子，你去叫妈妈吃饭',
              num:1
          }
       },
       methods:{
         changeNum:function(){
            this.num ++;
         } 
       },
       components:[
          DetailShow
       ]
    }
</script>
```
##### \## 让我们看看子组件怎么接受参数
```
<template>
	<div class="app row col-md-12">
		<div style="color:red">
			儿子听到了爸爸说了一句话：{{say}},已经说了 {{num}}{{$parent.num}} 次了
		</div>
	</div>
</template>
<script>
    export default{
        data(){
          return {
              say:'',
              num:0
          }
        },
        props:['tell'],
        created:function(){
          this.say = this.tell.say
        }
    }
</script>
```
##### \## 对于父：:tell="{say}"  tell代表父→子的对象集合，say是父内部变量；对于子：props:['tell']接受到tell，this.receive = this.say; 用receive变量接收一下,还可以通过$parent查看父组件的值
###### \## child to parent 通过$emit和事件
###### \## child组件 
```
<template>
	<div class="app row col-md-12">
		  <button @click='toparent' class="btn bp-btn-primary">父组件++</button>
	</div>
</template>
<script>
    export default{
        data(){
          return {
              info:{
                  age:8,
                  say: '儿子对爸爸说'
               }
          }
        },
        methods:{
          toparent:function(){
              this.$emit('to-parent',info)
          }
        }
       
    }
</script>
```
###### \## parent组件
```
<template>
    <div style="color:red">
			    {{say}},我今年{{age}}岁了
		</div>
    <detail-Show @to-parent="from_child"></detail-Show>
</template>
<script>
    import DetailShow from './detail_show'
    export default { 
      data(){
          return {
              say:'',
              age:''
          }
       },
       methods:{
         from_child:function(msg){
            this.say = msg.say;
            this.age = msg.age;
         }
       },
       components:[
          DetailShow
       ]
    }
</script>
```
###### \## 在我的github上有分页组件，大家可以查看一下
## About  vue-Vuerify 
###### \## vue-Vuerify 安装
```
cnpm i vue-vuerify --save-dev
```
###### \## vue-vuerify 使用
```
import Vuerify from 'vuerify'
Vue.use(Vuerify)
```
###### \## 代码（更多API请具体百度）
```
<template>
    <form class="form-horizontal form app_eat col-md-12" style="padding-top:15px">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <input type="password" v-model="conform">
        <input type="button" @click.prevent="handleSubmit">
    </form>
</template>
<script>
  expopt default{
     data(){
      return {
          name: '',
          username: '',
          password: '',
          conform: ''
      }
     },
     vuerify: {
        username: 'required',
        password: {
            test: /\w{4,}/,
            message: '至少四位字符'
          },
          conform: {
            test(val){
              return val === this.password
            },
            message: '密码不一样'
          }
		  },
      methods:{
        handleSubmit(){
            console.log(this.$vuerify.$errors)
            console.log(this.$vuerify.check())
        }
      }
  }
</script>
```
##  About vue-vuex
###### \## 暂时就说这么多吧，应该能满足大部分开发了，关于vuex后续再更新哈！可以致邮  tianshuaiqi@360.cn ，以后可能关于前端工程化会更新一些东西吧！
