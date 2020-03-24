var cGameSdk = require("GameSDK").GameSDK; 

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        if(cc.GameSDK == null)
        {
            cc.GameSDK = new cGameSdk;

            var pSelf = this;
            var sucFun = function(){
                pSelf.gameLoginSuc();
            }
            var failFun = function(){
                console.log("+++++++login fail");
            }

            cc.GameSDK.gameLogin(sucFun,failFun);
           
        }

        cc.main =this;
       
    },

    //这里是登陆成功
    gameLoginSuc:function(){
        if (cc.GameServer == null)
        {
            cc.GameServer = cc.GameSDK.gameServerManager()

            cc.director.loadScene("zhunbeiRoom");
        }
    },

    // called every frame
    update: function (dt) {

    },
});
