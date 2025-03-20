import React from 'react'

export default function Layout({children}) {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      // justifyContent:'center',
      alignItems:'center',
      height:'auto'
    }}>{children}</div>
  )
}
