/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import { PrismCode } from 'react-prism';
import 'prismjs/themes/prism.css';
import { Button } from 'react-bootstrap';

export default class Code extends Component {
  state = {
    open: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <div
        style={{
          position: 'relative',
          height: open ? 'auto' : 80,
          margin: '1.5em 0',
          overflow: 'hidden',
        }}
      >
        <pre
          className="language-jsx"
          style={{
            margin: 0,
            padding: '1em',
            border: 'none',
          }}
        >
          <PrismCode className="language-jsx">
            {children.trim()}
          </PrismCode>
        </pre>

        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 5,
            paddingTop: 20,
            background: open
              ? 'transparent'
              : 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.95) 90%)',
            textAlign: 'right',
          }}
        >
          <Button
            onClick={this.handleToggle}
            bsSize="xsmall"
            style={{
              marginRight: 5,
              marginBottom: 5,
            }}
          >
            {open ? 'Hide Code' : 'Show Code'}
          </Button>
        </div>
      </div>
    );
  }
}
