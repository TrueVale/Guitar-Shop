import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
        <Head>
            <title>Guitar-Shop - { pageTitle }</title>
            <meta name="description" content="Online guitar shop"/>
        </Head>
        <Header/>
        { children }
        <Footer/>
    </div>
  );
}

export default Layout;
