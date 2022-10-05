const CreateTemplateForm = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Upload Template</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Default Input Text</label>
            <input type="text" className="form-control" />
          </div>
          <div className="section-title">Select 2</div>
          <div className="form-group">
            <label>Select2</label>
            <select className="form-control select2">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTemplateForm