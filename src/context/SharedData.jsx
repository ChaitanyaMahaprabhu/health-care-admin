import { createContext } from "react";
import { useState, useEffect } from "react";

const context = createContext();
const SharedData = (props) => {
    const users = ["Patient", "Doctor", "Admin"];
    const genders = ["Male", "Female"];

    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        getDoctors();
        getPatients();
      }, []);
      
      
      const getDoctors = async () => {
        try {
          const response = await fetch("https://localhost:7261/api/Doctors");
          if (response.ok) {
            const data = await response.json();
            setDoctors(data);
          } else {
            console.error("Error fetching doctors:", response.statusText);
          }
        } catch (e) {
          console.log(e);
        }
      };

      const getPatients = async () => {
        try {
          const response = await fetch("https://localhost:7261/api/Patients");
          if (response.ok) {
            const data = await response.json();
            setPatients(data);
          } else {
            console.error("Error fetching patients:", response.statusText);
          }
        } catch (e) {
          console.log(e);
        }
      };
      
    const data = {
        users: users,
        genders: genders,
        doctors: doctors,
        patients: patients
    };
    
    return(
        <>
            <context.Provider value = {data}>
                {props.children}
            </context.Provider>
        </>
    )
}

export {SharedData, context};