import React , {Component} from "react";
import { useEffect } from "react";
import { useState } from "react";
import './CSS/GridBoxDashboard.css'
import SingleDashboardBox from "./SingleDashboardBox";

const GridBoxDashboard = () => {

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

    let delete_todo = (todoid) => {
        let newdb = todoDB.filter((element) => {
            return element.id != todoid;
        })
        const storage = localStorage;

        storage.setItem('todoDB', JSON.stringify(newdb));
        setTodoDB(newdb);
    }

    return(

        <div className="gridlayout">
           
           { 
           todoDB.map(element => {
                return <SingleDashboardBox
                    key={element.id}
                    todoheader={element.header}
                    todocontent={element.content}
                    tododate={element.date}
                    deletetodo={delete_todo}
                    keydelete={element.id}
                    />
            })
            }
        </div>

    );
};
export default GridBoxDashboard;