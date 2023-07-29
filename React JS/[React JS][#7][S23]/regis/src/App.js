import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import classNames from "classnames";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";


import { InputTextarea } from 'primereact/inputtextarea';
import "./App.css";
        
const initialState={
  name: '',
  address:'',
  email: '',
  password: '',
  telephone: '',
  dropdownValue: 'C#',
  note: "",
};
const courses= ['C#', 'ReactJs', 'Java', 'C++', 'Python'];

const App = () => {
  const [formData, setFormData] = useState(initialState);
  const toast = useRef(null);



  const Changes = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({ ...preData, [name]: value }));
  };
  const Reset = () => {
    setFormData(initialState);
  };



  
  const Submit = () => {
    const { name, email, password, telephone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    const telephoneRegex = /^\d+$/;

    if (
      !name ||
      !email ||
      !password ||
      !telephone ||
      !address||
      !note||
      !courses.includes(formData.dropdownValue) ||
      !name.match(/^[A-Za-z]+$/) ||
      !emailRegex.test(email) ||
      !passwordStrengthRegex.test(password) ||
      !telephoneRegex.test(telephone)
    ) {
      showToast("error", "Validation Error", "Please Check the Fields Again");
    } else{
      showToast("success", "Success", "Form submitted successfully.");

    }
  };
  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 });
  };

 





  return (
    <div className="app-container">
      <div className="flex-column-container">
        <h3>REGESTRATION FORM</h3>
      <div id="name" className="data-container">
        <label >Name:</label>
        <InputText 
        id="Name" 
        className={classNames(' p-inputtext-border', {
          'p-invalid': !formData.name || !formData.name.match(/^[A-Za-z]+$/),}
          )
        }
        name="name"
        value={formData.name}
        onChange={Changes}
        ></InputText>
      </div>
      <div id="address" className="data-container">
        <label>Address:</label>
        <InputText 
        id="Address"
        className=" p-inputtext-border"
        name="address"
        value={formData.address}
        onChange={Changes}

          ></InputText>
      </div>

      <div id="email" className="data-container">
        <label>E-mail:</label>
        <InputText 
        id="Email"
        className={classNames('block p-inputtext-border', {
          'p-invalid': !formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
        })}
      name="email"
        value={formData.email}
        onChange={Changes}

         ></InputText>
      </div>

      <div id="pass" className="data-container">
        <label>Password:</label>
        <InputText 
        id="Password"
        className={classNames('block p-inputtext-border' ,
        {'p-invalid': !formData.password ||
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(formData.password),}
        )
        }
        type="password"
        name="password"
        value={formData.password}
        onChange={Changes}



          ></InputText>
      </div>


      <div id="tele" className="data-container">
        <label>Telephone:</label>
        <InputText
         id="Telephone" 
         className={classNames(" p-inputtext-border" ,
         {'p-invalid': !formData.telephone || !/^\d+$/.test(formData.telephone)}

    
         )}

         name="telephone"
        value={formData.telephone}
        onChange={Changes}


      >
        
      </InputText>
      </div>

      <div id="course" className="data-container">
        <label>COURSE:</label>
        
        <Dropdown   
          value={formData.dropdownValue}
          options={courses}
          onChange={(e) => setFormData({ ...formData, dropdownValue: e.value })}
          className={classNames("p-inputtext-border",{ 'p-invalid':!courses.includes(formData.dropdownValue) ,})}>
        </Dropdown>
      </div>

      <div id="note" className="data-container">
        <label>Notes:</label>
        <InputTextarea  rows={5} cols={30}  className=" p-inputtext-border"  name="note"          value={formData.note}
 onChange={Changes} />

      </div>

      
      <Button label="Send" id="p-Send" onClick={Submit}></Button>
      <Button label="Reset" onClick={Reset}></Button>
       
      </div>
      <Toast ref={toast} className="custom-toast" position="bottom-right" />
    </div>
  );
};

export default App;










