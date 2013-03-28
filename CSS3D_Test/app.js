///<reference path="CSS3D_Polyfill.d.ts" />
var Div3D = (function () {
    function Div3D() {
        this.width = 256;
        this.height = 256;
        this.inc = 0;
        this.elm = document.createElement('div');
        document.body.appendChild(this.elm);
        this.elm.innerText = "something";
        this.elm.style.position = 'absolute';
        this.elm.style.transformStyle = 'preserve-3d';
        //this.elm.style.transform = "rotate(45deg) ";
        this.elm.style = CSS3D_Perspective(this.elm.style, '100px');
        this.elm.style = CSS3D_Transform(this.elm.style, 'rotateX(45deg) rotateY(45deg)');
        //this.elm.style += "-webkit-transform: rotate(45deg);";
        //this.elm.style += "-webkit-transform-style: preserve-3d;";
        //this.elm.style += "color: white;"
        //this.elm.style.position = 'absolute';
        //this.elm.style.margin = '0px';
        //this.elm.style.padding = '0px';
        this.elm.style.width = this.width + 'px';
        this.elm.style.height = this.height + 'px';
        //this.elm.style.left = window.innerWidth / 2 - this.width / 2 + 'px';
        //this.elm.style.top = window.innerHeight / 2 - this.height / 2 + 'px';
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
        console.log(this.inc % 360);
        //this.elm.style = this.style;
        this.elm.style.left = this.inc % window.innerWidth + "px";
        //this.elm.style = CSS3D_Perspective(this.elm.style, this.inc % window.innerWidth + "px");
        this.elm.style = CSS3D_Transform(this.elm.style, 'rotateY(' + this.inc % 360 + 'deg)');
        //document.body.style = CSS3D_Perspective(this.elm.style, window.innerWidth - (this.inc % window.innerWidth) + "px");
        //this.elm.style.transform = "rotateZ(" + this.inc % 360 + "deg)";
        //document.body.appendChild(this.elm);
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
