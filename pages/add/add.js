//add.js

const app = getApp()

Page({
  data: {
    hip : "This is add page"
  },
  onLoad: function(){
    wx.getSystemInfo({
      success: res => {
        this.setData({
          hip : res.model + ' | ' + res.version
        })
      }
    })
  }
})