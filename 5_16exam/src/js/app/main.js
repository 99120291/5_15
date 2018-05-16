require.config({
    paths: {
        "jquery": "../libs/jquery-3.3.1.min",
        "index": "../app/index"
    },
    shim: {
        "util": {
            // deps: ["jquery"]
        }
    }
})

require(["index"])