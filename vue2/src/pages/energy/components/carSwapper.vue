<template>
  <div class="car-swapper-container">
    <!-- 轮播图 -->
    <div class="car-swapper-detail">
      <!-- 图片展示 -->
      <div
        class="car-swapper-item"
        v-for="(item, index) in swapperList"
        :key="index"
        v-show="index === currentIndex"
      >
        <img :src="item" alt="">
      </div>
      <!-- 左边按钮 -->
      <div
        class="car-swapper-left-arrow"
        @mouseenter="hoverArrow('leftHover', true)"
        @mouseleave="hoverArrow('leftHover', false)"
        @click="changeIndex(currentIndex - 1)"
      >
        <img src="../../../assets/gray-bg-left-arrow.png" alt="" v-if="!leftHover">
        <img src="../../../assets/orange-bg-left-arrow.png" alt="" v-else>
      </div>
      <!-- 右边按钮 -->
      <div
        class="car-swapper-right-arrow"
        @mouseenter="hoverArrow('rightHover', true)"
        @mouseleave="hoverArrow('rightHover', false)"
        @click="changeIndex(currentIndex + 1)"
      >
        <img src="../../../assets/gray-bg-right-arrow.png" alt="" v-if="!rightHover">
        <img src="../../../assets/orange-bg-right-arrow.png" alt="" v-else>
      </div>

      <!-- 底部下标 -->
      <div class="car-swapper-index">
        <span
          v-for="(item, index) in swapperList"
          :key="item"
          :class="currentIndex === index ? 'car-swapper-index-active' : 'car-swapper-index-normal'"
          @click="changeIndex(index)"
        >
          {{ index }}
        </span>
      </div>

      <!-- 底部广告栏 -->
      <div class="car-swapper-ad-wrapper">
        北京大兴奥迪A4L优惠高达5.5万元预购从速
      </div>
    </div>

    <!-- 新闻列表 -->
    <div class="car-swapper-news">
      <div class="car-swapper-news-title">
        配置升级 试驾2021款凯迪拉克XT5/XT6
      </div>

      <div
        v-for="(item, index) in textList"
        :key="index"
        class="car-swapper-news-item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'car-swapper',
  data () {
    return {
      swapperList: [
        'data:image/jpeg;base64,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',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2329770250,1897745847&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=395380977,272417941&fm=26&gp=0.jpg',
      ],
      currentIndex: 0,
      leftHover: false,
      rightHover: false,
      textList: [
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
        '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
      ]
    }
  },
  methods: {
    changeIndex(index) {
      if (index < 0) {
        index = this.swapperList.length - 1
      }
      if (index > this.swapperList.length - 1) {
        index = 0
      }
      this.currentIndex = index
    },
    hoverArrow(key, type){
      this[key] = type;
    }
  },
};
</script>

<style lang="scss">
.car-swapper{
  &-container{
    width: 100%;
    height: 354px;
    display: flex;
  }
  &-detail{
    width: 738px;
    height: 100%;
    position: relative;
  }
  &-item {
    width: 100%;
    height: 100%;

    img{
      width: 100%;
      height: 100%;
    }
  }
  &-left-arrow, &-right-arrow{
    width: 34px;
    height: 70px;
    position: absolute;
    top: 120px;
    cursor: pointer;

    img{
      width: 100%;
      height: 100%;
    }
  }
  &-left-arrow{
    left: 10px;
  }
  &-right-arrow{
    right: 10px;
  }
  &-ad-wrapper{
    width: 100%;
    height: 70px;
    background: #000000;
    opacity: 0.59;
    font-size: 26px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:0;
  }
  &-index{
    width: 100%;
    display: flex;
    padding-right: 10px;
    position: absolute;
    justify-content: flex-end;
    bottom: 80px;

    span{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 4px;
      width: 40px;
      height: 20px;
      font-size: 16px;
      font-weight: 500;
      color: #FFFFFF;
      cursor: pointer;
    }
    &-active{
      background: #FF7819;
    }
    &-normal{
      background: #464646;
    }
  }
  &-news{
    flex: 1;
    margin-left: 40px;

    &-title{
      font-size: 20px;
      color: #333333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &-item{
      height: 21px;
      margin-top: 20px;
      padding-left: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      position: relative;
    }
    &-item:after{
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #C3C3C3;
      position: absolute;
      top: 7px;
      left: 0;
    }
  }

}
</style>
