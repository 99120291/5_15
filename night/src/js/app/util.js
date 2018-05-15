define(['jquery', "handlebars"], function($, handlebars) {
    function render(id, data) {
        var source = id.html();
        var template = handlebars.compile(source);
        handlebars.registerHelper("addIndex", function(i) {
            return i + 1
        })
        var html = template(data);
        console.log(html)
        return html
    }
    return render
});