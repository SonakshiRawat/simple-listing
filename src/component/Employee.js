import './Employee.css';

function Employee(props) {
  return (
    <div className="emp">
      <div className="detail">
        Employee id : <span>{props.info.Id}</span>
      </div>
      <div className="detail">
        Employee Name : <span>{props.info.empName}</span>
      </div>
      <div className="detail">
        Employee Role : <span>{props.info.role}</span>
      </div>
    </div>
  );
}
export default Employee;
