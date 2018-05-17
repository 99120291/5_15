require.config({
    paths: {
        "jquery": "./libs/jquery-3.3.1.min",
        "handlebars": "./libs/handlebars-v4.0.11",
        "bscroll": "./libs/bscroll",

        "index": "./app/index",
        "render": "./app/render"
    }
})

require(["index"])