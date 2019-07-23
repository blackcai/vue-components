<template>
  <div class="pagination-container" :style="vstyle" v-if="total">
    <el-pagination
      v-if="total > pageSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pagination.currentPage"
      :page-sizes="pageSizes"
      :page-size="pagination.pageSize"
      :layout="layout"
      :total="total"
      :small="small"
      :background="background"
    >
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'Pagination',
    data() {
      return {
        pagination: {
          pageSize: this.pageSize,
          currentPage: this.currentPage
        }
      }
    },
    props: {
      currentPage: {
        type: Number,
        default: 1
      },
      pageSizes: {
        type: Array,
        default: () => [5, 10, 20, 40, 80, 100, 200, 500]
      },
      pageSize: {
        type: Number,
        default: 10
      },
      small: { // 小型分页
        type: Boolean,
        default: false
      },
      layout: {
        type: String,
        default: 'prev, pager, next, jumper, sizes, total'
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
      },
      background: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleChange() {
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
        this.$emit('change', { page: this.pagination.currentPage, size: val })
      },
      handleCurrentChange(val) {
        this.$emit('change', { page: val, size: this.pagination.pageSize })
      }
    },
    watch: {
      currentPage(news) {
        this.pagination.currentPage = news
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination-container {
  }
</style>
