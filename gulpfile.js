var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var eslint = require('gulp-eslint');
var gulpIf = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');

// --- SASS themes --- //
gulp.task('sass-compile-themes', function() {
  return gulp.src(['./../themes/lisa/src/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['cover 99.5%'] }))
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('./../themes/lisa/css/'))
    .pipe(livereload());
});
// --- SASS themes end --- //


// --- SASS modules --- //
gulp.task('sass-compile-modules', function() {
  return gulp.src(['./../modules/custom/**/src/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['cover 99.5%'] }))
    .pipe(sourcemaps.write('.', { addComment: false }))
    .pipe(gulp.dest('./../modules/custom/**/css'))
    .pipe(livereload());
});
// --- SASS modules end --- //


// --- JS --- //
function isFixed(file) {
	return file.eslint != null && file.eslint.fixed;
}
//-- JS lint theme --
gulp.task('js-lint-themes', function(done) {
	gulp.src(['./../themes/lisa/src/js/**/*.js'])
		.pipe(eslint({
        plugins: ['prettier'],
 				rules: {
					'prettier/prettier': 'error',
					'consistent-return': ['off'],
					'no-underscore-dangle': ['off'],
					'max-nested-callbacks': ['warn', 3],
					'import/no-mutable-exports': ['warn'],
					'no-plusplus': ['warn', {
						'allowForLoopAfterthoughts': true
					}],
					'no-param-reassign': ['off'],
					'no-prototype-builtins': ['off'],
					'valid-jsdoc': ['warn', {
						'prefer': {
							'returns': 'return',
							'property': 'prop'
						},
						'requireReturn': false
					}],
					'no-unused-vars': ['warn'],
					'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'ignore', ':': 'ignore' } }]
        },
        extends: ['airbnb', 'plugin:prettier/recommended'],
        globals: ['jQuery', 'Drupal', 'drupalSettings', 'drupalTranslations', 'domready', '_', 'matchMedia', 'Backbone', 'Modernizr', 'CKEDITOR'],
        envs: ['browser', 'node', 'es6'],
        root: true,
        fix: true
		}))
		.pipe(eslint.format())
		.pipe(gulpIf(isFixed, gulp.dest('./../themes/lisa/js')))
		.pipe(livereload())
		done();
});

// --- JS end --- //

// --- Images --- //
gulp.task('image-compress', function(done) {
	gulp.src('./../themes/lisa/src/images/**')
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.jpegtran({ progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
      	plugins: [
        	{ removeViewBox: true },
        	{ cleanupIDs: false }
        ]
    	})
		], { verbose: true }))
		.pipe(gulp.dest('./../themes/lisa/images'))
		done();
});

// --- Images end --- //

// --- Watch --- //
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./../modules/custom/**/src/sass/**/*.scss', gulp.series('sass-compile-modules'));
  //gulp.watch('./../modules/custom/**/src/js/**/*.js', gulp.series('js-lint-modules'));
	gulp.watch('./../themes/**/src/sass/**/*.scss', gulp.series('sass-compile-themes'));
	gulp.watch('./../themes/**/src/js/**/*.js', gulp.series('js-lint-themes'));
});
// --- Watch end --- //
