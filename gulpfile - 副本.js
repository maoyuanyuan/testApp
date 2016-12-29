const gulp=require('gulp');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
//const jshint=require('gulp-jshint');
const rename=require('gulp-rename');
const del=require('gulp-clean');
const connect = require('gulp-connect');





/*
* gulp常用关键字：
* task 创建任务
* pipe 管道
* dest 生成目标文件夹
* watch 监听
* src   源文件路径
*/


//创建一个删除任务
gulp.task('del',function() {
	return gulp.src('./dist/js')
	    .pipe(del())

});

//代码检查
/*gulp.task('checkCode',function() {
   return ulp.src('./src/js/*.js').pipe(jshint())

})*/


//压缩js
gulp.task('compressJS',['del'],function() {
   // console.log('hi,gulp');
    gulp.src('./src/js/*.js')       
        .pipe(uglify())
        .pipe(rename({
        	suffix:".min",  //更改后缀
        	//prefix:"ok11111-"  //更改前缀

        }))
        .pipe(gulp.dest('./dist/js'))
});

//合并js
gulp.task('merge',function() {
   
   gulp.src('./src/js/*.js')
      // .pipe(jshint())
      // .pipe(jshint.reporter('default'))
       .pipe(concat('all.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./dist/js'))
});

gulp.task('merge2',['del'],function() {   
   gulp.src('./src/js/*.js')     
       .pipe(concat('all.js'))     
       .pipe(gulp.dest('./dist/js'))
});


gulp.task('watch',function() {

	gulp.watch(['./src/js/*.js'],['merge2','merge'])
})


//gulp启动环境
gulp.task('server1',function() {
     connect.server({	
        root: ['./dist'],  
	    port: 9999,
	    livereload: true
	  });

})

gulp.task('server2',function() {
     connect.server({	
        root: ['./views'],  
	    port: 8888,
	    livereload: true
	  });

})

gulp.task('watch2',function() {

	gulp.watch(['./views/*.html'],['html'])
})

gulp.task('html',function() {

    gulp.src('./views/*.html')
        .pipe(connect.reload())

});





gulp.task('default',['server2','watch2']);













