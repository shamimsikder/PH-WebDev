import React from 'react';

const Modal = (props) => {
    
    const { image_link, description, integrations, features } = props.data;

    return (
        <div>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        <div className='border-2 border-[#EB5757] rounded-lg p-5 bg-[rgba(235, 87, 87, 0.05)]'>

                            <h3>{description}</h3>

                            <div className='flex justify-between mt-5 mb-3'>
                                
                                <div>
                                    <h1 className="text-xl font-bold">Features</h1>
                                    {Object.values(features || {}).map((feature, index) => <p>{index + 1}. {feature.feature_name ? feature.feature_name : "Not Found"}</p>)}
                                </div>

                                <div>
                                    <h1 className="text-xl font-bold">Integrations</h1>
                                    {integrations && integrations.map((int, index) => <p>{index + 1}. {int ? int : "not found"}</p>)}
                                </div>

                            </div>

                        </div>

                        <div>
                            
                            <img className='rounded-lg' src={image_link && image_link[0]} alt="" />

                        </div>

                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>

                </div>
            </div>

        </div>
    );

};

export default Modal;