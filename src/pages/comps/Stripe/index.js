import React from 'react';
import './stripe.scss';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

var style = {
    base:{
        color:"#FAD"
    }
}

//The actual form itself
function StripeForm({}){
    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) =>{
        //communicate with stripe based on the card info
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });

          if (error){
              console.log(error)
          } else {
              console.log('payment', paymentMethod)
              //fetch server to get the clientSecret
              const clientSecret = await fetch("http://localhost:8888/pay.php");

              const data = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: paymentMethod
              });
              if (data.success){
                  //unlock feature
              }
          }
    }

    return (
        <form onSubmot={Pay}>
            Just a form...
            <CardElement options={{
                style:style
            }}/>
            <button>Pay Transaction</button>
        </form>
    )
}

const stripePromise = loadStripe("pk_test_hIcXXTXLg8jPwQWF7nWbsrPr00gtqOwhiI");
//wrapping stripe elements to the form
function Wrapper({}){
    <Elements stripe={stripePromise}>
        <StripeForm />
    </Elements>

}

Wrapper.defaultProps = {

}

export default Wrapper;