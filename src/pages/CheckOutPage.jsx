import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const CheckOutPage = () => {
  const [employee, setEmployee] = useState({})
  const handleInputChange = (e) => {
    const fieldToUpdate = e.target.name
    const value = e.target.value
    console.log(fieldToUpdate, value)
  }

  const sendEmployeeToApi = async (e) => {
    e.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/honeydukes/Employees',
      employee
    )
    console.log(resp)
    if (resp.status === 200) {
      // redirect page to the home
      // BONUS can we diplay a success message
      // setShouldRedirect(true)
    } else {
      //display an error message
    }
  }

  return (
    <div>
      <Header />
      <form>
        <input type="text" name="firstName" onChange="">
          <form onSubmit={sendEmployeeToApi}>
            <section>
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <p>Last Name</p>
              <input type="text" name="lastName" onChange={handleInputChange} />
            </section>
            <section>
              <p>Phone</p>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </section>
            <button>Add employee</button>
          </form>
        </input>
      </form>
      <h1>Checkout</h1>
      <Footer />
    </div>
  )
}

export default CheckOutPage
