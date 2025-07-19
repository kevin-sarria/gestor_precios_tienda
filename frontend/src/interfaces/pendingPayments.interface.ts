export interface PendingPaymentProps {
    id: number;
    nombre_cliente: string;
    fecha_de_actualizacion: string;
    productos_fiados: Productos[];
}

export type Productos = {
    id: number;
    nombre: string;
    presentacion: string;
    precio: string;
}