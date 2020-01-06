import React from 'react'
import { useRouteData } from "react-static";

export default function () {
  const { works, matters } = useRouteData();
  return (
    <div style={{ textAlign: 'center' }}>
    </div>
  )
}
