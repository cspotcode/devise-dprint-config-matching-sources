#!/usr/bin/env ts-node
import {Config} from './config';
import {existsSync, mkdirSync, readFileSync, rmSync, writeJsonSync} from 'fs-extra';
import {resolve} from 'path';
import {$} from 'zx';

const outDir = resolve(__dirname, 'dprint-output');
const reportPath = resolve(outDir, 'report.json');
// const dprintConfigPath = resolve(__dirname, '../dprint.json');

const baseConfig = {
    // incremental: true,
    typescript: {
        associations: [
            "**/*.js",
            "**/*.jsx",
            "**/*.ts",
            "**/*.tsx"
        ],
        lineWidth: 2000,
        indentWidth: 4,
        useBraces: 'whenNotSingleLine', // alternative "maintain" had smaller diff (obviously) but is not the default
        bracePosition: 'maintain', // TODO Fix this
        quoteStyle: 'preferDouble',
        singleBodyPosition: undefined, // default "maintain"
        nextControlFlowPosition: 'maintain', // TODO fix this
        operatorPosition: 'maintain', // TODO fix


    } as Config,
    includes: ["src/**/*.{ts,tsx,js,jsx,cjs,mjs}"],
    excludes: [
    //   "**/node_modules",
      "src/node_modules"
    ],
    plugins: [
      "https://plugins.dprint.dev/typescript-0.60.0.wasm"
    ],

    // lineWidth: 80,
    // useTabs: false,
    // indentWidth: 2,
};

const options = [
// {
//     name: 'indentWidth',
//     values: [2, 4]
// },
// {
//     name: 'lineWidth',
//     values: [80, 100, 120, 140, 300, 500, 1000, 2000]
// },
{
    name: 'bracePosition',
    values: ['sameLineUnlessHanging', 'maintain', 'sameLine', 'nextLine']
},
// {
//     name: 'singleBodyPosition',
//     values: ['maintain', 'sameLine', 'nextLine']
// },
// {
//     name: 'useBraces',
//     values: ['maintain', 'whenNotSingleLine', 'always', 'preferNone']
// },
// {
//     name: 'quoteStyle',
//     values: ['alwaysDouble', 'alwaysSingle', 'preferDouble', 'preferSingle']
// }
{
    name: 'spaceSurroundingProperties',
    values: [true, false] // todo sub-options
} 
];

async function main() {
    existsSync(outDir) && rmSync(outDir, {recursive: true});
    mkdirSync(outDir, {recursive: true});

    const report = [];
    outer:
    for(const option of options) {
        for(const value of option.values) {
            const permutationName = `${ option.name }-${ value }`;
            const permutationPath = resolve(outDir, permutationName);
            const configPath = resolve(permutationPath, 'dprint.json');
            const diffPath = resolve(permutationPath, 'git-diff');
            console.log(permutationPath);
            mkdirSync(permutationPath);
            const config = {
                ...baseConfig
            };
            config.typescript[option.name] = value;
            writeJsonSync(configPath, config, {spaces: 2});
            await $`dprint fmt --config ${configPath}`;
            await $`git diff -U0 src > ${diffPath}`;
            await $`git checkout -- src`;

            const modifiedLines = readFileSync(diffPath, 'utf8').split('\n').filter(l => 
                l.startsWith('-') && !l.startsWith('--- ')
            ).length;
            report.push({permutationName, diffSize: modifiedLines});
        }
    }
    writeJsonSync(reportPath, report, {spaces: 2});
}

main();