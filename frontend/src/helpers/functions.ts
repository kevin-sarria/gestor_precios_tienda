import { Productos } from "../interfaces";

export const totalPayment = ( objectPendingPaymentData: Productos[] ) => {

    let total: number = 0;

    objectPendingPaymentData.map( ({precio}) => {
        total += Number(precio);
    } )

    return total;

}