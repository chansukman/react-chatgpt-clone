import  {useState,useEffect} from 'react'
import "./Bottom.css"

const Bottom=(props)=>{
    const [value, setValue] = useState(null)

    const getMessages = async() => {
        const options = {
          method: "POST",
          body: JSON.stringify({
            message: value
          }),
          headers:{
            "Content-Type": "application/json"
          }
        }
        try{
          const response = await fetch('http://localhost:8000/completions',options)
          const data = await response.json()
          console.log(data)
          props.setMessage(data.choices[0].message)
          props.setQuestion(value)
          props.getValue(value)
        }catch(error){
          console.error(error)
        }
      }
      const handleOnKeyDown = (event)=>{
        if (event.keyCode === 13) {
          getMessages()
        }
      }


  useEffect(()=>{
    if(!props.currentTitle && value && props.message){
      props.setCurrentTitle(value)
    }
    if(props.currentTitle && value && props.message){
      props.setPreviousChats(prevChats =>(
        [...prevChats,
          {
              title:props.currentTitle,
              role:"user",
              content:props.question
          },
          {
              title:props.currentTitle,
              role:props.message.role,
              content:props.message.content,
          }
        ]
      ))
      setValue("")
    }
  },[props.message,props.currentTitle])




    return(
        <div className="buttom-section">
        <div className="input-container">
          <input value={value} onChange={(e)=> setValue(e.target.value)} onKeyDown={handleOnKeyDown}/>
          <div id="submit" onClick={getMessages} >➢</div>
        </div>
        <p className="info">
        Chat GPT Mar 14 Version. Free Research Preview.
        Our goal is to make AI systems more natural and safe to interact with.
        Your feedback will help us improve.
        </p>
      </div>
    )
}

export default Bottom;