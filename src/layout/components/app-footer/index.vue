<template>
<footer class="footer">
  <div class="l-col">
    <div class="content" v-for="item in navList" :key="item">
      <a :href="item.path" class="tags" >{{item.title}}</a>
    </div>
  </div>
  <div class="image"><img  src="@/assets/home_images/wx.jpg"/><br><p>官方微信</p></div>
  <div style="margin-top:10px; float:none;"><p class="content has-text-centered">{{introduce[0]}}<br>{{introduce[1]}}</p></div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: "/home",
            isToggle: false,
            introduce: ["服务电话：13488676955　地址：天津市武清区大黄堡镇大东路支线3号794室"," Copyright © 天津根华教育科技有限公司 版权所有"],
            navList: [
                {
                    title:"区块链简介",
                    path:"/",
                },{
                    title:"区块链咨询",
                    path:"/",
                },{
                    title:"联系我们",
                    path:"/",
                }],
        }
    }
}
</script>
<style  src='@/styles/bulma.css' scoped></style>
<style scoped>
.tags {
    background-color: #404040;
    margin-left:20px;
    float:left;
    font-size:18px;
    color:#807b7b;
}
.l-col{
    width:60%;
    height:70px;
}
.content{
    margin:auto;
    width:100%;
    margin-top:50px;
    color:#807b7b;
}
.image{
    width:80px;
    height:80px;
    float:right;
    margin-top:-100px;
    margin-right:80px;
    text-align: center;
    color:white;
 }
 .footer {
  background-color: #404040;
  padding: 3rem 1.5rem 6rem;
  height:150px;
}
a:hover{
    color:white;
    font-size:20px;
    color:white;
}
</style>

