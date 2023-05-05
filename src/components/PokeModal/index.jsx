import { DivConteudoModal,DivModal } from "./style";
 import ReactModal from "react-modal";
 ReactModal.setAppElement('#root');
export const PokeModal = ({ isOpen, onRequestClose, Pokemon }) => {
  return(
    <ReactModal isOpen={isOpen}  overlayClassName={DivModal} className={DivConteudoModal} >
        <DivModal>
            <DivConteudoModal>
              <h1>Title</h1>
            </DivConteudoModal>
        </DivModal>
    </ReactModal>
         
  
  )
};
