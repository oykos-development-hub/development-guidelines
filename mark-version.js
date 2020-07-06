const parse = require('node-html-parser').parse;
const fs = require('fs');
const runAll = require("npm-run-all");

function insertVersionMark() {
    console.log("Insert Version Mark task started!");
    const indexOfVersionMark = process.argv ? process.argv.indexOf('--version') : null;
    const version = indexOfVersionMark ? process.argv[indexOfVersionMark + 1] : '0.0.1';

    console.log('Provided Version Mark - ');
    console.log(version);

    if (!version) {
        console.log('Version Mark not provided. Build task is terminated!');
    }

    fs.readFile('./src/index.html', 'utf8', (err, html) => {
        if (err) {
            throw err;
        }

        console.log("Reading index.html file...");

        const root = parse(html);
        const versionMark = root.querySelector('#version-mark');
        const head = root.querySelector('head');

        if (versionMark) {
            versionMark.setAttribute('content', version);
        } else {
            head.appendChild('<meta id="version-mark" content="' + version + '">');
        }

        fs.writeFileSync('./src/index.html', root.toString());
        console.log("Writing version mark to index.html file...");

        runAll(["minify", "webpackProd"], {parallel: false})
            .then(() => {
                console.log("Completed Build task successfully!");
            })
            .catch(err => {
                console.log("Build task failed!");
            });
    });
}

insertVersionMark();