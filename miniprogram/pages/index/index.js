const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  //获取输入的内容
  myIpt(res){
    var vlu=res.detail.value;
    //console.log(vlu)
    db.collection("goods").where({
      //如何在ifmt中找到包含这一字段的商品信息
      category:vlu
    }).get()
    .then(res=>{
      console.log(res)
    })
  },

//按钮筛选功能
  lookfor_sm(){
    db.collection("goods").where({
      category:"数码"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },
  lookfor_fs(){
    db.collection("goods").where({
      category:"服饰"
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },
  lookfor_sj(){
    db.collection("goods").where({
      category:"书籍"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },
  lookfor_sb(){
    db.collection("goods").where({
      category:"手办"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },
  lookfor_xz(){
    db.collection("goods").where({
      category:"鞋子"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },
  lookfor_mp(){
    db.collection("goods").where({
      category:"门票"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },
  lookfor_qt(){
    db.collection("goods").where({
      category:"其他"
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        dataArr:res.data
      })
    })
  },


  /*
  getData(){
    wx.cloud.callFunction({
      name:"goodsList"
    }).then(res=>{
      console.log(res)
    })
  },
  */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 跳转至details页面
   */
  redirectToDetails: function () {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  }

})