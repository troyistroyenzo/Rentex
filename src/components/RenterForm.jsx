import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Flex
} from '@chakra-ui/react'

export default function RenterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (values) => {
    console.log(alert(JSON.stringify(values, null, 2)))
  }

  return (
    <>
    <Text>
        fontFamily={'heading'}
        fontSize={'x-large'}
        fontWeight={600}>
        Welcome! Please enter your information below.
    </Text>
    <Flex justify={'center'} align={'center'} p={5} mt={10}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Text
    fontFamily={'heading'}
    fontSize={'x-large'}
    fontWeight={600}
    mb={4}>
        Credit Your Account
    </Text>
    <FormControl isInvalid={errors.creditbalance}>
        <FormLabel htmlFor='creditbalance'>First Name</FormLabel>
        <Input
          id='creditbalance'
          placeholder='Credit Balance'
          {...register('creditbalance', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.creditbalance && errors.creditbalance.message}
        </FormErrorMessage>

        <FormLabel htmlFor='firstname'>First Name</FormLabel>
        <Input
          id='firstname'
          type="number"
          step="any"
          placeholder='firstname'
          {...register('firstname', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.firstname && errors.firstname.message}
        </FormErrorMessage>


        <FormLabel htmlFor='lastname'>Last Name</FormLabel>
        <Input
          id='lastname'
          placeholder='Last Name'
          {...register('lastname', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.lastname && errors.lastname.message}
        </FormErrorMessage>


      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </Flex>
    </>
  )
}