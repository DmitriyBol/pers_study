import './App.css'
import {ExamplesHOC} from "../modules/reactModule/HOC/examplesHOC";
import {generatorExampleOne} from "../modules/javascriptModule/generatorModule";
import {UseEffectHookExample, UseStateHookExample} from "../modules/reactModule/hooksModule";
import {summaryExample} from "../modules/javascriptModule/eventLoopModule";
import {AsyncExampleTwoWithFakeData} from "../modules/javascriptModule/asyncModule";
import {CookieStoreExample} from "../modules/browserStores/cookieStore";
import {IndexedDBExample} from "../modules/browserStores/indexedDB";
import {LocalStoreExample} from "../modules/browserStores/localStore";
import {FetchDataModuleExample} from "../modules/reactModule/fetchDataModule";
import {CachedCalculation} from "../modules/reactModule/cachedCalculation";

function App() {
  return (
        <>
            {/*<ExamplesHOC componentOrFunction={generatorExampleOne} label='generatorOne' />*/}
            {/*<ExamplesHOC componentOrFunction={summaryExample(2,5)} label='summary' />*/}
            {/*<ExamplesHOC componentOrFunction={<UseStateHookExample />} label='UseState' />*/}
            {/*<ExamplesHOC componentOrFunction={<AsyncExampleTwoWithFakeData />} needFakeData label='AsyncWithFake' />*/}
            {/*<ExamplesHOC componentOrFunction={<CookieStoreExample />} label='CookieStore' />*/}
            {/*<ExamplesHOC componentOrFunction={<IndexedDBExample />} />*/}
            {/*<ExamplesHOC componentOrFunction={<LocalStoreExample />} />*/}
            {/*<ExamplesHOC componentOrFunction={<FetchDataModuleExample />} />*/}
            {/*<FetchDataModuleExample />*/}
            {/*<UseEffectHookExample />*/}
            <CachedCalculation />
        </>
  )
}

export default App
