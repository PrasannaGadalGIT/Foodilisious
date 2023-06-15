import { Formik, Form, Field } from "formik";
import Link from "next/link";

import { setUserDetails } from "../../redux/reducer/userSlice/index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
 
  const [error, setError] = useState();
  const {token} = useSelector(state=>state.user)
  //made a dispathc function to call the reducer function
  const dispatch = useDispatch();
  const triggerLogin = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const res = await fetch("http://localhost:3001/login", requestOptions);
    const data = await res.json()
    
      if(data.isLoggedIn){
        dispatch(setUserDetails(data))
      }else{
        setError(data.msg)
      }
    
   
  };
  return (
    <div class="h-screen flex justify-center items-center ">

      <div class="scale-150">
        <h1 class="  uppercase mb-10 font-bold">User Login</h1>
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
            <Form>
              <Field
                name="email"
                placeholder="Email"
                className="block p-1 w-60 rounded-xl text-gray-700 text-sm font-bold mb-1 bg-slate-300"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br />
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className="block p-1 w-60 rounded-xl text-gray-700 text-sm font-bold mb-1 bg-slate-300"
              />
              {errors.email && touched.email ? (
                <div>{errors.password}</div>
              ) : null}
              <br />
              <p className=" text-red-700">{error}</p>
              <button
                type="submit"
                className="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded"
              >
                Submit
              </button>
              Dont have an account yet ?{" "}
              <Link
                href="/register/registerAsUser"
                className="underline decoration-blue-500 text-blue-500"
              >
                Sign Up
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
