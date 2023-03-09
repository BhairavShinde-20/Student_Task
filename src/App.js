import './App.css';
import Routing from './components/Routing';

function App() {
  return (
    <>
    <Routing/>
    </>

  );
}

export default App;

// function Sub(){
//   var a, b,c, d, e, sum, avg;
// const n=(document.getElementById('aname').value);
// const math=parseFloat(document.getElementById('a').value);
// const sci=parseFloat(document.getElementById('b').value);
// const hindi=parseFloat(document.getElementById('c').value);
// const english=parseFloat(document.getElementById('d').value);
// const marathi=parseFloat(document.getElementById('e').value);

//   // Calculating Total
//   sum=math+sci+hindi+english+marathi;
//   avg=sum/5;
//   // Display on Student Data
//   var newTable = document.getElementById('TableScore');
//   var row = newTable.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(0);
//   var cell3 = row.insertCell(0);
//   var cell4 = row.insertCell(0);

//   cell4.innerHTML= n;
//   cell3.innerHTML=sum;
//   cell2.innerHTML = avg;

//   if(avg>=75){
//       cell1.innerHTML="<font color=green>A+</font>";
//   }else{
//       cell1.innerHTML="<font color=red>fail</font>";
//   }
// }


{/* <table border="1" cellspacing="5" bgcolor="white"
height="100" width="500" cellpadding="5" id="TableScore">
<caption><b>Student Data</b></caption>
<tr>
  <th width="180">Name</th>
  <th>Total</th>
  <th>Average</th>
  <th>Pass Or Fail</th>
</tr>

</table> */}