import { Route } from "../interfaces";
import { ForgotPassword, Login, UpdatePassword } from "../pages";

export const routesPublic: Route[] = [
    {
        name: 'Login',
        path: '/',
        Component: Login
    },
    {
        name: 'Recuperar Cuenta',
        path: '/forgot-password',
        Component: ForgotPassword
    },
    {
        name: 'Cambiar Password',
        path: '/update-password',
        Component: UpdatePassword
    },
]