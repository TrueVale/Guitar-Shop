import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
        <Head>
            <title>Guitar-Shop</title>
            <meta name="description" content="Online guitar shop"/>
        </Head>
        <Header/>
        { children }
    </div>
  );
}

export default Layout;
