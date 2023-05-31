import React from 'react'
import Header from './Header'
import Section from './Section'



function Home() {
  return (
    <>
   
<Header/>
<Section
name='Model 3'
text='Order online for touchless delievery'
leftbtn='CUSTOM ORDER'
rightbtn='EXISTING INVENTORY'
icon = {true}
background = 'model-3.jpg'
/>
<Section
name='Model S'
text='Order online for touchless delievery'
leftbtn='CUSTOM ORDER'
rightbtn='EXISTING INVENTORY'
background = 'model-s.jpg'
/>
<Section
name='Model X'
text='Order online for touchless delievery'
leftbtn='CUSTOM ORDER'
rightbtn='EXISTING INVENTORY'
background = 'model-x.jpg'
/>
<Section
name='Model y'
text='Order online for touchless delievery'
leftbtn='CUSTOM ORDER'
rightbtn='EXISTING INVENTORY'
background = 'model-y.jpg'
/>
<Section
name='Solar Panel'
text='Lower Cost solar panel in india'
leftbtn='ORDER NOW'
rightbtn='LEARN MORE'
background = 'solar-panel.jpg'
/>
<Section
name='Solar Roof'
text='Produce clean energy from your roof'
leftbtn='ORDER NOW'
rightbtn='LEARN MORE'
background = 'solar-roof.jpg'
/>
<Section
name='Accessories'
leftbtn='ORDER NOW'
background = 'accessories.jpg'
/>

    </>
  )
}

export default Home