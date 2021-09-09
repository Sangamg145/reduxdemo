import {createStore} from 'redux'
import Addred from './reducer/index'

 const store = createStore(Addred,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store;