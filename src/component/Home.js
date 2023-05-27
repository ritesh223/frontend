import React from 'react'
import Page_1 from './Home/Page_1'
import Page_2 from './Home/Page_2'
import Page_2_2 from './Home/Page_2_2'
import Page_3 from './Home/Page_3'
import Page_4 from './Home/Page_4'
import Whybook from './Home/whybook'
import Metadata from './Metadata'
const Home = () => {
  return (
    <div>
      <Metadata title="BUDGETtrip" />
      <Page_1 />
      <Page_2 />
      <Page_2_2 />
      <Page_4 />
      <Page_3 />
      <Whybook />
    </div>
  );
}

export default Home
