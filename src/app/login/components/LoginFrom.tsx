import * as React from 'react';
import Container from 'reactstrap/lib/Container';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';

interface Props {

}

interface State {
    username: string;
    password: string;
}

export default class LoginForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" value={username} onChange={this.handleChange('username')}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" value={password} onChange={this.handleChange('password')}/>
                    </FormGroup>
                    <Button type='submit'>LOGIN</Button>
                </Form>
            </div>
        )
    }

    private handleChange = (fieldName: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ 
            ...this.state,
            [fieldName]: e.target.value
        })
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { username, password } = this.state;

        fetch('/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                contentType: 'application/json'
            }
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
}

