import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactPaginate from "react-paginate";

// import { useForm } from 'react-hook-form';

const Home = () => {
  const [userdata, setUserData] = useState([]);
  const navigate = useNavigate();
  const[serchbar,setSerchBar]=useState("");

  useEffect(() => {
    axios
      .get("http://localhost:2000/student")
      .then(async (res) => {
        const rowData = await res.data;
        // console.log(rowData);
        // console.log("hii")
        setUserData(rowData);
      })
      .catch((err) => console.log(err));
  },[]);
  // console.log(userdata);
  
  // delete student by id logic code
  const { userID } = useParams();

  const deleteData = async (_id) => {
    await axios.delete(`http://localhost:2000/student/${_id}`);
    alert("Student Information is deleted");

  };
// PEGINATION code start logic part 

const PER_PAGE=5;
const [currentpage,setCurrentPage]=useState(0)

function handlePageClick({selected:selectedPage}) {
  // console.log("selectedPage",selectedPage)  
  setCurrentPage(selectedPage);
  }
  const offset = currentpage *PER_PAGE;
  // console.log("offset",offset)
  const pageCount = Math.ceil(userdata.length /PER_PAGE);

  return (
    <>
        {/* search bar code start */}
        <div className="mainnavbar">
          <div>
    <h1 className="tagline">Student Information</h1>

          </div>
        <div className="serchSec">
          <input
            type="text"
            placeholder="Serch Student Name"
            className="serchBarr"
            onChange={(e) => setSerchBar(e.target.value)}
          />
        </div>
        <div>
          <button className="addbtn" onClick={()=>navigate("/addstudent")}>Add Student</button>
        </div>
        </div>
        {/* search bar code end */}
        <center>
        <br></br>
        <table className="map_table">
          <thead border="1">
            <tr>
              {/* <th className="table_head" scope="col">
                SrNo
              </th> */}
              <th className="table_head" scope="col">
                Roll No
              </th>
              <th className="table_head" scope="col">
                Student Name
              </th>
              <th className="table_head" scope="col">
                Mathematic
              </th>
              <th className="table_head" scope="col">
                Sciences
              </th>
              <th className="table_head" scope="col">
                Hindi
              </th>
              <th className="table_head" scope="col">
                English
              </th>
              <th className="table_head" scope="col">
                Marathi
              </th>
              <th className="table_head" scope="col">
                Total
              </th>
              <th className="table_head" scope="col">
                Percentage
              </th>
              <th className="table_head" scope="col">
                Grade
              </th>
              <th className="table_head" scope="col">
                Edit
              </th>
              <th className="table_head" scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
  
            {userdata
            .slice(offset,offset+ PER_PAGE)
            .filter((row)=>{
              if(serchbar == "")
              {
                return(row);
              }
              else if(row.studentname.toLowerCase().startsWith(serchbar.toLowerCase()) || row.rollno == serchbar)
              {
               return(row) ;
              }
            }).map((row, key) => {
              const SrNo = key + 1;
              const marksTotal =
                row.math + row.science + row.hindi + row.english + row.marathi;
              const persentage = marksTotal / 5;
              // console.log(typeof persentage);
              const Grade = () => {
                if (persentage > 90) {
                  return "A+";
                } else if (persentage > 80) {
                  return "A";
                } else if (persentage > 70) {
                  return "B+";
                } else if (persentage > 60) {
                  return "B";
                } else if (persentage > 50) {
                  return "C";
                } else if (persentage > 40) {
                  return "TC";
                } else if (persentage > 30) {
                  return "TC";
                }
              };
              return (
                <tr className={persentage <= 35 ? "red" : persentage<=75 ? "yellow" : "green" } >
                  {/* <th className="font">{SrNo}</th> */}
                  <th className="font">{row.rollno}</th>
                  <th className="font name">{row.studentname}</th>
                  <th className="font">{row.math}</th>
                  <th className="font">{row.science}</th>
                  <th className="font">{row.hindi}</th>
                  <th className="font">{row.english}</th>
                  <th className="font">{row.marathi}</th>
                  <th className="font">{marksTotal}</th>
                  <th  className="font">{persentage}%</th>
                  <th className="font">{Grade()}</th>
                  <th>
                    <Fab
                      // color="lime"
                      // aria-label="edit"
                      className="editbtn"
                      size="small"
                      onClick={() => navigate(`/editstudent/${row._id}`)}
                    >
                      <EditIcon />
                    </Fab>
                  </th>
                  <th>
                    <IconButton
                      aria-label="delete"
                      className="deletebtn"
                      size="large"
                      onClick={() => deleteData(row._id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      <ReactPaginate
        breakLabel="..."
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pegination"}
        previousLinkClassName={"pegination_link"}
        nextLinkClassName={"pegination_link"}
        disabledClassName={"pegination_link--disabled"}
        activeClassName={"pegination_link--active"}
      />
      </center>
      
    </>
  );
};

export default Home;
