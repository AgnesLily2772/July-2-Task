import React from 'react'

const PriceChart = ({i,k}) => {
  return (
    <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{i.plan}</h5>
            <h6 className="card-price text-center">${i.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={(i.isUser)?"":"text-muted"}><span className="fa-li"><i className={(i.isUser)?"fas fa-check":"fas fa-times"}></i></span>{i.user}</li>
              <li className={(i.isStorage)?"":"text-muted"}><span className="fa-li"><i  className={(i.isStorage)?"fas fa-check":"fas fa-times"}></i></span>{i.storage}</li>
              <li className={(i.isPublicProjects)?"":"text-muted"}><span className="fa-li"><i  className={(i.isPublicProjects)?"fas fa-check":"fas fa-times"}></i></span>{i.publicProjects}</li>
              <li className={(i.isCommunityAcess)?"":"text-muted"}><span className="fa-li"><i  className={(i.communityAccess)?"fas fa-check":"fas fa-times"}></i></span>{i.communityAccess}</li>
              <li className={(i.isPrivateProjects)?"":"text-muted"}><span className="fa-li"><i className={(i.isPrivateProjects)?"fas fa-check":"fas fa-times"}></i></span>{i.privateProjects}</li>
              <li className={(i.isPhoneSupport)?"":"text-muted"}><span className="fa-li"><i className={(i.isPhoneSupport)?"fas fa-check":"fas fa-times"}></i></span>{i.phoneSupport}</li>
              <li className={(i.isSubDomain)?"":"text-muted"}><span className="fa-li"><i className={(i.isSubDomain)?"fas fa-check":"fas fa-times"}></i></span>{i.subDomain}</li>
              <li className={(i.isReports)?"":"text-muted"}><span className="fa-li"><i className={(i.isReports)?"fas fa-check":"fas fa-times"}></i></span>{i.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceChart