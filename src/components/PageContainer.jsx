import Header from './Header'
import styled from 'styled-components'
import Footer from './Footer'

import PropTypes from 'prop-types';

function PageContainer({ children }) {
    return (
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    );
}

PageContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`

export default PageContainer