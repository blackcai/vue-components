<template>
  <div class="pagination-container" :style="vstyle">
    <el-pagination
      v-if="total > size"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pagination.page"
      :page-sizes="pageSizes"
      :page-size="pagination.size"
      :layout="layout"
      :total="total"
      :small="small">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'pagination',
    data() {
      return {
        pagination: {
          size: this.size,
          page: this.page
        }
      }
    },
    props: {
      page: {
        type: Number,
        default: 1
      },
      pageSizes: {
        type: Array,
        default: () => [5, 10, 20, 40, 80, 100, 200, 500]
      },
      size: {
        type: Number,
        default: 10
      },
      small: { // 小型分页
        type: Boolean,
        default: false
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      total: {
        type: Number,
        default: 1
      },
      searchApi: {
        type: Function,
        default: null
      },
      vstyle: {
        type: String,
        default: 'margin-top:30px'
      }
    },
    methods: {
      handleChange() {
      },
      handleSizeChange(val) {
        this.pagination.size = val
        this.$emit('change', { page: this.pagination.page, size: val })
      },
      handleCurrentChange(val) {
        this.$emit('change', { page: val, size: this.pagination.size })
      }
    },
    watch: {
      page(news) {
        this.pagination.page = news
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  .pagination-container {
  }
</style>
