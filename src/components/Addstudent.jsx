import axios from "axios";
import "./Addstudent.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';


const Addstudent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
  const navigate = useNavigate();
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/student")
      .then(async (res) => {
        const rowData = await res.data;
        // console.log(rowData);
        setUserData(rowData);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(userdata);



  const [rollno, setRollNo] = useState();
  const [studentname, setStudentName] = useState();
  const [math, setMath] = useState();
  const [science, setScience] = useState();
  const [english, setEnglish] = useState();
  const [hindi, setHindi] = useState();
  const [marathi, setMarathi] = useState();
  const SubmitData = (e) => {
    // e.preventDefault();
    const dataObj = {
      rollno,
      studentname,
      math,
      science,
      english,
      hindi,
      marathi,
    };
    // userdata.filter((row)=>{
    //   if(row.rollno == rollno){
    //     alert("Please Enter another Roll No")
    //     return false;    
    // }})
    // console.log(dataObj);
    axios.post("http://localhost:2000/student", dataObj);
    navigate("/home");
  };
  
  return (
    <>
    <div className="form_container">
    
      <form onSubmit={handleSubmit(SubmitData)}> 
        <div className="main_form">
            <p>Student Form</p>
        <div>
        <label>Student Name <span className="err">*</span></label><br></br>
        <input className="inputinfo_sname" type="text"  
        {...register('studentname', { required: true })}
        onChange={(e) => setStudentName(e.target.value)}/>
        {errors.studentname && !studentname && <p className="err">Student Name is required.</p>}
        </div>
        <div className="main_2">
        <div>
        <label>Roll No<span className="err">*</span></label><br></br>
        <input className="inputinfo" type="number"
        {...register('rollno', { required: true })}
        onChange={(e) => setRollNo(e.target.value)}value={rollno}/>
        {errors.rollno && !rollno && <p className="err">Roll No is required.</p>}
        </div>
        <div>
        <label>Math <span className="err">*</span></label><br></br>
        <input className="inputinfo" type="number" 
        {...register('math', { required: true })}
        onChange={(e) => setMath(e.target.value)} value={math}/>
        {errors.math && !math && <p className="err">Mathematics is required.</p>}
        </div>
        <div>
        <label>Sciences <span className="err">*</span></label><br></br>
        <input className="inputinfo" type="number" 
        {...register('science', { required: true })}
        onChange={(e) => setScience(e.target.value)}value={science}/>
        {errors.science && !science && <p className="err">Science is required.</p>}
        </div>
        </div>
        <div className="main_3">
        <div>
        <label>Hindi<span className="err">*</span></label><br></br>
        <input className="inputinfo" type="number" 
        {...register('hindi', { required: true })}
        onChange={(e) => setHindi(e.target.value)} value={hindi}/>
        {errors.hindi && !hindi && <p className="err">Hindi is required.</p>}
        </div>
        <div>
        <label>English <span className="err">*</span></label><br></br>
        <input className="inputinfo" type="number"
        {...register('english', { required: true })}
        onChange={(e) => setEnglish(e.target.value)} value={english}/>
        {errors.english && !english && <p className="err">English is required.</p>}
        </div>
        <div>
        <label>Marathi <span className="err">*</span></label><br></br>
        <input className="inputinfo" type="number" 
        {...register('marathi', { required: true })}
        onChange={(e) => setMarathi(e.target.value)} value={marathi}/>
        {errors.marathi && !marathi && <p className="err">Marathi is required.</p>}
        </div>
        </div>
        <div className="submit_btn">
        <input type="submit" className="submit" />
        </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Addstudent;
