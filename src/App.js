import SideBar from "./SideBar";
import MainSection from "./MainSection";
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
      <SideBar 
      value={valueFromMain} 
      setValue={setValueFromMain}
      message={message}
      setMessage={setMessage}
      currentTitle={currentTitle} 
      setCurrentTitle={setCurrentTitle}
      uniqueTitles={uniqueTitles}
       />
      <MainSection 
      message={message}
      setMessage={setMessage}
      currentTitle={currentTitle} 
      setCurrentTitle={setCurrentTitle}
      uniqueTitles={uniqueTitles}
      currentChat={currentChat}
      question={question}
      setQuestion={setQuestion}
      getValue={getValue}
      previousChats={previousChats}
      setPreviousChats={setPreviousChats}

      /> 
    </div>
  );
}
export default App;
