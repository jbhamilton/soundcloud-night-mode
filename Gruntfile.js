module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-newer');

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'data/soundcloud.css' : 'data/soundcloud.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: [
                    'data/soundcloud.css'
                ]
            }
        },
        cssmin: {
            target: {
                files: {
                    'data/soundcloud.min.css' : 'data/soundcloud.css'
                }
            }
        },
        watch: {
            styles: {
                files : [
                    'data/soundcloud.scss'
                ],
                tasks : ['sass','postcss:dist','cssmin']
            }
        }
    });

    grunt.registerTask('default', ['babel','sass','postcss:dist','cssmin']);

};
