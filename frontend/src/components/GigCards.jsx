import React, { useState, useEffect } from 'react'
import { Container } from '@mui/system'
import CustomizedProgressBars from './ProgressBar'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import axios from 'axios'
import NewGigForm from './NewGigForm'
import { Button } from '@mui/material'
import DeleteModal from './DeleteModal'


const GigCard = styled.div`
    border:1px solid grey;
    padding:2em;
    margin:2em;
    border-radius:8px;
    background-color:#FFF;
    width:auto%;
    
    img{
        height:2em;
        border:none;
        backgound-color:none;
        margin-right: 1em;
    }
    
    p{
        margin:0;
        padding:0;
    }
    ul{
        list-style:none;
        padding:0;
    }
    ul li{
        display:flex;
        margin: 1em 0em 1em 0em;
    }
    
  span{
      display:flex;
      justify-content:center; 
    }

    .gridContainer{
        padding: 1em;
    }
    
  .bottomList{
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:1em;
     
  }
  
  .innerList{
    display:flex;
    justify-content:space-around;
    width:100%
  }

  .innerList div{
      display:flex;
      align-items:center;
      flex-direction:column;
      
  }
  
  .deleteSection{
      width:100%;
      display:flex;
      justify-content:end;
      margin-top:1em;
  }
 

`

function GigCards() {

    const [gigData, setGigData] = useState([])
    const [refresh, setRefresh] = useState(false)



    useEffect(() => {
        axios.get('/api/gig').then((obj) => {
            setGigData(obj.data)
        })
    }, [refresh, NewGigForm])


    return (
        <>
            <div style={{ backgroundColor: '#FFF', padding: "2em" }}>
                <NewGigForm />

                {gigData.length <= 0 ? (<h1>no gigs</h1>) : (

                    <Grid container >
                        {
                            gigData.map((gig) => (
                                <Grid item lg={4} md={6} sm={12} sx={12} className='gridContainer'>

                                    <GigCard>
                                        <div>
                                            <ul>
                                                <li>
                                                    <img src='./gigname.png'></img>
                                                    <div>
                                                        <p>Gig name</p>
                                                        <p>{gig.name}</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <img src='./gigCalender.png'></img>
                                                    <div>
                                                        <p>Required Date</p>
                                                        <p>{gig.date}</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <img src='./gigBudget.png'></img>
                                                    <div>
                                                        <p>Total Budget</p>
                                                        <p>{gig.budget}</p>
                                                    </div>
                                                </li>

                                            </ul>
                                            <div className='progress'>
                                                <span>100% Secured</span>

                                                <CustomizedProgressBars />

                                                <span>Total Resources</span>
                                            </div>

                                            <div className='bottomList'>
                                                total resources

                                                <div className='innerList'>
                                                    <div>
                                                        <p>Required</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div>
                                                        <p>Hired</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div>
                                                        <p>Applicants</p>
                                                        <p>1</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='deleteSection'>
                                            <DeleteModal id={gig._id} gigData={gigData} setGigData={setGigData} />
                                        </div>

                                    </GigCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                )}
            </div>
        </>
    )
}

export default GigCards