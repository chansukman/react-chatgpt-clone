import "./SideBar.css"
import  {useState,useEffect} from 'react'

const SideBar = (props)=>{

    const createNewChat = ()=>{
        props.setMessage(null)
        props.setValue("")
        props.setCurrentTitle(null)
      }

    const [isVisible, setIsVisible] =useState(true);
    
    
      const handleClick = (uniqueTitles)=>{
        props.setCurrentTitle(uniqueTitles)
        props.setMessage(null)
        props.setValue("")
    
      }

    return(
        <section className='side-bar' style={{backgroundColor:isVisible ? '#202123':'#343541'}}>
          <div className="top-side">
            <button className="newChatBtn" onClick={createNewChat} style={{display:isVisible ? 'flex':'none'}}>+ New Chat</button>
            <svg onClick={() => setIsVisible(!isVisible)}  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          </div>
        <div className='history' style={{display:isVisible ? 'flex':'none'}}>
            {props.uniqueTitles?.map((uniqueTitles,index)=>
            <div className="chatHistory">
            <svg  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <div key={index} className="history-title" onClick={()=>handleClick(uniqueTitles)} >{uniqueTitles}</div>
            </div>
            )}            
        </div>
        <nav className="leftNav" style={{display:isVisible ? 'flex':'none'}}>
        <p>Made by Stephanie</p>
        </nav>
        </section>
        );
}

export default SideBar;


