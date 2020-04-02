import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonBoredReload from "./ButtonBored"


storiesOf('ButtonBored', module)
  .add('Button 1', () => <ButtonBoredReload button="jokePageButtonOne" label="Give Me A Different Task" />)
  