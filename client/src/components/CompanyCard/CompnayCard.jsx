import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CompanyCard.css'
import axios from 'axios';

const CompanyCard = (props) => {
  const {user}  = props;
  console.log(user);
  const {mood} = props;
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [socialAccounts, setSocialAccounts] = useState([]);
  const [newSocialAccount, setNewSocialAccount] = useState('');
  useEffect(() => {
    if (!user) {
      navigate('/logreg');
    }
    if(user.company){
      axios.get(`http://localhost:8000/api/company/${user.company}`).then((res) => {
        console.log(res);
        setCompanyName(res.data.name);
        setCompanyLogo(res.data.logo);
        setSocialAccounts(res.data.social);
      }
      ).catch((err) => console.log(err));

    }

  }, [user, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    axios
      .post(`http://localhost:8000/api/${user._id}/company`, {
        name:companyName,
        logo:companyLogo,
        social:socialAccounts,
      })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };


  const handleSocialAccountChange = (e, index) => {
    const updatedSocialAccounts = [...socialAccounts];
    updatedSocialAccounts[index] = e.target.value;
    setSocialAccounts(updatedSocialAccounts);
  };

  const removeSocialAccount = (index) => {
    const updatedSocialAccounts = [...socialAccounts];
    updatedSocialAccounts.splice(index, 1);
    setSocialAccounts(updatedSocialAccounts);
  };

  const addSocialAccount = () => {
    if (newSocialAccount.trim() !== '') {
      const updatedSocialAccounts = [...socialAccounts, newSocialAccount];
      setSocialAccounts(updatedSocialAccounts);
      setNewSocialAccount('');
    }
  };




  return (
    <form onSubmit={handleSubmit} className="company-card-form" style={mood}>
      <div className="box1"  style={mood}> 
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div className="box2">
        <label htmlFor="companyLogo">Company Logo:</label>
        <input
          type="text"
          id="companyLogo"
          value={companyLogo}
          onChange={(e) => setCompanyLogo(e.target.value)}
        />
      </div>

      <div>
        <div className="social-accounts-container">
          <label htmlFor="socialAccounts">Social Accounts:</label>
          {socialAccounts.map((account, index) => (
            <div key={index} className="social-account-item">
              <input
                type="text"
                value={account}
                onChange={(e) => handleSocialAccountChange(e, index)}
              />
              <button
                type="button"
                onClick={() => removeSocialAccount(index)}
                className="remove-social-account"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          ))}
          <div className="add-social-account">
            <input
              type="text"
              value={newSocialAccount}
              onChange={(e) => setNewSocialAccount(e.target.value)}
            />
            <button type="button" onClick={addSocialAccount}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <button type="submit">Add Company</button>
    </form>
  );
};

export default CompanyCard;
