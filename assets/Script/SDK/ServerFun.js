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

        getPlayerNum(sucFun){

            wx.cloud.callFunction({
                // 要调用的云函数名称
                name: 'getPlayerNum',
               
                success: res => {                   
                    var resDate = res.result.data                   
                    var playerNum = resDate.playNum
                    sucFun(playerNum);                 
                },
              
              })    
        },

        createRoom(callbackFun){

          

            
            var objRoom = {
                maxMemberNum:2,
                startPercent:0,
                needUserInfo:true,
                gameLastTime:3600,
                roomExtInfo:'this good game',
                memberExtInfo:'hahhaha',
                needGameSeed:true,               
            };

            cc.GameServer.createRoom(objRoom).then(params => {
                console.log("create room success........");
                console.log(params);  
                callbackFun(params);
                /*var jionRoomSucFun = function (params) {
                    console.log("jion room success")
                    console.log(params)
                    
                }
                var failjionRoomFun = function (params) {
                    console.log("jion rrom fail +++++++ ")
                }
                var jionRoomInfo = {
                    accessInfo:params.data.accessInfo,
                    memberExtInfo:"wo shi onwer",
                    success:jionRoomSucFun,
                    fail:failjionRoomFun,

                };
                cc.GameServer.joinRoom(jionRoomInfo)*/         

            })
            .catch(params=>{
                console.log("create room fail ........");
                console.log(params);              

            })

        },
    
   

});

 module.exports = {ServerFun};
