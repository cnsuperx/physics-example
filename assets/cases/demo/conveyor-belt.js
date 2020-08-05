cc.Class({
    extends: cc.Component,

    properties: {
        tangentSpeed: 5
    },

    // RigidBody碰撞回调
    onPreSolve: function (contact) {
        // 为传送带设置期望的切线速度
        contact.setTangentSpeed( this.tangentSpeed );
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
