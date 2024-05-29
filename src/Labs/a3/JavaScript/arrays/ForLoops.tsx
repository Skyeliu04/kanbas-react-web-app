function ForLoops(){
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
         i < stringArray1.length;
         i++) {
      const string1 = stringArray1[i];
      stringArray2.push(
        string1.toUpperCase());
    }
    return (
        <div>
            <h1>For Loops</h1>
            <p>String Array 1: {stringArray1}</p>
            <p>String Array 2: {stringArray2}</p>
        </div>
    );
}
export default ForLoops;
