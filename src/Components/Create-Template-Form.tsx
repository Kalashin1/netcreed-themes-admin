import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const CreateTemplateForm = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Upload Template</h4>
      </div>
      <div className="card-body">
        <form>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" className="form-control" />
          </div>

          <div>
            <div className="section-title">Select Category</div>
            <Select options={options} onChange={v => console.log(v)} />
          </div>

          <div>
            <div className="section-title">Select Tags</div>
            <Select options={options} isMulti onChange={v => console.log(v)} />
          </div>

          <div className="form-group">
            <label>Cover Photo</label>
            <input type="file" className="form-control" />
          </div>
          
          <div className="form-group">
            <label>Select Template</label>
            <input type="file" className="form-control" />
          </div>

          <div className="form-group my-4">
            <label>Description</label>
            <textarea className="form-control"></textarea>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTemplateForm