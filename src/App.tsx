import './App.css'
import {ExamplesHOC} from "../modules/reactModule/examplesHOC";
import {generatorExampleOne} from "../modules/javascriptModule/generatorModule";
import {UseStateHookExample} from "../modules/reactModule/hooksModule";
import {summaryExample} from "../modules/javascriptModule/eventLoopModule";
import {AsyncExampleTwoWithFakeData} from "../modules/javascriptModule/asyncModule";

function App() {
  return (
    <>
        <ExamplesHOC componentOrFunction={generatorExampleOne} />
        <ExamplesHOC componentOrFunction={summaryExample(2,5)} />
        <ExamplesHOC componentOrFunction={<UseStateHookExample />} />
        <ExamplesHOC componentOrFunction={<AsyncExampleTwoWithFakeData />} needFakeData />
    </>
  )
}

export default App
