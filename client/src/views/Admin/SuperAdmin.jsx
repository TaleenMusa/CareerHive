import React from 'react';
import Admin from '../../components/Admin/Admin';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const SuperAdmin = (props) => {
  const navigate = useNavigate();
  const { mood } = props;
  const [jobData, setJobData] = React.useState([]);

  console.log(props.user.role);
  if (props.user.role !== 'admin') {
    navigate('/', );
  }
  useEffect(() => {
    axios
        .get('http://localhost:8000/api/jobs')
        .then((res) => {
            console.log(res.data);
            const filter = res.data.filter((job) => job.status === "pending");
            setJobData(filter);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);
  return (
    <div>
      <Admin jobData={jobData} mood={mood} /> 
    </div>
  );
};

export default SuperAdmin;
