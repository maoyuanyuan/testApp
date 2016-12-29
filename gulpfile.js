const gulp=require('gulp');
const loadPlugins=require('gulp-load-plugins')();

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
	    .pipe(loadPlugins.clean())

});

//代码检查
/*gulp.task('checkCode',function() {
   return ulp.src('./src/js/*.js').pipe(jshint())

})*/


//压缩js
gulp.task('compressJS',['del'],function() {
   // console.log('hi,gulp');
    gulp.src('./src/js/*.js')       
        .pipe(loadPlugins.uglify())
        .pipe(loadPlugins.rename({
        	suffix:".qq",  //更改后缀
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


//创建md5(hash)文件，防止缓存数据
gulp.task('hash',['del'],function() {
     return gulp.src('./src/js/*.js')
            .pipe(loadPlugins.rev())
            .pipe(gulp.dest('./dist/js'))
            .pipe( loadPlugins.rev.manifest() )
        	.pipe( gulp.dest( './rev' ) );

});


gulp.task('revCollector', function () {
    return gulp.src(['./rev/*.json', './views/*.html'])
        .pipe( loadPlugins.revCollector({
            replaceReved: true,
            dirReplacements: {                
                '../src/js/': './js/'
            }
        }) )
        .pipe( gulp.dest('./dist') );
});




gulp.task('default',['server2','watch2']);













