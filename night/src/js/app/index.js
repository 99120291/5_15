require(["jquery", "handlebars", "util"], function($, handlebars, util) {
    $.ajax({
        url: "/api/data",
        dataType: "json",
        success: function(data) {
            $("body").html(util($("#tmp"), data))
        },
        error: function(error) {
            console.warn(error)
        }
    });
})