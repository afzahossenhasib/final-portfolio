import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProject from '../../hooks/useProject';

const AllProject = () => {

    const  [projects, setProjects] = useProject ();

    const navigate = useNavigate();
        const handleDetail = id => {
            navigate (`/detailProject/${id}`)
        }

    return (
        <div>
        <section className='project top'>
            <div className="container">
                <div className="heading">
                    <h4>MY PROJECTS</h4>
                </div>
            </div>

            <div className="content grid">
                {
                    projects.map (newP => {
                        const { name, img, detail, tech, live, client, server, id } = newP;
                        return (
                            <div className='box btn_shadow'>
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>

                                <div className="category d_flex">
                                    <span>{name}</span>
                                </div> <br />

                                <button onClick={()=> handleDetail(id)} className='home-btn'>See Details</button>
                            </div> 

                        )
                    })
                }
            </div>
        </section>
        </div>
    );
};

export default AllProject;