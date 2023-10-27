import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import './modalBootstrap.scss';

const ModalBootstrap = (props) => {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                size={props.size}
                dialogClassName={props.class}
            >
                {!props.header ?
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header> : ""
                }
                <Modal.Body>
                  {props.children}
                </Modal.Body>
                {
                    props.footer?(
                        <Modal.Footer>
                          {props.footer}
                        </Modal.Footer>
                    ):''
                }
            </Modal>
        </>
    );
};

export default ModalBootstrap;
