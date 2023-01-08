import React from 'react'
import { useEffect } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { getFlagEmoji } from '../Clicker'


function Graphic({cityLevel, buildingCount, cities, selectedCity, setSelectedCity}) {

    function handleTabChange(index) {
      setSelectedCity(index);
    }

    function getNextArrayItem(array, index) {
        return (index + 1 < array.length) ? array[index + 1] : array[array.length - 1]
    }

    function getGraphicSubtitle(i) {
        if (getNextArrayItem(cities, i).buildingsRequired - buildingCount <= 0) {
            return <><span className='font-medium'>Next city unlocked!</span></>
        }
        return <><span className='font-medium'>
            {getNextArrayItem(cities, i).buildingsRequired - buildingCount} 
        </span> additional buildings required to unlock the next city</>
    }
    
    return (
        <Tabs selectedIndex={selectedCity} onSelect={handleTabChange}>
            <TabList className='-mb-1/2 select-none'>
                {cities.map((c, i) => {
                    let nextBuildingsRequired = (i - 1 >= 0) ? cities[i].buildingsRequired : 0
                    let titleStr = `${nextBuildingsRequired} buildings required`
                    // Display the cities that are cityLevel or lower
                    if (i <= cityLevel) {
                        return <Tab key={c.name} title={titleStr}>{c.name} {getFlagEmoji(c.country)}</Tab>
                    }
                    // Show ??? for the city one level ahead
                    if (i == cityLevel+1) {
                        return <Tab key={c.name} disabled title={titleStr}>{c.name}</Tab>
                    }
                    else {
                        return <Tab key={c.name} disabled title={titleStr}>???</Tab>
                    }
                })}
                
            </TabList>

                {cities.map((c, i) => {
                    return <TabPanel key={c.name}>
                        <div className='outlined-box'>
                            <img 
                                className='h-40 md:h-60 object-cover' 
                                src={`/assets/img/clicker/${c.img}.jpg`} 
                                alt={c.name}
                            />
                            <div className="flex justify-between items-center -mb-3">
                                <div className='text-sm'>
                                    {getGraphicSubtitle(i)}    
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                })}  
        </Tabs>
    )
}

export default Graphic