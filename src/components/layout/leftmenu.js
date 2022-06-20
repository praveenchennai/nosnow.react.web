
import React, { useState} from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider,  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useHistory } from "react-router-dom";

const LeftMenu = (anchor) => {
    const toggleDrawer = (anchor, a) =>{}
    const navi = useHistory();
    const [open, setOpen] = useState(false)
    const [menus] = useState([
        {
            id: '1',
            title: 'Naples Real Estate', 
            secTitle: 'Manage My Account', 
            onclick: '/account/profile/view', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'Featured Residential', secTitle: '', onclick: 'https://www.nosnownaples.com/result/featured-res'},
                {title: 'Featured Land & Lots', secTitle: '', onclick: 'https://www.nosnownaples.com/result/featured-lot' },
                {title: 'Upcoming Open House', secTitle: '', onclick: 'https://nosnownaples.com/search/residential/openhouse'},
                {title: 'New Construction Southwest FL', secTitle: '', onclick: 'https://nosnownaples.com/search/residential/newconstructionyn_true'},
            ]
        },
        {
            id: '2',
            title: 'Naples Community', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'View All Communities', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/communities'},
                {title: 'Ave Maria', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/ave-maria' },
                {title: 'Verona Walk', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/verona-walk'},
                {title: 'Imperial Golf Estates', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/imperial-golf-estates'},
                {title: 'Orange Blossom Ranch', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/orange-blossom-ranch'},
                {title: 'Indigo Lakes', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/indigo-lakes'  },
                {title: 'Golden Gate Lakes', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/golden-gate-estates'  },
                {title: 'Naples Farm Sites', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/community/naples-farm-sites'}
            ]
        },
        {
            id: '3',
            title: 'Community Lifestyles', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'Gated Communities', secTitle: '', onclick: 'https://www.nosnownaples.com/community/group/naples-bonita-springs-estero-gated-communities'},
                {title: 'Non-Gated Communities', secTitle: '', onclick: 'https://www.nosnownaples.com/community/group/naples-bonita-springs-estero-non-gated-communities' },
                {title: 'Golf Communities', secTitle: '', onclick: 'https://www.nosnownaples.com/community/group/golf-communities-naples-real-estate'},
                {title: 'Beach Front Condos', secTitle: '', onclick: 'https://www.nosnownaples.com/community/group/beach-front-condo-sunset-water-views-naples-real-estate'},
                {title: 'Estate Homes', secTitle: '', onclick: 'https://www.nosnownaples.com/community/group/estate-homes-are-for-more-space-naples-real-estate'},
                {title: 'Community Lifestyle', secTitle: '', onclick: '/https://www.nosnownaples.com/community/group'}
            ]
        },
        {
            id: '4',
            title: 'Real Estate Resources', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'About the Parlante Group', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/content/about'},
                {title: 'Rick Parlante in the News', secTitle: '', useNavi: false, onclick: 'https://rick.nosnownaples.com' },
                {title: 'Parlante Group Video', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/content/parlante-video' },
                {title: 'Real Estate Special Report', secTitle: '', useNavi: false,  onclick: 'https://news.nosnownaples.com'},
                {title: 'Whats Your Home Worth?', secTitle: '', useNavi: false,  onclick: 'http://www.nosnowevalue.com/'},
                {title: 'Mortgage Calculator', secTitle: '', useNavi: false, onclick: 'https://www.nosnownaples.com/content/tcalc'}
            ]
        },
        {
            id: '5',
            title: 'Living in Naples', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'Quality Of Life', onclick: 'https://content.nosnownaples.com/quality-of-life.html'},
                {title: 'Luxury Life Style', secTitle: '', onclick: 'https://content.nosnownaples.com/luxury-life-style.html' },
                {title: 'Best Place of Retirement', secTitle: '', onclick: 'https://content.nosnownaples.com/best-place-of-retirement.html'},
                {title: 'Top 5 reasons to move to Florida', secTitle: '', onclick: 'https://content.nosnownaples.com/top-5-reasons-to-live-in-florida.html'},
                {title: 'Naples Recreation', secTitle: '', onclick: 'https://content.nosnownaples.com/naples-recreation.html'},
                {title: 'Professional Sports', secTitle: '', onclick: 'https://content.nosnownaples.com/professional-sports.html'},
                {title: 'Sports For The Family', secTitle: '', onclick: 'https://content.nosnownaples.com/sports-for-the-family.html'},
                {title: 'Famous 5th Avenue District', secTitle: '', onclick: 'https://content.nosnownaples.com/famous-5th-avenue-district.html'},
                {title: 'Naples Collier County Hot Vacation', secTitle: '', onclick: 'https://content.nosnownaples.com/naples-collier-county-hot-vacation-home-spot.html'},
                {title: 'More', secTitle: '', onclick: 'https://content.nosnownaples.com/'}
            ]
        },
        {
            id: '6',
            title: 'News', 
            secTitle: 'View all', 
            onclick: 'https://news.nosnownaples.com', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'June Market Report', onclick: 'https://news.nosnownaples.com/june-market-report'},
                {title: 'May Nabor Market Report', onclick: 'https://news.nosnownaples.com/may-nabor-market-report'},
                {title: 'May Market Report', onclick: 'https://news.nosnownaples.com/may-market-report'},
                {title: 'April Nabor Market Report', onclick: 'https://news.nosnownaples.com/april-nabor-market-report'},
                {title: 'April Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/april-market-report' },
                {title: 'March Nabor Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/march-nabor-market-report'},
                {title: 'February Nabor Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/february-nabor-market-report'},
                {title: 'February Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/february-market-report'},
                {title: 'January Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/january-market-report'},
                {title: 'December Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/december-market-report'},
                {title: 'November Market Report', secTitle: '', onclick: 'https://news.nosnownaples.com/november-market-report'},
                {title: 'More', secTitle: '', onclick: 'https://news.nosnownaples.com/'}
            ]
        }

    ])

    const [menu2] = useState([
        {
            id: '1',
            title: 'I want to list', 
            onclick: '/get-listed', 
        },
        {
            id: '2',
            title: 'My Listing Expired', 
            onclick: '/listing-expired', 
        },
        {
            id: '3',
            title: 'For Sale By Owner', 
            onclick: '/fsbo', 
        },
        {
            id: '4',
            title: 'Testimonials', 
            onclick: '/testimonials', 
        }

    ])

    const handleLeftMenu = (item) => {
        if(item.useNavi){
            navi.push(item.onclick)
        } else {
            window.open(item.onclick, '_blank')
        }
    }
    
    return (
        <Box
            role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ height: 56 }}>
                <img
                    src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/nosnowsells-logo.webp`}
                    alt="NoSnowSells logo"
                    loading="lazy"
                    width="auto"
                    height= "56px"
                />
            </List>
            <Divider sx={{borderColor: "rgba(255, 255, 255, 0.2)"}}/>
            <List>
                {menu2.map((text, index) => (
                    <ListItemButton key={index} onClick={() => navi.push(text.onClick)}>
                        <ListItemIcon sx={{color:"#fff", minWidth:40}}>
                            <KeyboardArrowDown sx={{transform: 'rotate(-90deg)'}}/>
                        </ListItemIcon>
                        <ListItemText primary={text.title} />
                    </ListItemButton>
                ))}
            </List>
            <Divider sx={{borderColor: "rgba(255, 255, 255, 0.2)"}}/>
            <List>
                {menus.map((text, index) => (
                    <React.Fragment key={index}>
                        <ListItemButton 
                            sx={{ height: 56 }}  
                            onClick={()=>setOpen(open===text.id?'':text.id)}
                        >
                            <ListItemIcon sx={{color:"#fff", minWidth:40}}>
                                {text.id===open?<RemoveIcon />:<AddIcon />}
                            </ListItemIcon>
                            <ListItemText 
                                primary={text.title} 
                                primaryTypographyProps={{
                                    color: '#fff',
                                    fontWeight: 'medium',
                                    variant: 'body1',
                                }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    opacity: 0,
                                    transition: '0.2s',
                                }}
                            />
                        </ListItemButton >
                        {open===text.id && text.subMenu.map((item, i) => (
                            <ListItemButton 
                                key={i}
                                sx={{ 
                                    paddingLeft: 4, 
                                    minHeight: 30, 
                                    color: 'rgba(255,255,255,.8)',
                                    backgroundColor: "#024591",
                                }}
                                onClick={()=>handleLeftMenu(item)}
                            >
                                
                                    <ListItemIcon>
                                        <ArrowRightIcon 
                                            sx={{ py: 1, color: 'rgba(255,255,255,.8)' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={item.title} 
                                        primaryTypographyProps={{
                                            color: '#fff',
                                            fontWeight: 'medium',
                                            variant: 'body1',
                                        }}
                                    />
                                
                            </ListItemButton>
                        ))}
                    </React.Fragment>
                ))}
            </List>
            <List>
                {['Property Search'].map((text, index) => (
                <ListItemButton key={index} sx={{backgroundColor: "#0174f5"}} onClick={() => window.open("https://www.nosnownaples.com/search", '_blank')}>
                    <ListItemIcon sx={{color:"#fff", minWidth:40}}>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                ))}
            </List>
        </Box>
      );
}

export default LeftMenu;