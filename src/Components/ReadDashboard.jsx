import React , { Compoenent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './CSS/ReadDashboard.css';

const ReadDashboard = () => {
    
    const location = useLocation();

    const navigate = useNavigate();
    

    return (


        <div className="readbox_outer">
            <div className="innerbox">
                <h3> { location.state.todoheader } </h3>
                <textarea name="" id="" cols="30" rows="25" className="read_textbox" value={ location.state.todocontaint} > 
    
                </textarea>
            </div>
    
            <div className="readbox_footer">
                <div className="readbox_footer_left">
                    <input type="button" value="Close"  onClick={ () => navigate('/') } />
                    {/* <input type="button" value="Delete" />
                    <input type="button" value="Edit" /> */}
                </div>

                <div className="readbox_footer_right">
                    <h5> { location.state.tododate }</h5>
                </div>
              
            </div>
    
    
        </div>
    
    );
}

export default ReadDashboard;