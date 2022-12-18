try {
    hello();
} catch (error) {
    console.error(`%c ${error}`, 'background: #f00; color: #bada55');
}

try {
    hello();
} catch (error) {
    console.error(`%c Ocurrio un error(${error})`, 'background: #f00; color: #bada55');
}