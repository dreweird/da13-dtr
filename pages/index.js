import Layout from "../components/Layout";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState("All");

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
  };

  let d1;
  let lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  let d2;

switch (selectedDays) {
  case "All":
    d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), lastDay.getDate());
    break;
  case "1-15":
    d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 15);
    break;
  case "16-31":
    d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 16);
    d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0); // Set to the last day of the month
    break;
  default:
    d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
}

  console.log(getDatesInRange(d1, d2));
  const dateRange = getDatesInRange(d1, d2);

  return (
    <Layout className="" metaInfo={metaInfo}>
      <div className="grid gap-x-2 gap-y-4 grid-cols-2">
        <div className="w-full">
        <div className="text-sm mb-5"> CIVIL SERVICE FORM NO.48 </div>
        <div className="font-bold text-2xl text-center"> Daily Time Record</div>
        <div className="font-bold text-xl text-center mt-5"> Alaan, Jeff</div>
        <div className="text-center text-sm"> (Name) </div>

        <div className="flex items-start space-x-4 text-sm">
          <label htmlFor="dropdown">Date from : </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM"
              showMonthYearPicker
              className="w-1/2 h-4 font-bold p-1"
            />
            <select
              id="dropdown"
              className="font-bold"
              value={selectedDays}
              onChange={(e) => setSelectedDays(e.target.value)}
            >
              <option value="All">All</option>
              <option value="1-15">1 - 15</option>
              <option value="16-31">16 - 31</option>
            </select>
            <span className="font-bold">{selectedDate.getFullYear()}</span></div>
        <div className="w-1/2 h-1"> </div>

        <table className="table-fixed w-full mx-auto">
        <thead>
        <tr className="border-2 border-black">
        <td rowSpan={2} style={{ width: '25px' }} className="border-2 border-black text-left text-sm"> Day</td>
        <td colSpan={2} style={{ width: '85px' }} className="border-2 border-black font-bold text-center text-sm">A.M.</td>
        <td colSpan={2} style={{ width: '85px' }} className="border-2 border-black font-bold text-center text-sm">P.M.</td>
        <td colSpan={2} style={{ width: '65px' }}  className="border-2 border-black font-bold text-center text-sm">Undertime</td>
        </tr>
        <tr className="border-2 border-black text-sm">
        <td className="border-2 border-black text-sm">Time In</td>
        <td className="border-2 border-black text-sm">Time Out</td>
        <td className="border-2 border-black text-sm">Time In</td>
        <td className="border-2 border-black text-sm">Time Out</td>
        <td className="border-2 border-black text-sm">Hours</td>
        <td className="border-2 border-black text-sm">Minutes</td>
        </tr>
        </thead>

        {getDatesInRange(d1, d2).map(function (item, index) {
          return (
            <tbody key={index}>
              {item.getDay() === 0 && (
                <tr className="border-2 border-black">
                  <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
                  <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">
                    S u n d a y
                  </td>
                </tr>
              )}
              {item.getDay() === 6 && (
                <tr className="border-2 border-black">
                  <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
                  <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">
                    S a t u r d a y
                  </td>
                </tr>
              )}

              {item.getDay() !== 6 && item.getDay() !== 0 && (
                <tr className="border-2 border-black">
                  <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
                  <td className="border-2 border-black text-sm text-center"></td>
                  <td className="border-2 border-black text-sm text-center"></td>
                  <td className="border-2 border-black text-sm text-center"></td>
                  <td className="border-2 border-black text-sm text-center"></td>
                  <td className="border-2 border-black text-sm text-center"></td>
                  <td className="border-2 border-black text-sm text-center"></td>
                </tr>
              )}
            </tbody>
          );
        })}

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
        <style jsx global>{`
                @media print {
                  .page-break-after-always {
                    page-break-after: always;
                  }
                }
              `}</style>
        <hr className="border-black border-1 page-break-after-always" />
        </div>
      </div>
    </Layout>
  );
};

export default index;