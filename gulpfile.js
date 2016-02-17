// include gulp
var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var runSequence = require('run-sequence'); 

var depsJS  = ['bower_components/angular/angular.min.js',
				'bower_components/angular-route/angular-route.min.js',
				'bower_components/firebase/firebase.js',
				'bower_components/angularfire/dist/angularfire.min.js',
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.min.js'];

var appJS  = ['src/scripts/app.js',
				'src/scripts/services/dataBase.js',
				'src/scripts/controllers/HomeController.js',
				'src/scripts/controllers/ContactController.js'];

//tasks
gulp.task('devDeps', function() 
{
  var depsjs = gulp.src(depsJS);
  return depsjs.pipe(concat('bowerDependencies.js'))
  				.pipe(gulp.dest('src'));
});

gulp.task('devJS', function() 
{
  var js = gulp.src(appJS);
  return js.pipe(concat('appDependencies.js'))
  				.pipe(gulp.dest('src'));
});

gulp.task('default', function(callback)
{
	runSequence('devDeps', 'devJS', callback);
});