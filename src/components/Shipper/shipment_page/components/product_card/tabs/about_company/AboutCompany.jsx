import Style from "./about_company.module.css";
import { Divider } from "@mui/material";

const AboutCompany = () => {
    return (
        <div className="flex-col gap-1 p-1">
            <div className="flex-col items-center p-2">
                <img src="src\assets\temp-logo.png" />
                <span className={Style.company_name}>E-SHIPPER LOGISTICS WEBSITE</span>
                <span className="font-title font-light">9/F, 4645 WoSong Road,</span>
                <span className="font-title font-light">Shangai, 200080, China</span>

                <div className={`${Style.deals_with_us} mt-1`}>
                    50+ Freightos shipments
                </div>
            </div>
            <Divider />

            {/* company background  */}
            <div>
                <h3>Background</h3>
                <div className="flex justify-content-end" style={{ paddingLeft: '12%' }}>
                    <div className="font-title font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut recusandae natus distinctio doloribus ipsum alias repellendus omnis maiores quis delectus eum rerum, accusamus praesentium vitae ducimus amet qui veniam tenetur molestias? Aspernatur at minima impedit neque, maiores porro iure omnis autem corporis totam. Dolor tempora ipsum molestiae unde officiis quasi laborum autem doloremque illo impedit vero optio debitis, eligendi quis repellendus iure, quibusdam, ut pariatur! Nihil cumque aperiam, doloribus natus iure perspiciatis velit dolorem omnis possimus atque reprehenderit deserunt nobis officia distinctio perferendis porro molestiae, mollitia dicta. Consequuntur numquam assumenda unde voluptates reiciendis, excepturi ad odit molestiae laudantium molestias.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;