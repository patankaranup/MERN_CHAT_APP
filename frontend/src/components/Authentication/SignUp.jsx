import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirmpassword, setConfirmpassword] = useState('');
  const [pic, setPic] = useState('');
  const handleClick = () => {
    setShow(!show);
  }
  const postDetails = (pics) => {
    
  }
  const submitHandler = () => {

  }

  return (
    <VStack spacing={'5px'} color='black'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name </FormLabel>
        <Input placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}></Input>
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email </FormLabel>
        <Input placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}}></Input>
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password </FormLabel>
        <InputGroup size={'md'}>
        <Input type={show ? 'text':'password'} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}}></Input>
        <InputRightElement width={'4.5rem'}>
          <Button h={'1.7rem'} size = 'sm' onClick={handleClick} >
            {show ? "Hide":"Show"}
          </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Confirm Password </FormLabel>
        <InputGroup size={'md'}>
        <Input type={show ? 'text':'password'} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}}></Input>
        <InputRightElement width={'4.5rem'}>
          <Button h={'1.7rem'} size = 'sm' onClick={handleClick} >
            {show ? "Hide":"Show"}
          </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='pic' >
        <FormLabel>Upload Your Picture </FormLabel>
        <Input type={'file'} p = {1.5} accept={'image/*'} onChange={(e)=>{postDetails(e.target.files[0])}}></Input>
      </FormControl>
      <Button colorScheme={'blue'} width={'100%'} style={{marginTop:15}} onClick={submitHandler}>
        Sign Up
      </Button>
    </VStack> 
  )
}

export default SignUp