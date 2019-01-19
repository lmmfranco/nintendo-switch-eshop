import gulp from 'gulp';
import jest from 'gulp-jest';
import ts from 'typescript';
import del from 'del';
import replace from 'gulp-replace';
import uglify from 'gulp-uglify-es';
import * as gulpTs from 'gulp-typescript';
import * as tslint from 'tslint';
import { argv } from 'yargs';
import { execSync } from 'child_process';
import { oneLine } from "common-tags";
import { milkyLint, milkyReport } from 'milky-tslint';

const copySource = ['./docs/example.js', './dist/*.d.ts'];
const minifySource = ['./dist/*.js', '!./dist/example.js'];
const tsSource = ['./lib/*.ts'];

const copySourceFiles = () => {
    return gulp.src(copySource)
        .pipe(gulp.dest('./dist/'));
};

const minify = () => {
    return gulp.src(minifySource)
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
};

const compile = () => {
    const tsProject = gulpTs.createProject('./tsconfig.json', {declarationFiles: true});

    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('./dist'));
};

gulp.task('docs', () => {
    const opts = {
        template: './docs/template.hbs',
        exampleLang: 'js',
        inputFiles: './lib/*.ts',
        configFile: './jsdoc2md.json',
        outFile: './README.md',
    };
    const docsCommand = oneLine`node ./node_modules/jsdoc-to-markdown/bin/cli.js
        --files ${opts.inputFiles}
        --template ${opts.template}
        --example-lang ${opts.exampleLang}
        --configure ${opts.configFile}
        --no-cache
        > ${opts.outFile}`;
    execSync(docsCommand);

    return gulp.src('./README.md', {base: './'})
        .pipe(replace(/(Promise)\.&lt;/g, 'Promise&lt;'))
        .pipe(replace(/(Array)\.&lt;/g, 'Array&lt;'))
        .pipe(replace(/ - <p>(.+)<\/p>/g, (match, p1) => ` - ${p1}`))
        .pipe(gulp.dest('./'))
});

gulp.task('lint', () => {
    const lintProgram = tslint.Linter.createProgram('./tsconfig.json', '.');
    ts.getPreEmitDiagnostics(lintProgram);

    return gulp.src(tsSource)
        .pipe(milkyLint({
            configuration: './tslint.json',
            program: lintProgram,
            tslint: tslint,
            fix: !!argv.fix,
        }))
        .pipe(milkyReport());
});

gulp.task('test', () => {
    return gulp.src('./test/')
        .pipe(jest({
            preset: 'ts-jest',
            testEnvironment: 'node',
            testMatch: ['**/*.spec.ts'],
        }));
});

gulp.task('clean', () => del(['./dist']));
gulp.task('watch', () => gulp.watch(tsSource, gulp.series('lint')));
gulp.task('build', gulp.series('clean', compile, gulp.parallel(minify, copySourceFiles)));
gulp.task('default', gulp.parallel('watch', 'lint'));