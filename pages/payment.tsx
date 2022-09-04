import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Appearance, loadStripe } from '@stripe/stripe-js';
import React from 'react';
import styled from 'styled-components';
import Layout from '../src/components/Layout';
import theme from '../theme';
import GlobalStyle from '../theme/GlobalStyles';


// pass keys to stripe through server side props
export async function getServerSideProps() {
    const stripe = await fetch("http://localhost:3000/api/keys", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
    const stripePublishableKey = stripe.publishableKey;
    return {
        props: { stripe: stripePublishableKey },
    };
}
const useLoadStripe = (key: string) => {
    const [stripeObject, setStripe] = React.useState<any>();
    React.useEffect(() => {
        const loadStripeScript = async () => {
            const stripe = await loadStripe(key);
            setStripe(stripe);
        };
        loadStripeScript().then();
    }, []);
    return stripeObject;
};


const appearance: Appearance = {
    theme: 'none'
};

var elementStyles = {
    base: {
        iconColor: '#c4f0ff',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSmoothing: 'antialiased',
        color: '#e6f1ff',
    },
    invalid: {
      color: '#fff',
      ':focus': {
        color: '#e6f1ff',
      },
      '::placeholder': {
        color: '#e6f1ff',
      },
    },
  };

  var elementClasses = {
    focus: 'focus',
    empty: 'empty',
    invalid: 'invalid',
  };

export default function PaymentPage({ stripe }: any) {
    const stripeObject = useLoadStripe(stripe);
    return (
        <>
            {
                stripeObject &&
                <>
                    <Elements stripe={stripeObject} options={{appearance}}>
                        <PaymentForm />
                    </Elements>
                </>
            }
        </>
  );
}
const StyledPaymentSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    width: 40vw;

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }
    & > * > .Input {
        color: var(--white);
    }
    & > form {
        width: 100%;
    }
`;

// style the stripe elements
const StyledCardElement = styled(CardElement)`
    border: 2px solid var(--slate);
    border-radius: 8px;
    padding: 20px 4px;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    width: 100%;
    & > * > .Input {
        color: var(--white);
        display: block;
    }
    & > * > .Input--empty {
        color: var(--white);
    }
    & > * > .Input--invalid {
        color: var(--white);
    }
    & > * > .Input--focus {
        color: var(--white);
    }
    & > * > .Input--focus::placeholder {
        color: var(--white);
    }
    & > * > .Input--focus::-webkit-input-placeholder {
        color: var(--white);
    }
    & > * > .Input--focus::-moz-placeholder {
        color: var(--white);
    }
    & > * > .Input--focus:-ms-input-placeholder {
        color: var(--white);
    }
    & > * > .Input--focus::-ms-input-placeholder {
        color: var(--white);
    }
`;

// styled button for payment with amount 200

// chckout button
const StyledPaymentButton = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 150px;
    height: 40px;
    background: transparent;
    border-radius: 8px;
    border: 2px solid var(--white);
    margin-top: 20px;
    color: var(--black);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: auto;
    &:hover {
        background-color: var(--white);
        color: var(--dark-navy);
    }
    &:focus {
        outline: none;
    }
`;

const PaymentHeader = styled.h1`
    ${({ theme }) => theme.mixins.flexCenter};
    color: var(--white);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
`;

const PaymentSubHeader = styled.h2`
    ${({ theme }) => theme.mixins.flexCenter};
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
`;
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event: any) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        event.preventDefault();
        // TODO

        const cardElements = elements.getElement(CardElement);
        console.log(cardElements);
        if(!cardElements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElements,
        });
        if (error) {
            console.log(error);
        }
        else {
            console.log(paymentMethod);
        }
    };
    return (
        <>
            <GlobalStyle bp={theme.bp} mixins={theme.mixins} />
            <Layout>
                <StyledPaymentSection>
                    <PaymentHeader>Payment For The Database Class</PaymentHeader>
                    <PaymentSubHeader>
                        Enter your payment information
                    </PaymentSubHeader>
                    <form onSubmit={handleSubmit}>
                        <StyledCardElement options={{
                            style: elementStyles,
                            classes: elementClasses,
                        }} />
                        <StyledPaymentButton type="submit">
                            PAY 200$
                        </StyledPaymentButton>
                    </form>
                </StyledPaymentSection>
            </Layout>
        </>
    );
};
