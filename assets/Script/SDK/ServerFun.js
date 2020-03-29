var ServerFun = cc.Class({

        //更新服务器人数
        playerNumUpdate(addorDel){

            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'gameLogin11',
                // 传递给云函数的参数
                data: {
                     login: addorDel,                    
                },
                success: res => {
                    // output: res.result === 3
                    console.log("login success++++++1");
                  

                },
                fail: err => {
                    // handle error
                },
                complete: () => {
                    // ...
                }
              })
        },

        getPlayerNum(){

            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'getPlayerNum',
               
                success: res => {

                    console.log(res);
                    var resDate = res.result.data
                    console.log(resDate)
                    var playerNum = resDate.playNum
                    console.log(playerNum)

                    console.log("login success++++++1");
                },
              
              })       

        },
    
   

});

 module.exports = {ServerFun};
