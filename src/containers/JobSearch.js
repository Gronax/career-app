
import React from 'react'
import { connect } from 'react-redux'
import { getJobList } from '../redux/modules/job'

const JobSearch = ({test}) => {
  getJobList()
  return (
    <div>asd
    </div>
  )
}

const mapStateToProps = (state) => ({ test: state })
const mapDispatchToProps = { getJobList }

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch)