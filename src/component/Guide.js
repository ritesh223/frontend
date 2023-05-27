import React from 'react'
import Guide_1 from './Guides/Guide_1'
import Metadata from './Metadata'

const Guide = () => {
    return (
      <>
        <Metadata title="Guides" description="Guides" />
        <div>
          <Guide_1 />
        </div>
      </>
    );
}

export default Guide
