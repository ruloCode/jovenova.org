"use client";

import { useState } from "react";
import Modal from "react-modal";
import ReactTypingEffect from "react-typing-effect";

import Balancer from "react-wrap-balancer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <h1
        className="secondaryFont animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Transformando vidas</Balancer>
        <Balancer>Juntxs por&nbsp; </Balancer>
      </h1>
      <ReactTypingEffect
        speed={50} // Ajusta la velocidad de escritura a un valor más lento, por ejemplo, 50
        eraseDelay={1000} // Aumenta el retraso antes de borrar el texto a 1000 (1 segundo)
        eraseSpeed={50} // Ajusta la velocidad de borrado a un valor más lento, por ejemplo, 50
        typingDelay={2000} // Aumenta el retraso antes de empezar a escribir el siguiente texto a 2000 (2 segundos)
        className="typing"
        text={[" La Educación", " La Cultura", " El arte"]}
      />
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Como fundación sin ánimo de lucro, nos enfocamos en empoderar a la
          juventud.
        </Balancer>
      </p>

      <div className="buttonContainer">
        <button
          onClick={openModal2}
          className="secondaryColor secondaryButton rounded border border-indigo-600 px-4 py-2 text-indigo-600 "
        >
          Donar
        </button>
        <button
          onClick={openModal}
          className="primaryColor primaryButton rounded bg-indigo-600 px-4 py-2 text-white"
        >
          Ayudar
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            maxWidth: "600px",
            margin: "auto",
          },
        }}
      >
        <div className="modal">
          <button
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScY6pFYNO6XLw6tacTAucVdIPAuPuH6zkLCUhMJIMbpAvLGXg/viewform?embedded=true"
            width="100%"
            height="956"
          >
            Cargando…
          </iframe>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpen2}
        onRequestClose={closeModal2}
        contentLabel="Modal"
        style={{
          overlay: {
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            maxWidth: "420px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            maxHeight: "auto",
          },
        }}
      >
        <div className="modal primaryFont">
          <button
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
            onClick={closeModal2}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="donateModal text-center">
            <h3 className="text-2xl font-bold">¡Gracias por tu generosidad!</h3>
            <div className="mt-4 ">
              Con tu donación, estás ayudando a transformar vidas. <br />
              ¡Tu apoyo es invaluable! <br />
              Por ahora, solo estamos aceptando donaciones por las plataformas
              de Nequi y Davidplata al número
              <p className="text-2xl font-bold">3007438588</p>
            </div>
          </div>

          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScY6pFYNO6XLw6tacTAucVdIPAuPuH6zkLCUhMJIMbpAvLGXg/viewform?embedded=true" width="100%" height="956" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> */}
        </div>
      </Modal>
    </div>
  );
}
