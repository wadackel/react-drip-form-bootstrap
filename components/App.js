/* eslint-disable react/prop-types */
import React from 'react';
import {
  Grid,
} from 'react-bootstrap';
import BasicForm from './BasicForm';
import InlineForm from './InlineForm';
import InlineWithAddonForm from './InlineWithAddonForm';
import HorizontalForm from './HorizontalForm';


const Divider = () => (
  <div style={{ margin: '6rem 0' }}>
    <hr />
  </div>
);


const handleSubmit = name => (values) => {
  console.group(`[${name}]`);
  console.log(values);
  console.groupEnd();
};


export default () => (
  <div>
    <header
      style={{
        margin: '0 0 6rem',
        padding: '6rem 0',
        borderBottom: '1px solid #f9f9f9',
      }}
    >
      <Grid>
        <h1 style={{ fontSize: '4rem' }}>react drip form</h1>
        <p>React Bootstrap component set for react-drip-form.</p>
      </Grid>
    </header>

    <Grid>
      {/* Basic */}
      <BasicForm onValidSubmit={handleSubmit('BasicForm')} />
      <Divider />

      {/* Inline */}
      <InlineForm onValidSubmit={handleSubmit('Inline Form')} />
      <Divider />

      <InlineWithAddonForm onValidSubmit={handleSubmit('Inline Form with Addon')} />
      <Divider />

      {/* Horizontal */}
      <HorizontalForm onValidSubmit={handleSubmit('Horizontal Form')} />
    </Grid>

    <footer
      style={{
        margin: '10rem 0 0',
        padding: '10rem 0',
        background: '#f9f9f9',
      }}
    >
      <Grid>
        <p>© 2017 tsuyoshiwada.<br />react drip form Release under the MIT.</p>
      </Grid>
    </footer>
  </div>
);
