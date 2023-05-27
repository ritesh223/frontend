import React from 'react'
import Activity_one from './Activity/Activity_one'
import Activity_two from './Activity/Activity_two'
import Metadata from './Metadata'
export default function Activity() {
  return (
    <>
      <Metadata title="Activity" description="Book Hotel" />
      <Activity_one />
      <Activity_two />
    </>
  );
}
