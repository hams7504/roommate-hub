import React, { useState } from 'react';
import {Input, DatePicker} from 'antd';
import moment from 'moment';
import {inputStyles} from '../styles';
import { Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';




const {RangePicker} = DatePicker;

function AddEvent (props) {
  
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [eventType, setEventType] = useState("Category");

  const handleMenuClick = (e) => {
   // console.log('click', e.key);
    //
    // setColorChange(e.key);
  };



  const items = [
    {
      label: 'chores',
      key: 'chores',
      icon: <UserOutlined />,
    },
    {
      label: 'quiet hours',
      key: 'quiet hours',
      icon: <UserOutlined />,
    },
    {
      label: 'fun events',
      key: 'fun events',
      icon: <UserOutlined />,
    },
  
  ];
  

  const menuProps = {
    items, 
    onClick: (e) => {
      props.onCategoryChange(e.key)
      setEventType(e.key);
      console.log(e.key);
    } 
  } 

  function updateText(text) {
    props.title(text);
  }

  // const rangePickerProps = {
  //   style: { width: '100%' },
  //   showTime: {
  //     format: 'HH:mm',
  //     hourStep: 1,
  //     minuteStep: 30,
  //     defaultValue: [moment(props.start), moment(props.end)],
  //   },
  //   format: 'MMM Do, YYYY hh:mm a',
  //   className: eventType ? `event_${eventType}` : '',
  //   onChange: props.onTimeChange,
  // };

  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="Add Title"
        onChange={updateText}
        style={inputStyles}
        size="large"
        autoFocus={true}
        // style={{color: colorChange === "1" ? "red" : colorChange === "2" ? "blue" : "green"}}
        // onChange={props.onTitleChange}
      />

      <Dropdown.Button
        menu={menuProps}
        onOpenChange={(visible) => setDropdownVisible(visible)}
        open={dropdownVisible}

      >
        {eventType}
        <DownOutlined />
      </Dropdown.Button>
 
      <RangePicker
        style={{width: '100%'}}
        // value={[moment (props.start), moment (props.end)]}
        onChange={props.onTimeChange}
        // onChange={() => console.log('hiiiii')}
        showTime={{
          format: 'HH:mm',
          hourStep: 1,
          minuteStep: 30,
          defaultValue: [moment (props.start), moment (props.end)],
        }}
        format="MMM Do, YYYY hh:mm a"
      />
    </React.Fragment>


  );
}

export default AddEvent;
