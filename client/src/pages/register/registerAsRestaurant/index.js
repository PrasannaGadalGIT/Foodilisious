import { Formik, Form, Field} from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from 'yup';


const RegisterAsUser = () => {
    const [selectedOption, setSelectedOption] = useState('yes')

    const eventHandling = () => {
        if(selectedOption == 'yes'){
            setSelectedOption('no')
        }else{
            setSelectedOption('yes')
        }
    }



  const SignupSchema = Yup.object().shape({
    restaurantName: Yup.string()
    .required('required'),
    restaurantDescription : Yup.string()
        .max(60, 'Too long')
        .min(20, 'Too short')
       .required('Required'),
       address: Yup.string()
       .required('Required'),
      
   });
  return (

    <div >
       
       
      <div class = 'h-screen flex'>
       
         <div class="w-full max-w-sm m-auto text-left font-sans font-semibold">
         <h1 class = 'font-bold text-center text-3xl mb-4 font-serif'>Restaurant Registration</h1>
      <Formik
        
        
        initialValues={{
            restaurantName: "",
            restaurantDescription : '',
            address: "",
            delivery: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          };
          fetch("http://localhost:3001/register", requestOptions);
        }}
      >
        {({ errors, touched }) => (
            
          <Form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label>Restaurant Name : </label>
            <Field name="restaurantName" placeholder="Restaurant Name" class="block w-60  p-1 mb-4  text-gray-700 text-sm font-bold bg-slate-300 "/>
            {errors.restaurantName && touched.restaurantName ? (
              <div>{errors.restaurantName}</div>
            ) : null}
           
           <label>Restaurant Description : </label>
            <Field name="restaurantDescription" placeholder="Restaurant Description"  class="block p-1 w-60  text-gray-700 text-sm font-bold  mb-4 bg-slate-300"/>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
           
            
           
           <label>Restaurant address : </label>
            <Field name="address" placeholder="address"  class="block p-1 w-60  text-gray-700 text-sm font-bold  mb-4 bg-slate-300"/>
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
           
            <label >Delivery : </label>
            <label>
                <fieldset>
                <input type="radio" value="yes" checked ={selectedOption ==='yes'} onChange={eventHandling} />
                     yes
                <input type="radio" value="yes" checked ={selectedOption ==='no'} onChange={eventHandling} class = ' ml-4'/>
                    no
                </fieldset>

            </label> 
            <button type="submit" class=" mt-4 shadow block mr-2 bg-purple-500 hover:bg-purple-400 mb-4 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded">Submit</button>
            Already User? <Link href="/login" class= 'underline decoration-blue-500 text-blue-500' >Sign in</Link>
          </Form>
        )}
      </Formik>
    </div>
      </div>
     
    </div>
    
  );
};

export default RegisterAsUser;
