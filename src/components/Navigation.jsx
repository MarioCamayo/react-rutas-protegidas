import {Link} from 'react-router-dom';

export const Navigation = ()=> {
  return (
    <nav>
      <ul>
        <li><Link to='/landing'>landing</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/dashboard'>dashboard</Link></li>
        <li><Link to='/analitics'>analitics</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
      </ul>

    </nav>
  )


}