import Head from "next/head";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import NavMenu from "./NavMenu/NavMenu";

interface Props {
    children: JSX.Element
    title: string,
    description?: string,
}

export default function Layout({ children, title = "Home", description }: Props) {
    return (
      <>
        <Head>
        <link
            rel="icon"
            href="/favicon.ico"
          />
          <title>{`Stan's Store - ${title}`}</title>
          <meta
            name="description"
            content={description || "The best store of the world!"}
          />
        </Head>
        <Header/>
        <NavMenu />
        <Main>
            {children}
        </Main>
        <Cart />
        <Footer />
      </>
    );
  }
  