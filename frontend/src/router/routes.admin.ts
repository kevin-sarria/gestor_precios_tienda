import { RouteAdmin } from "../interfaces";
import { Dashboard, PendingPayments, Products, TemplateAdmin } from "../pages";
import { PendingPaymentDetails } from "../pages/pendingPayments/components";

export const routesAdmin: RouteAdmin[] = [
    {
        name: 'Dashboard',
        path: '/',
        Template: TemplateAdmin,
        Component: Dashboard
    },
    {
        name: 'Productos',
        path: '/products',
        Template: TemplateAdmin,
        Component: Products
    },
    {
        name: 'Cuentas Pendientes',
        path: '/pending-payments',
        Template: TemplateAdmin,
        Component: PendingPayments
    },
    {
        name: 'Cuentas Pendientes 2',
        path: '/pending-payments/:id',
        visible: false,
        Template: TemplateAdmin,
        Component: PendingPaymentDetails
    },
]