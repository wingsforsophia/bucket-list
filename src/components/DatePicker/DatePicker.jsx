import React, { Component } from 'react';
import { DatePicker, RangePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';


const  handleResponsive  =  setNumberOfMonth  =>  {
	let  width  =  document.querySelector('.tp-calendar').clientWidth;
	if  (width  >  900)  {
		setNumberOfMonth(3);
	}  else  if  (width  <  900  &&  width  >  580)  {
		setNumberOfMonth(2);
	}  else  if  (width  <  580)  {
		setNumberOfMonth(2);
	}
};

const today = Date.now()

const  Day = ({  day  }) => {
	return  (
		<>
			<p  className="date">{day.format('DD')}</p>
			{/* <p  className="date"></p> */}
		</>
		);
	};
const  onChange = date => console.log(date)	

class Calendar extends Component {

  render() { 
       
    return (
      <ThemeProvider theme={theme}>
        <RangePicker
          handleChange={onChange}
		  selectedDays={[today]} //initial selected days
		  jalali={false}
		  numberOfMonths={1}
		  numberOfSelectableDays={30} // number of days you need 
		  disabledDays={['2019-12-02']} //disabeld days
		  responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
		  disabledBeforToday={true} 
		  hoverable= {true}
		  disabled={false} // disable calendar 
		  dayComponent={Day} //custom day component 
		  titleComponent='Title' // custom title of days {Title}
        />
      </ThemeProvider>
    );
  }
}


export default Calendar