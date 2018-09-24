#!/usr/bin/env node

require('shelljs/global');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const spinner = require("./loading");

const showIntro = () => {

    console.log("                                                                                                 ");
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
            
            console.log('----------------------------------------------------------');
            console.log("Instalando pacotes necessários");
            const child = spawn(command, args, { stdio: 'inherit' });
            child.on('close', code => {
                if (code !== 0) {
                    reject({
                        command: `${command} ${args.join(' ')}`
                    });

                    return;
                }
                
                console.log('----------------------------------------------------------');
                console.log("Instalando pacotes terceiros");
                cd(pwd() + "\\" + appName);
                const pkgs = spawn(command, ["add", "react-bootstrap", "react-redux", "react-router", "react-router-dom", "redux", "redux-thunk", "@babel/polyfill", "prop-types", "formik"]);
                pkgs.on("close", (code, a) => {
                    if (code != 0) {
                        reject({
                            command: `${command} ${args.join(' ')}`
                        })
                    }

                    console.log('----------------------------------------------------------');
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
            console.log(chalk.green('1: cd dentro da pasta ' + appName));
            console.log(chalk.green('2: rode "npm start"'));
            console.log('----------------------------------------------------------');
            console.log(chalk.white('Para mais detalhes, favor entrar em contato'));
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