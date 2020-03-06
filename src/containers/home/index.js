import React, {Component}   from 'react'
import Row                      from '../../components/layout/row'
import Col                      from '../../components/layout/col'
import Container                from '../../components/layout/container'

import Sidebar                  from '../../components/sidebar/index'
import Main                     from '../../components/main/index'

class Home extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col classes={["col-2"]}>
                        <Sidebar />
                    </Col>
                    <Col classes={["offset-md-1", "col-8"]}>
                        <Main />
                    </Col>
                </Row>
    
            </Container>
        )

    }
}


export default Home;

