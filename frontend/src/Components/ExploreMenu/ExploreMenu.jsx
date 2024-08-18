import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {



  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus quos voluptatum nam vitae unde accusantium delectus, libero magnam eos rem culpa vel ipsam labore corporis consectetur? Dolores quisquam accusantium quasi repellendus aut architecto?</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index) => {
            return (
                <div onClick={() => setCategory(prev=>prev===item.menu_name? "All" : item.menu_name)} key={index} className='explore-menu-list-items'>
                    <img className={category===item.menu_name? "active":""} src={item.menu_image} alt='menu'/>
                    <p>{item.menu_name}</p>
                    </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu
