module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Keep the plugins in alphabetical order
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/server',
                    src: ['**/*.js'],
                    dest: 'target/server'
                }]
            }
        },
        clean: ['target'],
        eslint: {
            options: {
                configFile: 'eslintrc'
            },
            main: {
                files: [{
                    expand: true,
                    src: ['src/server/**/*.js']
                }]
            }
        },
        execute: {
            main: {
                src: [
                    'target/server/index.js'
                ]
            }
        },
        jscpd: {
            main: {
                path: 'src/server'
            }
        },
        mocha_istanbul: {
            options: {
                scriptPath: './node_modules/.bin/babel-istanbul'
            },
            main: {
                src: 'target/server/**/__test__',
                options: {
                    root: 'target/server',
                    coverageFolder: 'target/coverage',
                    mask: '*.spec.js',
                    excludes: [
                        '*.spec.js'
                    ],
                    reportFormats: [
                        'lcov',
                        'text-summary',
                        'text'
                    ]
                }
            }
        }
    });

    grunt.registerTask('build', ['eslint:main', 'jscpd:main', 'babel:main']);
    grunt.registerTask('test', ['build', 'mocha_istanbul:main']);
    grunt.registerTask('start', ['build', 'execute:main']);
};
