#!/usr/bin/env node

require('shelljs/global');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const load = require("./loading");

const showIntro = () => {

   console.log("██████╗ █████╗ ███████╗███████╗██╗                                                               ");
   console.log("██╔════╝██╔══██╗██╔════╝██╔════╝██║                                                              ");
   console.log("██║     ███████║███████╗███████╗██║                                                              ");
   console.log("██║     ██╔══██║╚════██║╚════██║██║                                                              ");
   console.log("╚██████╗██║  ██║███████║███████║██║                                                              ");
   console.log(" ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝                                                              ");
   console.log("                                                                                                 ");
   console.log("██████╗ ██████╗  ██████╗      ██╗███████╗████████╗ ██████╗ ███████╗    ██╗    ██╗███████╗██████╗ ");
   console.log("██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝╚══██╔══╝██╔═══██╗██╔════╝    ██║    ██║██╔════╝██╔══██╗");
   console.log("██████╔╝██████╔╝██║   ██║     ██║█████╗     ██║   ██║   ██║███████╗    ██║ █╗ ██║█████╗  ██████╔╝");
   console.log("██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝     ██║   ██║   ██║╚════██║    ██║███╗██║██╔══╝  ██╔══██╗");
   console.log("██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗   ██║   ╚██████╔╝███████║    ╚███╔███╔╝███████╗██████╔╝");
   console.log("╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚══════╝     ╚══╝╚══╝ ╚══════╝╚═════╝ ");
   console.log("                                                                                                 ");
}
const installPackages = (appName) => {
    load.text = "Criando Projeto";
    console.log('----------------------------------------------------------');

    return new Promise((resolve, reject) => {
        let command = 'yarn';
        let args = ['install'];

        const createReactApp = spawn(command, ["create", "react-app", appName]);
        createReactApp.on("close", code => {
            if (code !== 0) {
                throw new Error();
            }

            load.text = "Instalando pacotes"
            const child = spawn(command, args, { stdio: 'inherit' });
            child.on('close', code => {
                if (code !== 0) {
                    reject({
                        command: `${command} ${args.join(' ')}`
                    });

                    return;
                }

                load.stop();
                resolve();
            });
        })
    });
};

const build = (appName) => {
    var dir = __dirname + "/../../";

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    showIntro();
    console.log('----------------------------------------------------------');
    console.log(chalk.white.bold('Bem vindo ao Daniel Create React App'));
    console.log('----------------------------------------------------------');

    cd(dir);

    installPackages(appName)
        .then(() => {
            console.log('----------------------------------------------------------');
            console.log(chalk.white.bold('Let\'s get started'));
            console.log('----------------------------------------------------------');
            console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
            console.log(chalk.green('Step 2: run "npm run fast-start"'));
            console.log('----------------------------------------------------------');
            console.log(chalk.white('For more details please see docs - ' +
                'https://github.com/shystruk/create-react-redux-app-structure/blob/master/README.md'));
            console.log('----------------------------------------------------------');
        })
        .catch(error => {
            console.log('----------------------------------------------------------');
            console.log(chalk.red('An unexpected error occurred'));
            console.log(chalk.red(error));
            console.log('----------------------------------------------------------');
        });
};

module.exports = build;