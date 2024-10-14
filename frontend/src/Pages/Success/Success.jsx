import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Use a single timeout for countdown decrement
    if (countdown > 0) {
      const timeoutId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timeoutId); // Clean up timeout on unmount
    } else {
      navigate("/"); // Only navigate after the countdown reaches 0
    }
  }, [countdown, navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="Success" />
        <h1>Redirecting to Home in {countdown} seconds...</h1>
        <Link to="/">
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;
