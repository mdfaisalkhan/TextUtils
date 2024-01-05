import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //         color:'Black',
    //         backgroundColor:'white'
    // })
   

  let myStyle={
    color:props.mode ==='dark'?'white':'black',
    backgroundColor:props.mode ==='dark'?'rgb(24,24,24)':'white',
  }
 
    
    
  return (
    <div className='container about-container'style={myStyle}>
        <h1 className='about-heading'>About TextUtils</h1>
        <p className='about-text'style={myStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum cupiditate maxime nemo id. Fugit in at qui necessitatibus ipsum alias quod quisquam, libero ullam amet molestiae maiores maxime, odit excepturi, nostrum ipsam unde voluptates odio nulla repudiandae! Sed cumque, nihil sunt, assumenda laudantium laborum suscipit modi eius ipsam amet fugit delectus reiciendis. Quae voluptatem vitae atque quis cumque magnam eaque voluptatum quam, mollitia consectetur dolor illo, qui temporibus quaerat, minima distinctio beatae rerum? Ad tempora molestiae, voluptatem, dolor aliquid, voluptas molestias quam ratione dolorem optio laborum vitae. Illo architecto veritatis magnam accusantium omnis ea aperiam quidem consequuntur et consequatur.
        </p>
       
    </div>
  )
}
