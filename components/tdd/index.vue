<template>
    <el-card>
      <div slot="header">云服务器推广</div>
      <template v-for="(item, index) in tuiguang">
        <div v-for="(child, j) in item">
          <a :href="child.src">{{ child.name }}</a>
        </div>
        <el-divider></el-divider>
      </template>
    </el-card>
</template>

<script>
  export default {
    name: 'ad',
    data() {
      return {
        tuiguang: {
          aliyun: [
            { name: '阿里云新人领卷', src: "https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=yia6gp9u&utm_source=yia6gp9u" }
          ],
          tencent: [
            { name: '腾讯云双十一大庆，价格比阿里云更低！！！（墙裂推荐，站主腾讯云服务器占多数！）', src: 'https://cloud.tencent.com/act/double11/reserve?spread_hash_key=FHvZN7' },
            { name: '新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。', src: 'https://cloud.tencent.com/act/cps/redirect?redirect=1040&cps_key=65734780ccad572676d8cbc9b8645f65&from=console' },
            { name: '助力产业智慧升级，云服务器首年88元起，更有千元代金券礼包免费领！', src: 'https://cloud.tencent.com/act/cps/redirect?redirect=1048&cps_key=65734780ccad572676d8cbc9b8645f65&from=console' },
            { name: '云数据库MySQL基础版1元体验，为中小企业量身打造，单节点架构，保证数据可靠性', src: 'https://cloud.tencent.com/act/cps/redirect?redirect=1034&cps_key=65734780ccad572676d8cbc9b8645f65&from=console' },
            { name: '助力中小微企业上云，满足轻量级Web应用需求，云服务器钜惠 166元/年起', src: 'https://cloud.tencent.com/act/cps/redirect?redirect=1045&cps_key=65734780ccad572676d8cbc9b8645f65&from=console' },
            { name: '推广者专属福利，新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。', src: 'https://cloud.tencent.com/act/cps/redirect?redirect=1025&cps_key=65734780ccad572676d8cbc9b8645f65&from=console' }
          ]
        }
      }
    }
  }
</script>
