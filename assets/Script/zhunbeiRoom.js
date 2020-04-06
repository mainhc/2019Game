// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.GameSDK.gameServerLogin();


        var playNumNode = this.node.getChildByName('PlayerNode').getChildByName('PlayerNum').getComponent(cc.Label);
        var sucFun = function (params) {
            var playNum = params;
            playNumNode.string = playNum;            
        }

        cc.ServerFun.getPlayerNum(sucFun);

        var btnCreatRoom = this.node.getChildByName('createRoomBtn');
        btnCreatRoom.on('click',this.onBtCreateRoom,this);

        var timeFunUpdata = function(){
            cc.GameServer.getRoomInfo()
            .then(params=>{
                console.log(params)
                this.updateRoomList(params)
            })
            .catch(params =>{
                console.log(" get Room info fail++++++++ ")
            })
        } 

        this.schedule(timeFunUpdata,5)
    },


    onBtCreateRoom(event){

        var callbackFun = function(params){

           
        }
        cc.ServerFun.createRoom(callbackFun);

    },

    updateRoomList(params){
        var akRoomInfoList = params.data.roomInfo;

        console.log(akRoomInfoList);
        var sclRoomList = this.node.getChildByName('sclRoomList');


    },



    // update (dt) {},
});
