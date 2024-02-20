import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { checkoutCompleted } from "../Auth/userSlice";
import { toast } from "react-toastify";
import InforUserForm from "./InforUserForm";

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [userInfor, setUserInfo] = React.useState({});
  const [paymentInfor, , setPaymentInfor] = React.useState({});
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep + 1 === steps.length) {
      dispatch(checkoutCompleted());
      toast.success("Check out successfully !");
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <InforUserForm onChange={handleChangeInfoUser} />;
      case 1:
        return <PaymentForm onChange={handleChangeInfoPayment} />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleChangeInfoUser = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  const handleChangeInfoPayment = (data) => {
    // setPaymentInfor(data);
    console.log(data);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Container className="my-4 pt-4 " component="main" maxWidth="sm">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 2, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
