import { useState } from 'react'


const Home = () => {
    // let name = 'mario';
    // const handleClick = () => {
      const [name, setname]= useState('mario');

    const handleClick = () => {
        setname('Luigi')
    }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name);

    // }

    return (
        <div className ="home">
        <h2> Homepage </h2>
        <p> { name } </p>
        <button onClick={handleClick}>Click Me</button>
        {/* <button onClick={() =>
        handleClickAgain('Mario')}> Click me Agagin</button> */}
        </div>
    );
}


export default Home;