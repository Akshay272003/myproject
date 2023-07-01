import Style from "./popup.module.css";

export const openDialog = (id) => {
    const elem = document.getElementById(id)
    // elem.showModal();
    elem.classList.remove(Style.close)
}
export const closeDialog = (id) => {
    const elem = document.getElementById(id)
    // elem.closest();
    elem.classList.add(Style.close)
}

const Popup = ({ id, children }) => {
    return (
        <>
            {/* <dialog id={id} className={Style.dialog_box}>
                {children}
            </dialog> */}
            <div className={`${Style.container} ${Style.close}`} id={id}>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Popup