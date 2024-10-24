// argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1)

// podemos controlar eventos del proceso
// process.on('exit', () => {
//   // limpiar los recursos
// })

// current working directory
console.log("process.cwd() => ",process.cwd()) // directorio desde donde se esta ubicado

// platform
// ejercicio: escribir en consola PEPITO=hola node 7.process.js
console.log(process.env.PEPITO)