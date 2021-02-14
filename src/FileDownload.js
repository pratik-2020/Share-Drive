import React, { useState, useEffect } from 'react'
import {db, auth, storage } from './Firebase';
import firebase from 'firebase';
import { Table } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import HomeComponent from './HomeComponent';
import PDFViewer from 'pdf-viewer-reactjs';
//import { Document, Page } from 'react-pdf';
//import { Link } from 'react-router';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function FileDownload({treename}) {
    const [files, setFiles] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        db.collection(treename).onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                file:doc.data()
            })))
        })
    }, [])//1369
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>         
            {files.map(({id, file}) => {
                var t = [];
                t = file.name.split(".")
                if(t[1] == "png" || t[1] == "jpeg" || t[1] == "jpg"){
                    return(
                        <Card style={{top:"70%", width: "50%", height:"5%", left:"5%", border:"0px", paddingTop:"5%"}}>
                            <CardImg style={{top:"70%", width: "300px", height:"300px"}} src={file.FileUrl} alt="Hello" />
                            <CardBody>
                            <p><a href={file.FileUrl} download style={{fontSize:"18px"}}>{t[0]}</a></p>
                            </CardBody>
                        </Card>
                    )
                }
                else if(t[1] == "mp4"){
                    return(
                        <Card style={{top:"70%", width: "100%", height:"5%", left:"5%", border:"0px"}}>
                            <ReactPlayer width="300px" height="300px" controls url={file.FileUrl}/>
                            <CardBody>
                            <p><a href={file.FileUrl} download style={{fontSize:"18px"}}>{t[0]}</a></p>
                            </CardBody>
                        </Card>
                    );
                }
                else{
                    return(
                        <Card style={{top:"70%", width: "100%", height:"5%", left:"5%", border:"0px"}}>
                            <CardBody>
                            <CardText style={{fontSize:"18px"}}><a href={file.FileUrl} download>{t[0]}</a></CardText>
                            </CardBody>
                        </Card>
                    );
                }
            })}
        </div>
    )
}

export default FileDownload;