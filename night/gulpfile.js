var gulp = require("gulp"),

    sever = require("gulp-webserver");

var data = require("./src/data/data.json");

gulp.task("default", function() {
    gulp.src("src")
        .pipe(sever({
            port: 8080,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === "/api/data") {
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})