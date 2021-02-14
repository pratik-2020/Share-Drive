import { Input, Button } from '@material-ui/core';
import { db, storage, auth } from './Firebase';
import React, { useState } from 'react';
import firebase from 'firebase';
var j=0;
function FileUpload({treename}) {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleOnChange = (e) => {
        if(e.target.files[0]){
            setFile(e.target.files[0])
        }
    };
    var time = new Date();
    var Treename = ""+treename+time.getDate()+':'+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()
    const handleUpload = () => {
        alert(file.name);

        const uploadFile = storage.ref(`files/${file.name}`).put(file);
        uploadFile.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error)
                alert(error)
            },
            () => {
                storage
                .ref("files")
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    db.collection(treename).doc(file.name).set({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        treename: treename,
                        name: file.name,
                        FileUrl: url
                    })
                    j++;
                    setFile(null);
                    setProgress(0);
                })
            }
        )
    }
    return (
        <div>
            <h1>{treename}</h1>
            <progress className="imageUpload__progress" value={progress} max="100" />
           <input type="file" onChange={handleOnChange}></input>
           <Button type="submit" onClick={handleUpload}>Upload</Button> 
        </div>
    )
}

export default FileUpload
