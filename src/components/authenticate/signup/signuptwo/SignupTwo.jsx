import Style from "./signuptwo.module.css";
import { Input, Button, Select } from "antd";

const options = [
    { value: 'Which of the following descrbes you best', label: 'Which of he following describes you best' },
    { value: 'Whithe following describes you best', label: 'Which describes you best' },
    { value: 'Which of thecribes you best', label: 'Which of the describes you best' }
]

const SignupTwo = () => {
    return (
        <div className={`${Style.container} flex justify-content-center items-center bg-light p-2`}>
            <div className={`${Style.main} flex-col items-center`}>
                <div className="flex w-full">
                    <Button type="link">{'<'} &nbsp; Back</Button>
                </div>
                <h3 className={`font-dark text-center mt-1`}>
                    Welcome to Kargoplex.com
                </h3>
                <span className={`font-title font-light`}>Shipping. Simplified.</span>

                {/* more details form  */}
                <form className={`flex-col gap-1 mt-2 w-full px-1`}>

                    <div className="flex-col gap-half">
                        <label className="font-small font-dark" htmlFor="name">First name</label>
                        <Input
                            id="name"
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div className="flex-col gap-half">
                        <label className="font-small font-dark" htmlFor="last-name">Last name</label>
                        <Input
                            id="last-name"
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div className="flex-col gap-half">
                        <label className="font-small font-dark" htmlFor="company-name">Company name</label>
                        <Input
                            id="company-name"
                            placeholder="Company name"
                            required
                        />
                    </div>
                    <div className="flex-col gap-half">
                        <label className="font-small font-dark">Which of the following describes you best?</label>
                        <Select
                            defaultValue="Which of the  describes you best"
                            style={{ width: '100%' }}
                            // onChange={handleChange}
                            options={options}
                        />
                    </div>
                    <Button
                        className={`mt-1 ${Style.singup_btn}`}
                    >Sign up
                    </Button>
                </form>

            </div>
        </div>
    );
}

export default SignupTwo;