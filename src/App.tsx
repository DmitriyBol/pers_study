import './App.css'
import {ExamplesHOC} from "../modules/reactModule/HOC/examplesHOC";
import {generatorExampleOne} from "../modules/javascriptModule/generatorModule";
import {UseStateHookExample} from "../modules/reactModule/hooksModule";
import {summaryExample} from "../modules/javascriptModule/eventLoopModule";
import {AsyncExampleTwoWithFakeData} from "../modules/javascriptModule/asyncModule";
import {CookieStoreExample} from "../modules/browerStores/cookieStore";

function App() {
  return (
        <>
            <ExamplesHOC componentOrFunction={generatorExampleOne} label='generatorOne' />
            <ExamplesHOC componentOrFunction={summaryExample(2,5)} label='summary' />
            <ExamplesHOC componentOrFunction={<UseStateHookExample />} label='UseState' />
            <ExamplesHOC componentOrFunction={<AsyncExampleTwoWithFakeData />} needFakeData label='AsyncWithFake' />
            <ExamplesHOC componentOrFunction={<CookieStoreExample />} label='CookieStore' />
        </>
  )
}

export default App
