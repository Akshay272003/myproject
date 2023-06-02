import Switch from '@mui/material/Switch';

const ActivityToggle = ({label, isChecked}) => {
    return (
        <div className='flex justify-content-between items-center'>
            <span className="font-title font-light">
                {label}
            </span>
            <Switch defaultChecked={isChecked} size='small' />
        </div>
    );
}

export default ActivityToggle;