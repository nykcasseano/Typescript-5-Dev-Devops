function greet(name:string){
    return ('Hello' + name)
}

const nykGreet = greet('Nyk');

function greetToUpperCase(name: string){
    return ('Hello' + name.toUpperCase())
}

function consoleGreetNyk(name = 'Nyk' ){
    console.log('Hello' + name.toUpperCase())
}

consoleGreetNyk();

consoleGreetNyk('Bia')


const greetToConsole = (name: string) => {
    console.log ('Hello' + name)
}

function greetMultiple(...names: string[]){
    names.forEach(name => greetToConsole(name))
    
}


greetMultiple('Nyk');
greetMultiple('Nyk', 'Bia');