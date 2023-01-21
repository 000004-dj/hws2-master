import React from 'react'
import s from './App.module.css'
import HW5 from "../s2-homeworks/hw05/HW5";
import HW6 from "../s2-homeworks/hw06/HW6";
import HW7 from "../s2-homeworks/hw07/HW7";
import HW8 from "../s2-homeworks/hw08/HW8";
import HW9 from "../s2-homeworks/hw09/HW9";
import HW10 from "../s2-homeworks/hw10/HW10";
import {Provider} from "react-redux";
import store from "../s2-homeworks/hw10/bll/store";
import HW11 from "../s2-homeworks/hw11/HW11";

function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                {/*<HW1/>*/}
                {/*<hr/>*/}
                {/*/!*раскомментировать по ходу выполнения*!/*/}
                {/*<HW2/>*/}
                {/*<hr/>*/}
                {/*<HW3/>*/}
                {/*<hr/>*/}

                {/*<HW4/>*/}

                {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}

                <HW5/>
                {/*<hr/>*/}
                {/*<HW6/>*/}
                {/*<hr/>*/}
                {/*<HW7/>*/}
                {/*<hr/>*/}
                {/*<HW8/>*/}
                {/*<hr/>*/}
                {/*<HW9/>*/}
                {/*<hr/>*/}
                {/*<HW10/>*/}
                {/*<hr/>*/}

            </div>
        </Provider>
    )
}

export default App
