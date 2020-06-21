import React, {createContext, useState} from 'react'
import classNames from 'classnames'

type SelectCallBack = (selectedIndex: number) => void;

interface IMenuContext{
   index: number;
   onSelect?: SelectCallBack;
}

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
    defaultIndex ?: number;
    className ?: string;
    mode ?: MenuMode;
    style ?: React.CSSProperties;
    onSelect ?: SelectCallBack;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props)=>{
    const {
        defaultIndex,
        className,
        mode,
        style,
        onSelect,
        children
    } = props

    const [currentActive, setCurrentActive] = useState(defaultIndex)

    const handleClick = (index: number)=>{
        setCurrentActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }

    const classes = classNames('menu',className,{
       'menu-vertical': mode === 'vertical' 
    })

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu