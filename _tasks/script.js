import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import sourcemap from 'gulp-sourcemaps';

const jsTask = () => {
    return src(['src/js/**.js'])
        .pipe(
            plumber(function(err) {
                console.log(err);
                this.emit('end');
            })
        )
        .pipe(babel())
        .pipe(dest('_dist/js'));
};

module.exports = {
    jsTask,
};