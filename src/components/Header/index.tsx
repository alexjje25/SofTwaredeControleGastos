import Logo from '../../assets/logo.png'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
  }

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
            <img src={Logo} alt="teste" width="50" />
            <button onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}