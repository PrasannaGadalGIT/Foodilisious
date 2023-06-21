import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import {useSelector} from 'react-redux';

const RegisterAsUser = () => {

  const z = useSelector(state => state.user)
  

  const SignupSchema = Yup.object().shape({
    restaurantName: Yup.string().required("required"),
    restaurantDescription: Yup.string().required("Required"),
    role : Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <div class="h-screen  flex">
      
      <div class = "w-full max-w-sm m-auto text-left font-sans font-semibold">
      <h1 class = 'font-bold text-center text-3xl mb-4 font-serif'>User Registration</h1>
        <Formik
          initialValues={{
            restaurantName: "",
            restaurantDescription: "",
            restaurantAddress: '',
            role: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            };
            fetch("http://localhost:3001/restaurant", requestOptions);
          }}
        >
          {({ errors, touched }) => (
            <Form class="bg-white shadow-md px-10 pt-6 pb-8 mb-4">
              
              <Field
                name="restaurantName"
                placeholder="Restaurant Name"
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.restaurantName && touched.restaurantName ? (
                <div>{errors.restaurantName}</div>
              ) : null}

              <Field
                name="restaurantAddress"
                placeholder="Restaurant Address"
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.restaurantAddress && touched.restaurantAddress ? (
                <div>{errors.restaurantAddress}</div>
              ) : null}
              
              <Field
                name="restaurantDescription"
                placeholder="Restaurant Description"
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.restaurantDescription && touched.restaurantDescription ? (
                <div>{errors.restaurantDescription}</div>
              ) : null}
              
              <Field
                name="role"
                placeholder="Role"
                
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.role && touched.role ? (
                <div>{errors.role}</div>
              ) : null}
             
              <Field
                name="email"
                placeholder="email"
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              
              <Field
                name="password"
                placeholder="Password"
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              
              <Field
                name="confirmPassword"
                placeholder="Password"
                type="password"
                className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
              <button
                type="submit"
                className="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded outline-1"
              >
                Submit
              </button>
              Already User?{" "}
              <Link
                href="/"
                className="underline decoration-blue-500 text-blue-500"
              >
                Sign in
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterAsUser;
