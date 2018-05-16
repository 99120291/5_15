define(["jquery"], function($) {
    $("#btn").on("click", function() {
        alert("汪汪汪")
    })

    function sum(a, b) {
        console.log(a + b)
    }
    return sum
})