import NetworkSocial from './NetworkSocial'
import InformationContainer from "./InformationContainer";

import Avatar from '../img/foto1.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
      <aside id="sidebar">
        <img src={Avatar} alt="Pedro Henrique" />
        <p className="title">Desenvolvedor</p>
        <NetworkSocial />
        <InformationContainer />
        <a href="" className="btn">
            Download curriculo
        </a>
    </aside>
  )
}

export default Sidebar;