import React, {Component} from 'react';
import ReactModal from 'react-modal';
import './NewNote.css';


class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveNote = this.handleSaveNote.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    async handleSaveNote(e) {
        e.preventDefault();
        let task = e.target.note.value;
        await this.setState({todo: task});
        this.props.onAddTodo(this.state.todo);
        this.handleCloseModal();
    }

    render() {
        return (
            <div>
                <button className='btn btn-lg btn-danger btn-circle' onClick={this.handleOpenModal}><i
                    className='fa fa-2x fa-plus'/></button>
                <ReactModal
                    id='#modal'
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    ariaHideApp={false}
                >
                    <div className="container">
                        <form onSubmit={this.handleSaveNote}>
                            <div className="row">
                                <h2>Create new note</h2>
                            </div>
                            <hr/>
                            <div className='row'>
                                <label htmlFor="note">Body</label><br/>
                            </div>
                            <div className="row">
                                <div className='input-group'>
                                    <textarea className='form-control' name="note" id="note"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className='input-group'>
                                    <button type='submit' className='btn btn-success btn-lg'>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </ReactModal>
            </div>

        );
    }
}

export default NewNote;