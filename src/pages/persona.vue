<template>
  <div>
    <billboard 
      headline="Emotional Guidelines for commit Git version!"
      subline="An emoji guide for your commit message"
      :btnGetStart="{ btnName: `Try it`, show: true, link: `/`, class: `is-danger` }"
    />
    <br>
    <message
      headline="🤟 Make it easy to read and write commit for review code."
      subline="คุณเคยประสบปัญหาการ commit code ของลูกทีมของคุณไหม เช่น fix code , hot fix , wtf, $^%$!#Y"
      article="เปลี่ยน culture ในทีม เเละเปลี่ยนนิสัยคุณสะ!"
      content="คุณไม่จำเป็นต้องใช้ commit code ตามเราหรอกของเเค่คุณตั้งชื่อ commit ให้สื่อความหมายเเละเป็นที่รับรู้ของคนภายในทีมเองก็เพียงพอเเล้ว"
    />
    <br><h3 class="is-size-3 has-text-centered">......</h3><br>
    <div class="columns">
      <!-- <div class="column"> -->
        <div v-for="(item, index) in 10" :key="index"><images /></div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import images from '@/components/images'
import billboard from '@/components/billboard'
import message from '@/components/message'
export default {
  components: {
    billboard,
    message,
    images
  }
}
</script>
