
var gulp=require('gulp');
var nodemon=require('gulp-nodemon');
var mocha=require('gulp-mocha');
var uglify=require('gulp-uglify');
var minify=require('gulp-minify-css');
var concat=require('gulp-concat');
var jshint=require('gulp-jshint');

gulp.task('lint', function(){
	return gulp.src('public/app/*.js').pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
	
});
gulp.task('minify', function() {
	return gulp.src('public/css/site.css').pipe(minify()).
	pipe(gulp.dest('public')
	);
});

gulp.task('uglify',['lint','concat'],function(){
	return gulp.src('public/all.js')
	.pipe(uglify())
	.pipe(gulp.dest('public/min'));
	
});

gulp.task('concat', function(){
	return gulp.src('public/app/**/*.js').pipe(concat('all.js'))
	.pipe(gulp.dest('public'));
	
});

gulp.task('minifyAll' , function(){
	return gulp.watch(['public/css/*.css','public/app/**/*.js'],['uglify','minify']);
});

gulp.task('test', function() 
{
    return gulp.src('test.js', { read:false}).
pipe(mocha({reporter:'nyan'}));
});

gulp.task ('default' , function() {
	nodemon({  script:'app.js', 
		ext:'js',
		env: { PORT:8000}
                , ignore: ['./node_modules/']
	}).on('restart', function() { console.log('restarted') });
});


