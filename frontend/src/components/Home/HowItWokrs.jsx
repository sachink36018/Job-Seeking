import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Welcome to JobZee! By creating an account, you’ll unlock a personalized job search experience and gain access to a range of features designed to connect you with your ideal job.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Finding your dream job is easy with JobZee’s powerful search tools and comprehensive listings. Our platform is designed to connect job seekers with the best opportunities that match their skills and aspirations.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Applying for jobs on JobZee is streamlined and user-friendly, making it easier for you to connect with potential employers and advance your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
