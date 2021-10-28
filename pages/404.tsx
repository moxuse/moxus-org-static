// @flow
import React from 'react'
import { NextPage } from "next";
import { AppProps } from "next/app";

const NotFoundPage: NextPage<AppProps> = (props): JSX.Element => {
  return (
    <div>
      <h1>{`404 - We couldn't find that page :(`}</h1>
    </div>
  )
}

export default NotFoundPage;
