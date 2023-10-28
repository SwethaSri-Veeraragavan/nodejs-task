import React, { useState } from 'react';
import './App.css';
import PhoneInput from 'react-phone-input-2';
import { Button, Container } from "reactstrap";


const degreeDepartments = [
  {
    degree: "Bachelor of Arts (B.A.)",
    departments: [
      "English", 
      "History", 
      "Political Science", 
      "Economics", 
      "Sociology", 
      "Psychology", 
      "Philosophy", 
      "Geography", 
      "Fine Arts", 
      "Music", 
      "Dance", 
      "Theatre", 
      "Education", 
      "Languages"
    ],
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    departments: [
      "Mathematics", 
      "Physics", 
      "Chemistry", 
      "Biology", 
      "Computer Science", 
      "Statistics", 
      "Environmental Science", 
      "Geology"
    ],
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    departments: [
      "Accounting", 
      "Finance", 
      "Business Management", 
      "Marketing", 
      "Economics", 
      "Taxation"
    ],
  },
  {
    degree: "Bachelor of Engineering (B.E.)",
    departments: [
      "Computer Science", 
      "Electrical Engineering", 
      "Mechanical Engineering", 
      "Civil Engineering", 
      "Electronics Engineering", 
      "Information Technology", 
      "Chemical Engineering",
      "Mechatronics", 
      "Machine Learning", 
      "Artificial Intelligence", 
      "Electronics & Instrumentation"
    ],
  },
  {
    degree: "Bachelor of Technology (BTech)",
    departments: [
      "Computer Science", 
      "Electrical Engineering", 
      "Mechanical Engineering", 
      "Civil Engineering", 
      "Electronics Engineering", 
      "Information Technology", 
      "Chemical Engineering",
      "Mechatronics", 
      "Machine Learning", 
      "Artificial Intelligence", 
      "Electronics & Instrumentation"
    ],
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    departments: [
      "Business Management", 
      "Entrepreneurship", 
      "Marketing", 
      "Finance", 
      "International Business"
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    departments: [
      "Computer Science", 
      "Programming", 
      "Web Development", 
      "Database Management"
    ],
  },
  {
    degree: "Bachelor of Architecture (B.Arch)",
    departments: [
      "Architecture Design", 
      "Structural Engineering", 
      "Environmental Planning"
    ],
  },
  {
    degree: "Bachelor of Design (B.Des)",
    departments: [
      "Fashion Design", 
      "Industrial Design", 
      "Interior Design", 
      "Graphic Design"
    ],
  },
  {
    degree: "Bachelor of Pharmacy (B.Pharm)",
    departments: [
      "Pharmaceutical Chemistry", 
      "Pharmacology", 
      "Pharmaceutics"
    ],
  },
  {
    degree: "Bachelor of Business Management (BBM)",
    departments: [
      "Business Administration", 
      "Human Resource Management", 
      "Marketing", 
      "Finance"
    ],
  },
  {
    degree: "Bachelor of Hotel Management (BHM)",
    departments: [
      "Hotel Operations", 
      "Food and Beverage Management", 
      "Front Office Management"
    ],
  },
  {
    degree: "Bachelor of Science in Nursing (B.Sc. Nursing)",
    departments: [
      "Medical-Surgical Nursing", 
      "Pediatric Nursing", 
      "Obstetrics and Gynecology Nursing"
    ],
  },
  {
    degree: "Master of Arts (M.A.)",
    departments: [
      "English", 
      "History", 
      "Political Science", 
      "Economics", 
      "Sociology", 
      "Psychology", 
      "Philosophy", 
      "Geography", 
      "Fine Arts", 
      "Music", 
      "Dance", 
      "Theatre", 
      "Education", 
      "Languages"
    ],
  },
  {
    degree: "Master of Science (M.Sc.)",
    departments: [
      "Mathematics", 
      "Physics", 
      "Chemistry", 
      "Biology", 
      "Computer Science", 
      "Statistics", 
      "Environmental Science", 
      "Geology"
    ],
  },
  {
    degree: "Master of Commerce (M.Com)",
    departments: [
      "Accounting", 
      "Finance", 
      "Business Management", 
      "Marketing", 
      "Economics", 
      "Taxation"
    ],
  },
  {
    degree: "Master of Business Administration (MBA)",
    departments: [
      "Business Management", 
      "Entrepreneurship", 
      "Marketing", 
      "Finance", 
      "International Business"
    ],
  },
  {
    degree: "Master of Computer Applications (MCA)",
    departments: [
      "Computer Science", 
      "Programming", 
      "Web Development", 
      "Database Management"
    ],
  },
  {
    degree: "Master of Architecture (M.Arch)",
    departments: [
      "Architecture Design", 
      "Structural Engineering", 
      "Environmental Planning"
    ],
  },
  {
    degree: "Master of Design (M.Des)",
    departments: [
      "Fashion Design", 
      "Industrial Design", 
      "Interior Design", 
      "Graphic Design"
    ],
  },
  {
    degree: "Master of Pharmacy (M.Pharm)",
    departments: [
      "Pharmaceutical Chemistry", 
      "Pharmacology", 
      "Pharmaceutics"
    ],
  },
  {
    degree: "Master of Business Management (MBM)",
    departments: [
      "Business Administration", 
      "Human Resource Management", 
      "Marketing", 
      "Finance"
    ],
  },
  // Add more degrees and departments as needed
];




function App() {

  const InitialformData ={ email: '',phone:'', name: '', passout:'', gender:'', collegename: '',degree: '',department:'', location: '' };
  const [formData, setFormData] = useState({ InitialformData });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formData),
      redirect: 'follow'
    };
  
    try {
      fetch("http://localhost:8000/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
      // if (response.status === 201) {
      //   // Registration successful
      //   alert('Registration successful');
      // } else {
      //   // Handle registration error
      //   const data = await response.json();
      //   console.log(data.message)
      //   alert(data.message);
      // }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="App py-5">
      
      <Container>
  <div className="nk-block nk-block-middle nk-auth-body wide-xs w-50 ">
    <div className="card card-bordered">
      <div className="card-body">
        <div className="nk-block-head">
          <div className="nk-block-content">
            <h3 className="nk-block-title page pb-2">Register</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <PhoneInput
              country={'in'}
              value={formData.phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="row form-group mb-3">
            <div className="col-md-6">
              <div className="form-input-wrap">
                <select className="form-control" name="passOutYear" onChange={handleChange} value={formData.passout}>
                  <option value="">Year of Passed out</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-input-wrap">
                <select className="form-control" name="gender" onChange={handleChange} value={formData.gender}>
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group mb-3 w-100 col-md-6">
            <div className="form-input-wrap">
              <select className="form-control" type="text" id="collegeName" name="collegeName" onChange={handleChange} value={formData.collegename}>
                <option value="">Select your college</option>
                <option value="abc College">abc College</option>
                <option value="def College">def College</option>
                <option value="ghi College">ghi College</option>
              </select>
            </div>
          </div>
          <div className="form-group mb-3 w-100 col-md-6">
   
            <div className="form-input-wrap">
              <select
                className="form-control"
                type="text"
                id="degree"
                name="degree"
                onChange={handleChange}
                value={formData.degree}
              >
                <option value="">Select a degree</option>
                {degreeDepartments.map((item) => (
                  <option key={item.degree} value={item.degree}>
                    {item.degree}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="form-input-wrap">
              <select
                className="form-control"
                id="department"
                type="text"
                name="department"
                onChange = {handleChange}
                value={formData.department}
              >
                <option value="">Select a department</option>
                {degreeDepartments
                        .find((item) => item.degree === formData.degree)
                        ?.departments.map((department) => (
                          <option key={department} value={department}>
                            {department}
                          </option>
                        ))}
              </select>
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="form-input-wrap">
              <input
                type="text"
                id="location"
                name="location"
                onChange={handleChange}
                value={formData.location}
                placeholder="Your location"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <Button type="submit" color="dark" size="lg" block>
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</Container>

    </div>
  );
}

export default App;
