<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "darkgray",
    },
  },
  data() {
    return {
      //isActive: true,
    };
  },
  computed: {
    isActive() {
      //indexOf可行，但includes更好
      //第一种写法
      // return this.$route.path.indexOf(this.path) !== -1;
      //第二种写法(推荐)
      return this.$route.path.includes(this.path);
      //第三种写法(不推荐)
      // return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>