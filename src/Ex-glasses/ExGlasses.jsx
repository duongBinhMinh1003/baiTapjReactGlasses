import React, { Component } from 'react'
import { glassesList } from './data'
import "./style.css";
export default class ExGlasses extends Component {
  state={
    loai:1,
  }
handleImg = (loai) => {
this.setState({loai:loai})
}
renderGlassesList = () => {
return glassesList.map((item)=>{
console.log(item)
return  <div className="col-8 mx-auto">
<table className="table">
  <thead>
    <tr>
     <th>id</th>
     <th>price</th>
     <th>name</th>
     <th>image</th>
     <th>des</th>
    </tr>
   <tr>
   <td>{item.id}</td>
      <td>{item.price}</td>
      <td>{item.name}</td>
     <td> <img className='w-50' src={item.url} alt="" /></td>
      <td>{item.desc}</td>
    
   </tr>
  </thead>
      
  <tbody id="tbodySinhVien" />
</table>
</div>
       

})
}



    render() {
    // console.log(glassesList)
    return (
      <div >
   
<div>{this.renderGlassesList()}</div>
        
       
      
            <img className='img2' src="./glassesImage/model.jpg" alt="" />
            <img  className='showGlass' src={`./glassesImage/v${this.state.loai}.png`} alt="" />
          
          
            <div className='glassesListItem'>
                <img onClick={()=>{this.handleImg("1")}} src="./glassesImage/g1.jpg" alt="" /> 
                <img  onClick={()=>{this.handleImg("2")}} src="./glassesImage/g2.jpg" alt="" />
                <img onClick={()=>{this.handleImg("3")}} src="./glassesImage/g3.jpg" alt="" />
                <img onClick={()=>{this.handleImg("4")}} src="./glassesImage/g4.jpg" alt="" />
                <img onClick={()=>{this.handleImg("5")}} src="./glassesImage/g5.jpg" alt="" />
                <img onClick={()=>{this.handleImg("6")}} src="./glassesImage/g6.jpg" alt="" />
                <img onClick={()=>{this.handleImg("7")}} src="./glassesImage/g7.jpg" alt="" />
                <img onClick={()=>{this.handleImg("8")}} src="./glassesImage/g8.jpg" alt="" />
                <img onClick={()=>{this.handleImg("9")}} src="./glassesImage/g9.jpg" alt="" />
               
            </div>

            
        
      </div>
      
    )
  }
}
