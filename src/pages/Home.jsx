import React from 'react';
// importam componenta Layout, in loc sa importam si header-ul si footer-ul.
import Layout from '../components/Layout';

function Home(props) {
    // Pentru ca Home este inclusa intr-o componenta de tip Route, va contine 3 prop-uri in plus:
    // match, history, location. Uitati-va in consola pentru a vedea ce contine fiecare.
    console.log(props);

    return(
        <div>
            {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
            <Layout>
                <h1>Home</h1>
            </Layout>
        </div>
    );
}

export default Home;