import React, {Component} from 'react';

class Task extends Component {
    getTaskHtml = arr => {
        if (arr.length < 1) {
            return (
                <div className="col-md-12">
                    <span className="badge badge-pill badge-info mt-3"><h2>No data to display</h2></span>
                </div>
            );
        }
        return arr.map((task, i) => {
            return (
                <div className="col-md-12" key={i}>
                    <h2><span className='badge badge-pill badge-success'>{task}</span></h2>
                </div>
            );
        });

    };

    render() {
        const html = this.getTaskHtml(this.props.onShow);
        return (
            <div className="container mt-5">
                <div className='row'>
                    {html}
                </div>
            </div>

        );
    }
}

export default Task;