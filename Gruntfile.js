module.exports = function(grunt) {
    grunt.initConfig({
        gyp: {
            ia32: {
                command: 'rebuild',
                options: {
                    arch: 'ia32'
                }
            },
            x64: {
                command: 'rebuild',
                options: {
                    arch: 'x64'
                }
            }
        },
        copy: {
            ia32: {
                files: [{src: 'build/Release/printer.node', dest: 'lib/printer_' + process.platform + '_ia32.node'}]
            },
            x64: {
                files: [{src: 'build/Release/printer.node', dest: 'lib/printer_' + process.platform + '_x64.node'}]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-node-gyp');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('build-ia32', [
            'gyp:ia32',
            'copy:ia32'
    ]);

    grunt.registerTask('build-x64', [
            'gyp:x64',
            'copy:x64'
    ]);

    grunt.registerTask('build', [
            'build-ia32',
            'build-x64'
    ]);

}
