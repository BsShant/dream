import React from 'react'
import LineGraph from '../../ProtectedComponents/LineGraph/LineGraph'
import MemberBox from '../../ProtectedComponents/MemberBox/MemberBox'
import QuickLinks from '../../ProtectedComponents/QuickLinks/QuickLinks'
import StatsBox from '../../ProtectedComponents/StatsBox/StatsBox'
import { StatsBoxDataType } from '../../@types/Dashboard'
import './styles.scss'
const Dashboard = () => {

    const statsBoxData = [
        {
            name: 'PTE Speaking',
            value: 1000
        },
        {
            name: 'PTE Writing',
            value: 1000
        },
        {
            name: 'PTE Reading',
            value: 1000
        },
        {
            name: 'PTE Listening',
            value: 1000
        },
        {
            name: 'Mock Test',
            value: 700
        },
        {
            name: 'Material Download',
            value: 50
        }
    ]
    const quickLinkData = [
        {
            name: 'Mock Test',
            route: 'pte-mock-test'
        },
        {
            name: 'Write Essay',
            route: 'pte-writing/write-essay'
        },
        {
            name: 'Fill In The Blanks',
            route: 'pte-reading/fill-in-the-blanks'
        }
    ]
    return (
        <div className='dashboard-page-container'>
            <div className="dashboard-page-inner">
                <div className="dashboard-main">

                    <div className="dashboard-top">
                        <div className="dashboard-section-name main-section-name">
                            <span className="section-name">

                                Dashboard
                            </span>
                            <span className="section-name-right">
                                <span className="dash-line"></span>
                                <span className="dash-date">
                                    {new Date().toDateString()}
                                </span>
                            </span>
                        </div>
                        <div className="stats-box-container">
                            {
                                statsBoxData.map((sbd, index) => {
                                    return <StatsBox item={sbd} />

                                })
                            }

                        </div>
                    </div>
                    <div className="dashboard-top">
                        <div className="dashboard-section-name">
                            Analytics
                        </div>
                        <div className="line-graph-container">

                            <LineGraph />
                        </div>
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dashboard-top">
                        <div className="dashboard-section-name">
                            Quick Links
                        </div>
                        <div className="dashboard-quick-links-container">
                            {
                                quickLinkData.map((qd, index) => {

                                    return <QuickLinks item={qd} />

                                })

                            }

                        </div>
                    </div>
                    <div className="dashboard-top">
                        <div className="dashboard-section-name">
                            Team Members
                        </div>
                        <div className="dashboard-members-container">
                            <MemberBox />
                            <MemberBox />
                            <MemberBox />
                            <MemberBox />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard