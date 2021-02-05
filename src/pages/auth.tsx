import { useRouter } from 'next/router';
import { useSignIn } from '../hooks/auth/useSignIn';

const Auth = () => {
    const router = useRouter();
    const { nickname, password } = router.query;

    const [data, error] = useSignIn(nickname as string, password as string);

    if (data) {
        router.push('home');
    }

    if (error) {
        router.push('signin');
    }

    return <span>Loading...</span>;
};

export default Auth;
