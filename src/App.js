import SideBar from "./SideBar";
import MainSection from "./MainSection";
import Bottom from "./Bottom";
import  {useState,useEffect} from 'react'


const App = () =>{
  const [message,setMessage] = useState(null)
  const [question, setQuestion] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle,setCurrentTitle] = useState(null)
  const [valueFromMain,setValueFromMain]=useState(null)

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
  const uniqueTitles =Array.from(new Set(previousChats.map(previousChat =>previousChat.title)))
  const getValue = (val)=>[
    setValueFromMain(val)
  ]

  return (
    <div className="App">
      <div className="left-side">
        <SideBar 
        setValue={setValueFromMain}
        setMessage={setMessage}
        setCurrentTitle={setCurrentTitle}
        uniqueTitles={uniqueTitles}
        />
      </div>
      <div className="right-side">
        <MainSection 
        value={valueFromMain}
        setValue={setValueFromMain}
        currentTitle={currentTitle} 
        setCurrentTitle={setCurrentTitle}
        currentChat={currentChat}
        /> 
        <Bottom 
        message={message}
        setMessage={setMessage}
        question={question}
        setQuestion={setQuestion}
        getValue={getValue}
        setPreviousChats={setPreviousChats}
        currentTitle={currentTitle} 
        setCurrentTitle={setCurrentTitle}
        />
    </div>
      </div>
      
  );
}
export default App;
