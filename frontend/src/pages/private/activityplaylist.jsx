import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/song_history.css"

export default function ActivityPlaylist(props) {
  
  return (
    <>
      <TracklistTable></TracklistTable>
    </>
  );
}

function TracklistTable(props) {
  
  return (
    <>
      <div className="gridContainer tracklistTable">
        
        <TableHeaderItem 
        sequenceNumber="#"
        artistName="Artist" 
        trackName="Title"
        timePlayed="Played"></TableHeaderItem>
        
        <RowItem 
        sequenceNumber="1"
        artistName="Tinlicker" 
        trackName="Be Here and Now"
        timePlayed="3m:12s"></RowItem>
      
        <RowItem 
        sequenceNumber="2"
        artistName="Above & Beyond" 
        trackName="Almost Home - Above & Beyond Deep Mix"
        timePlayed="6m:32s"></RowItem>
        
        <RowItem 
        sequenceNumber="31435"
        artistName="DIIV" 
        trackName="Under the Sun"
        timePlayed="5m:1s"></RowItem>
        
      </div>
    </>
  )
}

function TableHeaderItem(props) {
  
  return (
    <>
      
        <div style={{backgroundColor: "black", width: "100%", color: "white", overflow: "visible"}} className="gridItem col-1">
        <p>{props.sequenceNumber}</p>
        </div>
        <div style={{backgroundColor: "black", width: "100%", color: "white", overflow: "visible"}} className="gridItem col-2">
        <p>{props.artistName}</p>
        </div>
        <div style={{backgroundColor: "black", width: "100%", color: "white", overflow: "visible"}} className="gridItem col-3">
        <p>{props.trackName}</p>
        </div>
        <div style={{backgroundColor: "black", width: "100%", color: "white", overflow: "visible"}} className="gridItem col-4">
        <p>{props.timePlayed}</p>
        </div>
      
    </>
  )
}

function RowItem(props) {
 
  return (
    <>
        <div className="gridItem col-1">
        <p className="rowItemText">{props.sequenceNumber}</p>
        </div>
        <div className="gridItem col-2">
        <p className="rowItemText">{props.artistName}</p>
        </div>
        <div className="gridItem col-3">
        <p className="rowItemText">{props.trackName}</p>
        </div>
        <div className="gridItem col-4">
        <p className="rowItemText">{props.timePlayed}</p>
        </div>
    </>
  );

}
