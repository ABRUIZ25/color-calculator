const prompt = require('prompt-sync')();


const selection = number (prompt ('[1] for make a color [2] deconstruct a color '))


if (selectiom === 2 ){
    const purple = "deconstruct into blue and red"
    const orange = ' deconstruct into yellow and red'
    const green =  "deconstruct into blue and yellow"
}
const deconstructColor = prompt('what color would you like to deconstruct?')
if (deconstructColor === 'purple'){
    console.log(purple)
}else if (deconstructColor === 'orange'){
    console.log(orange)
}else if (deconstructcolor === 'green'){
    console.log(green)
}else {
    console.log('error')
}


if (selection === 1){
    const pick1 = prompt ("pick [red] [yellow] [blue]")
    const pick2 = prompt ("pick [red] [yellow] [blue]")

    if (pick1 === 'red' && pick2 === 'blue'){
        console.log ('purple')
    }
    if (pick1 === 'red' && pick2 === 'yellow'){
        console.log ('orange')
    }
    if (pick1 === 'yellow' && pick2 === 'red'){
        console.log ('orange')
    }
    if (pick1 === 'yellow' && pick2 === 'blue'){
        console.log ('green')
    }
    else {
        console.log('error')
    }
}



