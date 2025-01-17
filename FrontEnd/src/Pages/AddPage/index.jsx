import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'; 
import { Helmet } from 'react-helmet';

function AddPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    axios.get("http://localhost:3000/customers")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      salary: '',
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Title is required')
        .max(50, 'Title must be 50 characters or less'),
      description: Yup.string()
        .required('Description is required')
        .max(200, 'Description must be 200 characters or less'),
      salary: Yup.number()
        .required('Salary is required')
        .typeError('Salary must be a number'),
      image: Yup.string()
        .required('Image URL is required')
        .url('Invalid URL format'),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:3000/customers", values)
        .then((response) => {
          alert("Product added successfully");
          setProducts([...products, response.data]); 
          navigate("/");  
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    },
  });

  
  const deleteProduct = (_id) => {
    axios.delete(`http://localhost:3000/customers/${_id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== _id));  
        alert("Product deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <>
     <Helmet>
            <title>Add Page</title>
        </Helmet>
    
    <div className="form-container">
      <h1>Add Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.title && formik.errors.title ? 'input-error' : ''}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error-message">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.description && formik.errors.description ? 'input-error' : ''}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="error-message">{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            name="salary"
            type="text"
            value={formik.values.salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.salary && formik.errors.salary ? 'input-error' : ''}
          />
          {formik.touched.salary && formik.errors.salary ? (
            <div className="error-message">{formik.errors.salary}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.image && formik.errors.image ? 'input-error' : ''}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error-message">{formik.errors.image}</div>
          ) : null}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      
      <div className="products-table">
        <h2>Your Products</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Salary</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.salary}</td>
                <td><img src={product.image} alt={product.title} width="100" /></td>
                <td>
                  <button onClick={() => deleteProduct(product._id)} className="delete-button">
                    <FaTrash /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
    
  );
}

export default AddPage;
