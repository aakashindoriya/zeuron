import React, { useState } from 'react';
import styles from "./Sidebar.module.css"
import general from "../utils/general.png"
import eye from "../utils/Eye.png"
import neuron  from "../utils/Neuron.png"
import hair from "../utils/Hair.png"
import lungs from "../utils/Lungs.png"
import settings from "../utils/Settings.png"
import xray from "../utils/X ray.png"
import heart from "../utils/heart.png"
const Sidebar = () => {
    let [menuitems,setMenuitems]=useState([
        {
            link:general,
            text:"General"
        },
        {
            link:eye,
            text:"Optometry"
        },{
           link:neuron,
           text:"Neurology" 
        },
        {
            link:lungs,
            text:"Pulmonology"
        },
        {
            link:hair,
            text:"Cardiology"
        },{
            link:settings,
            text:"Settings"
        },{
            link:xray,
            text:"Radiology"
        },
        {
            link:general,
            text:"General"
        },
        {
            link:general,
            text:"General"
        },
        {
            link:general,
            text:"General"
        }
    ])
    return(
  <>
    <div id={styles.sidebar}>
        <div id={styles.menubar}>
                
                {
                  menuitems.map((el)=>
                  <div className={styles.menuitems}>
                  <img src={el.link} alt="heart" />
                  <p>{el.text}</p>
              </div>)  
                }
        </div>
    </div>
  </>
    )
};

export default Sidebar;