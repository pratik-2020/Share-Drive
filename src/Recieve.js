import React, {useState} from 'react'
import { Button, Input } from '@material-ui/core';
import FileDownload from './FileDownload';
import HomeComponent from './HomeComponent';
import './Recieve.css'
function Recieve() {
    const [username, setUsername] = useState('');
    const [treename, setTreename] = useState('');
    const [downloadFile, setDownloadFile] = useState(false);

    const connect = () => {
        //alert(username);
        //alert(treename);
        setDownloadFile(true);
    }
    const renderDownloadFile = (a) => {
        if(a){
            return(
                <FileDownload treename={treename}/>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
//onChange={(e) => {setTreename(e.target.value)}}
    return (
        <div>
            <HomeComponent />
            <div className="recieve__page">
            <p>Username : </p><Input type="text" placeholder="treename" ></Input>
            <p>Treename : </p><Input type="text" placeholder="Treename" id = "treename" onChange={(e) => {setTreename(e.target.value)}}></Input>
            <Button onClick={connect}>Connect to the Tree</Button>
            {renderDownloadFile(downloadFile)}
        </div>
        </div>
    )
}

export default Recieve
