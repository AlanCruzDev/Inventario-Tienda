import React from 'react'

export const Table = ({Header,Content}) => {
  return (
    <table class="table table-striped table-responsive">
      <thead>
        {<Header/>}
      </thead>
      <tbody>
        {<Content/>}
      </tbody>
    </table>
  )
}
