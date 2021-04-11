import React, { useState } from 'react';
//axios for api request
import Axios from 'axios';
//import './css/components.css';
import { BrowserRouter as Router, Link, Switch , Route } from 'react-router-dom';
import safety from './../../images/safety.png';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import SaveIcon from '@material-ui/icons/SaveRounded';


const useStyles = makeStyles((theme) => ({
  

     boxtotal: {
     color: '#4d137f',      
            },
    button: {
     backgroundColor: 'green',    
    },

    
}));




function SafetyPMD() {
    
 const total1 = React.useRef(0);
 const total2 = React.useRef(0);
 const total3 = React.useRef(0);
 const total4 = React.useRef(0);
 const total5 = React.useRef(0);
 const total6 = React.useRef(0);
 const total7 = React.useRef(0);
 const total8 = React.useRef(0);
 const total9 = React.useRef(0);
 const total10 = React.useRef(0);
    

    
 const [riskTotal, calculateTotal] = useState(0);  
 const [riskLevel, calculateRiskLevel] = useState("Low Risk");  
 const [boxColor, setBoxColor] = useState("success.main");  
 var today = new Date();
    
 var date = today.getFullYear()+'-'+adjust(today.getMonth()+1)+'-'+adjust(today.getDate());
 var time = adjust(today.getHours()) + ":" + adjust(today.getMinutes())+ ":" + adjust(today.getSeconds());
 var dateTime = `${date}T${time}`;    

    
 const[currentDateTime, setDateTime] = useState(dateTime); 
 //const currentDate = React.useRef(dateTime);    

console.log(currentDateTime);    
 


  const classes = useStyles();
  const boxTotal = '#ffffff';    
    
    
function getTotal(){
    
let total = parseInt(total1.current.value, 10) + 
            parseInt(total2.current.value, 10) +
            parseInt(total3.current.value, 10) +
            parseInt(total4.current.value, 10) +
            parseInt(total5.current.value, 10) +
            parseInt(total6.current.value, 10) +
            parseInt(total7.current.value, 10) +
            parseInt(total8.current.value, 10) +
            parseInt(total9.current.value, 10) +
            parseInt(total10.current.value, 10); 
//let total = total1.current.value + total2.current.value;

    console.log(total);
 
    calculateTotal(total);
    
    if(total >= 7){
       calculateRiskLevel( "High Risk");
       setBoxColor("error.main");
       document.getElementById("actualrisk").style.backgroundColor = "red";
       document.getElementById("actualrisk").style.color= "#fff";    
        
    } else if(total <7 && total >3){
       calculateRiskLevel( "Medium Risk");
        setBoxColor("warning.main");
        document.getElementById("actualrisk").style.backgroundColor = "yellow";  
        document.getElementById("actualrisk").style.color= "#000";    
    } else{
       calculateRiskLevel( "Low Risk");
        setBoxColor("success.main");
        document.getElementById("actualrisk").style.backgroundColor = "green";
         document.getElementById("actualrisk").style.color= "#fff";
    }

    
};    
    

function adjust(v){
if(v>9){
return v.toString();
}else{
return '0'+v.toString();
}
}
    
function updateDateTime(){
    
    //setDateTime();
}
    
function saveInfo(event){
    
    event.preventDefault();

    const formData = new FormData();
    formData.append('currentdate', '2');
    formData.append('lastupdatedate','2');
      
    
    JSON.stringify(formData);
    
    console.log(formData.currentdate);

};    
    
    
    

return (

    
    <div className="PmdForm"> 
    
  
    <div className="row"> 
      

        
    <div className="col-sm-12 col-md-9 col-lg-10  ">
    <div className="card">    
    <div>

       <Grid container spacing={2}>
    
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <Box bgcolor={boxTotal} color="text.primary" p={1}>
         HSE Safety Trigger
        </Box>
      </Grid>
    
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Box bgcolor={boxColor}  color="primary.contrastText" p={1}>
          Total Score : {riskTotal}
        </Box>
      </Grid>
    
       <Grid item xs={12} sm={6} md={6} lg={3}>
        <Box bgcolor={boxColor} color="primary.contrastText" p={1}>
          Risk Level: {riskLevel}
        </Box>
      </Grid>
    
         <Grid item xs={12} sm={6} md={6} lg={3}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={1} onClick={() => {window.location.reload()}}>
       
       
        <RefreshRoundedIcon/> Reset 
      
         
        </Box>
      </Grid>
    
     </Grid>
        
    </div>    
    <form id="qualityform" onSubmit={saveInfo} >
          <div className="row"> 
          
          <div className="col-lg-6 col-md-12 col-sm-12 ">  
        
               <div className="input-group date " id="datetimepicker1" data-target-input="nearest">
                           <div className="input-group-prepend">
                       <span className="input-group-text" id="currentdate">Date</span>
                   </div>
           
                     <input class="form-control" type="datetime-local" defaultValue={currentDateTime} id="currentdate" name="currentdate" />
    
              
                </div>
         </div> 
          <div className="col-lg-6 col-md-12 col-sm-12 ">  
         
                   <div className="input-group" >
                       <div className="input-group-prepend">
                    <span className="input-group-text" id="lastupdatedate">Last Updated</span>
                     </div>
                   <input class="form-control" type="datetime-local" defaultValue={currentDateTime}   id="lastupdatedate" name="lastupdatedate" />
    
                </div>  
        
         </div> 
    
        </div> 
          <div className="row"> 
              <div className="col-lg-6 col-md-12">  
              <div className="input-group">
                <div className="input-group-prepend">
               <span className="input-group-text" id="">Supervisor</span>
               </div>
                  <input type="text" className="form-control" name="supervisor" />
              </div>
        
          </div>
                <div className="col-lg-6 col-md-12">  
              <div className="input-group">
                <div className="input-group-prepend">
               <span className="input-group-text" id="">Operator</span>
               </div>
                  <input type="text" readonly className="form-control" name="operator" value="" />
              </div>
        
          </div>
        </div>  
        
          <div className="row"> 
              <div className="col-lg-6 col-md-12">  
              <div className="input-group">
                <div className="input-group-prepend">
               <span className="input-group-text" id="">Line</span>
               </div>
                  <select className="custom-select" id="line" name="line" required>
                  <option selected>Choose...</option>
                  <option value="Conditioning">Conditioning</option>
                  <option value="Drying">Drying</option>
                        
                  </select>
              </div>
        
          </div>
                <div className="col-lg-6 col-md-12">  
              <div className="input-group">
                <div className="input-group-prepend">
               <span className="input-group-text" id="">Shift</span>
               </div>
                <select className="custom-select" id="shift" name="shift" required>
                  <option selected>Choose...</option>
                <option value="Morning Shift: 7am-3pm">Morning Shift: 7am-3pm</option>
                  <option value="Afternoon Shift: 3pm-11pm">Afternoon Shift: 3pm-11pm</option>
                  <option value="Night Shift: 11pm-7am">Night Shift: 11pm-7am</option>
                  </select>
              </div>
        
          </div>
        </div> 
        
          <div className="row"> 
            <div className="col-lg-12 col-md-12">  
           <div className="form-group">
               <label for="exampleFormControlSelect2">1.) Team Staffing less than set Standard?<br /> <span className="spancounter">Get additional staff to fill the crew.</span></label>
           <select  className="form-control" id="total1" name="total1" onChange={getTotal} ref={total1} >
           <option value="0">0</option>
          <option value="1">1</option>
   
          </select>
          </div>
        
          </div>
       
        </div>  
          <div className="row"> 
            <div className="col-lg-12 col-md-12">  
           <div className="form-group">
               <label for="exampleFormControlSelect2">2.) Start up from down day or shutdown activities?<br /> <span className="spancounter" > Complete QRP for start- up /shut down activities</span></label>
           <select  className="form-control" id="total2" name="total2" onChange={getTotal} ref={total2}>
            <option value="0">0</option>
          <option value="2">2</option>
   
          </select>
          </div>
        
          </div>
       
        </div> 
          <div className="row"> 
            <div className="col-lg-12 col-md-12">  
           <div className="form-group">
               <label for="exampleFormControlSelect2">3.) Personnel is less than 6 weeks of machine operation after formal induction training<br /> <span className="spancounter" >Remove personnel from the machine until ensure that it is accompanied by a tutor?</span ></label>
           <select  className="form-control" id="total3" name="total3" onChange={getTotal} ref={total3}>
               <option value="0">0</option>
          <option value="3">3</option>
   
          </select>
          </div>
        
          </div>
       
        </div>   
          <div className="row"> 
            <div className="col-lg-12 col-md-12">  
           <div className="form-group">
               <label for="exampleFormControlSelect2">4.) CO, NPI, CPT and visitors tour of the factory?<br /> <span className="spancounter" >Barricade the area ; complete QRP on tasks and induction for visitors.</span></label>
           <select  className="form-control" id="total4" name="total4" onChange={getTotal} ref={total4}>
            <option value="0">0</option>
          <option value="4">4</option>
   
          </select>
          </div>
        
          </div>
       
        </div> 
          <div className="row"> 
            <div className="col-lg-12 col-md-12">  
           <div className="form-group">
               <label for="exampleFormControlSelect2">5.) Corrective Maintenance/Manual feeding/Breakdown/Trouble shooting processes?<br /> <span className="spancounter" >EO/Technician to escalate to Team leader or Line lead and complete QRP on tasks. Team leader or line lead to validate the countermeasures in place.</span></label>
           <select  className="form-control"  id="total5" name="total5" onChange={getTotal} ref={total5}>
          <option value="0">0</option>
          <option value="4">4</option>
   
          </select>
          </div>
        
          </div>
       
        </div> 
          <div className="row"> 
            <div className="col-lg-12 col-md-12">  
            <div className="form-group">
               <label for="exampleFormControlSelect2">6.) 1 First aid or more in the last 7 days?<br /> <span  className="spancounter">Ensure effective communication to all modules, implement containment and correction actions</span></label>
           <select  className="form-control" id="total6" name="total6" onChange={getTotal} ref={total6}>
          <option value="0">0</option>
          <option value="4">4</option>
   
          </select>
          </div>
        
          </div>
       
        </div> 
         <div className="row"> 
            <div className="col-lg-12 col-md-12">  
            <div className="form-group">
               <label for="exampleFormControlSelect2">7.) Obstruction on shop-floor gang-way (excess pallets or machinery on gangway)?<br /> <span className="spancounter" >Cordon the area, only experienced personnel on the line, complete JSA for the tasks.</span></label>
           <select  className="form-control" id="total7"  name="total7" onChange={getTotal} ref={total7}>
         <option value="0">0</option>
          <option value="6">6</option>
   
          </select>
          </div>
        
          </div>
       
        </div> 
         <div className="row"> 
            <div className="col-lg-12 col-md-12">  
            <div className="form-group">
               <label for="exampleFormControlSelect2">8.) Preventive Maintenance/Deep cleaning?<br /> <span className="spancounter" >Contact shift team leader or cell leader or QA supervisor.</span></label>
           <select  className="form-control" id="total8" name="total8" onChange={getTotal} ref={total8}>
          <option value="0">0</option>
          <option value="7">7</option>
   
          </select>
          </div>
        
          </div>
       
        </div>
        <div className="row"> 
            <div className="col-lg-12 col-md-12">  
            <div className="form-group">
               <label for="exampleFormControlSelect2">9.) Machine running with broken/missing guard or mal functioning interlock/New machine installation?<br /> <span className="spancounter">Stop machine, escalate to Line lead or Team Leader. Countermeasures to be identified and put in place. Machine to start only after validation of countermeasures.</span></label>
           <select  className="form-control" id="total9" name="total9" onChange={getTotal} ref={total9}>
          <option value="0">0</option>
          <option value="7">7</option>
   
          </select>
          </div>
        
          </div>
       
        </div>
        
            <div className="row"> 
            <div className="col-lg-12 col-md-12">  
            <div className="form-group">
               <label for="exampleFormControlSelect2">10.) Open electric cabinets/Environmental hazards rain water ingress ,dust fumes leakages,smoke,noise levels?<br /> <span className="spancounter" >Stop machine, escalate to Line lead or Team Leader. Countermeasures to be identified and put in place. Machine to start only after validation of countermeasures.</span></label>
           <select  className="form-control" id="total10" name="total10" onChange={getTotal} ref={total10}>
          <option value="0">0</option>
          <option value="7">7</option>
   
          </select>
          </div>
        
          </div>
       
        </div>
        
        <div className="row "> 
          
          <div className="col-lg-6 col-md-6 ">  
              <div className="input-group col1">
                <div className="input-group-prepend">
               <span className="input-group-text" id="">Total Score</span>
               </div>
                  <input type="text" readonly  className="form-control" id="totalscore" name="totalscore" value={riskTotal} />
              </div>
        
         </div> 
          <div className="col-lg-6 col-md-6">  
              <div className="input-group">
                <div className="input-group-prepend">
               <span className="input-group-text" id="">Actual Risk Level</span>
               </div>
                  <input type="text"  readonly ="readonly" className="form-control" id="actualrisk" name="actualrisk"  value={riskLevel} />
              </div>
        
         </div> 
    
        </div> 
        <div className="row"> 
          
          <div className="col-lg-12 col-md-12">  
          <div className="form-group">
          <label for="exampleFormControlTextarea1">Countermeasures</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="None" name="countermeasures"></textarea>
          </div>
          </div>      
              
       </div>
        
     <div className="row">
         <div className="col-lg-12 col-md-12">  
          <div className="form-group">
              
        <Button
        variant="contained"
        color="success.main"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        type ='submit'
         >
        Save
      </Button>
        </div>
        </div>
        </div>

        

     </form> 
        
    </div>
        </div> 
    <div className="col-md-3 col-lg-2">
        <img src={safety} width="100%" className="guidePic"  />
    </div>    
 </div>

    
    
    
    </div>
);



}
    
export default  SafetyPMD ;    

    
 
    
    







 
    

    
    
   
    

