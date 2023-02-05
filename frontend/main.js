// instalando o webpack
// iniciar terminal com comando npm init
// npm i --save-dev @babel/preset-env @babel/core @babel/cli 
// + babel-loader webpack webpack-cli regenerator -runtime core-js@2
// digitar no package.jason no script (webpack -w)
// depois npm rum gera nome do aquivo que recebeu webpack -w

// fizemos uma correção no pakage.jasen excluimos de devdependencias  os itens 
// core-js e regenerator instalamos em dependencias pelo comando npm i core-js regenerator-runtime

// apagar a pasta node-models npm install

// para instalar a pasta node models digitar o terminal npn 

//alterado o webpack
// {
//     test:/.css$/,
//     use: ['style-loader','css-loader']
// }]
// para usar css importar segue abaixo
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'

