import { useFormik } from "formik";
import { StyledForm } from "./styles";
import * as Yup from "yup";

export const FormFormik = function () {
  const showFormData = (formData) => {
    alert(formData);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      phoneNumber: "",
      emailAddress: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Too short name")
        .max(20, "Too long name")
        .required("Required"),
      phoneNumber: Yup.string() // Использовал из-за ошибки NaN
        .matches("/^d+$/", "Phone number must contain only digits")
        .min(12, "Too short number.")
        .max(12, "Too long number.")
        .required("Required"),
      emailAddress: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      showFormData(values);
      setSubmitting(false);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div className="form__item">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName} *</div>
        ) : null}
      </div>

      <div className="form__item">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="error">{formik.errors.phoneNumber} *</div>
        ) : null}
      </div>

      <div className="form__item">
        <label htmlFor="emailAddress">Email Address</label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.emailAddress}
        />
        {formik.touched.emailAddress && formik.errors.emailAddress ? (
          <div className="error">{formik.errors.emailAddress} *</div>
        ) : null}
      </div>

      <button className="form__btn-submit" type="submit">
        Submit
      </button>
    </StyledForm>
  );
};
