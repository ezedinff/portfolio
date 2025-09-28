import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Email from "../Email";
import Social from "../Social";
import Header from "../Header";
import { useRouter } from "next/router";
import Loader from "../Loader";
import Footer from "../Footer";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const layout: React.FC = ({children}) => {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);
    useEffect(() => {
        if(isLoading) return;
    }, [isLoading]);
    return (
        <div id="root">
            <a className="skip-to-content" href="#content">
                Skip to Content
            </a>
            {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
            <StyledContent style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <Header isHome={isHome}/>
                <Social isHome={isHome}/>
                <Email isHome={isHome} />
                <main id="content">
                    {children}
                    <Footer />
                </main>
            </StyledContent>
        </div>
    );
};

export default layout;
