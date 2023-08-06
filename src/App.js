import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import{ auth} from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
  appContainor:`max-w-[720px] mx-auto text-center`,
  sectionContainor: `flex flex-col h-[90vh] bg-grey-100 mt-10 shadow-xl border relative`,
}

function App() {

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.appContainor} >
     <section className={style.sectionContainor}>
     <Navbar/>
     {user? <Chat/>:null}

     </section>
      
    </div>
  );
}

export default App;
