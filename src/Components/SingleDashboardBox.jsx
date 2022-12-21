import React , { Component, useEffect } from 'react'
import { useState } from 'react';
import './CSS/SingleDashboardBox.css'

const SingleDashboardBox = (props) =>{
    
    const [todoDB , setTodoDB] = useState([]);

    useEffect(() =>{
        const storage = localStorage;
        let db = storage.getItem('todoDB');
        if(db == null){
            db = [];
        }else{
            db = JSON.parse(db);
        }
        setTodoDB(db);
        console.log("page refreshed..")
    }, []);


    let popup_form = () => {
        document.getElementById('add_box').style.animation = 'pop 0.5s linear forwards';
        document.getElementById('add_btn').value = 'UPDATE ♻️'
    }
    
    let update_todo = (headermsg, contentmsg , todoid) => {
        popup_form();
        let header = document.getElementById('headingbox').value = headermsg;
        let textmsg = document.getElementById('contentbox').value = contentmsg;

         let newdb = todoDB.filter((element) => {
            return element.id != todoid;
        })
        let storage = localStorage;
        storage.setItem('todoDB', JSON.stringify(newdb));
        setTodoDB(newdb);
        console.log("updating : " + todoid);
    }

    return (
        
        <div className="singleDashboardBox">
            <div className="singleDashboardBoxHeader">
                <input type="text" value={props.todoheader} />
            </div>

            <div className="singleDashboardBoxBody">
                <textarea name="singlebody" id="singlebody" cols="30" rows="10" value={props.todocontent} spellCheck="false" >

                </textarea>
            </div>

            <div className="singleDashboardBoxFooter">
                <input type="button" value="Edit" id='editbtn' onClick={() => update_todo(props.todoheader, props.todocontent, props.keydelete)}/>
                <input type="button" value="Delete" id='dltbtn' onClick={ () => props.deletetodo(props.keydelete)}/>
            </div>
            {console.log(props)}
        </div>

        
    );
}
export default SingleDashboardBox;