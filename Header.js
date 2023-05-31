import React ,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [OpenMenu,SetOpenMenu] = useState(false);
  // const [closeMenu,SetcloseMenu] = useState(false);
  const handleClick = ()=>{
    if(OpenMenu===true){
       SetOpenMenu(false)}
       else{SetOpenMenu(true)}
      }


      // function cancels(){
      //   const [closeMenu,SetcloseMenu] = useState(false);
      //   const handleCancel=()=>{
      //     if(closeMenu === true){
      //       SetcloseMenu(false)}
      //       else{SetcloseMenu(true)}
      //     }
      
    
  
  return (
    <header>
    <img src='tesla-image/logo.svg'></img>
    <nav>
        <ul>
            <li><a href =''>Model S</a></li>
            <li><a href =''>Model 3</a></li>
            <li><a href =''>Model X</a></li>
            <li><a href =''>Model Y</a></li>
            <li><a href =''>Solar Roof </a></li>
            <li><a href =''>Solar Panels</a></li>
        </ul>
    </nav>

    <nav>
        <ul>
            <li><a href =''>Shop</a></li>
            <li><a href =''> Account</a></li>
            <li ><a onClick={()=>handleClick()}>Menu</a>
       
              
            
            </li>
            </ul>
            </nav>

{/* <div className='cancel'>X</div> */}

            <div className={OpenMenu === true ?"menubar active":"menubar" } >
              {/* <h3 onClick={()=>handleCancel()}>X</h3> */}
            <ul> 
              <CloseIcon className='close'   onClick={()=>handleClick()}/>
                 <li>Model-3</li>
                 <li>Model-s</li>
                 <li>Model-x</li>
                 <li>Model-y</li>
                 <li>Solar panel</li>
                 <li>Solor roof</li>
                 <li>Accessories</li>
                 <li>Existing Inventory</li>
                 <li>Used Inventory</li>
                 <li>Trade-in</li>
                 <li>Demo-Drive</li>
                 <li>Insurance</li>
                 <li>Cybertruck</li>
                 <li>Roadster</li>
                 <li>Semi</li>
                 <li>Charging</li>
                 <li>Commerical Energy</li>
                 <li>Powerwall</li>
                 <li>Find Us</li>
                 <li>Support</li>
                 <li>Investory Relation</li>
              </ul>
            </div>
            
</header>

  )
}


export default Header