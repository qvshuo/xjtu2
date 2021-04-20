const db=wx.cloud.database()
//定义两个数组全局变量
var urlArr=[];
var filePath=[];
var campus=["","",""];
var category=["","","","","","",""];
// miniprogram/pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
//提交表单添加进数据库
  btnSub(res){
    //把对象传递给resValue
    var {ifmt,now,pre}=res.detail.value
    //传递给数据库、显示
    db.collection("goods").add({
      data:{
        ifmt:ifmt,
        now:now,
        pre:pre,
        campus:campus,
        category:category,
        photoPath:urlArr
      }
    })
    /*
    .then(res=>{
      filePath.forEach((item,idx)=>{
        var fileName=Date.now()+"_"+idx;
        this.cloudFile(fileName,item)
      })
    })
    */
    wx.navigateTo({
      url:"/pages/index/index",
    })
  },

  //选择照片，获取路径
  clickBtn(){
    wx.chooseImage({
      success:res=>{
        console.log(res)
        filePath=res.tempFilePaths
        filePath.forEach((item,idx)=>{
          var fileName=Date.now()+"_"+idx;
          this.cloudFile(fileName,item)
        })
      }
    })
  },

  //校区选择
  campus_xq(){
    campus[0]=campus[0]=="兴庆"?"":"兴庆";
    var bgColor = this.data.pageBackgroundColor11 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor11: bgColor
    });
  },
  campus_yt(){
    campus[1]=campus[1]=="雁塔"?"":"雁塔";
    var bgColor = this.data.pageBackgroundColor12 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor12: bgColor
    });
  },
  campus_cxg(){
    campus[2]=campus[2]=="创新港"?"":"创新港";
    var bgColor = this.data.pageBackgroundColor13 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor13: bgColor
    });
  },

  //类别选择
  category_sm(){
    category[0]=category[0]=="数码"?"":"数码";
    var bgColor = this.data.pageBackgroundColor21 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor21: bgColor
    });
  },
  category_fs(){
    category[1]=category[1]=="服饰"?"":"服饰";
    var bgColor = this.data.pageBackgroundColor22 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor22: bgColor
    });
  },
  category_sj(){
    category[2]=category[2]=="书籍"?"":"书籍";
    var bgColor = this.data.pageBackgroundColor23 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor23: bgColor
    });
  },
  category_sb(){
    category[3]=category[3]=="手办"?"":"手办";
    var bgColor = this.data.pageBackgroundColor24 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor24: bgColor
    });
  },
  category_xz(){
    category[4]=category[4]=="鞋子"?"":"鞋子";
    var bgColor = this.data.pageBackgroundColor25 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor25: bgColor
    });
  },
  category_mp(){
    category[5]=category[5]=="门票"?"":"门票";
    var bgColor = this.data.pageBackgroundColor26 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor26: bgColor
    });
  },
  category_qt(){
    category[6]=category[6]=="其他"?"":"其他";
    var bgColor = this.data.pageBackgroundColor27 == '#ffb6c1' ? '#f2f2f7' : '#ffb6c1';
    this.setData({
      pageBackgroundColor27: bgColor
    });
  },

  //上传至云端，封装
  cloudFile(fileName,path){
    wx.showLoading({
      title: '上传中...',
    })
    wx.cloud.uploadFile({
      cloudPath:fileName+".jpg",//生成路径，唯一性，绑定ID
      filePath:path
    }).then(res=>{
      urlArr.push(res.fileID)
      if(filePath.length==urlArr.length){
        this.setData({
          urlArr
        })
      }
      wx.hideLoading()
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})