/*
	1 less编译 压缩 合并
	2 js合并 压缩 混淆
	3 img复制
	4 html压缩

*/
'use strict';
	//引入gulp包
var gulp = require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano')
var concat=require('gulp-concat')
var uglify=require('gulp-uglify')
var htmlmin=require('gulp-htmlmin')
var browserSync=require('browser-sync')
//less编译转码 压缩
gulp.task('style',function () {
	//这里是执行style 任务自动执行的
	gulp.src(['styles/*.less','!styles/_*.less'])
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'))
	.pipe(browserSync.reload(
		{stream:true}
		));
});
//less合并 混淆压缩
gulp.task('js',function () {
	gulp.src('scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.reload(
		{stream:true}
		));
});
// 图片复制
gulp.task('image',function () {
	gulp.src('images/*.*')	
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload(
		{stream:true}
		));
});
gulp.task('html',function () {
	gulp.src('*.html')
	.pipe(htmlmin({collapseWhitespace: true,
		removeComments: true,
		removeAttributeQuotes: true}))	
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.reload(
		{stream:true}
		));
});
gulp.task('serve',function(){
	browserSync({
		port:2015,
		server:{
		baseDir:['dist']
		}
	} 
);
	gulp.watch('styles/*.less',['style'])
	gulp.watch('images/*.*',['image'])
	gulp.watch('scripts/*.js',['js'])
	gulp.watch('*.html',['html'])
});