import Layout from "../components/Layout";
import Link from 'next/link'

const index = () => {
  const metaInfo = {
    title: "tdis is meta title index page",
    metaKeywords: "these are the keywords oof index page",
    metaDesc: "tdis is meta Desctiption of index page",
  };
  
  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate.getTime());
  
    const dates = [];
  
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }
  
  
  const d1 = new Date('2024-01-01');
  const d2 = new Date('2024-01-30');
  
  console.log(getDatesInRange(d1, d2));
  const dateRange = getDatesInRange(d1, d2);

  return (
    <Layout className="" metaInfo={metaInfo}>
      <div className="grid grid-cols-3"> 
      <div className="w-full">
      <div className="text-sm mb-5"> CIVIL SERVICE FORM NO.48 </div>
<div className="font-bold text-2xl text-center"> Daily Time Record</div>
<div className="font-bold text-xl text-center mt-5"> Alaan, Jeff</div>
<div className="text-center text-sm"> (Name) </div>


<div>Date from : <span className="font-bold"> {d1.toLocaleDateString('en-US', {month: "long", day: "numeric"})} - {d2.toLocaleDateString('en-US', {day: "numeric"})} , {d2.toLocaleDateString('en-US', {year: "numeric"})} </span> </div>
<table className="table-fixed w-full mx-auto text-xs">
<thead>
<tr className="border-2 border-black">
<td rowSpan={2} className="border-2 border-black">Day</td>
<td colSpan={2}  className="border-2 border-black font-bold text-center">A.M.</td>
<td colSpan={2}  className="border-2 border-black font-bold text-center">P.M.</td>
<td colSpan={2}  className="border-2 border-black font-bold text-center">Undertime</td>
</tr>
<tr className="border-2 border-black">
<td className="border-2 border-black">Time In</td>
<td className="border-2 border-black">Time Out</td>
<td className="border-2 border-black">Time In</td>
<td className="border-2 border-black">Time Out</td>
<td className="border-2 border-black">Hours</td>
<td className="border-2 border-black">Minutes</td>
</tr>
</thead>




{ getDatesInRange(d1, d2).map(function(item, index) {
return (
<tbody>
{item.getDay() == 0 && 
    <tr className="border-2 border-black">
        <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
        <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S u n d a y</td>
    </tr>
}
{item.getDay() == 6 && 
<tr className="border-2 border-black">
    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
    <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S a t u r d a y</td>
</tr>
}

{item.getDay() != 6 && item.getDay() != 0 && 
  <tr className="border-2 border-black">
    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
    <td className="border-2 border-black text-sm text-center">7:51 AM</td>
    <td className="border-2 border-black text-sm text-center">12:01 PM</td>
    <td className="border-2 border-black text-sm text-center">12:45 PM</td>
    <td className="border-2 border-black text-sm text-center">5:31 PM</td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
</tr>
}

</tbody>

)


})
} 



</table>
<div className="text-center text-sm"> [T]-Travel [L]-Leave [H]-Holiday [OB]- Official Business </div>
<hr className="border-black border-2" />
<div className="text-sm indent-8">
I CERTIFY on my honor that above is a true and correct
report of the hours of work performed, record of which was made
daily at the time of arrival at and departure from office.
</div>
<div className="font-bold text-lg text-center mt-5"> Alaan, Jeff</div>
<hr className="border-black border-2" /><br />
<hr className="border-black border-1" />
<div className="text-sm mb-5">Verified as to the prescribed office hours.</div>
<hr className="border-black border-1" />
</div>

<div className="w-full">
      <div className="text-sm mb-5"> CIVIL SERVICE FORM NO.48 </div>
<div className="font-bold text-2xl text-center"> Daily Time Record</div>
<div className="font-bold text-xl text-center mt-5"> Alaan, Jeff</div>
<div className="text-center text-sm"> (Name) </div>


<div>Date from : <span className="font-bold"> {d1.toLocaleDateString('en-US', {month: "long", day: "numeric"})} - {d2.toLocaleDateString('en-US', {day: "numeric"})} , {d2.toLocaleDateString('en-US', {year: "numeric"})} </span> </div>
<table className="table-fixed w-full mx-auto">
<thead>
<tr className="border-2 border-black">
<td rowSpan={2} className="border-2 border-black">Day</td>
<td colSpan={2}  className="border-2 border-black font-bold text-center">A.M.</td>
<td colSpan={2}  className="border-2 border-black font-bold text-center">P.M.</td>
<td colSpan={2}  className="border-2 border-black font-bold text-center">Undertime</td>
</tr>
<tr className="border-2 border-black">
<td className="border-2 border-black">Time In</td>
<td className="border-2 border-black">Time Out</td>
<td className="border-2 border-black">Time In</td>
<td className="border-2 border-black">Time Out</td>
<td className="border-2 border-black">Hours</td>
<td className="border-2 border-black">Minutes</td>
</tr>
</thead>




{ getDatesInRange(d1, d2).map(function(item, index) {
return (
<tbody>
{item.getDay() == 0 && 
    <tr className="border-2 border-black">
        <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
        <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S u n d a y</td>
    </tr>
}
{item.getDay() == 6 && 
<tr className="border-2 border-black">
    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
    <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S a t u r d a y</td>
</tr>
}

{item.getDay() != 6 && item.getDay() != 0 && 
  <tr className="border-2 border-black">
    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
    <td className="border-2 border-black text-sm text-center">7:51 AM</td>
    <td className="border-2 border-black text-sm text-center">12:01 PM</td>
    <td className="border-2 border-black text-sm text-center">12:45 PM</td>
    <td className="border-2 border-black text-sm text-center">5:31 PM</td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
</tr>
}

</tbody>

)


})
} 



</table>
<div className="text-center text-sm"> [T]-Travel [L]-Leave [H]-Holiday [OB]- Official Business </div>
<hr className="border-black border-2" />
<div className="text-sm indent-8">
I CERTIFY on my honor that above is a true and correct
report of the hours of work performed, record of which was made
daily at the time of arrival at and departure from office.
</div>
<div className="font-bold text-lg text-center mt-5"> Alaan, Jeff</div>
<hr className="border-black border-2" /><br />
<hr className="border-black border-1" />
<div className="text-sm mb-5">Verified as to the prescribed office hours.</div>
<hr className="border-black border-1" />
</div>

      </div>
   
    

    </Layout>
  );
};

export default index;