
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import ph1 from '../img/ph1.png'
import ph2 from '../img/ph2.png'


const Content = () => {
  const {data,error,errorContent,success,empty,lang} = useSelector((state)=> state.arr)
  return (
    <div className='mt-3 p-2'>
      <p style={{height:"20px"}} className="text-success p-1 text-center">
        <span>{success&& ". . . looding"}</span> 

      </p>

    {error ?   ( <div className='d-flex flex-column  '>
    <img src={ph2} width={250} height={200} className="m-auto d-block" />
     <div className='text-danger my-3 p-2 text-center'>
     {errorContent}
     </div>
   </div> )
     : data.length > 1 ?
      data.map((i,idx)=>{
         return(
          <div   key={idx} margin-right 
          style={{direction:lang?"rtl":"ltr"}} 
          >
          <Accordion defaultActiveKey={idx}  >
          <Accordion.Item eventKey={idx} >
            <Accordion.Header>{i.title}</Accordion.Header>
            <Accordion.Body dangerouslySetInnerHTML={{ __html:i.snippet}} />
        
          </Accordion.Item>
         
         </Accordion>
          </div>

         )
      }) :
    
   <div className='d-flex flex-column '>
    <img src={ph1} width={250} height={250} className="m-auto d-block" />
    <div className='text-danger my-3 p-2 text-center'>
  { empty && "no found result try again"}
    </div>
   </div>
  
  }



    </div>
  )
}

export default Content