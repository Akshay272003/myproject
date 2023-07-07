import Switch from '@mui/material/Switch';

const ActivityToggle = ({label, labelColorClass, labelSizeClass}) => {
    return (
        <div className='flex justify-content-between items-center'>
            <span className={`${labelSizeClass ? labelSizeClass : "font-title"} ${labelColorClass ? labelColorClass : "font-light"}`}>
                {label}
            </span>
            <Switch size='small' />
        </div>
    );
}

export default ActivityToggle;