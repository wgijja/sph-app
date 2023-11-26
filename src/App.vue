<template>
    <div id="app">
        <Header></Header>
        <!-- 路由组件的出口 -->
        <router-view></router-view>

        <!-- 在home或者search下显示，在登陆与注册时隐藏 -->
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
    name: "App",
    components: { Header, Footer },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
