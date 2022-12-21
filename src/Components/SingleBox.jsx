import React, {Component, useEffect} from "react";
import { useState } from "react";
import './CSS/SingleBox.css'

const SingleBox = () => {

    const [todoDB , setTodoDB] = useState([]);
    
    let add_todo = () => {
        let header = document.getElementById('headingbox').value;
        let textmsg = document.getElementById('contentbox').value;

        let date = get_date();

        const storage = localStorage;
        let db = storage.getItem('todoDB');
        if(db == null){
            db = [];
        }else{
            db = JSON.parse(db);
        }
        setTodoDB(db);


        let obj = {
            id: new Date(),
            header: header,
            content: textmsg,
            date: date
        };

        db.push(obj);
        storage.setItem('todoDB', JSON.stringify(db));

        document.getElementById('headingbox').value = '';
        document.getElementById('contentbox').value = '';

        window.location.reload()
        swapup(); //to close the popup
    }
    


    let get_date = () => {
        let date = new Date();

        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let newDate = days[date.getDay()] + " " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
        return newDate;
    }


    let swapup = () =>{
        document.getElementById('add_box').style.animation = 'revpop 1s linear forwards';
    }
    
    let flag = true;
    let colorChangeSpell = () =>{
        if(flag){
            flag = false;
            handleSpellBtn1();
        }else{
            flag = true;
            handleSpellBtn2();
        }
    }

    let handleSpellBtn1 = () => {
        document.getElementById('autocorbtn').style.animation = 'colorChangeSpellBtn 1s linear forwards';
        document.getElementById('contentbox').spellcheck = true;

    }
    
    let handleSpellBtn2 = () => {
        document.getElementById('autocorbtn').style.animation = 'colorChangeSpellBtn 1s linear reverse';
        document.getElementById('contentbox').spellcheck = false;
    }


    let cancel_form = () => {
        
        let header = document.getElementById('headingbox').value;
        let textmsg = document.getElementById('contentbox').value;
        if (header != '') {
            add_todo();
        } else {
            document.getElementById('headingbox').value = '';
            document.getElementById('contentbox').value = '';
        }
        document.getElementById('add_box').style.animation = 'revpop 1s linear forwards';
        document.getElementById('add_btn').value = 'Add ➕'

    }
    return (

        <div className="box" id="add_box">
            <div className="headerbox">
                <label htmlFor="headingbox"> ✏️ </label>
                <input type="text" name="headingbox" id="headingbox"/> 
            </div>
            <textarea name="contentinfo" id="contentbox" cols="30" rows="8" spellCheck = 'false'></textarea>
            <div className="bottombox">
                <input type="button" id="add_btn" value="ADD ➕" onClick={add_todo} />
                <input type="button" id="cancel_btn" value="CANCEL ❌" onClick={cancel_form} />
                <input type="button" id="autocorbtn" value="Auto Correction" onClick={colorChangeSpell}/>
            </div>
        </div>

    );


};
export default SingleBox;