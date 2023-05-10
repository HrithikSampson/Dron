
import {GoogleMap,Polyline as PolyLine,LoadScript} from '@react-google-maps/api';
import{useState,Fragment,useCallback} from 'react';
const config = require('./config.json');
function Map({pathArray}){
        const [map,setMap] = useState(null);

        console.log(pathArray);
        const onLoad = useCallback(function callback(map) {
                if(pathArray.length){
                        const bounds = new window.google.maps.LatLngBounds(pathArray[0]);
                        for(let i=1;i<pathArray.length;i++){
                                bounds.extend(new window.google.maps.LatLngBounds(pathArray[i]))
                        }
                        map.fitBounds(bounds);
                        setMap(map)
                }
        }, []);

        const onUnmount = useCallback(function callback(map) {
            setMap(null)
        }, [])


        function mapLoad(pmap){
                if(pmap!=null){
                        return;
                }
                setMap(map);
        return map;
        }
        return(
                        <LoadScript
                                googleMapsApiKey={config.API_KEY}>

                                <GoogleMap
                        center={pathArray[0]}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                >
                        <PolyLine path={pathArray}
                                options={{
                                strokeColor: '#00ffff',
                                strokeOpacity: 1,
                                strokeWeight: 2,
                                icons: [{
                                  icon: "hello",
                                  offset: '0',
                                  repeat: '10px'
                                }],
                                }}
                                >
                        </PolyLine>
                </GoogleMap>
                        </LoadScript>

        )
}
export {Map};