<template>
<div>
  <divider>{{ $t('I have bottom line') }}</divider>
      <group title="set is-type=china-name">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>
    <group title="set keyboard=number and is-type=china-mobile">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
</div>
</template>


<script>
import { Divider, XInput } from 'vux'

export default {
  components: {
    Divider,
    XInput
  }
}
</script>