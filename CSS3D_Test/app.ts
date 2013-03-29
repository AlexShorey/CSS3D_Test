///<reference path="CSS3D_Polyfill.d.ts" />

class Div3D {
    elm: HTMLElement;
    style: MSStyleCSSProperties;
    inc: number;

    width: number;
    height: number;

    constructor() {
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

    startUpdate() { this.updateLoop(); }

    updateLoop() {
        this.inc++;
        this.elm.style = CSS3D_Transform(this.elm.style, 'rotateY(' + this.inc % 360 + 'deg)');

        requestAnimationFrame(() => this.updateLoop());
    }

    onResize(e:UIEvent) {
        
    }
}

document.writeln("<script src='CSS3D_Polyfill.js'></script>");

var div3D: Div3D;

window.onload = () => {
    div3D = new Div3D();
    div3D.startUpdate();
};

window.onresize = (e:UIEvent) => {
    div3D.onResize(e);
}