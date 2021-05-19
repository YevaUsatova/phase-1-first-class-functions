function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction() {
    const namedFunction = () => "hi";
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function() {};
};
