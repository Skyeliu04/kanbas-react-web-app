function WorkingWithArrays(){
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];
    return (
        <div>
            <h1>Working with Arrays</h1>
            <p>Function Scoped: {functionScoped}</p>
            <p>Block Scoped: {blockScoped}</p>
            <p>Constant: {constant1}</p>
            <p>Number Array: {numberArray1}</p>
            <p>String Array: {stringArray1}</p>
            <p>Variable Array: {variableArray1}</p>
        </div>
    );
}
export default WorkingWithArrays;
