import React from 'react'

function Section(props) {
  return (
    <section  style={{backgroundImage:`url(tesla-image/${props.background})`}}>
    <div className='carName'>
       
        <h1>{props.name}</h1>
    <p>{props.text}</p>
    </div>

    <div className='btn'>
    <div className='btn-grup'>
        <a href =''>{props.leftbtn}</a>
       { props.rightbtn && <a href =''>{props.rightbtn}</a>}
    </div>
    <div className='down-icon'>
    {props.icon &&<img src='tesla-image/down-arrow.svg'></img>}
    </div>
    </div>
</section>
  )
}

export default Section