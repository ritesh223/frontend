import React from 'react'

export default function Review(props) {
  return (
    <>
      {/* review 1 */}
      <div style={{boxShadow:"1px 1px 4px black" , padding:"10px", marginBottom:"10px", borderRadius:"10px"}}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <p> <strong> {props.title} </strong>  <br /> {props.date} <small> {props.by} </small> </p>
              <p>{props.stars}</p>
            </div>
            <div>
              <p>
                {props.msg}
              </p>
            </div>
          </div>
    </>
  )
}
