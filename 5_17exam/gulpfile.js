var gulp = require("gulp"),

    mincss = require("gulp-clean-css"),

    sass = require("gulp-sass"),

    server = require("gulp-webserver");

var data = require("./src/data/data.json");
gulp.task("css", function() {
    gulp.src("src/css/*.scss")
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest("src/css"))
})

gulp.task("server", ["css"], function() {
    gulp.src("src")
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                if (req.url === "/api/data") {
                    res.end(JSON.stringify(data));
                }
                next()
            }
        }))
})

gulp.task("watch", function() {
    gulp.watch("src/css/*.scss", ["css"])
})

gulp.task("default", ["watch", "server"])