function FindIndex(){
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];
    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');
    return (
        <div>
            <h1>Find Index</h1>
            <p>Number Array: {numberArray1}</p>
            <p>String Array: {stringArray1}</p>
            <p>Four Index: {fourIndex}</p>
            <p>String3 Index: {string3Index}</p>
        </div>
    );
} export default FindIndex;
