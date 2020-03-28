import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CompletePage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Thank You For Your Order</h1>
      <h2 style={{ textAlign: 'center' }}>
        We will email your receipt to:{' '}
        <span style={{ color: '#CA0707' }}>your_email@your_ISP.com</span>
      </h2>
      <div className="complete-container">
        <table
          style={{
            width: '50%',
            textAlign: 'center',
            borderCollapse: 'collapse',
          }}
        >
          <tr
            style={{
              backgroundColor: '#CA0707',
              color: 'white',
              border: '1px solid black',
            }}
          >
            <td>
              <p>Product</p>
            </td>
            <td>
              <p>Quantity</p>
            </td>
            <td>
              <p>Total</p>
            </td>
          </tr>
          {/* This is the loop */}
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p>Product information</p>
            </td>
            <td>
              <p>54</p>
            </td>
            <td>
              <p>$ 12.95</p>
            </td>
          </tr>
          {/* the end of the loop */}
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p></p>
            </td>
            <td className="complete-totals">
              <p>Sub Total</p>
            </td>
            <td>
              <p>$ 12.00</p>
            </td>
          </tr>
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p></p>
            </td>
            <td className="complete-totals">
              <p>Sub Total</p>
            </td>
            <td>
              <p>$ 1.00</p>
            </td>
          </tr>
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p></p>
            </td>
            <td className="complete-totals">
              <p>Total</p>
            </td>
            <td>
              <p style={{ color: '#CA0707' }}>$ 13.00</p>
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default CompletePage
