import gulp from 'gulp';
import concat from 'gulp-concat';
import wrap from 'gulp-wrap';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import yargs from 'yargs';
import ngAnnotate from 'gulp-ng-annotate';
import templateCache from 'gulp-angular-templatecache';
import server from 'browser-sync';
import del from 'del';
import path from 'path';
import child from 'child_process';
import sourcemaps from 'gulp-sourcemaps';


const exec = child.exec;
const argv = yargs.argv;
const root = 'src/';
const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: `${root}/sass/*.scss`,
  nodescss: `./node_modules/`,
  fontawesome: `./node_modules/font-awesome/fonts/**/*`,
  templates: `${root}/app/**/*.html`,
  modules: [
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js',
    'firebase/firebase.js',
    'angularfire/dist/angularfire.js',
    'jquery/dist/jquery.js',
    'bootstrap/dist/js/bootstrap.js',
    'angular-animate/angular-animate.js',
    'ng-fx/dist/ng-fx.js',
    'angular-utils-pagination/dirPagination.js',
    'ng-table/bundles/ng-table.js',
    'underscore/underscore.js',
    'ng-tags-input/build/ng-tags-input.js',
    'angular-sanitize/angular-sanitize.js',
    'angular-socialshare/dist/angular-socialshare.js',
    'angular-smart-table/dist/smart-table.js',
    'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    'lodash/lodash.js',
    'angulargrid/angulargrid.js'

  ],
  static: [
    `${root}/index.html`,
    `${root}/img/**/*`
  ]
};

server.create();

gulp.task('clean', cb => del(paths.dist + '**/*', cb));

gulp.task('templates', () => {
  return gulp.src(paths.templates)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache({
      root: 'app',
      standalone: true,
      transformUrl: function (url) {
        return url.replace(path.dirname(url), '.');
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('modules', ['templates'], () => {
  return gulp.src(paths.modules.map(item => 'node_modules/' + item))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [paths.nodescss + 'bootstrap-sass/assets/stylesheets', paths.nodescss + 'font-awesome/scss', 'src/sass' ]
    }))
    .pipe(gulp.dest(paths.dist + 'css/'));
});

gulp.task('fonts', ['clean'], () => {
  return gulp.src(paths.fontawesome)
    .pipe(gulp.dest(paths.dist + 'fonts'));
});


gulp.task('scripts', ['modules'], () => {
  return gulp.src([
      `!${root}/app/**/*.spec.js`,
      `${root}/app/**/*.module.js`,
      ...paths.scripts,
      './templates.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('serve', () => {
  return server.init({
    files: [`${paths.dist}/**`],
    port: 4040,
    server: {
      baseDir: paths.dist
    }
  });
});

gulp.task('copy', ['clean'], () => {
  return gulp.src(paths.static, { base: 'src' })
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', ['serve', 'scripts', 'styles'], () => {
  gulp.watch([paths.scripts, paths.templates, paths.styles], ['scripts', 'styles']);
});

gulp.task('firebase', ['styles', 'scripts'], cb => {
  return exec('firebase deploy', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('default', [
  'clean',
  'copy',
  'scripts',
  'fonts',
  'styles',
  'serve',
  'watch'
]);

gulp.task('production', [

  'copy',
  'scripts',
  'styles',
  'fonts',
  'firebase'
]);
