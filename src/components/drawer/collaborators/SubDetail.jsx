const SubDetail = ({options}) => {
    return (
        <>
            {options && options.map(option => (
                <div key={option.title} className="mt-half">
                    <p className="font-xs font-light">
                        {option.title}
                    </p>
                    <p className="heading mt-small">
                        {option.detail}
                    </p>
                </div>
            ))}

        </>
    );
}

export default SubDetail;