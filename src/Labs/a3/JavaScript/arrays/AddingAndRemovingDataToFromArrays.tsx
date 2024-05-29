function AddingAndRemovingDataToFromArrays(){
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    numberArray1.push(6);         // adding new items
    stringArray1.push('string3');
    numberArray1.splice(2, 1);    // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    return (
        <div>
            <h1>Adding and Removing Data to/from Arrays</h1>
            <p>Number Array: {numberArray1}</p>
            <p>String Array: {stringArray1}</p>
        </div>
    );
}
export default AddingAndRemovingDataToFromArrays;
