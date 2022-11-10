import React from 'react'
import {Map ,GoogleApiWrapper} from 'google-maps-react';

export default function Location() {
  return (
   <Map  google={this.props.google}
   style={{width:"100px",height:"100%"}} 
   zoom={10} 
   initialCenter={
    {lat:26.209820,lng:32.768440}
   }/>
  )
}

 GoogleApiWrapper ({
    apiKey : "AIzaSyDFs6XAn3xmMWdK9_yfFdEqNzkhWfMCanE"
})(MapContainer)