import { Box } from "@chakra-ui/react";
import { pendingPaymentData } from "../../data";
import { UseModal } from "../../hooks";
import { AddRecord, ModalTemplate } from "../components";
import { PendingPayment } from "./components";

export const PendingPayments = () => {

  const { isOpen, onClose, titleModal, ContentModal, addPendingPaymentsModal, editPendingPaymentsModal } = UseModal();
  const data = pendingPaymentData;

  return (
    <Box
      padding={10}
    >
      <PendingPayment data={data} />
      <AddRecord clickAction={addPendingPaymentsModal} />
      <ModalTemplate
        title={titleModal}
        isOpen={isOpen}
        onClose={onClose}
      >
        {ContentModal}
      </ModalTemplate>
    </Box>
  )
}