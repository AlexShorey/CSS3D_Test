function CSS3D_Transform(s, fill) {
    s.transform = fill;
    s.WebkitTransform = fill;
    s.MozTransform = fill;
    return s;
}

function CSS3D_Perspective(s, fill) {
    s.WebkitPerspective = fill;
    s.WebkitPerspectiveOrigin = "50% 50%";
    s.MozPerspective = fill;
    s.MozPerspectiveOrigin = "50% 50%";
    return s;
}