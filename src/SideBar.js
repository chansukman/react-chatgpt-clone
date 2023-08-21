import "./SideBar.css"
const SideBar = (props)=>{

    const createNewChat = ()=>{
        props.setMessage(null)
        props.setValue("")
        props.setCurrentTitle(null)
      }
    
      const handleClick = (uniqueTitles)=>{
        props.setCurrentTitle(uniqueTitles)
        props.setMessage(null)
        props.setValue("")
    
      }

    return(
        <section className='side-bar'>
        <button className="newChatBtn" onClick={createNewChat}>+ New Chat</button>
        <ul className='history'>
        {props.uniqueTitles?.map((uniqueTitles,index)=><li key={index} onClick={()=>handleClick(uniqueTitles)}>{uniqueTitles}</li>)}
        </ul>
        <nav className="leftNav">
        <p>Made by Stephanie</p>
        </nav>
        </section>
    );
}

export default SideBar;


