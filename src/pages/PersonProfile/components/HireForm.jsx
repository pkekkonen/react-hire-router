import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();
  const { person, setHiredPeople, hiredPeople } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person]);
    }
    console.log(hiredPeople);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;