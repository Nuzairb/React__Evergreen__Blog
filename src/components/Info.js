import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Info.css';
import InfoImg from '../img/info.jpg';

class Info extends Component {
    render() {
        return(
            <div className="Info">
                <Row noGutters="true">
                    <Col md={12} lg={6}>
                        <div className="Info-text">
                            <h2 className="py-3 text-uppercase font-weight-light">Discovery of the week</h2>
                            <p className="font-weight-bold">Elit aliqua enim elit consequat. Eiusmod consequat magna ad fugiat culpa. Excepteur ex voluptate est culpa nostrud dolore veniam id ullamco sint consectetur labore enim adipisicing. Nostrud deserunt ipsum laborum ipsum irure non reprehenderit esse incididunt. Qui veniam aliquip ad ea dolor. Ut velit mollit ea proident dolore ipsum ex ut proident occaecat consectetur. Laborum tempor fugiat tempor exercitation consequat est commodo dolor dolor pariatur fugiat fugiat quis ullamco. Duis ullamco ea enim in eu ullamco ad incididunt aliquip in in minim. Cillum officia dolore nostrud duis cillum aliquip nulla dolor magna exercitation minim. Sit veniam aliqua adipisicing ullamco labore occaecat cupidatat. Anim consectetur eu magna sint. Ullamco magna enim velit commodo est.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <img className="w-100" alt="Information" src={InfoImg}></img>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Info;