import './App.css'
import useScrollPosition from "./Hooks/useScrollPosition.js";
import LoremParagraph from "./Components/LoremParagraph/LoremParagraph.jsx";

function App() {

    const scroll = useScrollPosition();

    const handleScrollToButton = () => {
        window.scrollTo(0,0)
    }

  return (
   <div className="container">
       <div className="scrollBarInfo">
           Scrollbar position : {Math.floor(scroll)} px
       </div>

        <h1>Some lorem text for presentation hooks work</h1>

       <LoremParagraph wordsCount={120}/>
       <LoremParagraph wordsCount={139}/>
       <LoremParagraph wordsCount={139}/>
       <LoremParagraph wordsCount={139}/>
       <LoremParagraph wordsCount={200}/>
       <LoremParagraph wordsCount={139}/>

       <button
           className={`${scroll > 500 ? "show" : " "}` + " " + "backToTopButton"}
            onClick={handleScrollToButton}>↑</button>
   </div>
  )
}

export default App
