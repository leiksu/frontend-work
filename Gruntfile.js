module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				mangle: false
			},
			my_target: {
				files: {
					'build/appViewModel.min.js': ['scripts/appViewModel.js'],
					'build/customHandlers.min.js': ['scripts/customHandlers.js'],
					'build/init.min.js': ['scripts/init.js']
				}
			}
		},
		qunit: {
			all: ['scripts/unittest/**/*.html']
		},
		jshint: {
			all: ['Gruntfile.js', 'scripts/appViewModel.js', 'scripts/customHandlers.js', 'scripts/init.js']
		}		
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'qunit', 'jshint']);
};
