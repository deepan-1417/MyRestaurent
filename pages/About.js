import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          At our restaurent we're passionate about serving delicious food and creating unforgettable dining experiences. Our restaurant is dedicated to providing exceptional service, quality cuisine, and a warm atmosphere that makes you feel right at home.<br/>

          <strong>Our Mission</strong> <br/>
          Our mission is to provide exceptional dining experiences that exceed our customers' expectations. We're dedicated to using only the freshest ingredients, supporting local farmers, and creating a menu that's both delicious and sustainable.<br/>

        </p>
        <br />
        <p>
         <strong>Our Team</strong> <br/>
          Our team is made up of passionate individuals who share a love for food and hospitality. From our chefs to our servers, everyone is committed to providing exceptional service and ensuring that every guest has a memorable experience.
          <br/>

          <strong>Our Values</strong> <br/>
          Quality: We're committed to using only the freshest ingredients and highest-quality products.
           Sustainability: We believe in supporting local farmers and reducing our environmental impact.
           Hospitality: We're dedicated to providing exceptional service and making every guest feel welcome.<br/>

          <strong>Join Us</strong> <br/>
          Whether you're looking for a romantic dinner, a family gathering, or a night out with friends, we invite you to join us at [Restaurant Name]. We can't wait to share our passion for food and hospitality with you!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
