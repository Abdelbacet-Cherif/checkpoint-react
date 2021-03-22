import {Form, Button} from 'react-bootstrap'

const MyForm = () => {
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="tex">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted tex">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="tex">Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" />
        </Form.Group>

      </Form>
      
    )
}

export default MyForm
