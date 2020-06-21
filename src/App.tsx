import React from 'react';
import Button, {ButtonType,ButtonSize} from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Menu defaultIndex={0} onSelect={(index)=>{alert(index)}}>
          <MenuItem index={0}>
            cool link1
          </MenuItem>

          <MenuItem index={1} disabled>
            cool link2
          </MenuItem>

          <MenuItem index={2}>
            cool link3
          </MenuItem>
        </Menu>

        <Button disabled>hello</Button>
        <Button onClick={()=>{alert(123)}} autoFocus>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com'>百度一下</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
