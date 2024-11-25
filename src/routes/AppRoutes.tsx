import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
const Dashboard = lazy(() => import("../pages/user/Dashboard"));
import UserLayout from "../pages/layouts/UserLayout";
const LoginScreen = lazy(() => import("../pages/auth/LoginScreen"));
const RegiterScreen = lazy(() => import("../pages/auth/RegisterScreen"));
const HomeScreen = lazy(() => import("../pages/HomeScreen"));
const AboutScreen = lazy(() => import("../pages/AboutScreen"));
const PasswordResetScreen = lazy(() => import("../pages/auth/ResetPasswordScreen"));

const AppRoutes: React.FC = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <HomeScreen />,
        },
        {
            path: '/home',
            element: <HomeScreen />,
        },
        {
            path: '/auth/login',
            element: <LoginScreen />,
        },
        {
            path: '/auth/register',
            element: <RegiterScreen />,
        },
        {
            path: '/auth/reset-password',
            element: <PasswordResetScreen />,
        },
        {
            path: '/about',
            element: <AboutScreen />,
        },
        {
            path: '/user',
            element: <UserLayout />,
            children: [
                {

                    path: '',
                    element: <Dashboard />,
                    index: true
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                }
            ]
        },
        {
            path: '*',
            element: <HomeScreen />,
        }

    ]);
    return (
        <Suspense fallback={<div className={'h-screen w-full flex justify-center items-center'}>Loading</div>}>
            {element}
        </Suspense>
    )
}

export default AppRoutes;