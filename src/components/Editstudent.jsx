import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editstudent = () => {
  const [rollno, setRollNo] = useState();
  const [studentname, setStudentName] = useState();
  const [math, setMath] = useState();
  const [science, setScience] = useState();
  const [english, setEnglish] = useState();
  const [hindi, setHindi] = useState();
  const [marathi, setMarathi] = useState();
//   const [userdata, setUserData] = useState([]);

  const { userID } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:2000/student/${userID}`)
      .then(async (res) => {
        const rowData = await res.data[0];
        console.log(rowData);
        setRollNo(rowData.rollno);
        setStudentName(rowData.studentname);
        setMath(rowData.math);
        setScience(rowData.science);
        setEnglish(rowData.english);
        setHindi(rowData.hindi);
        setMarathi(rowData.marathi);
      })
      .catch((err) => console.log(err));
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const dataObj = {
      rollno,
      studentname,
      math,
      science,
      english,
      hindi,
      marathi,
    };
    // console.log(dataObj);
    axios.put(`http://localhost:2000/student/${userID}`, dataObj);
    navigate("/home")

  };

  return (
    <>
    <div className="form_container">
    
    <form onSubmit={HandleSubmit}> 
      <div className="main_form">
          <p>Student Form</p>
      <div>
      <label>Student Name <span className="err">*</span></label><br></br>
      <input className="inputinfo_sname" type="text" onChange={(e) => setStudentName(e.target.value)} value={studentname}/>
      </div>
      <div className="main_2">
      <div>
      <label>Roll No<span className="err">*</span></label><br></br>
      <input className="inputinfo" type="number"onChange={(e) => setRollNo(e.target.value)}value={rollno}/>
      </div>
      <div>
      <label>Math <span className="err">*</span></label><br></br>
      <input className="inputinfo" type="number" onChange={(e) => setMath(e.target.value)} value={math}/>
      </div>
      <div>
      <label>Sciences <span className="err">*</span></label><br></br>
      <input className="inputinfo" type="number" onChange={(e) => setScience(e.target.value)}value={science}/>
      </div>
      </div>
      <div className="main_3">
      <div>
      <label>Hindi<span className="err">*</span></label><br></br>
      <input className="inputinfo" type="number" onChange={(e) => setHindi(e.target.value)} value={hindi}/>
      </div>
      <div>
      <label>English <span className="err">*</span></label><br></br>
      <input className="inputinfo" type="number"onChange={(e) => setEnglish(e.target.value)} value={english}/>
      </div>
      <div>
      <label>Marathi <span className="err">*</span></label><br></br>
      <input className="inputinfo" type="number" onChange={(e) => setMarathi(e.target.value)} value={marathi}/>
      </div>
      </div>
      <div className="submit_btn">
      <input type="submit" className="submit" value="Update" />
      </div>
      </div>
    </form>
    </div>
        </>
  );
};

export default Editstudent;
