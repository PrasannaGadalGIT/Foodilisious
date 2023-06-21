import React from 'react'
import BasicMenu from '@/component/menue'
import { useEffect , useState, useRef} from 'react'
import Card from '../../component/card'
import Map from '@/component/map'

const index = () => {
  const [productList, setProductList] = useState([])
  const inputRef = useRef(null);

  
  const fetchProducts = async() => {
    try{
      
      const res= await fetch('http://localhost:3001/restaurant')
      const data = await res.json()
      console.log(data.productList);
      setProductList(data.productList)
    }catch(err){
      alert(err)
    }
  }

  const handleButtonClick = () => {
    inputRef.current.focus();
    
  };


 

    useEffect(() => {
      //Runs only on the first render
      fetchProducts()
      
    }, []);
 
 

 
  return (
    <div>
    <div className='menue'>
    <div><BasicMenu/></div>
    <div>
    <input placeholder='Search' className='searchBox' ref={inputRef} type="text"/>
      <button onClick={handleButtonClick} className='searchButoon'>Focus Input</button>
    </div>
      
    </div>
     
      <div className="Products">
        
      { productList.length> 0 ? productList.map((item)=>{
                return <Card item={item}/>
              }) : "loading"}
              </div>
      
    </div>
  )
}
export default index
 