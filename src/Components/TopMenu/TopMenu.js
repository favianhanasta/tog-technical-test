import './TopMenu.css';

function TopMenu() {
    return (
        <div className="main-topmenu">
            <div>
                <img src='Assets/Images/bayu_buana_logo.svg' alt='logo-top-menu' />
            </div>
            <div className='right-menu'>
                <div className='icon'>
                    <img src='/Assets/Images/question.svg' alt='question-icon' className='img-full' />
                </div>
                <div className='icon'>
                    <img src='/Assets/Images/bell.svg' alt='notif-icon' className='img-full' />
                </div>
                <div className='avatar-box'>
                    <img src='/Assets/Images/avatar.png' alt='avatar' className='img-avatar' />
                </div>
            </div>
        </div>
    );
}

export default TopMenu;