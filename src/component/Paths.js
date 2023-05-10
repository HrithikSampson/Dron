import React,{useState} from 'react'
import {Map} from './Map'
function Paths() {
const [currPath,setCurrPath] = useState([]);
const [lt,setlt] = useState(0);
const [lgt,setlgt] = useState(0);
const [sim,setSim] = useState(false);
function chngLatitude(event){
    setlt(event.target.value);
}

function chngLongitude(event){
    setlgt(event.target.value);
}
function addCoordinate(){
  if(!sim)
    setCurrPath([...currPath,{lat:parseFloat(lt,2),lng:parseFloat(lgt,2)}]);
}

return (
  <>
  <div className="latitude-longitude-list">
      {
        currPath.map((path,id)=>

              (<div key={id} style={{"display":"flex","justifyContent":'center'}}>
                  <span>{path.lat}</span>
                  <span>{path.lng}</span>
              </div>)

        )
      }
      <input type="number" className="lt" placeholder='Enter Latitude' id="lt" value={lt} onChange={chngLatitude}></input>
      <input type="number" className='lgt' id='lgt' placeholder='Enter Longitude' value={lgt} onChange={chngLongitude}></input>
      <button onClick={addCoordinate}>Add</button>
    </div>
    <div>
      <button onClick={()=>{if(sim){setCurrPath([])};setSim(!sim);}}>Simulate</button>
    </div>
    <div className="map">
      {((sim)?<Map pathArray={currPath}/>:<></>)}
    </div>
  </>
  );
}
export {Paths};