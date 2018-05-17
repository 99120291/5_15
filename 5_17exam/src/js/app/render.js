define([
    'jquery',
    'handlebars'
], function($, handlebars) {

    function render(data, sour, tar) {
        var source = sour.html();
        var template = handlebars.compile(source);
        var html = template(data);
        tar.append(html)
    }

    return render

});