//引入gulp依赖包
const gulp = require('gulp');


// 引入删除包
const del = require('del')

// 引入打包css需要的依赖包
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin')

// 引入打包html需要的依赖包
const htmlmin = require('gulp-htmlmin')

// 引入打包js需要的依赖包
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// 引入打包服务器需要的依赖包
const webserver = require('gulp-webserver')

// 设定css打包规范
const cssHandle = function() {
    // 指定需要在哪个文件夹中打包，需要打包的文件类型，执行自动添加前缀，执行压缩，指定压缩文件所放的地址
    return gulp.src('./src/css/*.css').pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('./dist/css'))
}

// 设置html打包规范
const htmlHandle = function() {

    return gulp.src('./src/pages/*.html').pipe(htmlmin({
        removeAttributeQuotes: true, //删除属性引号
        removeComments: true, //删除注释
        collapseBooleanAttributes: true, //删除布尔属性
        collapseWhitespace: true, //删除多余空格
        minifyCSS: true,
        minifyJS: true
    })).pipe(gulp.dest('./dist/pages'))
}

const jsHandle = function() {
    // 指定需要在哪个文件夹中打包，需要打包的文件类型，执行自动添加前缀，执行压缩，指定压缩文件所放的地址
    return gulp.src('./src/js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

// 设置服务器的打包规范
// const webserverHandle = function() {
//     return gulp.src('./dist')
//         .pipe(webserver({
//             host: '10.9.70.214',
//             post: '8000',
//             livereload: true, //热启动 也就是不需要刷新实时变化
//             open: './src/pages/index.html'
//         }))
// }

// 图片视频等不需要打包，直接移动
const imgHandle = function() {
    return gulp.src('./src/images/*.*')
        .pipe(gulp.dest('./dist/images'))
}

// 设置删除规范
const delHandle = function() {
    // 删除dist下的文件
    return del(['./dist'])
}

// 设置监听规范
const watchHandle = function() {
    // 参数一：监听文件路径
    // 参数二：监听后的回调函数。这里是重新生成
    gulp.watch('./src/css/*.css', cssHandle);
    gulp.watch('./src/pages/*.html', htmlHandle);
    gulp.watch('./src/js/*.js', jsHandle);
    gulp.watch('./src/images/*.*', imgHandle);

}

exports.htmlHandle = htmlHandle

// 导出  series是gulp中的方法，是按顺序执行小括号中的程序
// 默认执行程序
module.exports.default = gulp.series(
    /* 
        监听到变化以后，第一步先执行删除，再将最新的打包的文件生成导入
        */
    delHandle,
    gulp.parallel(cssHandle, htmlHandle, jsHandle, imgHandle),
    // webserverHandle,
    watchHandle,
)