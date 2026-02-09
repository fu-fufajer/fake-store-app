import { Button, Modal, ModalBody, ModalFooter, ModalHeader,ButtonGroup } from "flowbite-react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ModalCartComp = ({ item, handleClose, openModal, handleCartBtn }) => {
    const [qty, setQty] = useState(1);

    function updateQty(type) {
        if (type == "+") {
            // prev: parameter setter set untuk mengambil nilai state sebelumnya
            setQty((prev) => prev+1)
        } else {
            // jika - , cmn boleh diupdate max sampai 1 pengurangannya
            if (qty > 1) {
                setQty((prev) => prev-1)
            }
        }
    }

    return (
        <div>
            <Modal dismissible show={openModal} onClose={handleClose}>
                <ModalHeader>Tambah Item Keranjang</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                                <img
                                    alt="Neil image"
                                    height="50"
                                    src={item.images ? item.images[0] : ''}
                                    width="32"
                                    className="rounded-full"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{item.price}</div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <ButtonGroup>
                                <Button color="alternative"><FaMinus className="w-4 h-4" onClick={() => updateQty("-")}/></Button>
                                <Button color="alternative">{qty}</Button>
                                <Button color="alternative"><FaPlus className="w-4 h-4" onClick={() => updateQty("+")}/></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="flex justify-end">
                    <Button color="alternative" onClick={handleClose}>Batal</Button>
                    <Button color="blue" onClick={() => handleCartBtn(item, qty)}> 
                        Keranjang
                    </Button >
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalCartComp
