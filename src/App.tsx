import { useState } from "react";
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNeTransactioModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactioModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNeTransactioModal}/>
      <Dashboard />
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactioModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
