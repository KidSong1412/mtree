var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Red = (function (_super) {
    __extends(Red, _super);
    function Red() {
        return _super.call(this) || this;
    }
    Red.Shared = function () {
        if (Red.shared == null) {
            Red.shared = new Red();
        }
        return Red.shared;
    };
    Red.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Red.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        egret.Tween.get(this.y_red).wait(2000).to({ "visible": true }, 500);
        this.m_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleMask, this);
    };
    Red.prototype.handleMask = function () {
        this.parent.removeChild(this);
    };
    return Red;
}(eui.Component));
__reflect(Red.prototype, "Red", ["eui.UIComponent", "egret.DisplayObject"]);
