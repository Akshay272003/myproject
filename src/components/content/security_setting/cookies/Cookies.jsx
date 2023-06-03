import styles from "./cookies.module.css";
import BoxToggleMenus from '../../reusables/BoxToggleMenus';
import SideHelper from "../../reusables/SideHelper"
const Cookies = () => {
    return (
        <>
            <div className={`${styles.main_container} flex-col gap-2`}>

                {/* Necessary cookies  */}
                <BoxToggleMenus
                    heading="Necessary Cookies"
                    description="These cookies are necessary for the website to function and can't be switched off in our systems. They are usually only set in response to actions you make which result in request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies but some part of site may not work as a result."
                    options={[
                        "Turn all off", "Security", "Kargoplex", "Language settings", "User Experience"
                    ]}
                />
                {/* Performance Cookies  */}
                <BoxToggleMenus
                    heading="Performance Cookies"
                    description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. If you do not allow this cookies, information from this cookies will not be used to help site performance."
                    options={[
                        "Turn all off", "Kargoplex Analytics", "Inspectlet"
                    ]}
                />

            </div>

            <div className={`${styles.helper_container} flex-col flex-1`}>
                <div className={`flex-col gap-2 bg-light rounded p-1`}>
                    <SideHelper
                        iconSrc={"src\\assets\\sheild.png"}
                        heading="Cookies"
                        descriptions={["When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually drectly identify you, but it can give you a more personalized web experience Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer."]}
                    />
                </div>
            </div>
        </>
    );
}

export default Cookies;