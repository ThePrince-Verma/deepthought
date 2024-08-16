import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #0029FF;
  font-weight:900;
  font-size: 28px;
  position: absolute;
  left: 187px;
  top: 96px;
`;

const StyledButton = styled.button`
  background-color: #0029FF;
  color: white;
  width: 121px;
  height: 36px;
  position: absolute;
  left: 1132px; /* X position */
  top: 108px;   /* Y position */
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const Box = styled.div`
  background-color: #E9ECEF; /* Gray color */
  position: absolute;
  height: 135px;
  width: 1066px;
  left: 187px;
  top: 187px;
  border-radius: 5px; /* Optional: for rounded corners */
  padding: 22px; /* Add padding inside the box */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

const Heading = styled.h1`
  color: #000000;
  font-weight:900;
  font-size: 20px; /* Adjusted size to fit within the box */
  margin: 0 0 12px 0; /* Add margin below the heading */
`;

const Paragraph = styled.p`
  color: #000000;
  font-size: 14px; /* Adjusted size for better readability */
  margin: 0; /* Remove default margin */
`;

const Hero = () => {
  return (
    <div>
      <Title>Technical Project Management</Title>
      <StyledButton>Submit task</StyledButton>
      <Box>
        <Heading>Explore the world of management</Heading>
        <Paragraph>
          As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion. How? Do you want to manage each and every step of your life?
        </Paragraph>
      </Box>
    </div>
  );
}

export default Hero;
