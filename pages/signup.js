import { useState } from 'react';
import { useRouter } from 'next/router';

function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSubmitForm = (e) => {
    e.preventDefault();
    // auth
    console.log(email, password);

    // and then we want to send them to the home page
    router.push('/about');
  };

  return (
    <div>
      <h1>this is the signup page</h1>
      <form onSubmit={doSubmitForm}>
        <input
          name='email'
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

export default Signup;
