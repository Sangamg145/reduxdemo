
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {Add} from './redux/action/add'
function App() {
 const data1 = useSelector((state)=>state.Addred)
 const dispatch = useDispatch();
 const data12 =[
   {id:1,name:'ddd',song:'shadow'},
 {id:2,name:'ddd',song:'shadow'},
 {id:3,name:'ddd',song:'shadow'},
 {id:4,name:'ddd',song:'shadow'},
 {id:5,name:'ddd',song:'shadow'}
]
  return (
    <div>
      {
      data12.map((i)=><div>
 <h1>Add {data1.add} {/* {data1.data.name} */}</h1>
 <br></br>
    <button onClick={()=>dispatch(Add({id:i.id,name:i.name,song:i.song}))}>increament</button>
    
        </div>)
      
      }
   </div>
  );
}

export default App;
