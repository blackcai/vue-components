const common = {
  data() {
    return {
      tableData: [],
      dialog: {
        addFormVisible: false,
        addFormState: false,
        formInfo: {}
      },
      pagination: {
        page: 1,
        size: 5,
        total: 0
      }
    }
  },
  methods: {
    setPagination(page, size, total) {
      this.pagination.page = page
      this.pagination.size = size
      this.pagination.total = total
    },
    success() {
      this.getList()
    }
  }
}

export default common
