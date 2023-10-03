import React, { useState } from 'react';
import {
  Box,FormControl,FormLabel,Input,Textarea,Button,ChakraProvider,CSSReset,Text,Progress,useToast,Stack,HStack,VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { bookingConfirmed } from '../reduxAuth/action';

function MultiStepForm() {
  // const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailFromStore=useSelector((store)=>store.AuthReducer.storedEmail);
  const dispatch=useDispatch();
  const [step, setStep] = useState(1);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    email: '',
    address: '',
    issue: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const [isBooked,setIsBooked]=useState(false);

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'patient') {
      setPatientDetails({
        ...patientDetails,
        [name]: value,
      });
    } else if (formType === 'payment') {
      setPaymentDetails({
        ...paymentDetails,
        [name]: value,
      });
    }
  };

  const handleNext = () => {
    if (step === 1 && !validatePatientDetails()) {
      toast({
        title: 'Please fill in all patient details',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } else if (step === 2 && !validatePaymentDetails()) {
      toast({
        title: 'Please fill in all payment details',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } else {
      setStep(step + 1);
      setProgress((step / 3) * 100);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress(((step - 2) / 3) * 100);
    }
  };

  const handleConfirm = () => {
    setIsSubmitting(true);

    const newPatientDetail = {
      name: patientDetails.name,
      email: patientDetails.email,
      address: patientDetails.address,
      issue: patientDetails.issue,
      }
      console.log("str",emailFromStore)
      axios.get('https://forevercare.onrender.com/users')
      .then((response) => { console.log(response.data)
        const existingData = response.data;
        const userIndex = existingData.find(user => user.email === emailFromStore);
        console.log("new",userIndex)

        if (userIndex) {
        const userId=userIndex.id;
        const updatedData={
          ...userIndex,userDetails:[...userIndex.userDetails,newPatientDetail]
        }
          axios.patch(`https://forevercare.onrender.com/users/${userId}`,updatedData)
            .then((response) => {
              
              setIsSubmitting(false);
              setIsBooked(true);
              setTimeout(()=>{
                setIsBooked(false);
              },2000)
              dispatch(bookingConfirmed())
              toast({
                title: 'Appointment booked!',
                description: 'Your appointment has been successfully booked.',
                status: 'success',
                duration: 5000,
                isClosable: true,
              });
            })
            .catch((error) => {
              setIsSubmitting(false);
              console.error('Error:', error);
              toast({
                title: 'Error',
                description: 'An error occurred while booking the appointment.',
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            });
        } else {
          setIsSubmitting(false);
          toast({
            title: 'User email not found in the API',
            status: 'warning',
            duration: 5000,
            isClosable: true,
          });
        }
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while searching for the user in the API.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const validatePatientDetails = () => {
    return (
      patientDetails.name &&
      patientDetails.address &&
      patientDetails.issue
    );
  };

  const validatePaymentDetails = () => {
    return (
      paymentDetails.cardHolderName &&
      paymentDetails.cardNumber &&
      paymentDetails.expiryDate &&
      paymentDetails.cvv
    );
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box maxW="600px" m="0 auto">
        {step === 1 && (
          <Box>
            <Text fontSize="2xl" mb="4">
              Patient Details
            </Text>
            {/* Rest of the code remains the same */}
            <FormControl>
      <FormLabel>Patient Name</FormLabel>
       <Input
        type="text"
        name="name"
        value={patientDetails.name}
        onChange={(e) => handleChange(e, 'patient')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>Email (optional)</FormLabel>
      <Input
        type="email"
        name="email"
        value={patientDetails.email}
        onChange={(e) => handleChange(e, 'patient')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>Phone No</FormLabel>
      <Input
        type="number"
        name="number"
        value={patientDetails.number}
        onChange={(e) => handleChange(e, 'patient')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>Address</FormLabel>
      <Input
        type="text"
        name="address"
        value={patientDetails.address}
        onChange={(e) => handleChange(e, 'patient')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>Issue</FormLabel>
      <Textarea
        name="issue"
        value={patientDetails.issue}
        onChange={(e) => handleChange(e, 'patient')}
      />
    </FormControl>
            <Button
              onClick={handleNext}
              mt="4"
            >
              Next
            </Button>
          </Box>
        )}
        {step === 2 && (
          <Box>
            <Text fontSize="2xl" mb="4">
              Payment
            </Text>
            {/* Rest of the code remains the same */}
                 <FormControl>
      <FormLabel>Card Holder Name</FormLabel>
       <Input
        type="text"
        name="cardHolderName"
        value={paymentDetails.cardHolderName}
        onChange={(e) => handleChange(e, 'payment')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>Card Number</FormLabel>
      <Input
        type="text"
        name="cardNumber"
        value={paymentDetails.cardNumber}
        onChange={(e) => handleChange(e, 'payment')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>Expiry Date</FormLabel>
      <Input
        type="text"
        name="expiryDate"
        value={paymentDetails.expiryDate}
        onChange={(e) => handleChange(e, 'payment')}
      />
    </FormControl>
    <FormControl>
      <FormLabel>CVV</FormLabel>
      <Input
        type="text"
        name="cvv"
        value={paymentDetails.cvv}
        onChange={(e) => handleChange(e, 'payment')}
      />
    </FormControl>
            <HStack spacing={4}>
              <Button
                onClick={handleBack}
                mt="4"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                mt="4"
              >
                Next
              </Button>
            </HStack>
          </Box>
        )}
        {step === 3 && (
          <Box>
            <Text fontSize="2xl" >
              Confirmation
            </Text>
            <VStack >
              <Progress value={progress} />
              <Stack >
                <Text fontWeight="bold">Patient Details:</Text>
                <Text>Name: {patientDetails.name}</Text>
                <Text>Phone No: {patientDetails.number}</Text>
                <Text>Address:{patientDetails.address}</Text>
                {/* <Text>Amount: 500</Text> */}

              </Stack>
              <HStack spacing={8}>
                <Button
                  onClick={handleBack}
                  mt="4"
                >
                  Back
                </Button>
                <Button
                  onClick={handleConfirm}
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  mt="4"
                >
                  Pay Securely
                </Button>
              </HStack>
            </VStack>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default MultiStepForm;



