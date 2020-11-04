import Header from "./Header";
import React, {useState} from "react";
import FormTittle from "../components/FormTittle";
import QuestionForm from "../components/QuestionForm";

function Layout() {
    const [currentMenuItem, setCurrentMenuItem] = useState('contact');

    return  <div>
        <Header currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} />
        <div className='wrapper'>
            <div className="custom-container-image">
                <div className='content'>
                    <FormTittle />
                    <QuestionForm />
                </div>
            </div>
        </div>

    </div>
}

export default Layout;
