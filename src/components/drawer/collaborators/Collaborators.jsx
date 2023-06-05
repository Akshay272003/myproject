import Heading from "./Heading";
import SubHeading from "./SubHeading";
import SubDetail from "./SubDetail";
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';

const Collaborators = () => {
    return (
        <>
            <div>
                <Heading
                    title="FREIGHT FORWARDER"
                    icon={<BusinessIcon fontSize="small" />}
                />
                <SubHeading
                    title="Adgod Inc"
                />
                <div className="flex-col gap-half p-1 bg-less-light rounded">
                    <SubDetail
                        options={[
                            { title: "AGENT", detail: "Jane, Smith" },
                            { title: "ADDRESS", detail: "Indore, Mp" },
                            { title: "TELEPHONE", detail: "5486454654" }
                        ]}
                    />
                </div>
            </div>

            <div className="mt-2">
                <Heading
                    title="CUSTOMER BROKER"
                    icon={<AttachMoneyIcon fontSize="small" />}
                />
                <SubHeading
                    title={`Quicka Clearing & Forwarding`}
                />
                <div className="flex-col gap-half p-1 bg-less-light rounded">
                    <SubDetail
                        options={[
                            { title: "ADDRESS", detail: "Indore, Mp" },
                            { title: "TELEPHONE", detail: "5486454654" }
                        ]}
                    />
                </div>
            </div>

            <div className="mt-2">
                <Heading
                    title="CARGO INSURENCE PROVIDER"
                    icon={<SecurityIcon fontSize="small" />}
                />
                <SubHeading
                    title="MarshMcLennan"
                />
                <div className="flex-col gap-half p-1 bg-less-light rounded">
                    <SubDetail
                        options={[
                            { title: "COMPANY WEBSITE", detail: "click here" }
                        ]}
                    />
                    <div className="mt-half">
                        <p className="font-xs font-light">
                            COVERAGE DOCUMENTS
                        </p>
                        <div className="flex-col gap-half mt-half">
                            <div className="flex gap-1">
                                <div className="font-small">
                                    icon
                                </div>
                                <span className="font-small">Yout policy agreement</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="font-small">
                                    icon
                                </div>
                                <span className="font-small">Yout policy agreement</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collaborators;