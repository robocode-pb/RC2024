$(function() {
    $(".hour").knob({
        'min': 0,
        'max': 24,
        'bgColor' : '#333',
        'fgColor' : '#ffec03', 
        'displayInput' : false,
        'width' : 300,
        'height' : 300,
        'thickness': 0.3
    });
    $(".minute").knob({
        'min': 0,
        'max': 60,
        'bgColor' : '#333',
        'displayInput' : false,
        'width' : 200,
        'height' : 200,
        'thickness': 0.45
    });
    $(".second").knob({
        'min': 0,
        'max': 60,
        'bgColor' : '#333',
        'fgColor' : 'rgb(127, 255, 0)', 
        'displayInput' : false,
        'width' : 100,
        'height' : 100,
        'thickness': 0.3
    });

});
function clock() {
    var $s = $(".second"),
    $m = $(".minute"),
    $h = $(".hour");
    d = new Date(),
    s = d.getSeconds(),
    m = d.getMinutes(),
    h = d.getHours();
    $s.val(s).trigger("change");
    $m.val(m).trigger("change");
    $h.val(h).trigger("change");
    setTimeout("clock()", 1000);
}
clock();