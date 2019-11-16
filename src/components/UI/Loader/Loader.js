import React from 'react';
import { css } from '@emotion/core';
import GridLoader from 'react-spinners/GridLoader';

import './Loader.scss';

const override = css`
    display: block;
    margin: 0 auto;
    padding-top: 150px;
`;

const loading = (props) => (
    <div className='sweet-loading'>
        <GridLoader
          css={override}
          sizeUnit={"px"}
          size={50}
          color={'#7a888e'}
          loading={true}
        />
      </div>
);

export default loading;