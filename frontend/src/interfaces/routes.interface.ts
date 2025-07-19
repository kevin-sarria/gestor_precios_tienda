export interface Route {
    name: string;
    path: string;
    visible?: boolean;
    Component: () => JSX.Element;
}

export interface RouteAdmin extends Route {
    Template: ({ children }: TemplateAdminProps) => JSX.Element;
}

export interface TemplateAdminProps {
    children?: JSX.Element | JSX.Element[];
}