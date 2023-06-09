import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import { Chip } from '@mui/material';

const Register = ( )=> {
   
    return (
        <div>
    
      
    <Formik
          initialValues={{
            resturantName: '',
            email: '',
            password: '',
            
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="resturantName" placeholder="resturantName"/>
              {errors.resturantName && touched.resturantName ? (
                <div>{errors.resturantName}</div>
              ) : null}
              <br/>
              <Field name="email"  placeholder="email"/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}

              <br/>
             
              <button type="submit">Submit</button>
              Already User <Link href="/login">Sign in</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register