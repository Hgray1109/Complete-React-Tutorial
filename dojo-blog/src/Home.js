import { useState } from 'react'


const Home = () => { 
    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

return (
    <div className ="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2> {blog.title}</h2>
                <p> Written by {blog.author} </p>


            </div>
        ))}

        </div>
        )
}
        
        
        export default Home;
        
        
        
        
        // const handleClickAgain = (name) => {
            //     console.log('Hello ' + name);
            
            // }
            
        
        
        
        
        
        
        
        // let name = 'mario';
        // const handleClick = () => {
            
            
            
        // const [name, setName]= useState('mario');
        // const [age, setAge] = useState(25);
        
        // const handleClick = () => {
            //   setName('Luigi')
            //   setAge(30)
            
            // );
            











{/* <h2> Homepage </h2>
    <p> Hi I'm { name } I am {age} years old!</p>
<button onClick={handleClick}>Click Me</button> */}
{/* <button onClick={() =>
handleClickAgain('Mario')}> Click me Agagin</button> */}