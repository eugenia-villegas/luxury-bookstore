import { Form, FormTitle } from '../components/styledComponents.js';

const Checkout = () => {
    return (
        <>
            <Form>
                <FormTitle>Your order is almost complete!</FormTitle>
                <label for="name" className="form-label">Name & Lastname</label>
                <input type="text" className="form-control" placeholder="Dua Lipa"></input>
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com"></input>
                <label for="phone" className="form-label">Email address</label>
                <input type="phone" className="form-control" placeholder="111111111"></input>
                <button type="button" className="btn btn-outline-secondary">Submit</button>
            </Form>
            
        </>
    )
};

export default Checkout;