import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
 
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  
  export const EmailTemplate = ({
    UserName,
    Email,
    Time,
    Date,
    doctor,
    Note
  }) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.svg`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {UserName},</Text>
          <Text style={paragraph}>Thank you for booking with Arena Hub! We’re excited to help you enjoy your next sports activity. {UserName},</Text>
          <Text style={paragraph}>
           Your Sports Arena has been booked on {Date} at {Time}
          </Text>
          {/* <Section style={btnContainer}>
            <Button style={button} href="https://getkoala.com">
              Get started
            </Button>
          </Section> */}
          <Text style={paragraph}>
          Please arrive at least 15 minutes before your scheduled time. If you have any questions or need to make changes to your booking, feel free to contact us.
          Thank you for choosing Arena Hub. We look forward to serving you!
          </Text>
          <Text style={paragraph}>
            Best,
            <br />
            Arena Hub
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Developed by Binus!
          </Text>
        </Container>
      </Body>
    </Html>
  );
  

  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center",
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  