<template>
  <div class="component_msg_wrapper" v-if="isShow">
    <div class="component_msg" :class="`style_${type}`">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    type: {
      type: String,
      default: 'info',
    },
    content: {
      type: String,
      default: 'info提示',
    },
  },
  data () {
    return {
      isShow: true,
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = false
    }, 3000)
  },
}
</script>

<style scoped lang="scss">
  .component_msg_wrapper {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .component_msg {
    display: inline-block;
    border-radius: 5px;
    margin-top: 15px;
    padding: 10px 30px;
  }

  .style_info {
    border: 1px solid #66ccff;
    background-color: #cceeff;
    color: #2269cc;
  }

  .style_warn {
    border: 1px solid #ffac1f;
    background-color: #ffee96;
    color: #cc9110;
  }

  .style_danger {
    border: 1px solid #ff5312;
    background-color: #ffad92;
    color: #cc3c15;
  }
</style>
