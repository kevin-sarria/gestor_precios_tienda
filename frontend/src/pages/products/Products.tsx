import { ProductsTable } from "."
import { UseModal } from "../../hooks";
import { AddRecord, ModalTemplate } from "../components";

export const Products = () => {

  const { isOpen, onClose, titleModal, ContentModal, addProductModal, editProductModal, deleteProductModal } = UseModal();

  return (
    <>
      <ProductsTable optionsActions={{ editProductModal, deleteProductModal }} />
      <AddRecord clickAction={addProductModal} />
      <ModalTemplate
        title={titleModal}
        isOpen={isOpen}
        onClose={onClose}
      >
        {ContentModal}
      </ModalTemplate>
    </>
  )
}