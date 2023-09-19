

const path = require('path'); 

// Para o Node, todo arquivo JS 'e um modulo, inclusive esse aqui. Isso significa que cada arquivo tem seu mundo interno
// e nao conseguimos usar nada escrito nesse arquivo em outro, sem exportar seu modulo.
/*
Para fazer isso, vamos declarar aqui a sintaxe module.exports = {} e um objeto dentro que sera exportado em formato json.
*/ 

module.exports = {
    mode: 'development', // modo desenvolvedor
    entry: './src/main.js', // arquivo de 'entrada', de onde buscar os dados.
    output: { 
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // arquivo de saida, onde irao sair os dados.
        filename: 'bundle.js'
    }, // nome do arquivo de destino
    module: { // Buscando os Modulos do Babel
        rules: [{ // chamando as regras, array de objetos
            exclude: /node_modules/, // Excluimos a pasta node_modules da transricao do Babel
            test: /\.js$/, // Testamos para todos os arquivos com extensao .js
            use: { // Aqui chamamos o babel de fato
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/, // Aqui vamos criar uma nova regra, primeiro testando se e um arquivo css
            use: ['style-loader', 'css-loader'] // aqui setamos o modelo de carregamento desse tipo de arquivo, no caso, css.
        }]
    },
    devtool: 'source-map' // mapeando o erro em qual arquivo foi originalmente, pois o bundle fica confuso
};

