<template>
  <div class="container">
    <!-- 导航组件 -->
                         <!--@事件名="逻辑"  -->                                             <!-- 如果是user组件就不显示  -->
    <van-nav-bar @click-right="$router.push('/search')" fixed title="黑马头条" right-text="搜索" v-if="$route.path!== '/user'"></van-nav-bar>
    <!-- 二级路由容器 -->
                                <!-- 如果是user组件就添加一个noTop class  -->
    <div class="my-wrapper" :class="{noTop: $route.path === '/user'}">
      <router-view></router-view>
    </div>
    <!-- 标签栏组件 -->
    <!-- route 表示开启路由模式 -->
     <van-tabbar route >
      <!-- router-link  to  -->
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>>
