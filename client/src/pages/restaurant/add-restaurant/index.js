import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";

function AddMenue() {
    const router = useRouter();
  const [file, setfile] = useState(null);
  const handleImageSave = (e) => {
    //gets called on every change or adding image everytime

    setfile(e.target.files[0]); //getting file from the event
  };
  const handleSave = async (values) => {
    const formData = new FormData();

    Object.entries(values).map((item) => {
      //converting the array data into object
      formData.append(item[0], item[1]);
    });
    formData.append("foodMenue", file);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    const res = await fetch(
      "http://localhost:3001/restaurantImage",
      requestOptions
    );
  };

  return (
    <>
    <button onClick={()=> router.push('/restaurant')} className="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded outline-1">Back</button>
    <div className=" flex-col w-full max-w-sm m-auto text-left font-sans font-semibold mt-32">
        <h1 className = 'font-bold text-center text-3xl mb-10 font-serif'>Restaurant Registration</h1>
      <Formik
        initialValues={{
          RestaurantName: "",
          Address: "",
          addMenue: "",
        }}
        onSubmit={(values) => {
          handleSave(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="RestaurantName" placeholder="Your Restaurant Name" className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "/>
            {errors.RestaurantName && touched.RestaurantName ? (
              <div>{errors.RestaurantName}</div>
            ) : null}
            <br />
            <Field name="Address" placeholder="Address" className="block w-60  p-3 rounded-xl  text-gray-700 text-sm font-bold mb-1 bg-slate-300 "/>
            {errors.Address && touched.Address ? (
              <div>{errors.Address}</div>
            ) : null}
            <br />
            <input type="file" onChange={handleImageSave} />
            <button type="submit" className="shadow inline-block mr-2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded outline-1">Save</button>
          </Form>
        )}
      </Formik>
    </div>
    </>
    
  );
}

export default AddMenue;
