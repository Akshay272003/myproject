import InputWithLabel from "../../../reusables/input_width_label/InputWithLabel";
import Style from "./add_consignee_n_consignor.module.css";
import { InputNumber, Input, Select, Form, Divider } from 'antd';
import { Button } from '@mui/material';
import { closeSlide } from "../../../reusables/right_slide/RightSlide";
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
        <Option value="add">+91</Option>
        <Option value="minus">-1</Option>
    </Select>
);

const Add = ({ heading }) => {

    const { form } = Form.useForm()

    return (
        <div className="flex-col gap-1 bg-light" style={{ paddingBottom: '1em' }}>

            <div className={Style.header}>
                ADD A {heading.toUpperCase()} TO YOUR ADDRESS BOOK
            </div>

            <div className="flex-col gap-1 px-1">
                <Form
                    // {...formItemLayout}
                    layout="vertical"
                    form={form}
                    initialValues={{
                        layout: "vertical",
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item label="Company Name" className={Style.form_item}>
                        <Input placeholder="Bottles Ltd." className={Style.input} />
                    </Form.Item>
                    <Form.Item label="Full Name" className={Style.form_item}>
                        <Input placeholder="Bottles Ltd." className={Style.input} />
                    </Form.Item>
                    <Form.Item label="Email" className={Style.form_item} rules={[{ type: 'email' }]}>
                        <Input placeholder="Bottles Ltd." className={Style.input} />
                    </Form.Item>
                    <Form.Item label="Phone Number" className={Style.form_item}>
                        <InputNumber addonBefore={selectBefore} className={Style.phone_number} />
                    </Form.Item>
                    <Form.Item label="Address" className={Style.full_width_inp}>
                        <Input placeholder="Bottles Ltd." className={Style.input} />
                    </Form.Item>

                    <div className="flex gap-1 flex-wrap">
                        <Form.Item label="City" className={Style.form_item} style={{ flex: '1', marginBottom: '0.5em' }}>
                            <Input placeholder="Bottles Ltd." className={Style.input} />
                        </Form.Item>
                        <Form.Item label="State / District /  Province" className={Style.form_item} style={{ flex: '1' }}>
                            <Input placeholder="Bottles Ltd." className={Style.input} />
                        </Form.Item>
                    </div>

                    <div className="flex gap-1 flex-wrap">
                        <Form.Item label="Zip" className={Style.form_item} style={{ flex: '1', marginBottom: '0.5em' }}>
                            <Input placeholder="Bottles Ltd." className={Style.input} />
                        </Form.Item>
                        <Form.Item label="Country/Region" className={Style.form_item} style={{ flex: '1' }}>
                            <Input placeholder="Bottles Ltd." className={Style.input} />
                        </Form.Item>
                    </div>

                    <Form.Item label={<>Tax ID &nbsp; <a href="#" className={Style.learn_more}>Learn more</a></>} className={Style.full_width_inp}>
                        <Input placeholder="i.e., USCC, EIN or EORI number" className={Style.input} />
                    </Form.Item>

                    <Divider style={{ borderBlockStart: '1px solid #CDCDCD' }} />

                    <div className="flex flex-wrap gap-1">
                        <Button
                            style={{ textTransform: 'none', backgroundColor: '#4431B8' }}
                            variant="contained"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={() => closeSlide(1)}
                            style={{ textTransform: 'none', color: '#646464' }}
                        >
                            cancel
                        </Button>
                    </div>

                </Form>
            </div>

        </div>
    )
}

export default Add