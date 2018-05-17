require(["jquery", "bscroll", "render"], function($, bscroll, render) {
    $.ajax({
        url: "/api/data",
        dataType: "json",
        success: function(res) {
            render(res, $("#tmp_list"), $("#list"))
            $("#list li").eq(0).addClass("active")

            var scroll = new bscroll("main", {
                scrollX: true
            })
            cli()
        }
    });
})

function cli() {
    $("#list li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
    })
}