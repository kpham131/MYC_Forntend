import  NavBar  from './components/NavBar';
import  Footer from './components/Footer';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {

    CSSTransition,
    SwitchTransition,
} from "react-transition-group";
import  HomePage  from '../containers/HomePage/HomePage'

// eslint-disable-next-line no-unused-vars
function Main(props) {
    const Homepage = () => {
        return (
            <>
                <NavBar />
                <HomePage />
                <Footer />
            </>
        )
    }

    return (
        <>
            <SwitchTransition>
                <CSSTransition classNames="page" timeout={1000}>
                    <Switch>
                        <Route path="/home" component={Homepage}/>
                    </Switch>
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}
export default withRouter(Main);