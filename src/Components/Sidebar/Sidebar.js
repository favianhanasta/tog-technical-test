// import { Button } from 'react-bootstrap';
import './Sidebar.css';

function Sidebar({ expand, setExpand }) {
    const menuItems = [
        {
            id: '1',
            name: 'Dashboard',
            logoSrc: 'Assets/Images/home-run.svg',
            child: []
        },
        {
            id: '2',
            name: 'Master Data Management',
            logoSrc: 'Assets/Images/suitcase.svg',
            child: [
                {
                    name: 'Standard Mark-Up',
                    url: ''
                },
                {
                    name: 'Standard Service Fee',
                    url: ''
                },
                {
                    name: 'Fee Type',
                    url: ''
                },
                {
                    name: 'Frequent Traveler Program',
                    url: ''
                },
                {
                    name: 'Standar Ancillary Fee',
                    url: ''
                },
                {
                    name: 'Rating Type',
                    url: ''
                },
                {
                    name: 'Setup Flight Commision',
                    url: ''
                },
                {
                    name: 'Special Dates',
                    url: ''
                },
                {
                    name: 'Corporate Rating',
                    url: ''
                }

            ],
        }
    ]

    return (
        <div className={expand ? 'main-sidebar-extend' : 'main-sidebar'}>
            {
                menuItems.map((item, index) => {
                    return (
                        <span
                            className={!expand ? 'flex justify-center' : null}
                            key={index}
                            onMouseEnter={() => setExpand(true)}
                            onMouseLeave={() => setExpand(false)}
                        >
                            <div className={expand ? 'row' : null} >
                                <div className={`icon-box ${expand ? 'col-2' : null}`}  >
                                    <img src={item.logoSrc} alt={item.name} className='img-full' />
                                </div>
                                {
                                    expand ?
                                        <div className={expand ? 'col-10' : null} >
                                            <div>
                                                <p className='pointer' >{item.name}</p>
                                            </div>
                                            {
                                                item.child.length > 0 ?
                                                    item.child.map((child, index) => {
                                                        return (
                                                            <p key={index} className='pointer' style={{ color: child.name === 'Fee Type' ? '#FDC300' : 'white' }}>{child.name}</p>
                                                        )
                                                    })
                                                    : null
                                            }
                                        </div>
                                        : null
                                }
                            </div>
                        </span>
                    )
                })
            }
        </div>
    );
}

export default Sidebar;