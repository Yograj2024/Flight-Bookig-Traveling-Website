import React, { useState, useEffect }  from 'react';

const Calendar = ({startDate, setStartDate}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  useEffect(() => {
    updateCalendars();
  }, [currentDate, selectedDate]);

  const updateCalendars = () => { };

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    let daysArray = new Array(startOffset).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }
    return daysArray;
  };

  const handleDateClick = (year, month, day) => {
    setStartDate(new Date(year, month, day));
  };

  const changeMonth = (offset) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + offset);
      return newDate;
    });
  };

  const formatDate = (date,id) => {

    return date && id == 'heading' ? date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) : ""
    
  };
  const nextMonthDate = new Date(currentDate);
  nextMonthDate.setMonth(currentDate.getMonth() + 1);

  return (
    <div className="absolute top-[12rem] right-[5rem] z-[2] flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-[650px]">
      {/* Navigation */}
      <div className="flex justify-between w-full items-center mb-4">
        <span onClick={() => changeMonth(-1)} className="text-gray-600 hover:text-black text-xl font-bold">
          <i class="fa-regular fa-circle-left"></i>
        </span>
        <h2 className="text-lg font-semibold">{formatDate(currentDate,'heading').split(" ")[0]} {currentDate.getFullYear()}</h2>
        <h2 className="text-lg font-semibold">{formatDate(nextMonthDate,'heading').split(" ")[0]} {nextMonthDate.getFullYear()}</h2>
        <span onClick={() => changeMonth(1)} className="text-gray-600 hover:text-black text-xl font-bold">
          <i class="fa-regular fa-circle-right"></i>
        </span>
      </div>
      {/* Calendar Grids */}
      <div className="grid grid-cols-2 gap-8">
        {[currentDate, nextMonthDate].map((date, index) => (
          <div key={index}>
            <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
              <span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span>
              <span className="text-red-500">SA</span><span className="text-red-500">SU</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mt-2 h-[15rem]">
              { generateCalendar(date).map((day, i) => day === null ? (<div key={i}></div> ) : 
                ( <span key={i} className={`py-2 w-10 h-10 rounded 
                      ${
                        selectedDate &&
                        selectedDate.getDate() === day &&
                        selectedDate.getMonth() === date.getMonth() &&
                        selectedDate.getFullYear() === date.getFullYear()
                          ? "bg-yellow-400 text-white"
                          : today.getDate() === day &&
                            today.getMonth() === date.getMonth() &&
                            today.getFullYear() === date.getFullYear()
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`}
                    onClick={() => handleDateClick(date.getFullYear(), date.getMonth(), day)} > {day} </span> 
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;