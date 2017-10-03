var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("compile", function () {
  return gulp.src("src/main/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('index',function(){
	return gulp.src('src/main/index.html')
		.pipe(gulp.dest('dist'));
});


gulp.task('lib',function(){
	return gulp.src([
		'node_modules/angular/angular.js',
		'node_modules/systemjs/dist/system.js',
		'node_modules/systemjs-plugin-babel/plugin-babel.js',
		'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
		])
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['compile', 'lib', 'index']);