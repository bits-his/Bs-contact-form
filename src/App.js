import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import "./style.css";
import { postContact } from "./redux/action/Student";
import { useState } from "react";
function App() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone_no: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    whatsapp: "",
    next_of_kin: "",
    emergency_no: "",
    github: "",
    allergies: "",
    special_needs: "",
  })

  const handleSubmit = () => {
    postContact(
      { ...form, query_type: "insert" },
      (data) => {
        alert('Success')
      },
      (err) => {
        console.log(err)
      }
    )
  }
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
};
  return (
    <div className="App">
      <form>
        <div>BrainStorm CONTACT FORM</div>
        <main>
          <div>
            <label for="name">Name</label>
            <input name="name" type="text" onChange={handleChange} value={form.name} />
          </div>
          <div>
            <label for="address">Address</label>
            <input name="address" type="text" onChange={handleChange} value={form.address} />
          </div>
          <div>
            <label for="email">Email</label>
            <input name="email" type="email" onChange={handleChange} value={form.email} />
          </div>
          <div>
            <label for="phone">Phone</label>
            <input name="phone_no" type="tel" onChange={handleChange} value={form.phone_no} />
          </div>
          <div>
            <label for="fb">Facebook</label>
            <input name="facebook" type="text" onChange={handleChange} value={form.facebook} />
          </div>
          <div>
            <label for="twitter">Twitter</label>
            <input name="twitter" type="text" onChange={handleChange} value={form.twitter} />
          </div>
          <div>
            <label for="ig">Instagram</label>
            <input name="instagram" type="text" onChange={handleChange} value={form.instagram} />
          </div>
          <div>
            <label for="in">LinkedIn</label>
            <input name="linkedin" type="text" onChange={handleChange} value={form.linkedin} />
          </div>
          <div>
            <label for="Whatsapp">Whatsapp</label>
            <input name="whatsapp" type="tel" onChange={handleChange} value={form.whatsapp} />
          </div>
          <div>
            <label for="next-of-kin">Next of Kin</label>
            <input name="next_of_kin" type="text" onChange={handleChange} value={form.next_of_kin} />
          </div>
          <div>
            <label for="emergency-no">Emergency Number</label>
            <input name="emergency_no" type="tel" onChange={handleChange} value={form.emergency_no} />
          </div>
          <div>
            <label for="github">Github</label>
            <input name="github" type="text" onChange={handleChange} value={form.github} />
          </div>
          <div>
            <label for="special">Special Needs</label>
            <input name="special_needs" type="text" onChange={handleChange} value={form.special_needs} />
          </div>
          <div>
            <label for="Allergies">Allergies</label>
            <input name="allergies" type="text" onChange={handleChange} value={form.allergies} />
          </div>
          <div>
            <label for="track"> Track</label>
            <select name="track">
              <option>Front End Development</option>
              <option>MiddleWare Development</option>
              <option>Back End Development</option>
              <option>Business Development</option>
            </select>
          </div>
        </main>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
