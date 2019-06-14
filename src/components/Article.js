import React from 'react';

const Article = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title1</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle1</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title2</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle2</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;