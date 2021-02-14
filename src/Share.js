import { Button, Input } from '@material-ui/core'
import React, { useState, setState } from 'react'
import FileUpload from './FileUpload';
import HomeComponent from './HomeComponent';
import './Share.css';
function Share() {
    const submit = () => {
        createTree(true);
    }
    const [username, setUsername] = useState('');
    const [treename, setTreename] = useState('');
    const [createATree, createTree] = useState(false);
    const renderUpload =(a) => {
        if(a){
            return(
                <FileUpload treename={treename} />
            );
        }else{
            return(
                <div></div>
            );
        }
    }
    return (
        <div>
            <HomeComponent />
            <div className="send__page">
            <p>Username : </p><Input type="text" placeholder="username" onChange={(e)=> {setUsername(e.target.value)}}></Input>
            <p>Treename : </p><Input type="text" placeholder="Treename" onChange={(e) => {setTreename(e.target.value)}}></Input>
            <Button onClick={submit}>Create Tree</Button>
            {renderUpload(createATree)}
        </div>
        </div>
    );
}
export default Share