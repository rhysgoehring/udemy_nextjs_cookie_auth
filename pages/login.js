import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { authInitialProps } from '../lib/auth';

const Login = props => {
  return (
    <Layout title="Login" {...props}>
      <LoginForm />
    </Layout>
  );
};

Login.getInitialProps = authInitialProps();

export default Login;
