// components/searchbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listtitle:{
      type: String,
      value: "列表"
    },
    searchUrl:{
      type: String,
      value:""
    },

    pageCount:{
      type: Number,
      value: 5
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    stringValue:"",
    showPanel: false,
    cursor:0,
    idnames:[]
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

    searchToPage(searchKey){
      let that = this
      wx.request({
        url: this.data.searchUrl,
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        data: {
          key: searchKey,
          offset: this.data.cursor,
          count: this.data.pageCount,
          checkcode: "Abc"
        },
        success(res) {
          if (res.data.data) {
            that.setData({
              idnames: res.data.data,
              showPanel: true
            })
          } else {
            that.setData({
              idnames: [],
              showPanel: false
            })
          }
        }
      })
    },

    inputSearchTyping(e) {
      if (e.detail.value.length < 3){
        this.setData({
          showPanel: false
        })
        return
      }

      this.data.cursor = 0
      this.searchToPage(e.detail.value)
      this.setData({
        stringValue: e.detail.value,
      });
      this.triggerEvent('valueChangeEvent', {value: this.data.stringValue})
    },
    onSearchItemTap(e) {
      if (e.target) {
        this.setData({
          stringValue: e.target.dataset.nm,
          showPanel: false,
        })
        this.triggerEvent('valueChangeEvent', { value: this.data.stringValue })
      }
    },
    onNextPage(e){
      this.data.cursor += this["pageCount"]
      this.searchToPage(this.data.stringValue)
    }
  },

})
