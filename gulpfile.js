var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    envify = require('envify'),
    uglifyify = require('uglifyify'),
    source = require('vinyl-source-stream'),
    webserver = require('gulp-webserver'),
    minimist = require('minimist'),
    buffer = require('gulp-buffer'),
    uglify = require('gulp-uglify'),
    browserifyCss = require('browserify-css'),
    gutil = require('gulp-util');

var src = './source',
    app = './builds/app',
    options = minimist(process.argv),
    environment = options.environment || 'development';

function handleError(err) {
    console.error('Error!', err.message);
    this.emit('end');
}

gulp.task('js', function () {
    return browserify(src + '/js/app.js', { debug: true })
        .on('error', handleError)
        .transform(babelify, { presets: ["env", "react", "stage-0"] })
        .on('error', handleError)
        .transform(browserifyCss)
        .on('error', handleError)
        .bundle()
        .on('error', handleError)
        .pipe(source('app.js'))
        .pipe(gulp.dest(app + '/js'));
});

gulp.task('deploy', function () {
    return browserify(src + '/js/app.js', {
        debug: true, transform: [
            ['envify', { NODE_ENV: 'production', global: true }]
        ]
    })
        .on('error', handleError)
        .transform(babelify, { presets: ["env", "react", "stage-0"] })
        .on('error', handleError)
        .transform(envify)
        .on('error', handleError)
        .transform(uglifyify)
        .on('error', handleError)
        .transform(browserifyCss)
        .on('error', handleError)
        .bundle()
        .on('error', handleError)
        .pipe(source('cat-client.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(app + '/dist/'));
});

gulp.task('html', function () {
    gulp.src(app + '/**/*.html');
});

gulp.task('css', function () {
    gulp.src(app + '/css/*.css');
});

gulp.task('jpg', function () {
    gulp.src(app + '/images/*.jpg');
});

gulp.task('png', function () {
    gulp.src(app + '/images/*.png');
});

gulp.task('watch', function () {
    gulp.watch(src + '/js/**/**/*.js', ['js']);
    gulp.watch(app + '/css/**/*.css', ['css']);
    gulp.watch(app + '/images/**/*.jpg', ['jpg']);
    gulp.watch(app + '/images/**/*.png', ['png']);
    gulp.watch([app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function () {
    gulp.src(app + '/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8912
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'jpg', 'webserver']);

gulp.task('build', ['html', 'js', 'css', 'jpg']);