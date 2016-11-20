var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var preen = require('preen');

gulp.task('mainJS', function() {
    return gulp.src(mainBowerFiles('**/*.js',{
        "overrides":{
            "bootstrap":{
                "main":[
                    "./dist/js/bootstrap.min.js"
                ]
            }
        }
    }))
        .pipe(gulp.dest("app/js"));
});

gulp.task('mainCSS', function() {
    return gulp.src(mainBowerFiles('**/*.css',{
        "overrides":{
            "bootstrap":{
                "main":[
                    "./dist/css/bootstrap.min.css",
                    "./dist/css/bootstrap-theme.min.css"
                ]
            }
        }
    }))
        .pipe(gulp.dest("app/css"));
});

gulp.task('preen', function(cb) {
  preen.preen({}, cb);
});