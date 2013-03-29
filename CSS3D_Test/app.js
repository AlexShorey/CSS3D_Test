///<reference path="CSS3D_Polyfill.d.ts" />
var Div3D = (function () {
    function Div3D() {
        this.width = 256;
        this.height = 256;
        this.inc = 0;
        this.elm = document.createElement('div');
        document.body.appendChild(this.elm);
        document.body.style = CSS3D_Perspective(document.body.style, '800px');
        this.elm.innerText = "something";
        this.elm.style.position = 'absolute';
        //this.elm.style = CSS3D_Perspective(this.elm.style, '100px');
        this.elm.style = CSS3D_Transform(this.elm.style, 'rotateX(45deg) rotateY(45deg)');
        this.elm.style.width = this.width + 'px';
        this.elm.style.height = this.height + 'px';
        this.elm.style.background = 'rgba(38,255,0,0.5)';
        //this.elm.style += "webkitTransform: rotate(45deg);";
        this.style = this.elm.style;
    }
    Div3D.prototype.startUpdate = function () {
        this.updateLoop();
    };
    Div3D.prototype.updateLoop = function () {
        var _this = this;
        this.inc++;
        this.elm.style = CSS3D_Transform(this.elm.style, 'rotateY(' + this.inc % 360 + 'deg)');
        requestAnimationFrame(function () {
            return _this.updateLoop();
        });
    };
    Div3D.prototype.onResize = function (e) {
    };
    return Div3D;
})();
document.writeln("<script src='CSS3D_Polyfill.js'></script>");
var div3D;
window.onload = function () {
    div3D = new Div3D();
    div3D.startUpdate();
};
window.onresize = function (e) {
    div3D.onResize(e);
};
//@ sourceMappingURL=app.js.map
