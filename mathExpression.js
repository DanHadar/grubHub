const expression = '+ + 2 + 3 1 * 3 2';

function solution( exp ) {
    let expArr = exp.split( ' ' );
    for ( let i = expArr.length - 1; i >= 0; i-- ) {
        const currentElement = expArr[ i ];
        if ( !isNaN( currentElement ) ) continue;
        expArr.splice( i, 0, solveExp( currentElement, expArr[ i + 1 ], expArr[ i + 2 ] ) );
        expArr.splice( i + 1, 3 );

    }
    return expArr[ 0 ];
}
console.log( expression + " =", solution( expression ) );

function solveExp( exp, firstNum, secNum ) {
    switch ( exp ) {
        case '+':
            return ( +firstNum ) + ( +secNum );
        case '-':
            return ( +firstNum ) - ( +secNum );
        case '*':
            return ( +firstNum ) * ( +secNum );
        case "/":
            return ( +firstNum ) / ( +secNum );

        default:
            return undefined;
    }
}