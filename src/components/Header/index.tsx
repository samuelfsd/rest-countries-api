import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Content } from './styles';

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header(props: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <Content>
        <h3>Where in the World?</h3>

        <Switch
          onChange={props.toggleTheme}
          checked={title === 'dark'}
          chekedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.text}
        />
      </Content>
    </Container>
  );
}
