import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const Login = () => {
  const triggerLogin = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const res = await fetch("http://localhost:3001/login", requestOptions);
    const data = await res.json();
  };
  return (
    <div class="h-screen flex justify-center items-center ">
      
      <div class= 'scale-150'>
        <h1 class= '  uppercase mb-3 font-bold'>User Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          triggerLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form >
            <Field name="email" placeholder="Email" class="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"/>
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
            <br />
            <Field name="password" placeholder="Password" type="password" class="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"/>
            {errors.email && touched.email ? (
              <div>{errors.password}</div>
            ) : null}
            <br />
            
            <button type="submit" class="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded">Submit</button>
            Dont have an account yet ? <Link href="/registerAsUser" class= 'underline decoration-blue-500 text-blue-500' >Sign Up</Link>
          </Form>
        )}
      </Formik>
      </div>
      
    </div>
  );
};

export default Login;
