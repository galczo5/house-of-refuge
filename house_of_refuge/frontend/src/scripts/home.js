import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '../components/Header.js';
import BigButton from '../components/BigButton.js';
import Form from '../components/Form.js';
import Privacy from '../components/Privacy.js';
import Edit from '../components/Edit.js';
import { fields2, validationSchema2 } from './formSchema';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { colors } from '../theme';
import Share from '../pages/Share';
import Find from '../pages/Find';

const StyledApp = styled.div`
  font-family: 'proxima-nova', sans-serif;
  max-width: 1400px;
  color: #212121;
  margin: auto;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding-top: 240px;

  .Footer {
    justify-content: flex-end;
  }
  `;

const ButtonWrap = styled.div`
  margin-top: -240px;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > a {
    color: inherit;
    text-decoration: none;
    display: flex;
  }
`;



const App = (props) => {
  const [user] = useState(props.userData);

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route index element={<>
          <ButtonWrap>
            <Link to="/share">
              <BigButton
                primaryText="Udostępniam nocleg"
                secondaryText="Можу надати житло"
                backgroundColor="#0066cc"
                color={colors.white}
              />
            </Link>
            <Link to="/find">
              <BigButton
                primaryText="Потребує житло"
                secondaryText="Szukam noclegu"
                color={colors.veryDarkGrey}
                backgroundColor={colors.optimisticYellow}
              />
            </Link>
            <div className={"border-bottom w-100 my-3"}/>
            <Link to="/">
              <BigButton
                  primaryText="Хочу поїхати в іншу країну в Європі"
                  secondaryText="Chcę jechać do innego kraju w Europie"
                  outlined
                  color={colors.veryDarkGrey}
              />
            </Link>
          </ButtonWrap>
        </>} />
        <Route path="/share" element={<Share />} />
        <Route path="/find" element={<Find  user={user} />} />
        <Route path="/jazda/stolik" element={<>
          <Form
            primaryText="Потребує житло"
            secondaryText="Szukam noclegu"
            fields={fields2}
            validationSchema={validationSchema2}
            url='/api/zglos'
            successInfo='Дякуємо за подання.'
            user={user}
          />
        </>} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/edit" element={<Edit {...props} />} />
      </Routes>

    </StyledApp>
  );
};

ReactDOM.render(
  <BrowserRouter ><App {...props} /></BrowserRouter>,
  window.react_mount,
);
