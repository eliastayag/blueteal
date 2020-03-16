import React from 'react';
import './stripe.scss';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

//The actual form itself
function StripeForm(){
    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) =>{
        //Communicate with stripe based on card info
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });

          if (error){
              console.log(error);
              console.log('asdasd')
          }
          else {
              console.log("Payment", paymentMethod);
          }
          // fetch server to get the clientSecret
          const clientSecret = await fetch("http://localhost:3000/pay.php");
         const data = stripe.confirmCardPayment(clientSecret,{
             payment_method:paymentMethod
          });

          if(data.success){
              //unlock the feature!!
              console.log('asdasd')
          }
    }
    var style={
        base:{
            color: "#FAD"
        }
    }
    return(
        <form onSubmit={Pay} style={{width:'300px'}}>
            
            <CardElement options={{
                style:style}} />
                <button>Pay Transaction</button>
        </form>
    )
}
const stripePromise = loadStripe('pk_test_hIcXXTXLg8jPwQWF7nWbsrPr00gtqOwhiI');
//Wrapping stripe elements to the form
export default function Wrapper(){
return (
    <Elements stripe={stripePromise}>
        <StripeForm />
    </Elements>
)
}

Wrapper.defaultProps = {

}