import { CreateProductModalForm, DeleteProductModalForm, EditProductModalForm } from "../pages";
import { useEffect, useState } from "react";
import { CreatePendingPaymentForm } from "../pages/pendingPayments/components";

export const UseModal = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const [ titleModal, setTitleModal ] = useState<string | null>(null);
    const [ ContentModal, setContentModal ] = useState<React.ReactNode | React.ReactNode[] | null >(null);

    useEffect( () => {
        if( !isOpen ) {
            setTitleModal(null);
            setContentModal(null);
        }
    }, [isOpen] );

    const onOpen = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    const addProductModal = () => {
        setTitleModal('Registrar Producto');
        setContentModal(<CreateProductModalForm />);
        setIsOpen(true);
    }

    const editProductModal = () => {
        setTitleModal('Editar Producto');
        setContentModal(<EditProductModalForm />);
        setIsOpen(true);
    }

    const deleteProductModal = () => {
        setTitleModal('Eliminar Producto');
        setContentModal(<DeleteProductModalForm closeModal={onClose} />);
        setIsOpen(true);
    }

    const addPendingPaymentsModal = () => {
        setTitleModal('Registrar Fiado');
        setContentModal(<CreatePendingPaymentForm />);
        setIsOpen(true);
    }

    const editPendingPaymentsModal = () => {
        setTitleModal('Editar Fiado');
        setContentModal(<></>);
        setIsOpen(true);
    }

  return {

    // Methods
    isOpen,
    onClose,
    onOpen,
    titleModal,
    ContentModal,
    addProductModal,
    editProductModal,
    deleteProductModal,
    addPendingPaymentsModal,
    editPendingPaymentsModal,
  }
}
