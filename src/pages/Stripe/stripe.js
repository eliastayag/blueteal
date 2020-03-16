import React from 'react';
import './stripe.scss';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Button from '../comps/Button/Button'


var style={
    base:{
        color:"#fad"
    }
}

// the actual form itself
function StripeForm(props){
    // tools prebuilt by stripe
    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) => {
        // communicate with stripe based on the card info
        // prevent it from reload the page
        e.preventDefaults();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });

          if(error){
              console.log(error);
              props.setCont('ConfirmationPro');

          } else {
              console.log("payment", paymentMethod);

            //   https://stripe.com/docs/payments/accept-a-payment
            // fetch server to get the clientSecret
              const clientSecret = await fetch('http://localhost:8888/pay.php');

            //   user server secret to communicate back to stripe
              const data = stripe.confirmCardPayment(clientSecret, {
                // payment_method: {
                //   card: card,
                //   billing_details: {
                //     name: 'Jenny Rosen'
                //   }
                payment_method: paymentMethod
                
              });

              if(data.success){
                //   unlock the feature
                 props.setCont('ConfirmationPro');
              }
          }
    }

    return (
        <form onSubmit={Pay}>
            
            <CardElement options={{style:style}}/>
            {/* <Button title="Confirm" onClick={()=>{ props.setCont('ConfirmationPro'); props.setName("Plans")}} /> */}

            <button type="submit">Pay Transaction</button>
        </form>
    )
}

// key
const stripePromise = loadStripe('pk_test_hIcXXTXLg8jPwQWF7nWbsrPr00gtqOwhiI');

// Wrap stripe elements to the form
// the element will wait for the stripe to grab the account
function Wrapper(props){
    return (
        <Elements stripe={stripePromise}>
            <StripeForm setCont={props.setCont} setName={props.setName}/>
        </Elements>
    )
}

Wrapper.defaultProps = {

}

export default Wrapper;