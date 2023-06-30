import "../styles/globals.css";
import { ChatAppProvider } from "@/Context/ChatAppContext";
import { NavBar } from "@/Components/index";

const MyApp=({Components,pageProps})=>{
    <div>
        <ChatAppProvider>
            <NavBar/>
        <Component {...pageProps} />
        </ChatAppProvider>
    </div>
};
export default MyApp;