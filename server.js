//Import dependencies
const argv= require('yargs').argv;

//import modules
const { app } = require('./router/router');

const port = argv.port && !isNaN(argv.port) && argv.port > 0 && !(argv.port % 1) ? argv.port : 3000;
app.listen(port, () => console.log("Server listen on port ", port));

if (argv.copyright) console.log('Copyright by Samy VERA, Adrien VAUCARD, Tanguy POTIER');



