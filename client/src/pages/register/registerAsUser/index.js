import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import {useSelector} from 'react-redux';

const RegisterAsUser = () => {

  const z = useSelector(state => state.user)
  

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("Required"),
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
            firstName: "",
            lastName: "",
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
            fetch("http://localhost:3001/register", requestOptions);
          }}
        >
          {({ errors, touched }) => (
            <Form class="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
              <label>First Name : </label>
              <Field
                name="firstName"
                placeholder="First Name"
                className="block w-60  p-1  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <label>Last Name : </label>
              <Field
                name="lastName"
                placeholder="Last Name"
                className="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <label>Role : </label>
              <Field
                name="role"
                placeholder="Role"
                className="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"
              />
              {errors.role && touched.role ? (
                <div>{errors.role}</div>
              ) : null}
              <label>Email : </label>
              <Field
                name="email"
                placeholder="email"
                className="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label>Password : </label>
              <Field
                name="password"
                placeholder="Password"
                className="block p-1 w-60  text-gray-700 text-sm font-bold mb-1 bg-slate-300"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <label>Confirm Password : </label>
              <Field
                name="confirmPassword"
                placeholder="Password"
                type="password"
                className="block w-60  p-1 text-gray-700 text-sm font-bold mb-2 bg-slate-300"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
              <button
                type="submit"
                className="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded"
              >
                Submit
              </button>
              Already User?{" "}
              <Link
                href="/login"
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
