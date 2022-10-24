import {
    Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField
} from '@mui/material';
import './StudentInputs.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useRef, useState } from 'react';
import axios from 'axios';
import storage from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function StudentInputs() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        date_of_birth: "",
        email: "",
        mobile_number: "",
        address: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
        docs: "",
    })
    const inputRef = useRef();
    const [pdfUpload, setPdfUpload] = useState(null);
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleUpload = () => {
        if (pdfUpload == null) return;
        const pdfDocumentRef = ref(storage, `documents/${pdfUpload.name}`);
        uploadBytes(pdfDocumentRef, pdfUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setData((prev) => ({ ...prev, docs: url }));
                alert("File Uploaded Successfully")
            });
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "https://safepro-api.herokuapp.com/api/student"
            const { data: res } = await axios.post(url, data);
            console.log(res)
            alert("Congratulations 🥳, Your application was successfully registered 😍")
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <div className='student_div'>
                <h2>Student Application</h2>
                <form className="input_div" onSubmit={handleSubmit}>
                    <TextField
                        required
                        label="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={data.first_name}
                        type="text"
                        style={{ minWidth: "330px" }}
                    />
                    <TextField
                        required
                        label="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        value={data.last_name}
                        type="text"
                        style={{ minWidth: "330px" }}
                    />
                    <TextField
                        required
                        label="Gender"
                        type="text"
                        name="gender"
                        onChange={handleChange}
                        value={data.gender}
                        style={{ minWidth: "330px" }}
                    />
                    <TextField
                        required
                        // label="D.O.B"
                        type="date"
                        name="date_of_birth"
                        onChange={handleChange}
                        value={data.date_of_birth}
                        style={{ minWidth: "330px" }}
                        helperText="Date of Birth"
                    />
                    <TextField
                        required
                        label="E-Mail"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        style={{ minWidth: "330px" }}
                    />
                    <TextField
                        required
                        label="Mobile Number"
                        type="text"
                        name="mobile_number"
                        onChange={handleChange}
                        value={data.mobile_number}
                        style={{ minWidth: "330px" }}
                    />
                    <TextField
                        required
                        label="City"
                        type="text"
                        name="city"
                        onChange={handleChange}
                        value={data.city}
                        style={{ minWidth: "330px", }}
                    />
                    <TextField
                        required
                        label="Pincode"
                        name="pincode"
                        onChange={handleChange}
                        value={data.pincode}
                        type="text"
                        style={{ minWidth: "330px", }}
                    />
                    <TextField
                        required
                        label="State"
                        name="state"
                        onChange={handleChange}
                        value={data.state}
                        type="text"
                        style={{ minWidth: "330px", }}
                    />
                    <TextField
                        required
                        label="Country"
                        type="text"
                        name="country"
                        onChange={handleChange}
                        value={data.country}
                        style={{ minWidth: "330px", }}
                    />
                    <TextField
                        required
                        label="Address"
                        name="address"
                        onChange={handleChange}
                        value={data.address}
                        multiline
                        rows={5}
                    />
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined" >
                        <InputLabel shrink htmlFor="bootstrap-input" style={{ backgroundColor: "white", fontSize: "20px", marginBottom: "10px", color: "#095192" }}>
                            Upload Aadhar
                        </InputLabel>
                        <OutlinedInput
                            type="file"
                            ref={inputRef}
                            name="docs"
                            onChange={(e) => { setPdfUpload(e.target.files[0]) }}
                            value={data.document}
                            onClick={() => inputRef.current.click()}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleUpload}
                                        edge="end"
                                        style={{ marginRight: "-22px" }}
                                    >
                                        <FileUploadIcon sx={{ color: "white", backgroundColor: "#095192", height: "54px", width: "54px", borderRadius: "2px", marginLeft: "80px" }} />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button style={{ marginLeft: "140%", height: "50px" }} variant="contained" type="submit" >Submit</Button>
                </form>
            </div>
        </>
    );
}

export default StudentInputs;
