let callback = ()=> { return "Spy";}

callback()

let receivesAFunction = (callback) => {callback();}

receivesAFunction();

function returnsANamedFunction() {let namedFunction = () => {return "Spy";} 
    return namedFunction;
}
 
function returnsAnAnonymousFunction() {return ()=>{};}

returnsAnAnonymousFunction();