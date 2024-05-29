function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return (
        <div>
            <h1>Array Index and Length</h1>
            <p>Number Array: {numberArray1}</p>
            <p>Length: {length1}</p>
            <p>Index of 3: {index1}</p>
        </div>
    );
}
export default ArrayIndexAndLength;
