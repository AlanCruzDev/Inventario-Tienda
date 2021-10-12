import React from 'react'

export const Table = ({Header,Content,idnombre}) => {
  return (
    <table className="table table-striped table-responsive" id={idnombre}>
      <thead>
        {<Header/>}
      </thead>
      <tbody>
        {<Content/>}
      </tbody>
    </table>
  )
}
