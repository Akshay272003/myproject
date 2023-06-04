import styles from "./referrals.module.css";

const InvitedPeople = ({credit, date, email, name, status}) => {
    return ( 
        <>
            <div className="flex mt-1">
                <div className={`${styles.basis_33} flex items-center`}>
                    <span className="sub-title">{date}</span>
                </div>
                <div className={`flex-col ${styles.basis_33} ${styles.gap_small}`}>
                    <span className="font-small font-dark">{name}</span>
                    <span className="font-xs font-light">{email}</span>
                    <span className={`font-small ${status==="Completed" ? styles.text_green : styles.text_orange}`}>{status}</span>
                </div>
                <div className="flex justify-content-end items-center flex-1">
                    <span className="font-light font-small">{credit}</span>
                </div>
            </div>
        </>
     );
}
 
export default InvitedPeople;