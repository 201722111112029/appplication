<template>
  <div>
    <x-header>我的应用空间</x-header>
    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>   
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/heart.png">
        <span slot="label">聊天</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/space.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/approval.png">
        <span slot="label">管理</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/manage.png">
        <span slot="label">应用</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, XHeader, Swiper } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    Swiper
  }
}     
data () {
    return {
      demo01_list: baseList,
      demo01_index: 0,
      swiperItemIndex: 1
    }
  }
</script>