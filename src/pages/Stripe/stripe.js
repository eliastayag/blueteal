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
function StripeForm(props){
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
          }
          else if (props.upgrade == 'Pro'){
              console.log("Payment", paymentMethod);
              console.log('pro')
              props.setCont('ConfirmationPro')
              props.setStatus('PRO')
          }
          else if(props.upgrade == 'Premium'){
            console.log("Payment", paymentMethod);
            console.log('premium')
            props.setCont('ConfirmationPremium')
            props.setStatus('PREMIUM')

          }
          // fetch server to get the clientSecret
          const clientSecret = await fetch("http://localhost:3000/pay.php");
         const data = stripe.confirmCardPayment(clientSecret,{
             payment_method:paymentMethod
          });

          if(data.success){
              //unlock the feature!!
          }
    }
    var style={
        base:{
            color: "black"
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
export default function Wrapper(props){
return (
    <Elements stripe={stripePromise}>
        <StripeForm setCont={props.setCont} setName={props.setName} upgrade={props.upgrade} setUpgrade={props.setUpgrade} setStatus={props.setStatus} status={props.status}/>
    </Elements>
)
}

Wrapper.defaultProps = {

}