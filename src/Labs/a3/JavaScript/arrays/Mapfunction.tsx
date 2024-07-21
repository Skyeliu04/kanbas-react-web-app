function MapFunction(){
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map((a: number) => a * a * a);
    return (    
        <div>
            <h1>Map Function</h1>
            <p>Number Array: {numberArray1}</p>
            <p>Squares: {squares}</p>
            <p>Cubes: {cubes}</p>
        </div>
    );
}
export default MapFunction;
