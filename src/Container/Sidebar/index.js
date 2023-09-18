import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu} from './Sidebar.js'

const Sidebar = ({change, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={change}>
            <Icon onClick={change}>
                <CloseIcon>

                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={change}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='aboutUs' onClick={change}>
                        Sobre nós
                    </SidebarLink>
                    <SidebarLink to='services' onClick={change}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to='project' onClick={change}>
                        Projetos
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={change}>
                        Contato
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/'>Orçamento</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar