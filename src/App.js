import Header from "./components/Header";
import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  const removeItem = (index) => {
    let arr = [...data];
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <>
      <div className="App">
        <Header />
        {/* Form Section */}
        <div className="form">
          <Stack spacing={2} direction="row">
            <TextField
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <Button onClick={addData} variant="contained" color="error">
              <AddIcon />
            </Button>
          </Stack>
        </div>

        {/* data section */}

        <div className="data">
          <div className="data_val">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>

          {data.map((element, index) => {
            return (
              <div className="data">
                <div key={index} className="data_val">
                  <h4>{element.name}</h4>
                  <h4>{element.email}</h4>

                  <Button
                    onClick={() => removeItem(index)}
                    variant="outlined"
                    color="error"
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="main"></div>
    </>
  );
}

export default App;
