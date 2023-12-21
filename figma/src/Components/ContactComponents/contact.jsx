import React from 'react'
import { Formik, Form, Field } from "formik";
import "./contact.scss"
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    number: Yup.string()
        .matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'Invalid phone number format')
        .required('Required'),
    message: Yup.string()
        .required('Required')



});
const ContactComponents = () => {
    const showSweetAlert = (values) => {
        console.log('Submitting form:', values);
        Swal.fire({
            icon: 'success',
            showCancelButton: false,

        });
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', number: '', message: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    showSweetAlert(values);
                    setSubmitting(false);
                    resetForm();
                }, 300);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="forms">
                        <div className="ContactText">
                            <div className="ContactTextOne">
                                <div className="callContact">
                                    <div className="ContactIcon">
                                        <IoCallOutline />
                                    </div>
                                    <div className="CallOne">
                                        <h2>Call To Us</h2>
                                    </div>
                                </div><br />
                                <div className="TextOne">
                                    <p>We are available 24/7, 7 days a week.</p><br />
                                    <p>Phone: +8801611112222</p>
                                </div>
                            </div>
                            <div className="ContactTextTwo">
                                <div className="callContact">
                                    <div className="ContactIcon">
                                        <CiMail />
                                    </div>
                                    <div className="CallOne">
                                        <h2>Write To US</h2>
                                    </div>
                                     </div>
                                    <div className="TextOne">
                                        <p>Fill out our form and we will contact <br /> you within 24 hours.</p><br />
                                        <p>Emails: customer@exclusive.com</p><br />
                                        <p>Emails: support@exclusive.com</p><br />

                                    </div>
                               
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="name" type="text" placeholder="your name*" />{errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}</div></div>
                            <div className='col-12 col-md-12 col-lg-4'><div className="from-group"><Field name="email" type="email" placeholder="your email*" />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</div></div>
                            <div className="col-12 col-md-12 col-lg-4"><div className="from-group"><Field name="number" type="tel" placeholder="your number*" />{errors.number && touched.number ? (
                                <div>{errors.number}</div>
                            ) : null}</div></div>

                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="from-message"><Field name="message" type="text" placeholder="Your Massage" />{errors.message && touched.message ? (
                                    <div>{errors.message}</div>
                                ) : null}</div></div> </div>

                        <div className='butt'>
                            <div className='btn'>
                                <button type="submit" >
                                    Send Massage
                                </button></div></div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ContactComponents