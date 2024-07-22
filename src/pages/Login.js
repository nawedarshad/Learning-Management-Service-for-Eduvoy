import {React, useState, useEffect} from 'react'
import styles from './styles/login.module.css'
import { useNavigate } from 'react-router-dom';
function Login({action}) {
  const navigate = useNavigate();
  var fieldsData;
  const [signData, setSignData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    password:""
  });
  const [logData, setLogData] = useState({
    email:"",
    password:""
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    
  }, []);

  const handleSubmit =(e)=>{
    if (action==="Log-In") {
      if (e.target.name==="email") {
        setLogData(s=>({
          ...s,email:e.target.value
        }))
      }
      if (e.target.name==="pass") {
        setLogData(s=>({
          ...s,password:e.target.value
        }))
      }
    } else {
      if (e.target.name==="firstName") {
        setSignData(s=>({
          ...s,firstName:e.target.value
        }))
      }
      if (e.target.name==="lastName") {
        setSignData(s=>({
          ...s,lastName:e.target.value
        }))
      }
      if (e.target.name==="phone") {
        setSignData(s=>({
          ...s,phone:e.target.value
        }))
      }
      if (e.target.name==="email") {
        setSignData(s=>({
          ...s,email:e.target.value
        }))
      }
      if (e.target.name==="pass") {
        setSignData(s=>({
          ...s,password:e.target.value
        }))
      }
      if (e.target.name==="confrmPass") {
        setConfirmPassword(e.target.value)
      }
    }
  }
  
  const login = ()=>{
    if (logData.email===''||logData.password==='') {
      alert("Enetr Credentials !!");
    }
    else{
      if (logData.email==="sarkar123@gmail.com"&&logData.password=="123") {
        navigate(`/student/sagniksarkar123`);
      }
      else{
        alert("Wrong email or password !!");
      }
    }
  }

  if (action == "Log-In") {
    fieldsData = <div className={styles.fieldsDiv}><input name='email' type='email' placeholder='Email' value={logData.email} onChange={handleSubmit}/>
    <input name='pass' type='password' placeholder='Password' value={logData.password} onChange={handleSubmit}/><button className={styles.submit} onClick={login}>{action}</button>
    </div>
  } else {
    fieldsData = <div className={styles.fieldsDiv}>
  <div className={styles.dualInputs}>
    <input name='firstName' type='text' placeholder='Firstname' value={signData.firstName} onChange={handleSubmit}/>
    <input name='lastName' type='text' placeholder='Lastname' value={signData.lastName} onChange={handleSubmit}/>
  </div>
    <input name='phone' type='number' placeholder='Phone' value={signData.phone} onChange={handleSubmit}/>
    <input name='email' type='email' placeholder='Email' value={signData.email} onChange={handleSubmit}/>
    <input name='pass' type='password' placeholder='Password' value={signData.password} onChange={handleSubmit}/>
    <input name='confrmPass' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={handleSubmit}/>
    <button className={styles.submit}>{action}</button>
</div>;
  }
  return (
    <div className={styles.mainDiv}>
      <div className={styles.loginBox}>
        <h2>Welcome Student!</h2>
        <div className={styles.wrapperDiv}>
          {
            fieldsData
          }
        </div>
      </div>
    </div>
  )
}

export default Login