import React from 'react'

export default function DynamicStyles() {
  return (
    <div>
        <Button color="secondary"/>
    </div>
  )
}

function Button(props){
    return <button style={{backgroundColor: props.color==='primary'? 'blue': 'gray'}}>Button</button>
}
