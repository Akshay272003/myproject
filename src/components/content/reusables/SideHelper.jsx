const SideHelper = ({heading, descriptions, iconSrc}) => {
    return (
        <div className='flex-col gap-half'>
            
                <img className="helper-logo" src={iconSrc} alt="" />
            
            <h6 className="font-small font-dark">
                {heading}
            </h6>
            {descriptions && descriptions.map(desc => (
                <p className="sub-title" key={desc}>
                    {desc}
                </p>
            ))}
        </div>
    );
}

export default SideHelper;