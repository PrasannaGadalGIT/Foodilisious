import { Formik, Form, Field} from "formik";
import Link from "next/link";
import * as Yup from 'yup';


const RegisterAsUser = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('required'),
       lastName : Yup.string()
       .required('Required'),
       email: Yup.string()
       .email('Invalid email')
       .required('Required'),
       password : Yup.string()
       .required('Password is required'),
       confirmPassword : Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
   });
  return (

    <div class="h-screen flex justify-center items-center ">
      <div>
         <div>
     
      <Formik
        
        
        initialValues={{
          firstName: "",
          lastName : '',
          email: "",
          password: "",
          confirmPassword : ''
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
          <Form  class = ' scale-150 '>
            <Field name="firstName" placeholder="First Name" class="block w-60  p-1  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "/>
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
           
            
            <Field name="lastName" placeholder="Last Name"  class="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"/>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
           
            
            <Field name="email" placeholder="email"  class="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            
            
            <Field name="password" placeholder="Password"  class="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"/>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
           
            
            <Field name="confirmPassword" placeholder="Password" type="password"  class="block w-60  p-1 text-gray-700 text-sm font-bold mb-2 bg-slate-300"/>
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            
            

           
            
            <button type="submit" class="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded">Submit</button>
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
