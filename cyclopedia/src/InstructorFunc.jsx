import React from "react";

const InstructorFunc = (props) => {
  return (
    <div className="">
      Name: {props.instructor.name} <br />
      Email : {props.instructor.email}
      <br />
      Phone : {props.instructor.phone}
      <br />
    </div>
  );
};

export default InstructorFunc;
