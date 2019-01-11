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
                <div className="col-md-4 mt-3" key={i}>
                    <div className="card">
                        <div className='card-header'>
                            Task #{i + 1}
                        </div>
                        <div className="card-body">
                            <span>{task}</span>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger btn-circle" onClick={this.onDelete.bind(this, i)}><i
                                className="fa fa-eraser"/></button>
                        </div>
                    </div>
                </div>
            );
        });

    };

    onDelete(index) {
        if (window.confirm("Are you sure?")) {
            this.props.onDelete(index);
        }
    }

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