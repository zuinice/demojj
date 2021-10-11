<template>
  <div class="container">
    <div class="lef">
      <div class="lef_top">登录</div>
      <div class="lef_btm">注册</div>
    </div>
    <div class="rig">
      <div class="rig_top">
        <login-form />
      </div>
      <div class="rig_btm"></div>
    </div>
  </div>
</template>

<script>
import loginForm from "../../components/loginForm";
export default {
  components: {
    loginForm,
  },

  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
}
.lef {
  width: 35vw;
  height: 100vh;
  display: inline-block;
  overflow: hidden;
}
.lef_top {
  background-color: #252E33;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  height: 100vh;
  margin-top: -100vh;
  // transform: translateY(100vh);
  transition: transform 0.5s ease-in-out;
}
.lef_btm {
  background-color: #2A86BA;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  height: 100vh;
  margin-top: 100vh;
  transform: translateY(-100vh);
  transition: transform 0.5s ease-in-out;
}
.rig {
  width: 65vw;
  box-sizing: border-box;
  display: inline-block;
  height: 100vh;
  overflow: hidden;
}
.rig_top {
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/pictures/login.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: -100vh;
  transform: translateY(100vh);
  transition: transform 0.5s ease-in-out;
}
.rig_btm {
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/pictures/register.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 100vh;
  // transform: translateY(-100vh);
  transition: transform 0.5s ease-in-out;
}
</style>
