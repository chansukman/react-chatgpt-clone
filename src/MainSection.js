import "./MainSection.css"
const MainSection =(props)=>{
  return(
      <section className='main'>
          {!props.currentTitle &&<h1>StephGPT</h1>}
          <div className="feed">
            {props.currentChat?.map((chatMessage,index)=> <div key={index} className="row">
              <p className='role'>{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </div>)}
          </div>
        </section>
  );
}
export default MainSection;

  