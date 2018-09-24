#!/usr/bin/env node

require('shelljs/global');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const spinner = require("./loading");

const showIntro = () => {

    console.log();
    console.log("██████╗  █████╗ ███╗   ██╗██╗███████╗██╗                                                                                 ");
    console.log("██╔══██╗██╔══██╗████╗  ██║██║██╔════╝██║                                                                                 ");
    console.log("██║  ██║███████║██╔██╗ ██║██║█████╗  ██║                                                                                 ");
    console.log("██║  ██║██╔══██║██║╚██╗██║██║██╔══╝  ██║                                                                                 ");
    console.log("██████╔╝██║  ██║██║ ╚████║██║███████╗███████╗                                                                            ");
    console.log("╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚══════╝                                                                            ");
    console.log("                                                                                                                         ");
    console.log(" ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗    ██████╗ ███████╗ █████╗  ██████╗████████╗    █████╗ ██████╗ ██████╗ ");
    console.log("██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝   ██╔══██╗██╔══██╗██╔══██╗");
    console.log("██║     ██████╔╝█████╗  ███████║   ██║   █████╗█████╗██████╔╝█████╗  ███████║██║        ██║█████╗███████║██████╔╝██████╔╝");
    console.log("██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝╚════╝██╔══██╗██╔══╝  ██╔══██║██║        ██║╚════╝██╔══██║██╔═══╝ ██╔═══╝ ");
    console.log("╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗    ██║  ██║███████╗██║  ██║╚██████╗   ██║      ██║  ██║██║     ██║     ");
    console.log(" ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝      ╚═╝  ╚═╝╚═╝     ╚═╝     ");
    console.log("                                                                                                                         ");

}
const installPackages = (appName) => {
    console.log("Instalando create-react-app");
    spinner.start();

    return new Promise((resolve, reject) => {
        let command = 'yarn';
        let args = ['install'];
        spinner.setT
        const createReactApp = spawn(command, ["create", "react-app", appName]);
        createReactApp.on("close", code => {
            if (code !== 0) {
                throw new Error();
            }

            console.log('\n----------------------------------------------------------');
            console.log("Instalando pacotes obrigatórios");
            const child = spawn(command, args, { stdio: 'inherit' });
            child.on('close', code => {
                if (code !== 0) {
                    reject({
                        command: `${command} ${args.join(' ')}`
                    });

                    return;
                }

                console.log('\n----------------------------------------------------------');
                console.log("Instalando pacotes adicionais");
                cd(pwd() + "\\" + appName);
                const pkgs = spawn(command, ["add", "react-bootstrap", "react-redux", "react-router", "react-router-dom", "redux", "redux-thunk", "@babel/polyfill", "prop-types", "formik", "yup@0.23.0"]);
                pkgs.on("close", (code, a) => {
                    if (code != 0) {
                        reject({
                            command: `${command} ${args.join(' ')}`
                        })
                    }

                    console.log('\n----------------------------------------------------------');
                    console.log("Todos os pacotes foram instalados com sucesso");
                    spinner.stop(false);
                    resolve();
                })
            });
        })
    });
};

const build = (appName) => {
    let dir = process.cwd();

    showIntro();
    console.log('----------------------------------------------------------');
    console.log(chalk.white.bold('Bem vindo ao Daniel Create React App'));
    console.log('----------------------------------------------------------');

    cd(dir);

    installPackages(appName)
        .then(() => {
            console.log('----------------------------------------------------------');
            console.log(chalk.white.bold('Vamos começar:'));
            console.log();
            console.log(chalk.green('1: Navegue até a pasta usando cd ' + appName));
            console.log(chalk.green('2: rode "yarn start"'));
            console.log('----------------------------------------------------------');
            console.log(chalk.white('Para mais detalhes, favor abrir uma issue'));
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